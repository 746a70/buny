---
layout: default
title: shows
permalink: /shows.html
---

# shows

[< home]({{ '/' | relative_url }})

<button id="bw-filter-toggle" type="button" aria-expanded="false" aria-controls="bw-filter-description" style="margin: 0.8rem 0;">bunys world</button>

<p id="bw-filter-description" class="bw-filter-description" aria-hidden="true">bunys world is my monthly show on bside.radio. each month, i spin my favourite left-field, provocative, and rebellious dance music for the ones that get it. i consider it my “lab” time, where i experiment and play around with all sorts of electronic music i love listening to, with special guests, exclusive leaks, and surprises every so often~ it's hard for me to explain, probably best if you have a listen for yourself...</p>

{% assign bw_icon_path = '/images/micro.gif' | relative_url %}
{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% assign sorted_years = grouped_shows | sort: 'name' | reverse %}

<table id="shows-table" style="width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 14px;">
  <colgroup>
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 68%;">
    <col style="width: 16%;">
  </colgroup>
  {% for year in sorted_years %}
  <tr>
    <td colspan="4" style="padding: 1rem 0 0.4rem 0; font-size: 1.5em; font-weight: 700;">{{ year.name }}</td>
  </tr>
  {% assign sorted_items = year.items | sort: 'date' | reverse %}
  {% for show in sorted_items %}
  {% assign has_bw_icon = show.bw == true or show.bw == 'true' %}
  <tr data-bw="{{ has_bw_icon }}">
    <td style="white-space: nowrap; vertical-align: top; padding: 0.5rem 0.8rem 0.65rem 0;">{{ show.date | date: '%b %-d' | downcase }}</td>
    <td style="vertical-align: top; padding: 0.5rem 0.5rem 0.65rem 0; text-align: right;">
      {% if has_bw_icon %}
      <a href="{{ '/bw' | relative_url }}" aria-label="bunys world page" style="text-decoration: none; display: inline-block; vertical-align: middle;">
        <img src="{{ bw_icon_path }}" alt="bunys world" style="width: 1.9rem; height: 1.9rem; display: block;" />
      </a>
      {% endif %}
    </td>
    <td style="padding: 0.5rem 0.8rem 0.65rem 0; vertical-align: top;">
      <div style="font-size: 14px; font-weight: 700; line-height: 1.25;">{{ show.title }}</div>
      <div style="font-size: 12px; margin-top: 0.25rem; line-height: 1.4;">
        {% if show.venue and show.venue != '' %}{{ show.venue }}{% endif %}
        {% if show.flyer and show.flyer != '' %}
          {% if show.venue and show.venue != '' %} &nbsp;|&nbsp; {% endif %}<a href="{{ show.flyer }}">flyer</a>
        {% endif %}
        {% if show.kind and show.kind != '' %}
          {% if (show.venue and show.venue != '') or (show.flyer and show.flyer != '') %} &nbsp;|&nbsp; {% endif %}
          {% if show.link and show.link != '' %}<a href="{{ show.link }}">{{ show.kind }}</a>{% else %}{{ show.kind }}{% endif %}
        {% endif %}
      </div>
      {% if show.subtitle and show.subtitle != '' %}
      <div style="font-size: 12px; font-style: italic; margin-top: 0.2rem;">{{ show.subtitle }}</div>
      {% endif %}
    </td>
    <td style="padding: 0.5rem 0 0.65rem 0; vertical-align: top; font-size: 14px; font-style: italic;">{{ show.location }}</td>
  </tr>
  {% endfor %}
  {% endfor %}
</table>

<script>
(function () {
  var button = document.getElementById('bw-filter-toggle');
  var table = document.getElementById('shows-table');
  var description = document.getElementById('bw-filter-description');
  if (!button || !table || !description) return;

  var filtered = false;

  function applyFilter() {
    var rows = table.querySelectorAll('tr');
    var currentYearRow = null;
    var hasVisibleShowsForYear = false;

    rows.forEach(function (row) {
      var bwValue = row.getAttribute('data-bw');
      var isShowRow = bwValue !== null;

      if (!isShowRow) {
        if (currentYearRow && !hasVisibleShowsForYear) {
          currentYearRow.style.display = 'none';
        }
        currentYearRow = row;
        hasVisibleShowsForYear = false;
        row.style.display = '';
        return;
      }

      var isBwShow = bwValue === 'true';
      var shouldShow = !filtered || isBwShow;
      row.style.display = shouldShow ? '' : 'none';

      if (shouldShow) {
        hasVisibleShowsForYear = true;
      }
    });

    if (currentYearRow && !hasVisibleShowsForYear) {
      currentYearRow.style.display = 'none';
    }

    button.setAttribute('aria-expanded', filtered ? 'true' : 'false');
    description.setAttribute('aria-hidden', filtered ? 'false' : 'true');
    description.classList.toggle('is-visible', filtered);
  }

  button.addEventListener('click', function () {
    filtered = !filtered;
    applyFilter();
  });
})();
</script>
