// INJECT THIS

/*
var script = document.createElement('script');
   script.setAttribute('src', '//cdn.rawgit.com/everappco/api/master/assets/js/api.js');
   script.setAttribute('type', 'text/javascript');
   document.getElementsByTagName('head')[0].appendChild(script);
*/

var videos = $('video')
var videoSrcs = $('video source')
var ytVideos = $('iframe')
var vidVals = [], ytVals = []
var allItemsOpen = false

// Identify all videos on page
for (var i = 0 ; i < videos.length ; i++){
  var video = videos.get(i)
  vidVals.push({
    element: video,
    src: videoSrcs.get(i).src,
    width: video.offsetWidth,
    height: video.offsetHeight,
    time: video.currentTime,
    parent: video.parentElement
  })
}

console.log('hey')
console.log(ytVideos)
for (var i = 0 ; i < 10 ; i++){
  console.log(i)
}
for (var i = 0 ; i < ytVideos.length ; i++){
  console.log(i)
  console.log(ytVideos[i].src)
  console.log(ytVideos[i].outerHTML)
}


// for (var i = 0 ; i < videos.length ; i++){
//   var video = videos.get(i)
//   vidVals.push({
//     element: video,
//     src: videoSrcs.get(i).src,
//     width: video.offsetWidth,
//     height: video.offsetHeight,
//     time: video.currentTime,
//     parent: video.parentElement
//   })
// }

