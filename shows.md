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
  {% capture show_text %}{{ show.date | date: '%b %-d, %Y' | downcase }} - {{ show.title }} - {{ show.location }}{% endcapture %}
  {% if show.link and show.link != '' %}
<p><a href="{{ show.link }}">{{ show_text | strip }}</a></p>
  {% else %}
<p>{{ show_text | strip }}</p>
  {% endif %}
{% endfor %}
{% endfor %}

[< home]({{ '/' | relative_url }})

