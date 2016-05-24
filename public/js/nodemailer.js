$(document).ready(function(){
    var from,to,subject,text;
    $("#send_email").click(function(event){
        event.preventDefault();
        var data = {
          to: $("#to").val(),
          subject: $("#subject").val(),
          text: $("#content").val()
        }
        $("#message").text("Sending E-mail...Please wait");
        $.post("/email", data, function(data){
          console.log(data);
          if(data == "sent") {
            $("#message").empty().html("Email is been sent at " + data.to + " . Please check inbox !");
          }
        });
      });
  });
