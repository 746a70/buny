---
layout: default
title: shows
permalink: /shows.html
---

# shows
{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% assign sorted_years = grouped_shows | sort: 'name' | reverse %}
{% for year in sorted_years %}
<h3>{{ year.name }}</h3>
{% assign sorted_items = year.items | sort: 'date' | reverse %}
{% for show in sorted_items %}
  {% assign display_date = show.date | date: '%B %-d, %Y' | downcase %}
  {% if show.kind == 'listen' %}
<p>{{ display_date }} - {{ show.title | remove: ' - bside radio' }}, bside radio - {{ show.location }}{% if show.link and show.link != '' %} | <a href="{{ show.link }}">[listen]</a>{% endif %}</p>
  {% else %}
<p>{{ display_date }} - {{ show.title }}, location - {{ show.location }}{% if show.link and show.link != '' %} | <a href="{{ show.link }}">[tickets]</a>{% endif %}</p>
  {% endif %}
{% endfor %}
{% endfor %}

[Back Home]({{ '/' | relative_url }})
