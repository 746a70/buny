---
layout: null
title: buny
---
<html>
<head>
  <title>buny</title>
  
  <link rel="icon" type="image/png" href="favicon.png" />
  
  <!-- Favicon -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Mobile-friendly -->
  <link rel="stylesheet" href="style.css" />
  
</head>
<body>
  <div class="container">
    <h1>buny</h1>
      <p><a href="mailto:book@buny.co">contact</a></p>
      <br>
    <h2>upcoming</h2>
      {% for show in site.data.shows %}
      <a href="{{ show.link }}">
      <p>{{ show.date }} - {{ show.title }} — {{ show.location }}</p>
      </a>
      {% endfor %}
      <br>
    <h3><a href="shows.html">past shows</a></h3>
      <br>
      <br>
    <p><a href="https://instagram.com/buny________">instagram</a></p>
    <p><a href="https://soundcloud.com/djbuny">soundcloud</a></p>
    <p><a href="https://ra.co/bunyy">resident advisor</a></p>
</body>
</html>
