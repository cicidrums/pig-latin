$(document).ready(function() {

  //var result;

  $("form#translate").submit(function(event) {
    event.preventDefault();

    var phrase = $('input#phrase').val();
    var phraseSplit = phrase.split(" ");

    for (var index = 0; index < phraseSplit.length; index += 1) {
      var word = phraseSplit[index]
      if ( word[0] === "a","e","i","o","u" ) {
        word = word.concat("way");
        phraseSplit[index] = word;
      }
    };

    console.log(phraseSplit);

  });
});
