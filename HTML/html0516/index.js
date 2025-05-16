let menu = document.querySelectorAll("li");
//querySelectorAll은 리스트임
console.log(menu);
//화면 상태를 확인하기 위한 수단


menu.forEach(element =>{
    console.log(element); //출력이 안됨 => script tag defer 추가
    element.addEventListener("click",()=>{
        //console.log(element.innerText)
        console.log(`${element.innerText}.html`)
        fetch(`${element.innerText}.html`)
        .then(resp =>{resp.text();}) //.then은 동기식으로 순차적으로
        .then(result =>{
            let main=document.querySelector("main");
            main.innerHTML=result;
        })
    });
})

/*
menu.forEach(function(element){

});
*/


/*
let menu = document.getElementsByTagName("li");
//이녀석은 리스트가 아니라 array 형태임
menu.forEach(element => {
    console.log(elemnet);
});*/