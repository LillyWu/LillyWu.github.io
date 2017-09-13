---
title: A way to monitor prometheus out of kubernetes
author: Lilly Wu
date: September 13th 2017
---

# A way to monitor prometheus out of kubernetes

As we know, prometheus could monitoring kubernetes resources well, but there is no way to make prometheus monitor its up/down status which is very critical to kubernetes monitoring.

## Scenario
- Prometheus is deployed as a service to monitoring kubernetes
- It requires to monitor prometheus uptime status and scraping or not
- For some security reasons, prometheus service can't expose with an external IP which means it couldn't be curl or wget out of the cluster directly
- The kubernetes cluster has tens or hundreds of worker nodes


## Proposal comparison
### check pod status with ssh the node

**Details:** ssh to a specific node in the cluster, and run kubectl commands to check the pods status

**Advantages:** straightforward

**Disadvantages:**
- There is a chance the specific node would turn down, then the check will fail
- Too much node access would cause
- Can't check prometheus scraping status

### curl service with `<node-ip>:<service-port>`

**Details:** prometheus service maps to the node with a specific port, and curl `<node-ip>:<service-port>` to check the service in cluster

**Advantages:** easy and straightforward

**Disadvantages:**
- There is a chance the node would turn down, then it will cause false alert
- Can't check prometheus scraping status

### access service with kubectl proxy

**Details:**
1. Setup kubectl proxy in your node where will run the prometheus status check
2. curl prometheus metrics with kubernetes REST API

**Advantages:**
- Doesn't rely on node status and could get exact prometheus status
- Could get prometheus scraping status

**Disadvantages:** Needs to install kubectl proxy locally

##  Details
TBD
