---
layout: default
title: buny
---

# buny
## dj, producer  

## NEW

  
## SHOWS

{% assign current_date = site.time | date: '%s' %}
{% for show in site.data.shows %}
{% assign show_date = show.date | date: '%s' %}
{% if show_date >= current_date %}
<div style="font-size: 16px; margin-bottom:10px;">
<a href="{{ show.link }}">{{ show.date | date: '%b %-d, %Y' | downcase }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endif %}
{% endfor %}

### [[past shows]]({{ '/shows.html' | relative_url }})  
  
[instagram](https://instagram.com/buny________)  
[soundcloud](https://soundcloud.com/djbuny)  
[bandcamp](https://bunyy.bandcamp.com)  
[resident advisor](https://ra.co/bunyy)  
  
[about]({{ '/about.html' | relative_url }}) | <a href="mailto:book@buny.co">contact</a>
