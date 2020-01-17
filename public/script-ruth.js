(function(){
    function addProductToCart(EAN){
    console.log(EAN);
        if (_shopalyst !== undefined) {
            _shopalyst.addEANToCart(EAN);
            // Close the chatbot here!
            if (window.YellowMessengerPlugin !== undefined) {
            
       window.YellowMessengerPlugin.toggleChat()
}
        } else {
            // Open up the Shopalyst URL
            const SHOPALYST_BASE_URL = 'https://sdk.shortlyst.com/ean/';
            window.location.assign(SHOPALYST_BASE_URL+EAN);
        }
    }
    window.addEventListener("message", function(event){
        var event = JSON.parse(event.data);
        if (event.event_code === 'custom-event') {
            switch(event.data.code) {
                case 'add-to-cart': {
                    var EANCode = event.data.EAN;
                    addProductToCart(EANCode);
                    break;
                }
                default : {
                    console.log(JSON.stringify(event));
                }
            }
        }
        let ymf = document.getElementById('ymFrameHolder')
        let ymc = document.getElementById('ymDivCircle')

        console.log(event,"EVENT")
        if(event.data.event === "open_bot"){
            ymf.style.display="block"
            ymf.style.opacity=1
            ymc.classList.add('open')
        }else if(event.data.event === "close_bot"){
            let notifHTML = `<div class="close" onclick="window.ymCloseNotification(event);">x</div><div style="font-weight: bold;">Tenaga bot</div>`
            if(!document.getElementById('ym-notification').innerHTML){
                console.log("Notification is not there")
                document.getElementById('ym-notification').innerHTML = notifHTML;
            } else {
                console.log("Notification is present")
            }
            ymf.style.display="none"
            ymf.style.opacity=0
        }else{}
    });
})();