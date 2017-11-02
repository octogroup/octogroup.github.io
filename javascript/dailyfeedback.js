/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

//byt smileybild från grå till gul sålänge ingen av de 3 radioknapparna är icheckad
function makeYellow (id) {
  if(!anyRadioButtonIsChecked()){
    if(id === "ledsenLabel")
      document.getElementById('ledsenSmiley').src = '../img/sad.png';
    else if (id === "neutralLabel")
      document.getElementById('neutralSmiley').src = '../img/confused.png';
    else
      document.getElementById('happySmiley').src = '../img/happyy.png';
  }
}

//byt smileybild från gul till grå sålänge ingen av de 3 radioknapparna är icheckade
function makeGrey (id){
  if(!anyRadioButtonIsChecked()){
    if(id === "ledsenLabel")
      document.getElementById('ledsenSmiley').src = '../img/sadDis.png';
    else if (id === "neutralLabel")
      document.getElementById('neutralSmiley').src = '../img/confusedDis.png';
    else
      document.getElementById('happySmiley').src = '../img/happyyDis.png';
  }
}

//gör den klickade smileyn gul, rulla bort paragrafen som innehåller smailisarna, submitta formen
function submitForm (id) {
  makeYellow(id);
  document.getElementById('smileyfaces').style.height = '0px'
  //document.getElementById("dailyFeedback_form").submit();
}

//kollar radioknapps-status på en enskild radioknapp, alltså om den är icheckad eller ej
function radioButtonIsChecked (id) {
  return document.getElementById(id).checked;
}

//kollar om någon av alla 3 radioknappar är icheckad
function anyRadioButtonIsChecked () {
  if(radioButtonIsChecked("ledsen") || radioButtonIsChecked("neutral") || radioButtonIsChecked("glad"))
    return true;
  else
    return false;
}
