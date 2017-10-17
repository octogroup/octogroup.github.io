// function toggle2(showHideDiv, switchTextDiv) {
// 	var ele = document.getElementById(showHideDiv);
// 	var text = document.getElementById(switchTextDiv);
// 	if(ele.style.display == "flex") {
//     		ele.style.display = "none";
// 		text.innerHTML = "Läs mer";
//   	}
// 	else {
// 		ele.style.display = "block";
// 		text.innerHTML = "Visa mindre";
// 	}
// }
//
// function toggle3(contentDiv, controlDiv) {
//         if (contentDiv.constructor == Array) {
//                 for(i=0; i < contentDiv.length; i++) {
//                      toggle2(contentDiv[i], controlDiv[i]);
//                 }
//         }
//         else {
//                toggle2(contentDiv, controlDiv);
//         }
// }


function showOne() {
      var toggle = document.getElementsByClass("expand");
      for(var i = 0; i < expand.length; i++) {
            status = expand[i].getAttribute("class");
            if (status == 'expand') {
                  if (expand[i].id == thechosenone) {
                        if (expand[i].style.display == 'flex') {
                              expand[i].style.display = 'none';
                        }
                        else {
                              expand[i].style.display = 'flex';
                        }
                  }else {
                        expand[i].style.display = 'none';
                  }
            }
      }
}
