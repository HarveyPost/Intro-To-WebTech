// API key and base URL for Alpha Vantage API
const apiKey = 'GHDZMA475M3AJ26W';
const baseUrl = 'https://www.alphavantage.co/query';

// Fetch news data from Alpha Vantage API
fetch(`${baseUrl}?function=NEWS_SENTIMENT&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const newsData = data['feed'];
        const newsContainer = document.querySelector('.news-container');

        // Iterate over each news item and create HTML elements
        newsData.forEach(newsItem => {
            const article = document.createElement('article');
            article.classList.add('news-article');

            const title = document.createElement('h2');
            title.textContent = newsItem.title;

            const date = document.createElement('p');
            const dateString = newsItem.time_published;
            const formattedDate = formatDate(dateString);
            date.textContent = `Date: ${formattedDate}`;

            const summary = document.createElement('p');
            summary.textContent = newsItem.summary;

            const link = document.createElement('a');
            link.href = newsItem.url;
            link.textContent = 'Read more';

            // Append the elements to the article
            article.appendChild(title);
            article.appendChild(date);
            article.appendChild(summary);
            article.appendChild(link);

            // Append the article to the news container
            newsContainer.appendChild(article);
        });
    })
    .catch(error => console.error('Error fetching news data:', error));

// Function to format the date string into "dd/mm/yyyy" format
function formatDate(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${day}/${month}/${year}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const facebookLink = document.getElementById('facebook');
    const instagramLink = document.getElementById('instagram');
    const twitterLink = document.getElementById('twitter');
    const linkedinLink = document.getElementById('linkedin');

    // Event listeners for social media links
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

    // Progress bar update on scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const progressWidth = (scrollPosition / (fullHeight - windowHeight)) * 100;
        document.querySelector('.progress-bar').style.width = `${progressWidth}%`;
    });
});