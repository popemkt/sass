
describe('script', function() {
  
  beforeEach(function() {
    var fixture = `<div id="modal-container" class="modal-container">
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
  });


  afterEach(function() {
    document.body.removeChild(document.getElementById('modal-container'));
  });

  it('should exist', function() {
    expect(document.getElementById('modal-container')).to.not.be.null;
    document.getElementById('btn-show-video').click();
  });
});