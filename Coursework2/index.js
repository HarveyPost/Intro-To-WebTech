document.addEventListener('DOMContentLoaded', function () {
    // Object to store cryptocurrency IDs and corresponding DOM elements
    const cryptoPrices = {
        bitcoin: document.getElementById('bitcoin'),
        litecoin: document.getElementById('litecoin'),
        ethereum: document.getElementById('ethereum'),
        ripple: document.getElementById('ripple'),
        cardano: document.getElementById('cardano'),
        polkadot: document.getElementById('polkadot')
    };

    // Extract cryptocurrency IDs from the cryptoPrices object
    const cryptocurrencies = Object.keys(cryptoPrices);

    // Construct the API URL dynamically
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrencies.join(',')}&vs_currencies=usd`;

    // Fetch cryptocurrency prices from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the prices for each cryptocurrency
            cryptocurrencies.forEach(crypto => {
                cryptoPrices[crypto].textContent = data[crypto].usd.toFixed(2);
            });
        })
        .catch(error => {
            console.error('Error fetching crypto prices:', error);
        });

    // Get references to social media link elements
    const facebookLink = document.getElementById('facebook');
    const instagramLink = document.getElementById('instagram');
    const twitterLink = document.getElementById('twitter');
    const linkedinLink = document.getElementById('linkedin');

    // Event listener for the Facebook link
    facebookLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.facebook.com', '_blank');
    });

    // Event listener for the Instagram link
    instagramLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.instagram.com', '_blank');
    });

    // Event listener for the Twitter link
    twitterLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.twitter.com', '_blank');
    });

    // Event listener for the LinkedIn link
    linkedinLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open('https://www.linkedin.com', '_blank');
    });

    // Progress bar update on scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const progressWidth = (scrollPosition / (fullHeight - windowHeight)) * 100;
        document.querySelector('.progress-bar').style.width = `${progressWidth}%`;
    });
});