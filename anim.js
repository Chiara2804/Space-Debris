anim = true;
setInterval(function() {
    if (anim == true) {
        document.getElementById('anim').src = 'Chiara-su.jpeg';
        anim = false;
    } else {
        document.getElementById('anim').src = 'Chiara-giu.jpeg';
        anim = true;
    }
}, 500);