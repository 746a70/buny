const shows = [
    { date: 'SHOW TITLE ONE', location: 'Portland, OR', link: 'https://maps.google.com?q=Portland, OR' },
    { date: 'DATE TWO', location: 'Seattle, WA', link: 'https://maps.google.com?q=Seattle, WA' },
    { date: 'DATE THREE', location: 'San Francisco, CA', link: 'https://maps.google.com?q=San Francisco, CA' },
    { date: 'DATE FOUR', location: 'Los Angeles, CA', link: 'https://maps.google.com?q=Los Angeles, CA' }
  ];
  
  // Get the table body element
  const tableBody = document.querySelector('#show-table tbody');  // <-- Corrected the ID to match HTML
  
  // Populate the table with data
  shows.forEach(show => {
    const row = document.createElement('tr');
  
    // Create date cell
    const dateCell = document.createElement('td');
    dateCell.textContent = show.date;
  
    // Create location cell with a link
    const locationCell = document.createElement('td');
    const locationLink = document.createElement('a');
    locationLink.href = show.link;
    locationLink.target = "_blank";
    locationLink.textContent = show.location;
    locationCell.appendChild(locationLink);
  
    // Append cells to the row
    row.appendChild(dateCell);
    row.appendChild(locationCell);
  
    // Append the row to the table body
    tableBody.appendChild(row);
  });
  