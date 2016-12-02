 /*
var text = '<h1 class="text-center">\"Et certes les savants sont les héritiers des prophètes,<br> et les prophètes n\'ont pas laissé comme héritage des dinars ou des dirhams mais ils ont laissé comme héritage la science,<br> celui qui la prend aura certes pris la part complète\"<h1>';

var currentChar = 1;
var htmltag = false;
var cache = '';


function type() {
    var str = text.substr(0, currentChar);
    var last = str.substr(str.length - 1, str.length);
    if (last != '<' && last != '>' & last != '/') {
        $(".myheader").html(str);
    }
    currentChar++;
    if (currentChar <= text.length) {
        if (last == '<') {
            htmltag = true;
        } else if (last == '>') {
            htmltag = false;
        }
        if (htmltag) {
            setTimeout(type, 1);
        } else {
            setTimeout(type, 50);
        }
        $('.author').hide().fadeIn(600,'swing');

    }
 
}

$(document).ready(function () {
    $(".myheader").html("");
    setTimeout(type, 0000);
   
});

*/
(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });
    /*
    $('.js-datepicker').datetimepicker({
            altField: "#datetimepicker",
closeText: 'Fermer',
prevText: 'Précédent',
nextText: 'Suivant',
currentText: 'Aujourd\'hui',
monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
dayNamesShort: ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'],
dayNamesMin: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
weekHeader: 'Sem.',
dateFormat: 'dd-mm-yy'
        });
*/
    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });
  
    $('.js-datepicker').datetimepicker({
        format: "dd MM yyyy - hh:ii",                                                             
        autoclose: true,
        language: 'fr',
        pickerPosition: "bottom-left"
    });
           
    
})(jQuery);