// loopstr start --------------------------------------------
window.addEventListener("load",function(){
    loopstr();
    setInterval(loopstr,5000);

    function loopstr(){
        var loopstr = document.getElementsByClassName("loopstr");
        for(var i = 0;i < loopstr.length;i++){
            var p = loopstr[i].getElementsByTagName("p")[0];
            var span = p.getElementsByTagName("span")[0];
            for(var x = 0;x < 10;x++){
                p.appendChild(span.cloneNode(true));
            }
        }
    }
});


// shade start --------------------------------------------
window.addEventListener("load",function(){
    var shade = document.getElementsByClassName("shade");
    var nowy = window.pageYOffset;
    var windowh = window.innerHeight;

    for(var i = 0;i < shade.length;i++){
        var pointy = shade[i].getBoundingClientRect().top + nowy;
        if(windowh + nowy > pointy){
            if(!shade[i].classList.contains("show")){
                shade[i].classList.toggle("show");
                shade[i].getElementsByTagName("img")[0].classList.toggle("show");
            }
        }
    }

    window.onscroll = function(){
        var nowy = window.pageYOffset;
        for(var i = 0;i < shade.length;i++){
            var pointy = shade[i].getBoundingClientRect().top + nowy;
            if(nowy > pointy - windowh){
                if(nowy > pointy + shade[i].clientHeight){
                    if(shade[i].classList.contains("show")){
                        shade[i].classList.toggle("show");
                        shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                    }

                }else{
                    if(!shade[i].classList.contains("show")){
                        shade[i].classList.toggle("show");
                        shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                    }
                }
            }else if(nowy + windowh < pointy){
                if(shade[i].classList.contains("show")){
                    shade[i].classList.toggle("show");
                    shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                }
            }

        }

    }
});
// shade end --------------------------------------------


//maruline start-----------------------------------------
var maruline_resizemoveflg = false;
window.addEventListener("load",function(){
    maruline_resizemoveflg = true;
    marulineopen();


    var maruline = document.getElementsByClassName("maruline");
    for(var i = 0;i < maruline.length;i++){
        maruline[i].style.visibility = "visible";
        var box = maruline[i].getElementsByClassName("box");
        for(var x = 0;x < box.length;x++){
            var target = box[x].getElementsByClassName("area")[0];
            target.addEventListener("mouseenter",m_enter,false);
            target.addEventListener("mouseleave",m_leave,false);

        }
    }
    function m_enter(event){
        event.target.getElementsByClassName("maru")[0].classList.add("on");
        event.target.getElementsByClassName("str")[0].classList.add("on");
    }
    function m_leave(event){
        event.target.getElementsByClassName("maru")[0].classList.remove("on");
        event.target.getElementsByClassName("str")[0].classList.remove("on");

    }

});

window.addEventListener("resize",function(){
    if(!maruline_resizemoveflg){
        maruline_resizemoveflg = true;
        marulineopen();
    }
});

function marulineopen(){
    var maruline = document.getElementsByClassName("maruline");
    for(var i = 0;i < maruline.length;i++){
        var box = maruline[i].getElementsByClassName("box");
        for(var x = 0;x < box.length;x++){

            box[x].style.height = box[x].clientWidth + "px";
        }
    }
    maruline_resizemoveflg = false;
}
