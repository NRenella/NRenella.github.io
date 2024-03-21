// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('contact-form');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the form data
        const formData = new FormData(form);

        // Prepare the data for submission
        const requestData = {};
        formData.forEach((value, key) => {
            requestData[key] = value;
        });

        // Here you can perform additional validation if needed
        // For simplicity, we're assuming the data is valid

        // Simulate form submission (replace this with your own backend logic)
        setTimeout(() => {
            // Clear the form inputs
            form.reset();

            // Display a confirmation message
            alert('Message sent successfully!');

        }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    });
});

function toggleExpand(elementId) {
    var element = document.getElementById(elementId);
    element.classList.toggle('hidden');

    var initialText = document.getElementById('initialText');
    initialText.classList.toggle('fade-out');
}
