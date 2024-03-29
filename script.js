let hr =document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime(){
    let date = new Date();
    //get hours,min,sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrot = 30*hh + mm/2;
    let mrot = 6*mm;
    let srot = 6*ss;
    
    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}
setInterval(displaytime,1000);