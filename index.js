//selecting elements//
let days=document.querySelector(".countdown .days");
let hrs=document.querySelector(".countdown .hours");
let min=document.querySelector(".countdown .mins");
let sec=document.querySelector(".countdown .sec");
// console.log(days,hrs,min,sec);

//specify End of date

let bootcamp = new Date("2023-11-01T00:00:00").getTime();

let timer = setInterval(() => {
    let now = new Date().getTime();
let diff =bootcamp-now;

//calculate(days,hrs,mins,sec)
let caldays = Math.floor(diff/(1000 * 60 * 60 * 24)).toString().padStart(2,0);
let calhrs =Math.floor(diff % (1000 *60 *60 *24)/(1000 * 60 * 60)).toString().padStart(2,0);
let calmin = Math.floor(diff%(1000 * 60 * 60 )/(1000* 60) ).toString().padStart(2,0);
let calsec = Math.floor(diff%(1000*60)/(1000)).toString().padStart(2,0);

//pass the element//
days.innerHTML = caldays;
hrs.innerHTML =calhrs;
min.innerHTML =calmin;
sec.innerHTML =calsec;

//clear intervel//
if(diff<0){
    clearInterval(timer);
}
}, 1000);


console.log(timer);