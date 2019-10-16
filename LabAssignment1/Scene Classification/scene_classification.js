var form = document.querySelector("form")
form.onsubmit = function(e) {
    console.log("User submitted the following: ")
    e.preventDefault();
    var radios = form.elements["choice"];
    var radiocount = 0;
      for (var i = 0; i < radios.length; i++ ) {
        if (radios[i].checked == true){
          radiocount++;
          console.log("Radio selected: " + radios[i].value);
        }
      }
    if(radiocount != 1){
      alert("No photo selected! Please choose one photo to complete the task! Thanks!");
    }else{
      alert("Submitted Successfully! Thanks for your participation!")
    }
    var comments = form.elements["comments"];
      console.log("User comments: " + comments.value);
}
