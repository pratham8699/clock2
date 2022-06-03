/*const secondhand = document.querySelector("second");*/
const hourhand = document.querySelector("hour")
const minhand = document.querySelector("minute")


function rotatesecondshand(){
    const date1 = new Date
    const seconds = date1.getSeconds()
    const secondhand = document.querySelector(".second");
    secondhand.style.transform = `rotate(${ (seconds/60)*360+90}deg)`;

}

setInterval(rotatesecondshand,1000);

function rotateminutehand(){
    const date2 = new Date
    const mins = date2.getMinutes()
    const minhand = document.querySelector(".minute")
    minhand.style.transform = `rotate(${(mins/60)*360+90}deg)`;
}
setInterval(rotateminutehand,1000);
function rotatehourhand(){
    const date = new Date
    const hours = date.getHours()
    const hourhand = document.querySelector(".hour")
    hourhand.style.transform = `rotate(${(hours/12)*360+90}deg)`;
}
setInterval(rotatehourhand,1000)