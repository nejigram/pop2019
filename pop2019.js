window.onload = function(){

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
}
