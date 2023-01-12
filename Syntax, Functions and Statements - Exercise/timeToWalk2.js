function timeToWalk(steps, meters, speed){
    let seconds = 0;
    let distance = (steps * meters) / 1000;
    let extraTime = (Math.floor(distance / 0.5)) * 60;
    let time = (distance / speed) ;
    seconds = ((time * 3600) + extraTime).toFixed(0);
    
    let hoursLeft = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - hoursLeft * 3600) / 60);
    let secondsLeft = seconds - hoursLeft * 3600 - min * 60;
    secondsLeft = Math.round(secondsLeft * 100) / 100;
    let answer = hoursLeft< 10 ? "0" + hoursLeft : hoursLeft;
    answer += ":" + (min < 10 ? "0" + min : min);
    answer += ":" + (secondsLeft< 10 ? "0" + secondsLeft : secondsLeft);
    console.log(answer); 
     
}
timeToWalk(4000, 0.60, 5);

timeToWalk(2564, 0.70, 5.5);