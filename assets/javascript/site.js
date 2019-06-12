function adjustTray(){
    $(".nav-list a").toggle("slow");
}

function changeTrayStatus(){
    if($(".nav-button").attr("value") == "open"){
        $(".nav-button").attr("value", "closed");
    } else if($(".nav-button").attr("value") == "closed"){
        $(".nav-button").attr("value", "open");
    }
    adjustTray();
}

function keepOptionsVisible(){
    if($(".nav-button").attr("value") == "closed"){
        $(".nav-button").attr("value", "open");
        adjustTray();
    }
}
//Currently working on making sure that navbar is always visible
$(function(){
    $(".nav-button").click(changeTrayStatus);
    //$(window).resize(keepOptionsVisible);
});