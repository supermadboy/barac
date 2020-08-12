var popup = document.getElementById('popup');
var popup__scroll_body = document.getElementById('popup__scroll_body');
var upArrow = document.getElementById('up-arrow');
var popupHeight = 0;

window.onload = function () { 
    this.popup =  document.getElementById('popup');
    this.popup__scroll_body = document.getElementById('popup__scroll_body');
    this.upArrow = document.getElementById('up-arrow');

    this.popupHeight = this.popup.offsetHeight;
    this.popup.style.top = '-' + this.popupHeight + 'px';
    this.popup.style.visibility = 'visible';
    this.popup__scroll_body.style.height = (screen.height - 55) + 'px';
}

function showPopup() {
    
    if (this.popup.classList.contains('visible')) {
        this.popup.classList.remove('visible');
        this.popup.style.top = '-' + this.popupHeight + 'px';
        this.upArrow.classList.add('hidden');
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
    } else {
        this.popup.classList.add('visible');
        this.upArrow.classList.remove('hidden');
        this.popup.style.top = '55px';
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
    }
} 
