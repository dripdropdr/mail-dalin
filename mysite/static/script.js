// -------------navbar-----------
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

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
  if (num == "team"){
    const teamnm = document.getElementById('form-00').value;
    document.getElementsByClassName("teamnm").innerText = teamnm;
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
      textCopy += (array_inputValue[i].innerHTML+"\n")
      console.log(array_inputValue[i].innerHTML)
  }

  var text = textCopy;
  var createInput = document.createElement("textarea");
  document.getElementById("textDiv").appendChild(createInput);
              // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
  createInput.value = text;
              // 복사 기능을 수행한 후
  createInput.select();
  document.execCommand('copy');
              // 가상으로 붙여주었던 input 태그를 제거해줍니다.
  document.getElementById("textDiv").removeChild(createInput);
  alert('복사가 완료되었습니다.');

}

function getValueInputCurrent(){
  var array_inputValue = document.getElementsByClassName('preview current');
  console.log(array_inputValue)
  var textCopy = "";
  
  for (var i = 0; i < array_inputValue.length; i++) {
      textCopy += (array_inputValue[i].innerHTML+"\n")
      console.log(array_inputValue[i].innerHTML)
  }

  var text = textCopy;
  var createInput = document.createElement("textarea");
  document.getElementById("textDiv").appendChild(createInput);
              // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
  createInput.value = text;
              // 복사 기능을 수행한 후
  createInput.select();
  document.execCommand('copy');
              // 가상으로 붙여주었던 input 태그를 제거해줍니다.
  document.getElementById("textDiv").removeChild(createInput);
  alert('복사가 완료되었습니다.');

}


function Rating(){};
Rating.prototype.rate = 0;
Rating.prototype.setRate = function(newrate){
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
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