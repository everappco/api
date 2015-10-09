// var colors = ['#00BDFC', '#C390D4', '#D4A190', '#A1D490', '#E5FF00', '#FF3BA3', '#3BFF97', '#FF7F3B']
  var colors = ['#CD6600', '#FF3E96', '#8B2252', '#FF83FA', '#B23AEE', '#68228B', '#7A67EE', '#473C8B', '#0000FF', '#3A5FCD', '#1C86EE', '#00F5FF']
  var frameSizeMs = $('#frameSizeMs').val()

  // Item objects

  var item = function(){
    this.title = null
    this.url = null
    this.color = null
    this.id = null
  }

  var allItems = function(){
    this.item = []
    this.num = 0
    this.current = null

    this.addItem = function(newItem){
      // console.log(newItem.name)
      this.item.push({
        'id': newItem.id,
        'title': newItem.title,
        'url': newItem.url,
        'color': newItem.color
      })
      console.log(this.item[this.num])
      this.num++
    }

    this.removeItem = function(rmItem){
      this.num--
    }

    this.setCurrent = function(currentItem){
      for (var i = 0 ; i <= this.num ; i++){
        if (this.item[i].id == currentItem.id){
          this.current = this.item[i]
          i = this.num + 1
        }
      }
    }

  }

  // Dot Objects

  var dot = function(){
    this.id = null
    this.url = null
    this.item = null
    this.color = null
    this.x = null
    this.y = null
    this.html = null
    this.boxID = null
    this.deleteDot = null
  }

  var allDots = function(){
    this.dot = []
    this.current = null
    this.num = 0

    this.addDot = function(newDot){
      this.dot.push({
        'id': newDot.id,
        'url': newDot.url,
        'item': newDot.item,
        'color': newDot.color,
        'x': newDot.x,
        'y': newDot.y,
        'html': newDot.html,
        'boxID': newDot.boxID,
        'deleteDot': newDot.deleteDot
      })
      this.num++
    }

    this.removeDot = function(){

    }

    this.setCurrent = function(currentDot){
      for (var i = 0 ; i <= this.num ; i++){
        if (this.dot[i].id == currentDot){
          this.current = this.dot[i]
          i = this.num + 1
        }
      }
    }

    this.findDotToDelete = function(id){
      for (var i = 0 ; i <= this.num ; i++){
        if (this.dot[i].deleteDot == id){
          return this.dot[i]
        }
      }
    }
  }

  // Frame objects

  var frame = function(){
    this.id = null
    this.num = null
    this.timestamp = null
    this.dots = null
    this.file = null

    var addDots = function(dots){
      this.dots = dots
    }

  }

  var allFrames = function(){
    this.frame = []
    this.current = null
    this.num = 0

    this.addFrame = function(newFrame){
      this.frame.push({
        'id': newFrame.id,
        'timestamp': newFrame.timestamp,
        'dots': newFrame.dots,
        'file': newFrame.file
      })
      this.num++
    }
  }

var items = new allItems()
var dots = new allDots()
var frames = new allFrames()



var $body = $('body');
$body.on('mousedown', function (e) {
  $body.on('mouseup mousemove', function handler(e) {
    if (e.type === 'mouseup') {
      // click
      if ((e.target.id == 'video' || e.target.id == 'videoPlayer') && items.current != null){
        var newDot = new dot()
        newDot.color = items.current.color
        newDot.id = 'dot'+dots.num
        newDot.x = e.offsetX
        newDot.y = e.offsetY
        newDot.boxID = 'dotBox'+dots.num
        newDot.deleteDot = 'deleteDot'+dots.num

        console.log(items.current)

      $('#video').append('<div class="dot" id="'+newDot.id+'" style="left:'+newDot.x+'px;top:'+newDot.y+'px;"></div>')
      $('#'+newDot.id).css('background', newDot.color).draggable()

      $('#actionContainer').append('<div class="dotBox" id="'+newDot.boxID+'" style="border-color:'+newDot.color+'">'+items.current.title+'<br /><button class="deleteDot" id="'+newDot.deleteDot+'">Delete</button></div>')

      dots.addDot(newDot)
    }

    else if (e.target.className == 'dot ui-draggable ui-draggable-handle'){
      $('#'+dots.current.id).css('background', dots.current.color).css('width', '10px').css('height', '10px')
      $('#'+dots.current.boxID).css('border-color', dots.current.color)
      dots.setCurrent(e.target.id)
      $('#'+dots.current.id).css('background', 'red').css('width', '20px').css('height', '20px')
      $('#'+dots.current.boxID).css('border-color', 'white')
    }

    else if (e.target.className == 'linkClass'){
      console.log(items.current.id)
      if (items.current != null){
        $('#'+items.current.id).css('border-color', 'black').css('color', 'black').css('border', 'none').css('border-bottom', '1px solid')
      }
      $('#'+e.target.id).css('border-color', 'white').css('color', 'white').css('border', '1px solid')
      console.log(items)
        for (var i = 0 ; i <= items.num ; i++){
          if (items.item[i].id == e.target.id){
            items.setCurrent(items.item[i])
            i = items.num + 1
          }
        } 
    }

    else if (e.target.className == 'deleteDot'){
      var remove = dots.findDotToDelete(e.target.id)
      $('#'+remove.deleteDot).remove()
      $('#'+remove.boxID).remove()
      $('#'+remove.id).remove()
    }
    }
    $body.off('mouseup mousemove', handler);
  });
});

