---
layout: default
title: shows
permalink: /shows.html
---

# shows

{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% assign sorted_years = grouped_shows | sort: 'name' | reverse %}

{% for year in sorted_years %}
<h1>{{ year.name }}</h1>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
  {% assign sorted_items = year.items | sort: 'date' | reverse %}
  {% for show in sorted_items %}
  <tr>
    <td style="white-space: nowrap; vertical-align: top; padding: 0.4rem 0.8rem 0.4rem 0;">{{ show.date | date: '%b %-d, %Y' | downcase }}</td>
    <td style="padding: 0.4rem 0; vertical-align: top;">
      {% if show.link and show.link != '' %}
      <a href="{{ show.link }}" style="text-decoration: none; color: inherit;">
        <div style="font-size: 16px; font-weight: 700;">{{ show.title }}</div>
        <div style="font-size: 14px;">{{ show.location }}</div>
        {% if show.venue and show.venue != '' %}
        <div style="font-size: 14px;">{{ show.venue }}</div>
        {% endif %}
        {% if show.subtitle and show.subtitle != '' %}
        <div style="font-size: 12px; font-style: italic;">{{ show.subtitle }}</div>
        {% endif %}
      </a>
      {% else %}
      <div style="font-size: 16px; font-weight: 700;">{{ show.title }}</div>
      <div style="font-size: 14px;">{{ show.location }}</div>
      {% if show.venue and show.venue != '' %}
      <div style="font-size: 14px;">{{ show.venue }}</div>
      {% endif %}
      {% if show.subtitle and show.subtitle != '' %}
      <div style="font-size: 12px; font-style: italic;">{{ show.subtitle }}</div>
      {% endif %}
      {% endif %}
    </td>
  </tr>
  {% endfor %}
</table>
{% endfor %}

[< home]({{ '/' | relative_url }})
