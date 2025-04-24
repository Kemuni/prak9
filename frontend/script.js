fetch('http://127.0.0.1:5050/api')
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').textContent = data;
    });