
function countdown(){
    let countdate = new Date("apr 2, 2022 6:00:00").getTime();
    const nowDate = new Date().getTime(); 
    const farqi = countdate - nowDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    

    const day_append = Math.floor(farqi / day);
    console.log(day_append);
    const hour_append = Math.floor((farqi % day) / hour);
    const minute_append = Math.floor((farqi % hour) / minute);
    const second_append = Math.floor((farqi % minute) / second);

    document.querySelector('#day').innerText = day_append;
    document.querySelector('#hour').innerText = hour_append;
    document.querySelector('#minute').innerText = minute_append;
    document.querySelector('#second').innerText = second_append;
}

setInterval(countdown,1000);
