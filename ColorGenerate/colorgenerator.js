let colorBox=document.getElementById("colorBox")
let colorCode=document.getElementById("colorCode")
let inp= document.getElementById("inp")
let generator=document.getElementById("generator")
let copy=document.getElementById("copy")

function randomHex () {
    const color_code ="#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6,"0")
    .toUpperCase()


    colorBox.style.backgroundColor = color_code;
    colorCode.textContent = color_code;
    inp.value = color_code;
}
generator.addEventListener("click",randomHex);

copy.addEventListener("click",()=>{
    alert("copied: "+inp.value);
});

