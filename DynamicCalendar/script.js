console.log("This is javascript in console");

//start of logic for JS
const currentDate=document.querySelector(".current-date");
const daysTag=document.querySelector(".days");
prevNextIcon=document.querySelectorAll(".icons span");
let date=new Date();
currYear=date.getFullYear();
currMonth=date.getMonth();

const months=["January","February","March","April","May","June","July","August","September",
"October","November","December"];

console.log(date,currYear,currMonth);

const renderCalendar=()=>{

    let lastDateOfMonth =new Date(currYear,currMonth+1,0).getDate(); //fetching the last date of the month
    let lastDayOfMonth=new Date(currYear,currMonth,lastDateOfMonth).getDay();//getting last Day of month
    let firstDayOfMonth= new Date(currYear,currMonth,1).getDay();//get first date of month
    let lastDateOfLastMonth =new Date(currYear,currMonth,0).getDate();//get last date of last month
    //console.log(firstDateOfMonth);
    //console.log(lastDateOfMonth);
    let liTag="";

    for(let i=firstDayOfMonth;i>0;i--){
        liTag +=`<li class="inactive">${lastDateOfLastMonth-i+1}</li>`;
    }

    for(let i=1;i<=lastDateOfMonth;i++){
        //console.log(i);
        let isToday= i==date.getDate() && currMonth==new Date().getMonth() && 
        currYear==new Date().getFullYear()
        ?"active":"";
        liTag +=`<li class="${isToday}">${i}</li>`;
    }

    for(let i=lastDayOfMonth;i<6;i++){
        //console.log(i);
        liTag +=`<li class="inactive">${i-lastDayOfMonth +1 }</li>`;
    }


    currentDate.innerText=`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML=liTag;

}
renderCalendar();

prevNextIcon.forEach(icon=>{
    icon.addEventListener("click",()=>{
        //console.log(icon);
        currMonth= icon.id == "left"?currMonth-1:currMonth+1;

        if(currMonth<0 || currMonth>11){
            date=new Date(currYear,currMonth);
            currYear=date.getFullYear(); // -> updatin current year with the new date year
            currMonth=date.getMonth(); // -> updating the current month with the new month
        }
        else{
            //passing a new date as date value!
            date=new Date();
        }
        console.log(currMonth);
        renderCalendar();
    });
});