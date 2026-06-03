---
layout: default
title: buny
---
<img src="{{ '/images/360 glitch.gif' | relative_url }}">

# buny
### dj, producer  
  
<br>
  
  
## upcoming 

{% assign current_date = site.time | date: '%s' %}
{% for show in site.data.shows %}
{% assign show_date = show.date | date: '%s' %}
{% if show_date >= current_date %}
<div style="font-size: 12pt; margin-bottom:10px;">
<a href="{{ show.link }}">{{ show.date | date: '%b %-d, %Y' | downcase }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endif %}
{% endfor %}

<span style='font-size:20px;'>&#10022;</span>  
[past shows]({{ '/shows.html' | relative_url }})  
[bunys world]({{ '/shows.html#bunys-world' | relative_url }})<br>
<a href="mailto:book@buny.co">contact</a>  
  
<span style='font-size:20px;'>&#9834;</span>  
[[soundcloud]](https://soundcloud.com/djbuny)  
[[bandcamp]](https://bunyy.bandcamp.com)  
[[resident advisor]](https://ra.co/bunyy)  
  
<span style='font-size:20px;'>&#9887;</span>  
[[instagram]](https://instagram.com/buny________)  
[[tiktok]](https://www.tiktok.com/@buny___)  
[[youtube]](https://www.youtube.com/@djbuny)  
  
