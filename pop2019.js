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
        if(windowh > pointy){
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
// shade start --------------------------------------------
