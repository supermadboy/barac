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
        this.popup__scroll_body.style.height = (window.innerHeight - 55) + 'px';
    } else {
        this.popup__scroll_body.style.maxHeight = (window.innerHeight - 55) + 'px';
    }
}

function showPopup() {
    
    if (this.popup.open) {
        if (window.innerWidth <= 768) {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
        this.popup.close();
        this.upArrow.classList.add('hidden');
    } else {
        if (window.innerWidth <= 768) {
            document.documentElement.style.overflowY = 'hidden';
            document.body.style.overflowY = 'hidden';
        }

        this.popup.show();
        this.upArrow.classList.remove('hidden');
    }
} 
