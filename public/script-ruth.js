(function () {
    window.addEventListener("message", function (event) {
        var event = JSON.parse(event.data);
        let ymf = document.getElementById('ymFrameHolder')
        let ymc = document.getElementById('ymDivCircle')
        if(event.event_code === "open_bot"){
            ymf.style.display="block"
            ymf.style.opacity=1
            ymc.classList.add('open')
        }else if(event.event_code === "close_bot"){
            ymf.style.display="none"
            ymf.style.opacity=0
        }else{}
                
    }, false);
})();