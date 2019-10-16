var videoModal = (function() {
    'use strict';

    var self = {};

    self.modal = document.getElementById('modal-container');
    self.openBtn = document.getElementById('btn-show-video');
    self.video = document.getElementById('video');
    self.exitBtn = document.getElementById('btn-exit');

    self.init = function() {
        document.getElementById('btn-show-video').addEventListener('click', show);
        window.addEventListener('click', hide);
    }

    self.show = function() {
        modal.style.display = 'block';
        video.load();
    }

    self.hide = function(event) {
        if (event.target == modal || event.target == exitBtn || event.target.parentNode == exitBtn) {
            modal.style.display = 'none';
            video.pause();
        }
    }

    return {
        self: self
    }
}());

