function showdiv() {
  document.getElementById('pop').style.display = 'none';
  var checked = document.querySelector('input[name="pop-up"]:checked').value;
  document.getElementById('vid').style.display = 'block';
  if (checked === "videos"){
    randomVideos();
  }
  if (checked === "memes"){
    randomMemes();
  }

}
function randomVideos(){
  var videos = ['https://www.youtube.com/embed/3v5HZTwFBCs',
  'https://www.youtube.com/embed/CTFtOOh47oo',
  'https://www.youtube.com/embed/by3yRdlQvzs',
  "https://www.youtube.com/embed/ALqFFeU-Wp8"];
  document.getElementById('iframe').src = videos[Math.floor(Math.random()*videos.length)];


}

function randomMemes(){
 var memes = [ 'https://giphy.com/embed/dcIW9oEyeFePm'];
 document.getElementById('iframe').src = memes[Math.floor(Math.random()*memes.length)];
}
