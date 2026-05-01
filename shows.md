---
layout: default
title: shows
permalink: /shows.html
---

# shows
{% for show in site.data.shows %}
<div style="margin-bottom: 10px;">
<a href="{{ show.link }}">{{ show.date }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endfor %}

[< home](/)
