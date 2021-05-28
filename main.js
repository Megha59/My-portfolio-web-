var nam = document.getElementById("name")
var msgs = document.getElementById("msg")
var frm = document.getElementById("formhere")

var cont = document.getElementsByClassName("navigate")
var btns = document.getElementById("btn")

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

function display(){
    if(nam.value == '' || msgs.value==''){
        alert("All fields are required")
    }
    else{
        alert("Helloo "+nam.value+", I will reach you soon!!!")
    }
}