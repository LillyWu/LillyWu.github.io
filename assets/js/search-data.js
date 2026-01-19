// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "I work on making large-scale distributed computing reliable and sustainable under growing hardware constraints and software complexity. My research lies at the intersection of cloud and edge computing, AI/ML, and sustainability.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-academic-services",
          title: "Academic Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2025/03/26/plotly.html";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/05/01/tabs.html";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/29/typograms.html";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/28/post-citation.html";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/code-diff.html";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/echarts.html";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/chartjs.html";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/audios.html";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/24/videos.html";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/tables.html";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/07/04/diagrams.html";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/05/22/distill.html";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2020/09/28/twitter.md.disabled";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/10/20/math.html";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/07/15/code.html";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/05/15/images.html";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-joining-umass-amherst-as-a-postdoc",
          title: 'Joining UMass Amherst as a postdoc.',
          description: "",
          section: "News",},{id: "news-attending-the-hotcarbon-23",
          title: 'Attending the HotCarbon’23',
          description: "",
          section: "News",},{id: "news-our-failure-resilient-ml-inference-at-the-edge-paper-got-accepted-in-milcom-23-workshop-on-internet-of-things-for-adversarial-environments",
          title: 'Our “Failure-Resilient ML Inference at the Edge” paper got accepted in MilCom’23, workshop...',
          description: "",
          section: "News",},{id: "news-reviewer-for-ieee-transactions-on-service-computing",
          title: 'Reviewer for IEEE Transactions on Service Computing',
          description: "",
          section: "News",},{id: "news-our-slo-power-slo-and-power-aware-elastic-scaling-for-web-sevices-paper-got-accepted-in-ccgrid-24",
          title: 'Our “SLO-Power: SLO and Power-aware Elastic Scaling for Web Sevices” paper got accepted...',
          description: "",
          section: "News",},{id: "news-application-to-the-2024-umass-turing-summer-program-is-opening",
          title: 'Application to the 2024 UMass Turing Summer Program is opening',
          description: "",
          section: "News",},{id: "news-reviewer-for-sustainable-computing-informatics-and-systems",
          title: 'Reviewer for Sustainable Computing: Informatics and Systems',
          description: "",
          section: "News",},{id: "news-three-week-umass-summer-turing-program-is-closing-this-year-we-got-22-high-school-students-to-participate-thank-you-the-turing-team",
          title: 'Three-Week UMass Summer Turing Program is closing. This year, we got 22 high...',
          description: "",
          section: "News",},{id: "news-our-research-work-acies-os-a-content-centric-platform-for-edge-ai-twinning-and-orchestration-is-presented-in-icccn-2024",
          title: 'Our research work “Acies-OS: A Content-Centric Platform for Edge AI Twinning and Orchestration”...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-zscaler",
          title: 'Invited talk at Zscaler.',
          description: "",
          section: "News",},{id: "news-reviewer-for-journal-of-parallel-and-distributed-computing",
          title: 'Reviewer for Journal of Parallel and Distributed Computing',
          description: "",
          section: "News",},{id: "news-our-paper-enhancing-resilience-in-distributed-ml-inference-pipelines-for-edge-computing-is-accepted-in-milcom-2024-iot-workshop",
          title: 'Our paper “Enhancing Resilience in Distributed ML Inference Pipelines for Edge Computing” is...',
          description: "",
          section: "News",},{id: "news-reviewer-for-performance-evaluation",
          title: 'Reviewer for Performance Evaluation',
          description: "",
          section: "News",},{id: "news-reviewer-for-ieee-transactions-on-network-and-service-management-and-ict-express",
          title: 'Reviewer for IEEE Transactions on Network and Service Management and ICT Express.',
          description: "",
          section: "News",},{id: "news-application-to-the-2025-umass-turing-summer-program-is-opening",
          title: 'Application to the 2025 UMass Turing Summer Program is opening.',
          description: "",
          section: "News",},{id: "news-reviewer-for-ieee-internet-computing",
          title: 'Reviewer for IEEE internet computing.',
          description: "",
          section: "News",},{id: "news-our-rethinking-collaboration-among-mobile-devices-in-iot-environments-got-accepted-in-sensys-25-posters",
          title: 'Our “Rethinking Collaboration Among Mobile Devices in IoT Environments” got accepted in SenSys’25...',
          description: "",
          section: "News",},{id: "news-our-carbonedge-paper-got-accepted-in-hpdc-25",
          title: 'Our CarbonEdge paper got accepted in HPDC’25.',
          description: "",
          section: "News",},{id: "news-our-data-centers-carbon-emissions-at-crossroads-an-empirical-study-paper-got-accepted-in-hotcarbon-25",
          title: 'Our “Data Centers Carbon Emissions at Crossroads: An Empirical Study” paper got accepted...',
          description: "",
          section: "News",},{id: "news-served-as-a-session-chair-at-hotcarbon-25-where-our-paper-data-center-carbon-emissions-at-crossroads-was-presented",
          title: 'Served as a session chair at HotCarbon’25, where our paper “Data Center Carbon...',
          description: "",
          section: "News",},{id: "news-presented-carbonedge-at-hpdc-in-notre-dame-in-usa",
          title: 'Presented CarbonEdge at HPDC in Notre Dame, IN, USA.',
          description: "",
          section: "News",},{id: "news-serving-on-the-artifact-evaluation-ae-committee-for-sosp-2025",
          title: 'Serving on the Artifact Evaluation (AE) Committee for SOSP 2025.',
          description: "",
          section: "News",},{id: "news-invited-to-serve-on-the-technical-program-committee-pc-of-acm-ifip-middleware-2026",
          title: 'Invited to serve on the Technical Program Committee (PC) of ACM/IFIP Middleware 2026....',
          description: "",
          section: "News",},{id: "news-gave-a-virtual-talk-to-magellan-team-at-inria-on-sustainable-and-resilient-distributed-computing",
          title: 'Gave a virtual talk to Magellan team at Inria on “Sustainable and Resilient...',
          description: "",
          section: "News",},{id: "news-serving-on-the-technical-program-committee-pc-of-acm-ieee-sec-2025",
          title: 'Serving on the Technical Program Committee (PC) of ACM/IEEE SEC 2025.',
          description: "",
          section: "News",},{id: "news-our-practical-considerations-for-failure-resilient-ml-systems-at-the-edge-paper-got-accepted-in-milcom-25-workshop",
          title: 'Our “Practical Considerations for Failure Resilient ML Systems at the Edge” paper got...',
          description: "",
          section: "News",},{id: "news-our-llm-driven-auto-configuration-for-transient-iot-device-collaboration-paper-got-accepted-in-acm-ieee-sec-25",
          title: 'Our “LLM-Driven Auto Configuration for Transient IoT Device Collaboration” paper got accepted in...',
          description: "",
          section: "News",},{id: "news-our-faillite-failure-resilient-model-serving-for-resource-constrained-edge-environments-paper-got-accepted-in-acm-socc-25",
          title: 'Our “FailLite: Failure-Resilient Model Serving for Resource-Constrained Edge Environments” paper got accepted in...',
          description: "",
          section: "News",},{id: "news-serving-on-the-shadow-program-committee-pc-of-acm-eurosys-2026",
          title: 'Serving on the Shadow Program Committee (PC) of ACM Eurosys 2026.',
          description: "",
          section: "News",},{id: "news-guest-lectured-in-compsci-230-computer-systems-principles-thanks-to-nikko-for-the-kind-invitation",
          title: 'Guest lectured in COMPSCI 230 Computer Systems Principles. Thanks to Nikko for the...',
          description: "",
          section: "News",},{id: "news-serving-on-the-technical-program-committee-pc-of-ieee-ccgrid-2026",
          title: 'Serving on the Technical Program Committee (PC) of IEEE CCGrid 2026.',
          description: "",
          section: "News",},{id: "news-serving-on-the-external-review-committee-erc-of-mlsys-2026",
          title: 'Serving on the External Review Committee (ERC)of MLSys 2026.',
          description: "",
          section: "News",},{id: "news-presented-faillite-at-acm-socc-2025-virtual-usa",
          title: 'Presented FailLite at ACM SoCC 2025 (virtual), USA.',
          description: "",
          section: "News",},{id: "news-guest-lectured-in-compsci-377-operating-systems-thanks-to-nikko-for-the-kind-invitation",
          title: 'Guest lectured in COMPSCI 377: Operating Systems. Thanks to Nikko for the kind...',
          description: "",
          section: "News",},{id: "news-serving-on-the-technical-program-committee-tpc-of-greensys-2026-colocated-with-eurosys-2026",
          title: 'Serving on the Technical Program Committee (TPC) of GreenSys 2026, colocated with EuroSys...',
          description: "",
          section: "News",},{id: "news-i-will-present-faillite-failure-resilient-model-serving-for-resource-constrained-edge-environments-at-the-2026-new-england-systems-day-hosted-by-harvard-seas",
          title: 'I will present “FailLite: Failure-Resilient Model Serving for Resource-Constrained Edge Environments” at the...',
          description: "",
          section: "News",},{id: "projects-ad-astra",
          title: 'Ad-Astra',
          description: "Reliable edge computing for autonomous driving.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AdAstra.html";
            },},{id: "projects-sustainable-data-centers",
          title: 'Sustainable Data Centers',
          description: "Energy- and carbon-efficient resource management for cloud and edge systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CarbonEdge.html";
            },},{id: "projects-resilient-edge-ai-systems",
          title: 'Resilient Edge AI Systems',
          description: "Fault-tolerance model serving at the resource-constrained edge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FailLite.html";
            },},{id: "projects-livingfog",
          title: 'LivingFog',
          description: "Fog computing platform for smart marina.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LivingFog.html";
            },},{id: "projects-reliable-cloud-microservices",
          title: 'Reliable Cloud Microservices',
          description: "Online performance diagnosis and recovery for cloud microservices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MicroX.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Lilly_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%77%75@%63%73.%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LillyWu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/li-lilly-wu-32a24bba", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7115-1517", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K6KmzXgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
