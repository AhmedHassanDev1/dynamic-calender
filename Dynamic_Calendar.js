let days_chars = document.querySelectorAll(".days_chars div")
let box_days = document.querySelector(".box_days")
let prev = document.querySelector(".year_weak .prev")
let content=document.querySelector(".year_weak .content")
let next=document.querySelector(".year_weak .next ")
let arr_month = ["January ", "February","march",  "April ","May", "June", "July ", "August", "September ",
    "October", "November", "December "]
let date = new Date()
let Month = date.getMonth()
setDays()
setyears()
getDay()
prev.onclick = function () {
  Month==0?Month=arr_month.length-1:Month--
  setyears(date.getFullYear(),Month)
  setDays()
  getDay()
}
next.onclick=function() {
    Month==arr_month.length-1?Month=0:Month++
    setyears(date.getFullYear(),Month)
  setDays()
  getDay()
}
function setyears(years=date.getFullYear(),month=date.getMonth()) {
  content.textContent=`${arr_month[month]} ${years}`  
}
function setDays() {
    box_days.innerHTML=""
 let month=new Date(), start_month, end_month;
  month.setMonth(Month)
  month.setDate(1)
  start_month = month.getDay()
  month.setMonth(Month+1)
  month.setDate(0)
  end_month = month.getDate()
  for (let i = 1; i < start_month+end_month+1; i++) {
    let creat=document.createElement("div")   
    if (i > start_month) {
     creat.textContent=i-start_month
  }
    box_days.appendChild(creat)    
  }
}
  function getDay() {
    let day = new Date()
   for ( let i = 0; i < box_days.children.length; i++) {
       if (day.getMonth() == Month && box_days.children[i].textContent == day.getDate()) {
       box_days.children[i].classList.add("day")
          } 
      if (day.getMonth() == Month) {
        days_chars[day.getDay()].classList.add("active")
      }else for (let i = 0; i < days_chars.length; i++) {
        days_chars[i].classList.remove("active")        
       }
   }
  }

