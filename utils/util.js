const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
const con = 354
const whitt = 75
function imageUtil(e) {
  //console.log(whitt);
  var imageSize = {};
  var originalWidth = e.detail.width;//图片原始宽
  var originalHeight = e.detail.height;//图片原始高
  //console.log('缩放后的宽1: ' + originalWidth)
  
  var originalScale = originalWidth / con; 
  var originalbi = originalHeight / originalWidth;  //图片比
  imageSize.imageWidth = whitt * originalScale;
  imageSize.imageHeight = whitt * originalScale * originalbi;
  console.log('缩放后的宽: ' + imageSize.imageWidth)
  console.log('缩放后的高: ' + imageSize.imageHeight)
  return imageSize;
}

module.exports = {
  imageUtil: imageUtil
}