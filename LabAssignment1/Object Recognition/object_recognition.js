var form = document.querySelector("form")
form.onsubmit = function(e) {
    console.log("User submitted the following: ")
    e.preventDefault();
    var checkboxes = form.elements["my_checkboxes"];
      var num_checkboxes = checkboxes.length;
      var checkcount = 0;
      for (var i = 0; i < num_checkboxes; i++ ) {
        var is_checked = checkboxes[i].checked;
        if (is_checked == true) {
          checkbox_value = checkboxes[i].value;
          checkcount++;
          console.log("Photo selected: " + checkbox_value);
        }
      }
      if(checkcount == 0){
        alert("No photo selected! Please choose photos and complete the task! Thanks!");
      }else{
        alert("Submitted Successfully! Thanks for your participation!")
      }
      var comments = form.elements["comments"];
      console.log("User comments: " + comments.value);
    }
