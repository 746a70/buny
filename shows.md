---
layout: default
title: shows
---

# shows
{% for show in site.data.shows %}
  <a href="{{ show.link }}" style="display: block; margin-bottom: 10px;">
    <span>{{ show.date }} - {{ show.title }} — {{ show.location }}</span>
  </a>
{% endfor %}
