/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    initializeMainPanel();
    
    $("#Tytul").click(function(){
        alert("klinięto tytuł");
    });
    $("#Podtytul").dblclick(function(){
        alert("dwukrotnie kliknieto podtytuł"); 
    });
    $("h1").hover(function(){
       $(this).fadeOut();
    });
    $("h1").mouseleave(function(){
       $(this).fadeIn(); 
    });
    $(".klikacz").click(function(){
        var content = $(this).parent().parent().children(".poletekstowe").val();
        if (content.trim())
            alert(content);
    });
    $(".czysciciel").click(function(){
        $(this).parent().parent().children(".poletekstowe").val('');
    });
    $("#pokazywacz").click(function(){
        var forms = $(this).parents().children().children(".formularzLeft, .formularzRight");
        var pokazywacz = $("#pokazywacz");
        if (forms.is(":hidden")) {
           forms.show(1500, function(){
               //alert('Pokazano formularz');
           });
           pokazywacz.text('Ukryj');
        } else {
           forms.hide(1200, function() {
               //alert('Ukryto formularz');
           });
           pokazywacz.text('Pokaż');
        }
    });
    $(".formularzBottom").dblclick(function(){
       $(".formularzRozwijany").slideToggle(1000, function (){
            onPanelRozwijanyToggled();
       });
    });
    $("#rozwijacz").click(function() {
       if (!($(".formularzRozwijany").is(":visible")))
           $(".formularzRozwijany").slideDown(1000, function(){
                onPanelRozwijanyToggled();
           });
    });
    $("#zwijacz").click(function() {
        if ($(".formularzRozwijany").is(":visible"))
           $(".formularzRozwijany").slideUp(1000, function(){
                onPanelRozwijanyToggled();
           });
    });
    // functions
    function initializeMainPanel(){
        $(".formularzLeft, .formularzRight, .formularzRozwijany").hide();
        $(".formularzBottom").text('Kliknij panel aby rozwinąć.');
        $("#rozwijacz").prop("disabled", false);
        $("#zwijacz").prop("disabled", true);
    };
    function onPanelRozwijanyToggled(){
        var visibility = $(".formularzRozwijany").is(":visible");
        if (visibility) {
            $(".formularzBottom").text('Kliknij panel aby zwinąć.');
            $("#rozwijacz").prop("disabled", true);
            $("#zwijacz").prop("disabled", false);
        } else {
            $(".formularzBottom").text('Kliknij panel aby rozwinąć.');
            $("#rozwijacz").prop("disabled", false);
            $("#zwijacz").prop("disabled", true);
        }
    };
});

