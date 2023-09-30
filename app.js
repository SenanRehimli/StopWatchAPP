let startButton=document.querySelector(".button_start");
let pauseButton=document.querySelector(".button_pause");
let resetButton=document.querySelector(".button_reset");
let lapButton=document.querySelector(".button_laps");
let numberofLaps=1;
let timerContainer=document.querySelector(".container__timer");

let lapsContainer=document.querySelector(".container__laps");

let [hour,minute,second, millisecond]=[0,0,0,0];
let loop;
startButton.addEventListener("click", () => {
    startButton.classList.add("active-start-button");
    pauseButton.classList.remove("active-pause-button");
    loop=setInterval(() => {
        millisecond+=11;
        if(millisecond>=1000){
            millisecond=0;
            second++;
        }
        if(second==60){
            second=0;
            minute++;
        }
        if(minute==60){
            minute=0;
            hour++;
        }
        timerContainer.innerHTML=`
            <span class="hour">${hour<10 ? "0"+hour: hour}</span>
            <span>:</span>
            <span class="minute">${minute<10 ? "0"+minute : minute}</span>
            <span>:</span>
            <span class="second">${second<10? "0"+second:second}</span>
            <span>:</span>
            <span class="m_second">${millisecond<10? "00"+millisecond: millisecond}</span>
        `
    },11)
});
pauseButton.addEventListener('click', ()=>{
    clearInterval(loop);
    startButton.classList.remove("active-start-button");
    pauseButton.classList.add("active-pause-button");
});
resetButton.addEventListener('click', ()=>{
    clearInterval(loop);
    [hour, minute, second, millisecond] =[0,0,0,0]
    timerContainer.innerHTML=`
        <span class="hour">00</span>
        <span>:</span>
        <span class="minute">00</span>
        <span>:</span>
        <span class="second">00</span>
        <span>:</span>
        <span class="m_second">000</span>
    `
    startButton.classList.remove("active-start-button");
    pauseButton.classList.remove("active-pause-button");
    lapsContainer.innerHTML="";
    numberofLaps=1;
})

lapButton.addEventListener("click", ()=>{

    lapsContainer.innerHTML+=`
        <div class="container__laps_times">
            <span>${numberofLaps})</span>
            <span class="hour">${hour<10 ? "0"+hour: hour}</span>
            <span>:</span>
            <span class="minute">${minute<10 ? "0"+minute : minute}</span>
            <span>:</span>
            <span class="second">${second<10? "0"+second:second}</span>
            <span>:</span>
            <span class="m_second">${millisecond<10? "00"+millisecond: millisecond}</span>
        </div>
    `
    numberofLaps++;
})

