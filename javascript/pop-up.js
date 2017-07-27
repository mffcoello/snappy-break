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
  var videos = ['//www.funnyordie.com/embed/aaa7d6bd99',
  '//www.funnyordie.com/embed/74dd9afee2',
  'https://www.youtube.com/embed/jil0WCh_UoQ',
  'https://www.youtube.com/embed/jil0WCh_UoQ',
  'https://www.youtube.com/embed/-dDHWrdioKA',
  'https://www.youtube.com/embed/N9oxmRT2YWw',
  'https://www.youtube.com/embed/FtX8nswnUKU',
  'https://www.youtube.com/embed/MtN1YnoL46Q',
  'https://www.youtube.com/embed/sTbc2NeErnU',
  'https://www.youtube.com/embed/4IRdw_Qgwqc',
  'https://www.youtube.com/embed/nlYlNF30bVg',
  'https://www.youtube.com/embed/XTLZA8zBzzc',
  'https://www.youtube.com/embed/GzgavGowD_A?list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y',

  ];
  document.getElementById('iframe').src = videos[Math.floor(Math.random()*videos.length)];


}

function randomMemes(){
 var memes = [ 'https://giphy.com/embed/dcIW9oEyeFePm',
 'https://giphy.com/embed/u0LxmF9QVeDoQ',
 'https://giphy.com/embed/bXEcr96oNPllu',
 'https://giphy.com/embed/XIqCQx02E1U9W',
 'https://giphy.com/embed/6WapkBuNEbrHy',
 'https://giphy.com/embed/bUUACBD9sSSJi',
 'https://giphy.com/embed/5hojYPbSNvKnu',
 'https://giphy.com/embed/mlmLiWSSgL6eY',
 'https://giphy.com/embed/l0Exk8EUzSLsrErEQ',
 'https://giphy.com/embed/uAtUk9luIYL1C',

];
 document.getElementById('iframe').src = memes[Math.floor(Math.random()*memes.length)];
}
