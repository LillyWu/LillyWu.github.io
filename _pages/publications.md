---
layout: page
permalink: /publications/
title: Selected Publications
description: Selected publications in reversed chronological order. 
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="Selected publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
