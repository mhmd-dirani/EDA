document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with data-include attribute
    const includes = document.querySelectorAll('[data-include]');
    
    // Process each include
    includes.forEach(function(element) {
        const file = element.getAttribute('data-include');
        
        // Fetch the file content
        fetch(file)
            .then(response => response.text())
            .then(data => {
                // Replace the element's content with the file content
                element.innerHTML = data;
            })
            .catch(error => console.error('Error loading include file:', error));
    });
});