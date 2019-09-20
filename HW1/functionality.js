/*
DOM manupilation that adds a date when the user selects the Banker
*/
function CreateDate() {
    //Creates an element node for list for a specific form feild
    let lEle = document.createElement("li");
    //Creates an element node for input for a specific form feild
    let iEle = document.createElement("input");
    //Sets type attribute to date for the input tag
    iEle.setAttribute("type", "date");
    //Sets the id attribute to date
    iEle.setAttribute("id", "date");
    //Creates an element node for label for a specific form feild
    let labelEle = document.createElement("label");
    //Sets the for attribute to date
    labelEle.setAttribute("for", "date")
    //Creates an text node for label for a specific form feild
    let txtEle = document.createTextNode("Enter the date that you need an appointment");
    //Appends the text node with the label node
    labelEle.appendChild(txtEle);
    //Appends the input element as  child node to list element
    lEle.appendChild(iEle);
    //Gets the element which chooses the Banker Details
    bankerEle = document.getElementById("BankerDets");
    //Appends the label to the label element
    bankerEle.appendChild(labelEle);
    //Appends the list to the Banker element as a child
    bankerEle.appendChild(lEle);
    //Adds an image to the DOM as an online add
    addImage();
}
/*
DOM Manupilation to add an image as an online add after the appoinment scheduled
*/
function addImage(){
    //Creates an element node for list for a specific form feild
    let lEle = document.createElement("li");
    //Creates an element node for image for a specific form feild
    let iEle = document.createElement("img");
    //Sets the src attribute to image path
    iEle.setAttribute("src", "imageAdd.jpg");
    //Sets the alt attribute to an alternate add
    iEle.setAttribute("alt","Online Add");
    //Sets the height and width of the image
    iEle.setAttribute("width","500");
    iEle.setAttribute("height","600");
    //Appends the h2 node as a child node to list
    lEle.appendChild(iEle);
    //Gets the email node
    EmailEle = document.getElementById("EmailDets");
    //Appends the list to the email node
    EmailEle.appendChild(lEle);
}
/*
Function that validates if the name is as per the format
*/
function validateName() {
    let retV = false;
    //Get the value entered in the name feild
    let nameAttr = document.getElementById('Name').value;
    //If it matches the pattern return true and do nothing
    if (nameAttr.oninvalid) {
        retV = true
    }
    // If pattern is a mismatch say the format is invalid and reload the form
    else {
        alert("Invalid Format for Name");
        location.reload();
        retV = false;
    }
}
/*
Function that validates the description
*/
function validateDesc() {
    //Get the value entered in the description feild
    var retV = false;
    var dAttr = document.getElementById('Desc').value;
    //If it matches the pattern return true and do nothing
    if (dAttr.oninvalid) {
        retV = true
    }
    // If pattern is a mismatch say the format is invalid and reload the form
    else {
        alert("Invalid Entry in Desc Box");
        location.reload();
        retV = false;
    }

}
/*
Validate if a file is added 
*/
function validateFile() {

    var retV = false;
    //Get the value entered in the file feild
    var fAttr = document.getElementById('File').value;
    //If file added return true and do nothing
    if (fAttr.oninvalid) {
        retV = true
    }
    //If not alert the user
    else {
        alert("You haven't chosen any file.");
        location.reload();
        retV = false;
    }

}
/*
Validate's the number feild
*/
function validateNumber() {

    var retV = false;
    //Get the value entered in the number feild
    var pAttr = document.getElementById('TelNumber').value;
    //If number in correct format added return true and do nothing
    if (pAttr.oninvalid) {
        retV = true
    }
    //Else alert the user
    else {
        alert("Invalid Format for Number");
        location.reload();
        retV = false;
    }

}
/*
To validate if the appointment is after today
*/
function validateForm() {
    let flag = true;
    //Gets todays date
    let today_date =new Date();
    //Get input date
    let input_date = new Date(document.getElementById("date").value);
    //Check if its empty
    if (input_date === " "){
          flag= false;
      } 
      //Check if input date is today or before today
      else if (input_date <= today_date) {
          flag = false;
      } else {
          flag= true;
      }
      //If wrong entries alert the user
  if(!flag){
      alert("Invalid Date")
  }
  //If entries correct check for T&C
  else{
    if (document.getElementById('TC').checked) {
        flag = true;
    }
    else {
        alert("You haven't read your Terms & Conditions yet!")
        flag = false;
    }
}
return flag;
}
/*
Plays song in the background
*/
function playSong(){
    let audios = document.getElementById("song");
    audios.play();
}
/*
Checks if atleast ne banker is chosen
*/
function isChecked() {
    let flag=false;
    //Gets the chsen element
    let checking = document.getElementById('BankerDets');
    //Loops thru the radio buttons to check if one is chosen if not alerts the user
    for (let i=0; i<checking.length; i++) {
      if (checking[i].type == 'radio' && checking[i].checked) {
        flag= true;
      } 
    }
    flag= false;
    if(flag==false){
        alert("Rdio Button not checked")
    }
  }