for (var i = 0 ; i < vidVals.length ; i++){
  // $(vidVals[i].element).wrap('<div id="ever'+i+'" class="new"></div>')
  // $('#ever'+i).css('width', $(vidVals[i].element).css('width'))
  //     .css('height', $(vidVals[i].element).css('height'))
  //     .append('<div id="itemContainer" class="itemContainer"></div><div class="allItemsButton"></div>')

  // $(vidVals[i].element).hover(function(){
  //   $('.itemContainer').css('opacity', '0.9')
  //   $('.allItemsButton').show()
  //   $('#fullscreen').show()
  //   $('.buttonsContainer').show()
  // }, function(){
  //     $('.itemContainer').css('opacity', '0')
  //     $('.allItemsButton').hide()
  //     $('#fullscreen').hide()
  //     $('.buttonsContainer').hide()
  // })
  $(vidVals[i].element).wrap('<div id="everContainer'+i+'" class="everContainer"></div>')
  $('#everContainer'+i).css('width', $(vidVals[i].element).css('width'))
      .css('height', $(vidVals[i].element).css('height'))
  $('#everContainer'+i).append('<div id="ever'+i+'" class="everenabledContainer"><div class="everenabledText"></div><div class="everenabledLogo"></div></div>')
  $('#everContainer'+i).append('<div id="itemContainer'+i+'" class="itemContainer"></div>')
  $('#everContainer'+i).append('<div id="fullscreen'+i+'" class="fullscreen"><div id="allItemsContainer'+i+'" class="allItemsContainer">'+
    '<div id="fullscreenControlsContainer'+i+'" class="fullscreenControlsContainer">'+
      '<div class="fullscreenLogoContainer">'+
        '<a href="http://everapp.co" target="_blank">'+
          '<div class="fullscreenLogo"></div>'+
          '<div class="fullscreenLogoText">Ever</div>'+
        '</a>'+
      '</div>'+
      '<div id="showItems'+i+'" class="selectTabView selectedTab">Products</div>'+
      '<div id="showSocial'+i+'" class="selectTabView">Social</div>'+
      '<div id="showMusic'+i+'" class="selectTabView">Music</div>'+
      '<div id="showAbout'+i+'" class="selectTabView">About</div>'+
      '<div id="closeFullscreen'+i+'" class="closeFullscreen">Close</div>'+
    '</div>'+
    '<div id="itemView'+i+'" class="tabView" style="display:block;"></div>'+
    '<div id="socialView'+i+'" class="tabView">'+
      '<div id="twitter'+i+'" class="socialMedia">Twitter</div>'+
      '<div id="facebook'+i+'" class="socialMedia">Facebook</div>'+
      '<div id="instagram'+i+'" class="socialMedia">Instagram</div>'+
      '<div id="iconNetwork'+i+'" class="socialMedia">Icon Network</div>'+
    '</div>'+
    '<div id="musicView'+i+'" class="tabView">'+
      '<div class="artistContainer">'+
        '<div class="artistPic"></div>'+
        '<div class="artistTextContainer">'+
          '<div id="artistTitle'+i+'" class="artistTitle">Artist: Undead Lament</div>'+
          '<div id="songTitle'+i+'" class="songTitle">Song: Late Night Alumni</div>'+
        '</div>'+
      '</div>'+
      '<div id="musicFacebook'+i+'" class="musicSocial">Facebook</div>'+
      '<div id="musicTwitter'+i+'" class="musicSocial">Twitter</div>'+
      '<div id="musicSoundcloud'+i+'" class="musicSocial">Soundcloud</div>'+
      '<div id="musicInstagram'+i+'" class="musicSocial">Instagram</div>'+
      '<div id="musicSpotify'+i+'" class="musicSocial">Spotify</div>'+
      '<div id="musicYouTube'+i+'" class="musicSocial">YouTube</div>'+
    '</div>'+
    '<div id="aboutView'+i+'" class="tabView">'+
      '<div class="fullscreenContact">'+
        '<a href="mailto:feedback@everapp.co?Subject=Ever Feedback" target="_top">Email feedback@everapp.co</a>'+
      '</div>'+
      '<input type="text">'+
      '<input type="text">'+
    '</div>'+
  '</div></div>')
  $('#itemContainer'+i).append('<div class="everTopBar"><div id="viewall'+i+'" class="viewall">View All</div><div class="everTopBarLogo"></div></div>')


  $('#fullscreen'+i).hover(function(){
      console.log('hover')
      $('#itemContainer'+i).css('opacity', '1')
      $('#allItemsButton'+i).show()
      $('#fullscreen'+i).show()
      $('#buttonsContainer'+i).show()
      // analytics.hoverOn()
      // if (inactiveCheck != 'done'){
      //   inactiveCheck = 'hovering'
      // }
  }, function(){
      $('#itemContainer'+i).css('opacity', '0')
      $('#allItemsButton'+i).hide()
      $('#fullscreen'+i).hide()
      $('#buttonsContainer'+i).hide()
      $('#allItemsContainer'+i).css('width', '0%').css('height', '0%')
      allItemsOpen = false
      $('#itemContainer'+i).show()
      // analytics.hoverOff()
      // if (inactiveCheck != 'done'){
      //   inactiveCheck = +new Date()
      // }
  })






   $('#everenabledContainer'+i).click(function(){
    if (!allItemsOpen){
        $('#fullscreen'+i).css('width', '100%').css('height', '100%').css('display', 'auto')
        $('#allItemsContainer'+i).css('width', '100%').css('height', '100%')
        allItemsOpen = true
        $('#itemContainer'+i).hide()
        $('#everenabledContainer'+i).hide()
        // resizeContainers()
      }
  })

  $('#everTopBar'+i).click(function(){
    if (!allItemsOpen){
      $('#fullscreen'+i).css('width', '100%').css('height', '100%').css('display', 'auto')
      $('#allItemsContainer'+i).css('width', '100%').css('height', '100%')
      allItemsOpen = true
      $('#itemContainer'+i).hide()
      // resizeContainers()
      // analytics.clickAllItemsButton()
    }
    else {
      $('#allItemsContainer'+i).css('width', '0%').css('height', '0%')
      allItemsOpen = false
      $('#itemContainer'+i).show()
    }
  })

  $('#closeFullscreen'+i).click(function(){
    $('#allItemsContainer'+i).css('width', '0%').css('height', '0%')
      allItemsOpen = false
      $('#itemContainer'+i).show()
      $('#everTopBar'+i).show().css('opacity', '1')
  })

  for (var x = 0 ; x < items.length ; x++){
    addItemSide(x, i)
    addItemFull(x, i)
  }

  setTimeout(function(){
    $('#everenabledContainer'+i).css('width', '130px')
    $('#everenabledText'+i).text('Shop this video')
    $('#everTopBar'+i).css('display', 'hidden').css('opacity', '0')
    setTimeout(function(){
      $('#everenabledContainer'+i).css('width', '0px')
      setTimeout(function(){
        $('#everenabledContainer'+i).hide()
        $('#everTopBar'+i).show().css('opacity', '1')
        // inactiveCheck = +new Date()
      }, 1000)
    }, 8000)
  }, 300)


} // end drawing of containers onto videos


