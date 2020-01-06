(function() {
  window.addEventListener(
    'message',
    function(event) {
      try {
        function enableChatFromThirdPartyForm(obj) {
          if (!obj.customerContext || obj.customerContext == 'undefined') {
            console.log(
              'No customer context data provided, hence using default context'
            );
            customerContext = [];
            var titleContextObject = {
              key: 'Page Title',
              value: "Page title is '" + document.title + "'"
            };
            customerContext[0] = titleContextObject;
            obj.customerContext = JSON.stringify(customerContext);
          } else {
            obj.customerContext = JSON.stringify(obj.customerContext);
          }

          console.log(
            'Hello. sending post message: campaignId = ' +
              campaignId +
              ' and nodeflowId = ' +
              nodeflowId
          );
          window.location.href =
            'https://eqccs.equitasbank.com:8443/ameyochatjs/embeddedCustomerChat.html?campaignId=' +
            obj.campaignId +
            '&nodeflowId=' +
            obj.nodeflowId +
            '&customerName=' +
            obj.name +
            '&email=' +
            obj.email +
            '&phone=' +
            obj.phone +
            '&thirdPartyChatForm=' +
            true +
            '&additionalParams=' +
            obj.additionalParams +
            '&contextData=' +
            obj.customerContext +
            '&themeId=' +
            obj.themeId;
        }

        var event = JSON.parse(event.data);
        if (event.event_code === 'custom-event') {
          console.log(event.data.data, 'data');
          event.data.data.phone = '91' + event.data.data.phone;
          enableChatFromThirdPartyForm(event.data.data.phone);
          document.getElementById('ymPluginDivContainerInitial').style.display =
            'none';
        }
      } catch (error) {
        console.log('Error Parsing DATA');
      }
    },
    false
  );
})();
