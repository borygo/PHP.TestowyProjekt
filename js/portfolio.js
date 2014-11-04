/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $(".menu").hide();
    $(".menuDummy").click(function(){
        var menu = $(".menu");
        var tresc = $(".tresc");
        if (menu.is(":hidden")){
            menu.fadeIn(1000);
            tresc.css("width", 660 + "px");
        } else {
            menu.fadeOut(1000, function(){
                tresc.css("width", 770 + "px");
            });
        }
    });
});