// Submitting new item to list

function submitItem(){
    var title = $('#nameInput').val()
    var url = $('#linkInput').val()
    var good = true
    if (title == ''){
      $('#nameInput').css('background', 'red')
      good = false
    }
    else {
      $('#nameInput').css('background', 'white')
    }

    if (url == ''){
      $('#linkInput').css('background', 'red')
      good = false
    }
    else {
      $('#linkInput').css('background', 'white')
    }

    if (good){
      var newItem = new item()
      item.title = title
      item.url = url
      item.color = colors[items.num]
      item.id = 'item' + items.num

      $('#nameInput').val('')
      $('#linkInput').val('')
      $('#linkList').append('<li class="linkClass" id="'+item.id+'">'+title+'</li>')
      $('#'+item.id).css('background', item.color)
      items.addItem(item)
      items.setCurrent(item)
    }
}

  // $('#linkSubmit').click(function(){
  //   submitItem()
  // })

  $(document).keypress(function (e){
    if (e.which == 32){
      $('#videoPlayer').get(0).play()
      setTimeout(function(){
        $('#videoPlayer').get(0).pause()
      }, frameSizeMs)

      $('#frameList').append('<li>Frame '+frames.num+'</li>')
      frames.addFrame(dots)
      snap()
    }
    else if (e.which == 13){
      submitItem()
    }
  })

  $('.deleteDot').click(function(){
    $('#'+dotToDelete).remove()
    $('#dotBox'+dotToDelete.replace( /^\D+/g, ''))
  })


// load in a video file
var URL = window.URL || window.webkitURL
inputNode = document.querySelector('#input');
inputNode.addEventListener('change', playSelectedFile, false);

function playSelectedFile (event) {
            var file = this.files[0];

            var type = file.type;
            var videoNode = document.querySelector('#videoPlayer');
            var canPlay = videoNode.canPlayType(type);
            canPlay = (canPlay === '' ? 'no' : canPlay);
            var message = 'Can play type "' + type + '": ' + canPlay;
            var isError = canPlay === 'no';

            if (isError) { return; }

            var fileURL = URL.createObjectURL(file);
            videoNode.src = fileURL;
        }


        // Get handles on the video and canvas elements
    var video = document.querySelector('#videoPlayer');
    var canvas = document.querySelector('#canvasImage');
    // Get a handle on the 2d context of the canvas element
    var context = canvas.getContext('2d');
    // Define some vars required later
    var w, h, ratio;
    
    // Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
    video.addEventListener('loadedmetadata', function() {
      // Calculate the ratio of the video's width to height
      ratio = video.videoWidth / video.videoHeight;
      // Define the required width as 100 pixels smaller than the actual video's width
      w = video.videoWidth - 300;
      // Calculate the height based on the video's width and the ratio
      h = parseInt(w / ratio, 10);
      // Set the canvas width and height to the values just calculated
      canvas.width = w;
      canvas.height = h;      
    }, false);
    
    // Takes a snapshot of the video
    function snap() {
      // Define the size of the rectangle that will be filled (basically the entire element)
      context.fillRect(0, 0, w, h);
      // Grab the image from the video
      context.drawImage(video, 0, 0, w, h);

      // Find another way to save video frames -- probably can just automatically download them as .png

      // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
      // window.location.href=image; // it will save locally

//       var img = new Image();
// img.setAttribute('crossOrigin', 'anonymous');
// img.src = url;

            // var newFrame = new frame()
            // newFrame.dots = dots
            // newFrame.num = frames.frame.length
            // // newFrame.file = image

            // frames.addFrame(newFrame)
    }

$('#frameSizeMs').on('change', function (val){
  frameSizeMs = $('#frameSizeMs').val()
  console.log(frameSizeMs)
})
  // var socket = io()

  // var mBox = $('#logmessages')

  // socket.on('debug', function (data){
  //   console.log(data)
  //   if (data.id){
  //     mBox.append(data.id + ' ' + data.type + ' ' + data.paired + ' ' + data.ipaddress + ' ' + data.code + ' just connected')
  //   }
  //   else {
  //     mBox.append(data)
  //   }
  //   mBox.append('<br />')
  // })