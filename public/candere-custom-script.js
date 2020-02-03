(function() {
    window.addEventListener(
      'message',
      function(event) {
        try {
          var eventData = JSON.parse(event.data);
          var chatbotCircle = document.getElementById('ymDivCircle');
          if (eventData.event_code === 'custom-event') {
            if(eventData.data.code === "signup"){
                    var signUpButton = document.querySelector("body > header > div.header-container > div > div > div:nth-child(2) > div > div > div:nth-child(3) > span > div > ul > li.user_login_w > div.login_h_s > div.u_r_ico > a");
                    signUpButton.click();	
              chatbotCircle.click(); 
                } else if(eventData.data.code === "signin"){
                    var signInButton = document.querySelector("body > header > div.header-container > div > div > div:nth-child(2) > div > div > div:nth-child(3) > span > div > ul > li.user_login_w > div.login_h_s > div.u_l_ico > a");
                    signInButton.click();
              chatbotCircle.click(); 
                } else if(eventData.data.code === "logout"){
                    var logoutButton = document.querySelector("body > header > div > div > div > div:nth-child(2) > div > div > div:nth-child(3) > span > div > ul > li.user_login_w > div.login_h_s > div > p.u_log_out > a");
                    logoutButton.click();
              chatbotCircle.click(); 
                }
          }
          
        } catch (error) {
          console.log('Error Parsing DATA');
        }
      },
      false
    );
  })();
  
  
  
  