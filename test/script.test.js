
describe('script', function() {
  
  beforeEach(function() {
    var fixture = `<div id="modal-container" style="display: none" class="modal-container">
      <div id="video-modal" class="modal">
          <div class="container">
              <div class="title">Maroon 5 - Memories</div>
              <video class="video" id="video" autoplay controls allowfullscreen>
                  <source src="C:\Frontend\Sass\build\video.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
              <div id="videoCaption">
                      Music video of maroon 5.
              </div>
          </div>
          <div id="btn-exit" class="btn-exit">
              <i class="fa fa-times"></i>
          </div>   
      </div>
      <button id="btn-show-video" class="btn">Click for video</button>
    </div>`;

    document.body.insertAdjacentHTML(
      'afterbegin', 
    fixture);
    
    videoModal.self.init();
  });


  afterEach(function() {
    document.body.removeChild(document.getElementById('modal-container'));
  });

  it('should show and play', function() {
    let modal = document.getElementById('modal-container');
    let video = document.getElementById('video');
    expect(modal).to.not.be.null;
    document.getElementById('btn-show-video').click();
    expect(modal.style.display).to.equal('block');
    setTimeout(() => expect(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2).to.be.true, 300);
  });

  it('should exit by clicking out', function() {
    let modal = document.getElementById('modal-container');
    let video = document.getElementById('video');
    document.getElementById('btn-show-video').click();
    document.getElementById('modal-container').click();    
    expect(modal.style.display).to.equal('none');
    expect(video.paused).to.be.true;
  })

  it('should exit by clicking out', function() {
    let modal = document.getElementById('modal-container');
    let video = document.getElementById('video');
    document.getElementById('btn-show-video').click();
    document.getElementById('btn-exit').click();    
    expect(modal.style.display).to.equal('none');
    expect(video.paused).to.be.true;
  })
  
});