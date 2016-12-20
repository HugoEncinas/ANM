$( document ).ready(function() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    var row=0;
    var checked=[];
    $("#add" ).click(function() {
      row++;
      $('#table > tbody:last-child').append('<tr id="tableRow'+row+'"><td><p><input type="checkbox" id="checkbox'+row+'"/><label id="label'+row+'" for="checkbox'+row+'">Remove Line</label></p></td><td><input placeholder="" id="projectName'+row+'" type="text" class="validate"></td><td><input placeholder="" id="workDesc'+row+'" type="text" class="validate"></td><td><input placeholder="" id="hoursWorked'+row+'" type="number" class="validate"></td></tr>');
    });

    $("#remove" ).click(function() {
      var n=$('input[type=checkbox]:checked').length;
      for(var i=1;i<=row;i++){
        id="#checkbox"+i;
        var m= $(id).is(':checked');
        if (m){
          $('#tableRow'+i).remove();
        }
      }
    });

    $("#confirm" ).click(function() {
      $('#modal1').openModal();
    });

    $("#cancel" ).click(function() {
      for(var i=1;i<=row;i++){
          $('#tableRow'+i).remove();
      }
      row=0;
    });

    $("#submit" ).click(function() {
      var emailAddress=document.getElementById('email').value;
      if (emailAddress) {
        console.log("Send to: "+emailAddress);
        console.log("Subject: Timesheet Report");
        console.log("Body:");
        var x = document.getElementById("table").rows.length-1;
        var z=[];
        for(var i=1;i<=x;i++){
          var y1 = document.getElementById("table").rows[i].cells[1].children[0].value;
          var y2 = document.getElementById("table").rows[i].cells[2].children[0].value;
          var y3 = document.getElementById("table").rows[i].cells[3].children[0].value;
          z=[y1,y2,y3];
          console.log(z);
        }
        Materialize.toast('Email sent successfully!', 4000);
        document.getElementById("cancel").click();
      }


    });


});
