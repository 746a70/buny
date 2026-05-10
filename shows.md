---
layout: default
title: shows
permalink: /shows.html
---

# shows

[< home]({{ '/' | relative_url }})

<button id="bw-filter-toggle" type="button" style="margin: 0.8rem 0;">show bunys world</button>

{% assign bw_icon_path = '/images/bw-icon.png' | relative_url %}
{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% assign sorted_years = grouped_shows | sort: 'name' | reverse %}

<table id="shows-table" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <colgroup>
    <col style="width: 18%;">
    <col style="width: 52%;">
    <col style="width: 30%;">
  </colgroup>
  {% for year in sorted_years %}
  <tr>
    <td colspan="3" style="padding: 1.2rem 0 0.5rem 0; font-size: 2em; font-weight: 700;">{{ year.name }}</td>
  </tr>
  {% assign sorted_items = year.items | sort: 'date' | reverse %}
  {% for show in sorted_items %}
  {% assign normalized_title = show.title | downcase %}
  {% assign is_bw_show = normalized_title contains 'bunys world' %}
  <tr data-title="{{ normalized_title }}" data-is-year="false">
    <td style="white-space: nowrap; vertical-align: top; padding: 0.4rem 0.8rem 0.4rem 0;">{{ show.date | date: '%b %-d' | downcase }}</td>
    <td style="padding: 0.4rem 0.8rem 0.4rem 0; vertical-align: top;">
      <div style="font-size: 16px; font-weight: 700;">
        {% if is_bw_show %}
        <a href="{{ '/bw' | relative_url }}" aria-label="bunys world page" style="margin-right: 0.35rem; text-decoration: none; display: inline-block; vertical-align: middle;">
          <img src="{{ bw_icon_path }}" alt="bunys world" style="width: 0.9rem; height: 0.9rem; display: block;" />
        </a>
        {% endif %}
        {{ show.title }}
      </div>
      {% if show.venue and show.venue != '' %}
      <div style="font-size: 12px;">{{ show.venue }}</div>
      {% endif %}
      {% if show.subtitle and show.subtitle != '' %}
      <div style="font-size: 12px; font-style: italic;">{{ show.subtitle }}</div>
      {% endif %}
      {% if show.kind and show.kind != '' %}
      <div style="font-size: 12px;">
        {% if show.link and show.link != '' %}
        <a href="{{ show.link }}">{{ show.kind }}</a>
        {% else %}
        {{ show.kind }}
        {% endif %}
      </div>
      {% endif %}
    </td>
    <td style="padding: 0.4rem 0; vertical-align: top; font-size: 14px; font-style: italic;">{{ show.location }}</td>
  </tr>
  {% endfor %}
  {% endfor %}
</table>

<script>
(function () {
  var button = document.getElementById('bw-filter-toggle');
  var table = document.getElementById('shows-table');
  if (!button || !table) return;

  var filtered = false;

  function applyFilter() {
    var rows = table.querySelectorAll('tr');
    var currentYearRow = null;
    var hasVisibleShowsForYear = false;

    rows.forEach(function (row) {
      var title = row.getAttribute('data-title');
      var isShowRow = title !== null;

      if (!isShowRow) {
        if (currentYearRow && !hasVisibleShowsForYear) {
          currentYearRow.style.display = 'none';
        }
        currentYearRow = row;
        hasVisibleShowsForYear = false;
        row.style.display = '';
        return;
      }

      var matches = title.indexOf('bunys world') !== -1;
      var shouldShow = !filtered || matches;
      row.style.display = shouldShow ? '' : 'none';

      if (shouldShow) {
        hasVisibleShowsForYear = true;
      }
    });

    if (currentYearRow && !hasVisibleShowsForYear) {
      currentYearRow.style.display = 'none';
    }

    button.textContent = filtered ? 'show all shows' : 'show bunys world';
  }

  button.addEventListener('click', function () {
    filtered = !filtered;
    applyFilter();
  });
})();
</script>
