$('#searchButton').click(function mySearch(e) {
  var q = $("#searchInput").val();
  $.get('https://www.reddit.com/r/pics/search.json', {
  q: q,
  restrict_sr: "on", 
  sort: "new"

}).done(function(data) {
  var kitPosts = data; 
  var kitObjects = kitPosts.data.children;
  for (var i = 0; i < kitObjects.length; i++){
    postToPage(kitObjects[i]);
    console.log(kitObjects); 
  }
});
  $('.hide').hide();
  e.preventDefault();
  closeButton ();
});

function postToPage(urls){
  var containerDiv = $('#link');
  var imgIncludes = urls.data.url;
  if (imgIncludes) {
    containerDiv.append('<img src="' + imgIncludes + '">')
 } else {
  console.log("there are no images");
 }
};

function closeButton () {

  $("#link").prepend("<button>CLOSE</button>").click(function() { location.reload();});
};














