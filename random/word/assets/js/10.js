var current_word = 0;

var words = ['understand', 'incredible', 'university', 'important', 'instrument', 'everything', 'experiment'];

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
    
    $("#jumbled-word").html(words[current_word]);
    $("#jumbled-word").css("color","green").delay(100);
    $("div.jumbled-word").slideUp(300).delay(100).fadeIn(300).css("color","black");
    $(".random").text("Nice one!").css("color","green").fadeOut(500).fadeIn(500).removeClass("opacity");
   

current_word++;

    var inside = (words[current_word].slice(1,(words[current_word].length-1)));
    inside = inside.shuffle();
    var jumbled = words[current_word][0] + inside + words[current_word][words[current_word].length-1];
    $("#jumbled-word").html(jumbled);

if (current_word == words.length-1) {
    setTimeout(function(){window.location.href='../../levels/win/index.html'}, 3000);
}

    
 
} else {
    var inside = (words[current_word].slice(1,(words[current_word].length-1)));
    inside = inside.shuffle();
    var jumbled = words[current_word][0] + inside + words[current_word][words[current_word].length-1];
    $("#jumbled-word").html(jumbled);
    $(".random").text("Try again!").css("color","red").removeClass("opacity").fadeOut(500).fadeIn(500);
    $("#jumbled-word").css("color","red");

    }
}

$(window).keypress(function(e) {
     if(e.which == 13) {
        checkWord();
        $('input:text').focus().val('');;
     }
})

$(".input-check").click(function(e) {
    e.preventDefault();
    checkWord();

        $('input:text').focus(function(){
            $(this).val('');
        
        });

});



