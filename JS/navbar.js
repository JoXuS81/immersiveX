/* 

Table of Contents
    Click on Buttons
    Add Toggle for Chocolate Menu

*/


let icon = document.querySelector(".menuChocolate");
icon.addEventListener("click", (e) =>
{
    let target = e.target;
    target.classList.toggle("active");
});