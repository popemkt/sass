
describe('script', function() {

  var Module;
  beforeEach(function() {
    var fixture = `<div id="modal-container" style="display: none" class="modal-container">
      <div id="video-modal" class="modal">
          <div class="container">
              <video class="video" id="video" controls allowfullscreen>
                  <source src="C:\Frontend\Sass\build\video.mp4" type="video/mp4">
              </video>
          </div>
          <div id="btn-exit" class="btn-exit">
              <i class="fa fa-times"></i>
          </div>   
      </div>
      <button id="btn-show-video" class="btn"></button>
    </div>`;

    document.body.insertAdjacentHTML(
      'afterbegin', 
    fixture);
    
    Module = videoModal.self;

  });


  afterEach(function() {
    document.body.removeChild(document.getElementById('modal-container'));
    sinon.restore();
  });

  describe('init', function() {
    it('should attach event handler properly', function () {
      var showStub = sinon.stub(Module, 'show');
      var hideStub = sinon.stub(Module, 'hide')
      var btnShow = document.getElementById('btn-show-video');
      var modalContainer = document.getElementById('modal-container');

      Module.init();
      btnShow.click();
      modalContainer.click();

      expect(showStub.calledOnce).to.be.true; 
      expect(hideStub.callCount).to.equal(2); 
    });
  })

  describe('show', function() {
    it.only('should show properly', function () {
      var btnShow = document.getElementById('btn-show-video');
      var modalContainer = document.getElementById('modal-container');
      var video = document.getElementById('video');

      Module.init();
      btnShow.click();

      expect(modalContainer.style.display).to.equal('block'); 
      setTimeout( () => expect(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2).to.be.true, 300);
    })
  })

  describe('hide', function() {
    it('should hide properly clicking button', function() {
      var btnShow = document.getElementById('btn-show-video');
      var modalContainer = document.getElementById('modal-container');
      var btnHide = document.getElementById('btn-exit');
      var video = document.getElementById('video');

      Module.init();
      btnShow.click();
      btnHide.click();

      expect(modalContainer.style.display).to.equal('none'); 
      expect(video.paused).to.be.true;
    })

    it('should hide properly clicking out', function() {
      var btnShow = document.getElementById('btn-show-video');
      var modalContainer = document.getElementById('modal-container');
      var video = document.getElementById('video');

      Module.init();
      btnShow.click();
      modalContainer.click();

      expect(modalContainer.style.display).to.equal('none'); 
      expect(video.paused).to.be.true;
    })
  })
});