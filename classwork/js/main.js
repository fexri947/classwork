document.querySelector('.fa-bars').onclick=function(){

document.querySelector('.menu').style.width="100%";
document.querySelector('.menu').style.top="0";
document.querySelector('.menu').style.left="0";
document.querySelector('.menu').style.height="100%";
document.querySelector('ul').style.marginTop="50px";
}

document.querySelector('.fa-window-close').onclick=function(){
     document.querySelector('.menu').style.width="0";
    document.querySelector('.menu').style.top="50%";
    document.querySelector('.menu').style.left="50%";
    document.querySelector('.menu').style.height="0";

    document.querySelector('ul').style.marginTop="0";
    }

  let lists= document.querySelectorAll('li');


  for(let i=0; i<lists.length; i++){
      lists[i].onmouseout=function(){
        lists[i].style.marginLeft="0";
      }
      lists[i].onmouseenter=function(){
        lists[i].style.marginLeft="20px";
      }
  }

 

 let userInput=document.querySelector('input');

 userInput.onkeypress=function(e){

     if(e.keyCode==13){

        if(userInput.value[0].toUpperCase==userInput.value[0])
        {
            let support=document.createElement('div');
            support.classList.add("support");
            support.innerText=userInput.value;
            
            document.querySelector('.chatting').appendChild(support);

        }
        else {
            let question=document.createElement('div');
            question.classList.add("question");
            question.innerText=userInput.value;
           
            document.querySelector('.chatting').appendChild(question);
        }
     }
 }

