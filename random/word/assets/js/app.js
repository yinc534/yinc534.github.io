var current_word = 0;

var words = ['believe', 'through', 'between', 'country'];

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

var inside = (words[current_word].slice(1,(words[current_word].length-1)));
inside = inside.shuffle();
var jumbled = words[current_word][0] + inside + words[current_word][words[current_word].length-1];

$("#jumbled-word").html(jumbled);

function checkWord() {

if ($("input").val() == words[current_word]) {
    
    $("#jumbled-word").css("color","green");
    $("#jumbled-word").html(words[current_word]);
    $( "div.jumbled-word" ).slideUp( 300 ).delay( 100 ).fadeIn( 300 );

    $("#jumbled-word").html(current_word[jumbled]);
    current_word++;

    // $("#jumbled-word").html(words[current_word]);
 
} else {

    var jumbled = words[current_word][0] + inside + words[current_word][words[current_word].length-1];
    $("#jumbled-word").css("color","red");
    inside = inside.shuffle();
    $("#jumbled-word").html(jumbled);

    }
}

$(window).keypress(function(e) {
     if(e.which == 13) {
        checkWord();
     }
})

$(".input-check").click(function(e) {
    e.preventDefault();
    checkWord();
});


// current_word++;
// if (current_word == words.length) {
//     current_word = 0;
// }













// String.prototype.shuffle = function () {
//     var a = this.split(""),
//         n = a.length;

//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// }

//     var word ='believe'
//     var inside = (word.slice(1,(word.length-1)));
//     inside = inside.shuffle();
    
//     var jumbled = word[0] + inside + word[word.length-1];

// // $(jumbled).addClass("unjumbled");

//     $("#jumbled-word").html(jumbled);

// $(".input-check").click(function(e) {
//   e.preventDefault();

//   if ($("input").val() == word) {
//     $("#jumbled-word").css("color","green");
//     $("#jumbled-word").html(word);
 
//     var timeoutID = window.setTimeout(newWord, 2000);

// function newWord() {
//     // give the user a new word...
//     var new_word ='through'
//     var inside = (new_word.slice(1,(new_word.length-1)));
//     inside = inside.shuffle();
//     var jumbled = new_word[0] + inside + new_word[new_word.length-1];
//     $("#jumbled-word").css("color","black");
//     $("#jumbled-word").html(jumbled);

// }

//   if ($("input").val() == new_word) {

//     $("#jumbled-word").css("clor","green");
//     $("#jumbled-word").html(jumbled);
//   }

//   } else {

//     $("#jumbled-word").css("color","red");
//     inside = inside.shuffle();
//     var jumbled = word[0] + inside + word[word.length-1];
//     $("#jumbled-word").html(jumbled);

  
//   }
// });

// grab words[current_word]
// jumble the letters of words[current_word]
// if the guess == words[current_word]
    // current_word += 1
    // display next word
// else 
    // jumble the letters of words[current_word]