// $('#tagOverlayWatch').append('<div id="itemContainer" class="itemContainer"></div><div class="allItemsButton"></div>')
// $('#fullscreen').append('<div class="allItemsContainer"></div>')

var titleso = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var options = ['option1', 'option2']

// for (var i = 0 ; i < json.items.length ; i++){
//   addItemSide(i)
//   addItemFull(i)
// }



// $('.description').hide()

// var allItemsOpen = false

// $('.allItemsButton').click(function(){
//   if (!allItemsOpen){
//     $('.allItemsContainer').css('width', '100%').css('height', '100%')
//     allItemsOpen = true
//     $('.buttonsContainer').css('opacity', '1')

//   }
//   else {
//     $('.allItemsContainer').css('width', '0%').css('height', '0%')
//     allItemsOpen = false
//     $('.buttonsContainer').css('opacity', '0')
//   }
// })



// function addItemSide(i){
//   $('.itemContainer').append('<div id="item'+i+'" class="item item2">'+
//     '<div id="itemImage'+i+'" class="itemImage itemImage2" style="background-image:url('+json.items[i].imageUrl+')"></div>'+
//     '<div id="itemBottom'+i+'" class="itemBottom itemBottom2">'+
//       '<div id="description'+i+'" class="description">'+
//         '<div id="brand'+i+'" class="brand">'+json.items[i].brand+'</div>'+
//         '<div id="title'+i+'" class="title">'+json.items[i].name+'</div>'+
//       '</div>'+
//       '<div id="saveButton'+i+'" class="saveButton">Save</div>'+
//       '<div id="buyButton'+i+'" class="buyButton">Buy</div>'+
//     '</div>'+
//   '</div>')
//   hover(i)
// }

// function addItemFull(i){
//   $('.allItemsContainer').append('<div id="itemCard'+i+'" class="itemCard" value="'+i+'">'+
//     '<div id="itemCardImage'+i+'" class="itemCardImage" style="background-image:url('+json.items[i].imageUrl+')"></div>'+
//     '<div id="itemCardBottom'+i+'" class="itemCardBottom">'+
//         '<div id="itemCardBrand'+i+'" class="itemCardBrand">'+json.items[i].brand+'</div>'+
//         '<div id="itemCardName'+i+'" class="itemCardName">'+json.items[i].name+'</div>'+
//         '<div id="itemCardPrice'+i+'" class="itemCardPrice">$<div class="priceNum">'+json.items[i].price+'</div></div>'+
//       '<div class="itemCardButtons">'+
//         '<div id="saveButton1'+i+'" class="saveButton">Save</div>'+
//         '<div id="buyButton1'+i+'" class="buyButton">Buy</div>'+
//       '</div>'+
//     '</div>'+
//   '</div>')
//   // hover1(i)
// }

// function hover(i){
//   $('#item'+i).hover(function(){
//     $('#itemImage'+i).hide()
//     $('#itemBottom'+i).show()
//     $('#description'+i).show()
//     // $('.item2').css('width', '110px').css('height', '110px')
//     $('#itemBottom'+i).css('width', '110px').css('height', '110px').css('border-radius', '10%')
//   }, function(){
//     $('#itemImage'+i).show()
//     $('#itemBottom'+i).hide()
//     $('#description'+i).hide()
//     // $('.item2').css('width', '70px').css('height', '70px')
//     $('#itemBottom'+i).css('width', '70px').css('height', '70px').css('border-radius', '50%')
//   })
// }







