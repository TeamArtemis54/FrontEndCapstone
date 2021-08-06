import {url} from './imageGallery.jsx'

var addZoom = function (target) {
  // (A) FETCH CONTAINER + IMAGE
  //alert('dfd')

  var container = document.getElementById('zoom-img')

      // imgsrc = container.currentStyle || window.getComputedStyle(container, false),
      // imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, ""),
    //  alert(url)
      var img = new Image();

  // (B) LOAD IMAGE + ATTACH ZOOM
  img.src = url;
  img.onload = function () {

    var imgWidth = img.naturalWidth,
        imgHeight = img.naturalHeight,
        ratio = imgHeight / imgWidth,
        percentage = ratio * 100 + '%';

    // (C) ZOOM ON MOUSE MOVE
    container.onmousemove = function (e) {
      //alert('dfd')

      var boxWidth = container.clientWidth,
          rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (boxWidth / 100) + "%",
          yPercent = yPos / ((boxWidth * ratio) / 100) + "%";

      Object.assign(container.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: imgWidth * 2.5 + 'px'
      });
    };

    // (D) RESET ON MOUSE LEAVE
    container.onmouseleave = function (e) {
      Object.assign(container.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      });
    };
  }
};

// window.addEventListener("load", function(){
//   addZoom("zoom-img");
//});

export default addZoom