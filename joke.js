const btn=document.querySelector(".btn");
const para=document.querySelector("p");
const api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke= ()=>{
    para.classList.remove("fade")
    fetch(api)
    .then(response=>response.json())
    .then(data=>{
        para.innerHTML=`${data.joke}`
        para.classList.add("fade")
    })
    .catch(error=>{
        console.error(error);
    })
}
btn.addEventListener("click",getJoke)
getJoke()

