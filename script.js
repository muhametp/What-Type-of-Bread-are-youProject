$("button").click(function() {
    var age = $(".age").val();
    var place = $(".place").val();
if (age <=18 && place === "France") {
        $(".result").text("Baguette");
 } 
else if (age >18 && place === "France") {
        $(".result").text("Ficelle");
 }
else if (age >18 && place === "Italy") {
        $(".result").text("Brioche");
 }
else if (age <=18 && place === "Italy") {
        $(".result").text("Focaccia");
 }    

    
 });