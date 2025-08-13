fetch('header.html')
    .then(response => response.txt())
    .then(data => document.getElement.ById('header-place').innerHTML = data);