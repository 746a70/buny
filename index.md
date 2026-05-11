---
layout: default
title: buny
---
<img src="{{ '/images/360 glitch.gif' | relative_url }}">

# buny
### dj, producer  
  <br>
  
## new

<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2297102396&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: monospace ;font-weight: 100;"><a href="https://soundcloud.com/djbuny" title="buny" target="_blank" style="color: #cccccc; text-decoration: none;">buny</a> · <a href="https://soundcloud.com/djbuny/on-the-road-buny-rmx" title="ᵒⁿ ᵗʰᵉ ʳᵒᵃᵈ ⁽ᵇᵘⁿʸ ʳᵐˣ⁾" target="_blank" style="color: #cccccc; text-decoration: none;">ᵒⁿ ᵗʰᵉ ʳᵒᵃᵈ ⁽ᵇᵘⁿʸ ʳᵐˣ⁾</a></div>

 <br> 
  
## shows

{% assign current_date = site.time | date: '%s' %}
{% for show in site.data.shows %}
{% assign show_date = show.date | date: '%s' %}
{% if show_date >= current_date %}
<div style="font-size: 12pt; margin-bottom:10px;">
<a href="{{ show.link }}">{{ show.date | date: '%b %-d, %Y' | downcase }} - {{ show.title }} — {{ show.location }}</a>
</div>
{% endif %}
{% endfor %}
[[past shows]]({{ '/shows.html' | relative_url }})  
  
[instagram](https://instagram.com/buny________)  
[soundcloud](https://soundcloud.com/djbuny)  
[bandcamp](https://bunyy.bandcamp.com)  
[resident advisor](https://ra.co/bunyy)  
  
<a href="mailto:book@buny.co">contact</a>
