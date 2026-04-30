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
<div style="margin-bottom:10px;">
<a href="{{ show.link }}">{{ show.date }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endif %}
{% endfor %}

### [past shows](/shows.html)

# socials

[instagram](https://instagram.com/buny________)  
[soundcloud](https://soundcloud.com/djbuny)  
[resident advisor](https://ra.co/bunyy)  
