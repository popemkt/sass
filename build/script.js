var videoModal = (function() {
    'use strict';

    var self = {};
    // self.modal = document.getElementById('modal-container');
    // self.openBtn = document.getElementById('btn-show-video');
    // self.video = document.getElementById('video');
    // self.exitBtn = document.getElementById('btn-exit');

    self.show = function() {
        let video = document.getElementById('video');
        document.getElementById('modal-container').style.display = 'block';
        video.load();
        video.play();
    }

    self.hide = function(event) {
        let exitBtn = document.getElementById('btn-exit');
        if (event.target == document.getElementById('modal-container') || event.target == exitBtn || event.target.parentNode == exitBtn) {
            document.getElementById('modal-container').style.display = 'none';
            video.pause();
        }
    }

    self.init = function() {
        document.getElementById('btn-show-video').addEventListener('click', self.show);
        document.getElementById('modal-container').addEventListener('click', self.hide);
    }

    return {
        self: self
    }
}());

