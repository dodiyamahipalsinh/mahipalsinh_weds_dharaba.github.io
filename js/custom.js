        $(document).ready(function () {
       var dym_date = 'Dec 10 2020';
       var given_str = dym_date + " 23:30:00 (Pacific Standard Time)";
        
       var countDownDate = new Date(given_str);
       var countDownDate = countDownDate.setHours(countDownDate.getHours());

        // Update the count down every 1 second
        var x = setInterval(function()
        {

            var dt = new Date();
//console.log(dt); // Gives Tue Mar 22 2016 09:30:00 GMT+0530 (IST)

        dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
//console.log(dt); // Gives Tue Mar 22 2016 04:00:00 GMT+0530 (IST)

        var offset = -300; //Timezone offset for EST in minutes.
        var now = new Date(dt.getTime() + offset*60*1000);
//console.log(estDate); //Gives Mon Mar 21 2016 23:00:00 GMT+0530 (IST)


            // Get todays date and time
            //var now = new Date().getTime();
            
            // Find the distance between now an the count down date
             var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element with id="demo"
            document.getElementById("count_down_time").innerHTML = "<div class='timer-inner'>" +days+ "<span>Days</span></div><div class='timer-inner'>" +hours+"<span>Hours</span></div><div class='timer-inner'>"+minutes+"<span>Minutes</span></div><div class='timer-inner'>"+seconds+"<span>Seconds</span></div>";
            
            // If the count down is over, write some text 
            if (distance < 0)
            {
                clearInterval(x);
                document.getElementById("count_down_time").innerHTML = "Finally We Meet";
            }
        }, 1000);
        
    });
        $( ".close-count-down" ).click(function() {
            document.cookie = "count-down=1";
            $( ".close-count-down" ).hide();
            $( "#count_down_time" ).hide();
            $( ".timer-main" ).hide();
        });


  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };