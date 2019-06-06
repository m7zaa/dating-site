$(document).ready(function() {







$("#submitButton").click(function(event){
  event.preventDefault();
  //console.log("button got clicked.");
  var age = $("input#age").val();
  //console.log("This is the value of: " + age)
  var gender = $("select#gender").val();
  console.log(gender);

// Add branching for M / F / N B

if (gender === "male"){
 // This is for gender === "male"
      if(age<18)  {
        console.log("you shouldn't be dating!");
        $("div.celebrity").hide();
        $("#under18").show();
      } else if (age>=18 && age<25 && gender==="male") {
        console.log("You should date a nice lady");
        $("div.celebrity").hide();
        $("#miley").show();

      } else if (age>=25 && age<45 && gender==="male") {
        console.log("you're dating bracket is women 25-45.")
        $("div.celebrity").hide();
        $("#kate").show();
      } else if (age>=45 && gender==="male") {
        $("div.celebrity").hide();
        $("#meryl").show();
        console.log("you're dating bracket is women 45-1000.")
      }

} else if (gender === "female"){

// This is for gender === "female"
  if(age<18)  {
    console.log("you shouldn't be dating!");
  } else if (age>=18 && age<25 && gender==="female") {
    console.log("You should date a nice man");
  } else if (age>=25 && age<45 && gender==="female") {
    console.log("you're dating bracket is men 25-45.")
  } else if (age>=45 && gender==="female") {
    console.log("you're dating bracket is men 45-1000.")
  }

} else {
  console.log("Date whoever you want, you're non-binary!");
}

});
















});
