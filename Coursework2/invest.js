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

    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const progressWidth = (scrollPosition / (fullHeight - windowHeight)) * 100;
        document.querySelector('.progress-bar').style.width = `${progressWidth}%`;
    });
});