const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer..."
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer..."
    }, 5000);
    setTimeout(() => {
        text.textContent = "Blogger..."
    }, 10000);
    setTimeout(() => {
        text.textContent = "YouTuber."
    }, 15000);
}

textLoad();
setInterval(textLoad, 20000)