---
layout: default
title: shows
permalink: /shows.html
---

# shows
{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% for year in grouped_shows %}
<h3>{{ year.name }}</h3>
{% assign sorted_items = year.items | sort: 'date' | reverse %}
{% for show in sorted_items %}
<p>{% if show.link and show.link != '' %}{% if show.kind == 'listen' %}[listen]({{ show.link }}){% else %}[tickets]({{ show.link }}){% endif %} {% endif %}{{ show.date | date: '%b %-d, %Y' }} - {{ show.title }} - {{ show.location }}</p>
{% endfor %}
{% endfor %}

[< home](/)
