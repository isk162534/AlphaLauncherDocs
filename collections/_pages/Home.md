---
layout: page
title: Home
permalink: /
---

AlphaLauncher 는 CmlLib.Core 를 기반으로 한 마인크래프트 커스텀 런처 제작 프레임워크입니다. 

{% for node in site.pages %}
    {% if node.title != null %}
        {% if node.layout == "page" %}
- [{{ node.title }}]({{ node.url | absolute_url }})
        {% endif %}
    {% endif %}
{% endfor %}