// Example JavaScript feature: Show an alert when clicking the header

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', function() {
            alert('Welcome to My Website!');
        });
    }
});
