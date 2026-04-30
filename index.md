---
layout: default
title: buny
---

# buny
<a href="mailto:book@buny.co">contact</a>
      <br>
## upcoming

{% assign current_date = site.time | date: '%s' %}

{% for show in site.data.shows %}
{% assign show_date = show.date | date: '%s' %}
  
{% if show_date >= current_date %}
    <a href="{{ show.link }}" style="display: block; margin-bottom: 10px;">
      <span>{{ show.date }} - {{ show.title }} — {{ show.location }}</span>
    </a>
{% endif %}
{% endfor %}

### [past shows](/shows/)

[instagram](https://instagram.com/buny________)  
[soundcloud](https://soundcloud.com/djbuny)  
[resident advisor](https://ra.co/bunyy)  
