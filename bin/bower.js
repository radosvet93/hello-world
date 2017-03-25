(function(Main, undefined){
    console.log("This is my script js file");
}(window.Main == window.Main || {} ));



(function (controller, undefined){
    console.log("This is a controller");
    var a = "controller name";
}(Main.Controller == Main.Controller || {} ));

