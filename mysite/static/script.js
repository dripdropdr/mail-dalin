// -------------navbar-----------
// let arrow = document.querySelectorAll("#arrow");
// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e)=>{
//  let arrowParent = e.target.parentElement; //selecting main parent of arrow
//  arrowParent.classList.toggle("showMenu");
//   });
// }

// let arrow2 = document.querySelectorAll(".arrow");
// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e)=>{
//  let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
//  console.log(arrowParent)
//  arrowParent.classList.toggle("showMenu");
//   });
// }

// ------------top btn------------
let Top = document.querySelector('.btn-top');
Top.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})



// ----------------preview-----------
function printContent(num){
  if (num == 100){
    const teamnm = document.getElementById('form-00').value;
    console.log(teamnm);
    document.getElementsByClassName("teamnm")[0].innerText = teamnm;
  }
  if (num == 0){
    const cont0 = document.getElementById('form-0').value;
    document.getElementsByClassName("preview")[num].innerText = cont0;
  }
  if (num == 1){
    const cont1 = document.getElementById('form-1').value;
    document.getElementsByClassName("preview")[num].innerText = cont1;
  }
  if (num == 2){
    const cont2 = document.getElementById('form-2').value;
    document.getElementsByClassName("preview")[num].innerText = cont2;
  }
  if (num == 3){
    const cont3 = document.getElementById('form-3').value;
    document.getElementsByClassName("preview")[num].innerText = cont3;
  }
  if (num == 4){
    const cont4 = document.getElementById('form-4').value;
    document.getElementsByClassName("preview")[num].innerText = cont4;
  }
  if (num == 5){
    const cont5 = document.getElementById('form-5').value;
    document.getElementsByClassName("preview")[num].innerText = cont5;
  }
  if (num == 6){
    const cont6 = document.getElementById('form-6').value;
    document.getElementsByClassName("preview")[num].innerText = cont6;
  }
  if (num == 7){
    const cont7 = document.getElementById('form-7').value;
    document.getElementsByClassName("preview")[num].innerText = cont7;
  }
}

// -----------copy&paste-----------
function getValueInput(){
  var array_inputValue = document.getElementsByClassName('preview');
  console.log(array_inputValue)
  var textCopy = "";
   textCopy += "["+document.getElementsByClassName("teamnm")[0].innerHTML+"] "
  
  for (var i = 0; i < array_inputValue.length; i++) {
      textCopy += (array_inputValue[i].innerHTML+"\n\n")
      console.log(array_inputValue[i].innerHTML)
  }

  var text = textCopy;
  var createInput = document.createElement("textarea");
  document.getElementById("textDiv").appendChild(createInput);
              // ?????? input ????????? value ?????? ????????? ????????? ?????? ???????????????.
  createInput.value = text;
              // ?????? ????????? ????????? ???
  createInput.select();
  document.execCommand('copy');
              // ???????????? ??????????????? input ????????? ??????????????????.
  document.getElementById("textDiv").removeChild(createInput);
  alert('????????? ?????????????????????.');

}


function Rating(){};
Rating.prototype.rate = 0;
Rating.prototype.setRate = function(newrate){
    //?????? ?????? - ????????? ??? ?????? ?????? ??? ?????? ??????
    this.rate = newrate;
    let items = document.querySelectorAll('.rate_radio');
    console.log(items)
    items.forEach(function(item, idx){
        if(idx < newrate){
            console.log(idx)
            item.checked = true;
        }else{
            item.checked = false;
        }
    });
}
let rating = new Rating();