document.getElementById('uploadBtn').addEventListener('click', function() {
    var progressBar = document.getElementById('progressBar');
    var width = 0;
    
    // Simulate the file upload process
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.setAttribute('aria-valuenow', width);
            progressBar.textContent = width + '%';
        }
    }, 50); // Adjust the speed of progress here
});
