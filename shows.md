---
layout: default
title: shows
---

# shows
{% for show in site.data.shows %}
<div style="margin-bottom: 10px;">
<a href="{{ show.link }}">{{ show.date }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endfor %}

[Back Home]({{ '/' | relative_url }})