// $('.everTopBar').show().css('opacity', '1')

  $('.fullscreenLogo').click(function(){
    // analytics.fullscreenLogo = true
  })
  $('.fullscreenLogoText').click(function(){
    // analytics.fullscreenLogoText = true
  })


  function addItemSide(i, j){
    $('#itemContainer'+j).append('<a id="itemLinkSide'+i+'x'+j+'" href="'+items[i].url+'" target="_blank">'+
      '<div id="itemSide'+i+'x'+j+'" class="item itemSide">'+
      '<div id="itemImageSide'+i+'x'+j+'" class="itemImage itemImageSide" style="background-image:url('+items[i].imageUrl+')"></div>'+
      '<div id="itemBottomSide'+i+'x'+j+'" class="itemBottom itemBottomSide">'+
        '<div id="descriptionSide'+i+'x'+j+'" class="description descriptionSide">'+
          '<div id="brandSide'+i+'x'+j+'" class="brand brandSide">'+items[i].brand+'</div>'+
          '<div id="titleSide'+i+'x'+j+'" class="title titleSide">'+items[i].name+'</div>'+
          '<div id="priceSide'+i+'x'+j+'" class="price priceSide">$'+items[i].price+'</div>'+
        '</div>'+
        '<div id="buyButtonSide'+i+'x'+j+'" class="buyButton buyButtonSide">View</div>'+
      '</div>'+
    '</div></a>')
    hover(i)
    if (items[i].stock == 'false'){
      $('#itemLinkSide'+i+'x'+j).removeAttr('target').removeAttr('href')
      $('#priceSide'+i+'x'+j).text('')
      $('#buyButtonSide'+i+'x'+j).text('Sold Out')
    }
  }
  function addItemFull(i, j){
    $('#itemView'+j).append('<a id="itemLinkFull'+i+'x'+j+'" href="'+items[i].url+'" target="_blank">'+
      '<div id="itemFull'+i+'x'+j+'" class="item itemFull">'+
      '<div id="itemImageFull'+i+'x'+j+'" class="itemImage itemImageFull" style="background-image:url('+items[i].imageUrl+')"></div>'+
      '<div id="itemBottomFull'+i+'x'+j+'" class="itemBottom itemBottomFull">'+
        '<div id="descriptionFull'+i+'x'+j+'" class="description descriptionFull">'+
          '<div id="brandFull'+i+'x'+j+'" class="brand brandFull">'+items[i].brand+'</div>'+
          '<div id="titleFull'+i+'x'+j+'" class="title titleFull">'+items[i].name+'</div>'+
          '<div id="priceFull'+i+'x'+j+'" class="price priceFull">$'+items[i].price+'</div>'+
        '</div>'+
        '<div id="buyButtonFull'+i+'x'+j+'" class="buyButton buyButtonFull">View</div>'+
      '</div>'+
    '</div></a>')
    hoverAllItems(i)
    if (items[i].stock == 'false'){
      $('#itemLinkFull'+i+'x'+j).removeAttr('target').removeAttr('href')
      $('#priceFull'+i+'x'+j).text('')
      $('#buyButtonFull'+i+'x'+j).text('Sold Out')
    }
  }

  function hover(i, j){
    $('#itemSide'+i+'x'+j).hover(function(){
      $('#buyButtonSide'+i+'x'+j).css('color', 'white').css('border-color', '#f06124').css('background', '#f06124')
      // analytics.hoverItemOn(items[i])
    }, function(){
      $('#buyButtonSide'+i+'x'+j).css('color', 'black').css('border-color', 'black').css('background', 'white')
      // analytics.hoverItemOff()
    })

    $('#buyButtonSide'+i+'x'+j).click(function(){
      // analytics.clickItem()
    })
  }

  function hoverAllItems(i, j){
    $('#itemFull'+i+'x'+j).hover(function(){
      $('#buyButtonFull'+i+'x'+j).css('color', 'white').css('border-color', '#f06124').css('background', '#f06124')
      // analytics.hoverAllItemsOn(items[i])
    }, function(){
      $('#buyButtonFull'+i+'x'+j).css('color', 'black').css('border-color', 'black').css('background', 'white')
      // analytics.hoverAllItemsOff()
    })

    $('#buyButtonFull'+i+'x'+j).click(function(){
      // analytics.clickAllItems()
    })
  }
