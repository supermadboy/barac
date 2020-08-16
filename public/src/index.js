function showPopup() {
    var popup =  document.getElementById('popup');
    var popup__scroll_body = document.getElementById('popup__scroll_body');
    var upArrow = document.getElementById('up-arrow');

    var dekstopAndBigEnough = window.innerWidth > 768 && window.innerHeight > popup.offsetHeight;

    if (dekstopAndBigEnough) {
        popup__scroll_body.style.maxHeight = (window.innerHeight - 59) + 'px';
    } else {
        popup__scroll_body.style.height = (window.innerHeight - 59) + 'px';
    }

    if (popup.style.visibility === 'visible') {
        if (window.innerWidth > 768) {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }

        popup.style.visibility = 'hidden';
        upArrow.classList.add('hidden');
        
    } else {
        if (window.innerWidth > 768) {
            document.documentElement.style.overflowY = 'hidden';
            document.body.style.overflowY = 'hidden';
        }

        popup.style.visibility = 'visible';
        upArrow.classList.remove('hidden');
    }
} 

module.exports = {
    showPopup: showPopup,
}
