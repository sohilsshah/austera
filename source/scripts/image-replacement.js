function initImages() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-img')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-img'));
        }
    }
}
window.onload = initImages;

function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-img')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-img'));
        }
    }
}