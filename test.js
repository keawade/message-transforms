var wordList = ['test','kite','like','come','came','bake','plate','hello','keith'];
for(var i = 0; i < wordList.length; i++){
  if(/([b-df-hj-np-tv-z])\1{2,}}/.test(wordList)){
    console.log('pass');
  } else {
    console.log('fail');
  }
}
