// Get the form element
const form = document.querySelector('#contact-form');
const locationInput = document.getElementById('location-input');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    // Validate the form data
    const isValidName = /^[a-zA-Z\s]+$/.test(name);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMessage = message.length > 0;

    if (isValidName && isValidEmail && isValidMessage) {
        // All input fields are valid, display success message
        alert('Message sent successfully!');
        form.reset(); // Reset the form
    } else {
        // At least one input field is invalid, display error message
        let errorMessage = 'Please correct the following errors:\n';

        if (!isValidName) {
            errorMessage += '- Name should only contain letters and spaces.\n';
        }

        if (!isValidEmail) {
            errorMessage += '- Please enter a valid email address.\n';
        }

        if (!isValidMessage) {
            errorMessage += '- Message cannot be empty.\n';
        }

        alert(errorMessage);
    }
});

// Get the user's location using the Geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            handleGeolocationError,
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    } else {
        locationInput.value = 'Geolocation is not supported by this browser.';
    }
}

// Handle the successfully retrieved position
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Use a reverse geocoding service to get the address from the coordinates
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            const { display_name } = data;
            locationInput.value = display_name;
        })
        .catch(error => {
            locationInput.value = 'Unable to retrieve location.';
            console.error('Error:', error);
        });
}

// Handle errors that occur when trying to get the user's location
function handleGeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationInput.value = 'User denied the request for Geolocation.';
            break;
        case error.POSITION_UNAVAILABLE:
            locationInput.value = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            locationInput.value = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            locationInput.value = 'An unknown error occurred.';
            break;
    }
}

// Call the getLocation function when the page loads
window.onload = getLocation;

document.addEventListener('DOMContentLoaded', function () {
    const facebookLink = document.getElementById('facebook');
    const instagramLink = document.getElementById('instagram');
    const twitterLink = document.getElementById('twitter');
    const linkedinLink = document.getElementById('linkedin');

    facebookLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.facebook.com', '_blank');
    });

    instagramLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.instagram.com', '_blank');
    });

    twitterLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.twitter.com', '_blank');
    });

    linkedinLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.linkedin.com', '_blank');
    });
});