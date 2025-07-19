const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
    const scrollValue =document.scrollingElement.scrollTop;

    if (scrollValue >= 500) {
        backBtn.style.display ='inline';
    }
    else {
        backBtn.style.display = 'none';
    }
});