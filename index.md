---
layout: null
title: buny
---

# buny
<a href="mailto:book@buny.co">contact</a>
      <br>
## upcoming

{% for show in site.data.shows %}
<a href="{{ show.link }}">
<p>{{ show.date }} - {{ show.title }} — {{ show.location }}</p>
</a>
{% endfor %}
### [past shows](/shows.html) ###

[instagram](https://instagram.com/buny________)
[soundcloud](https://soundcloud.com/djbuny)
[resident advisor](https://ra.co/bunyy)
