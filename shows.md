---
layout: default
title: shows
permalink: /shows.html
---

# shows

{% assign bw_icon_path = '/images/bw icon bw-66.png' | relative_url %}
{% assign listen_icon_path = '/images/listen.gif' | relative_url %}
{% assign ticket_icon_path = '/images/ticket.gif' | relative_url %}
{% assign new_icon_path = '/images/new.gif' | relative_url %}

<button id="bw-filter-toggle" class="bw-filter-toggle" type="button" aria-expanded="false" aria-controls="bw-filter-description" aria-label="filter bunys world shows">
bunys world
</button>

<p id="bw-filter-description" class="bw-filter-description" aria-hidden="true">bunys world is my monthly show on bside.radio. i spin left-field, rebellious electronic and club music for my divas, dolls, and the ones that rly get it. it's usually pretty heavy and high-energy music, but i like to throw in some twists n turns along the way. it's hard for me to explain, probably best if you see and listen for yourself...<br><br> click/tap on the headphone to stream</p>
{% assign grouped_shows = site.data.shows | group_by_exp: 'show', "show.date | date: '%Y'" %}
{% assign sorted_years = grouped_shows | sort: 'name' | reverse %}

<table id="shows-table" style="width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 14px;">
  <colgroup>
    <col style="width: 8%;">
    <col style="width: 5%;">
    <col style="width: 5%;">
    <col style="width: 5%;">
    <col style="width: 62%;">
    <col style="width: 15%;">
  </colgroup>
  {% for year in sorted_years %}
  <tr>
    <td colspan="6" style="padding: 1rem 0 0.4rem 0; font-size: 1.5em; font-weight: 700;">{{ year.name }}</td>
  </tr>
  {% assign sorted_items = year.items | sort: 'date' | reverse %}
  {% for show in sorted_items %}
  {% assign has_bw_icon = show.bw == true or show.bw == 'true' %}
  <tr data-bw="{{ has_bw_icon }}">
    <td style="white-space: nowrap; vertical-align: top; padding: 0.5rem 0.6rem 0.65rem 0;">{{ show.date | date: '%b %-d' | downcase }}</td>
    <td style="vertical-align: top; padding: 0.5rem 0.25rem 0.65rem 0; text-align: center;">
      {% if show.kind == 'listen' and show.link and show.link != '' %}
      <a href="{{ show.link }}" aria-label="listen to {{ show.title }}" title="listen" style="text-decoration: none; display: inline-block; vertical-align: middle;">
        <img src="{{ listen_icon_path }}" alt="listen" style="width: 1.9rem; height: 1.9rem; display: block;" />
      </a>
      {% endif %}
    </td>
    <td style="vertical-align: top; padding: 0.5rem 0.25rem 0.65rem 0; text-align: center;">
      {% if show.kind == 'tickets' and show.link and show.link != '' %}
      <a href="{{ show.link }}" aria-label="tickets for {{ show.title }}" title="tickets" style="text-decoration: none; display: inline-block; width: 1.9rem; height: 1.9rem; vertical-align: middle;">
        <img src="{{ ticket_icon_path }}" alt="ticket" style="width: 1.9rem; height: 1.9rem; display: block;" />
      </a>
      {% endif %}
    </td>
    <td style="vertical-align: top; padding: 0.5rem 0.25rem 0.65rem 0; text-align: center;">
      {% if show.new == true or show.new == 'true' %}
      <img src="{{ new_icon_path }}" alt="new" title="new" style="width: 1.9rem; height: 1.9rem; display: inline-block; vertical-align: middle;" />
      {% endif %}
    </td>
    <td style="padding: 0.5rem 0.8rem 0.65rem 0; vertical-align: top;">
      <div style="font-size: 14px; font-weight: 700; line-height: 1.25;">{{ show.title }}</div>
      {% if show.lineup and show.lineup != '' %}
      <div style="font-size: 12px; margin-top: 0.25rem; line-height: 1.4;">{{ show.lineup }}</div>
      {% endif %}
      {% if show.subtitle and show.subtitle != '' %}
      <div style="font-size: 12px; font-style: italic; margin-top: 0.2rem;">{{ show.subtitle }}</div>
      {% endif %}
    </td>
    <td style="padding: 0.5rem 0 0.65rem 0; vertical-align: top; font-size: 12px; font-style: italic; line-height: 1.4;">
      {% if show.venue and show.venue != '' %}<div>{{ show.venue }}</div>{% endif %}
      <div>{{ show.location }}</div>
    </td>
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

  var filtered = window.location.hash === '#bunys-world' || window.location.search.indexOf('bw=true') !== -1;

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

  applyFilter();
})();
</script>
