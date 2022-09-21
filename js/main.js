/**
 * --------------------------------------------
 *  effect
 * --------------------------------------------
 */


/**
 * Hide Show
 */

$(document).ready(function(){
    $('#hide').click(function(){
        $('#hello').hide();
    });
    $('#show').click(function(){
        $('#hello').show();
    });
});

/**
 * fadeToggle()
 */

$(document).ready(function(){
    $('#fade').click(function(){
        $('#aku').fadeToggle();
        $('.sayang').fadeToggle('slow');
        $('#kamu').fadeToggle(3000);
    });
});

/**
 * flip
 */

$(document).ready(function(){
    $('#flip').click(function(){
        $('#panel').slideToggle('slow');
    });
});

/**
 * animation
 */

$(document).ready(function(){
    $('#animasi').click(function(){
        $('.animation').animate({
            height: 200,
            width: 200,
        });
    });
});

/**
 * stop animation
 */

$(document).ready(function(){
    $('#start').click(function(){
        $('#panel1').slideDown(5000);
    });
    $('#stop').click(function(){
        $('#panel1').stop();
    });
});

/**
 * Callback
 */

$(document).ready(function(){
    $('#callback').click(function(){
        $('.pr').hide(1000);
        alert('Paragraf akan disembunyikan');
    });
});

/**
 * Chaining
 */

$(document).ready(function(){
    $('#chaining').click(function(){
        $('#jq').css('color','red')
            .slideDown(2000)
            .slideUp(2000);
    });
});


/**
 * --------------------------------------------
 *  html
 * --------------------------------------------
 */

/**
 * get
 */

$(document).ready(function(){
    $('#bGet').click(function(){
        alert("Value: " + $("#get").val());
    });
});

/**
 * set
 */

$(document).ready(function(){
    $('#set').click(function(){
        $('#linkGithub').attr("href", function(i, origValue){
            return origValue + "/installation/";
        });
    });
});

/**
 * add
 */

$(document).ready(function(){
    $('#append').click(function(){
        $('ol').append('<li>appendItem</li>');
    });

    $('#prepend').click(function(){
        $('ol').prepend('<li>prependItem</li>');
    });
});

/**
 * remove
 */

$(document).ready(function(){
    $('#remove').click(function(){
        $('#div1').remove();
    });

    $('#empty').click(function(){
        $('#div1').empty();
    });
});

/**
 * css Classes
 */

$(document).ready(function(){
    $('#cssClass').click(function(){
        $('#div2').addClass('important blue');
    });
});


/**
 * css
 */

$(document).ready(function(){
    $('#css').click(function(){
        $('.css1').css({
            'background-color': 'rgb(255, 0, 0)',
            'font-size': '200%',
            'color': 'black'
        });

        $('.css2').css({
            'background-color': 'rgb(225, 0, 255)',
            'font-size': '200%',
            'color': 'black'
        });
    });
});

/**
 * dimensions
 */

$(document).ready(function(){
    $('#setD').click(function(){
        var txt = '';
        txt += 'width: ' + $('#dimensi').width() + '<br>';
        txt += 'height: ' + $('#dimensi').height() + '<br>';
        txt += 'innerWidth: ' + $('#dimensi').innerWidth() + '<br>';
        txt += 'innerHeight: ' + $('#dimensi').innerHeight();
        $('#dimensi').html(txt);
    });
});
