fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-place').innerHTML = data);

fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-place').innerHTML = data);