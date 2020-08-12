var popup = document.getElementById('popup');
var popup__scroll_body = document.getElementById('popup__scroll_body');
var upArrow = document.getElementById('up-arrow');
var popupHeight = 0;

window.onload = function () { 
    this.popup =  document.getElementById('popup');
    this.popup__scroll_body = document.getElementById('popup__scroll_body');
    this.upArrow = document.getElementById('up-arrow');

    this.popupHeight = 2000;

    if (window.innerWidth <= 768) {
        this.popupHeight = this.popup.offsetHeight;
        this.popup.style.top = '-' + this.popupHeight + 'px';
        this.popup__scroll_body.style.height = (window.innerHeight - 55) + 'px';
    } else {
        this.popup__scroll_body.style.maxHeight = (window.innerHeight - 55) + 'px';
    }

    this.popup.style.visibility = 'visible';
}

function showPopup() {
    
    if (this.popup.classList.contains('visible')) {
        if (window.innerWidth <= 768) {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
        this.popup.classList.remove('visible');
        this.popup.style.top = '-' + this.popupHeight + 'px';
        this.upArrow.classList.add('hidden');
    } else {
        if (window.innerWidth <= 768) {
            document.documentElement.style.overflowY = 'hidden';
            document.body.style.overflowY = 'hidden';
        }

        this.popup.classList.add('visible');
        this.upArrow.classList.remove('hidden');
        this.popup.style.top = '55px';
    }
} 
