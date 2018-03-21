var path = require('path');
var extractFilePath = function(url) {
  var filePath;
  var fileName = 'index.html';
  //var fileName = 'test.txt';
  //var fileName = 'test_pdf.pdf';
  //var fileName = 'zootopia_audio.mp3';
  //var fileName = 'Zootopia_video.mp4';
  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log('The fileName is: ' + fileName);
  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

module.exports = extractFilePath;
