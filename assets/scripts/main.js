function countdown(a, b, c) {
  let now = new Date()
  // console.log(eventDate);
  // if (eventDate == undefined)
  let eventDate = new Date(2017, 4, 30);
  let currentTime = now.getTime();
  // eventdate = newEventDate;
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;

  // h = (h < 10) ? "0" + h : h;
  // m = (m < 10) ? "0" + m : m;
  // s = (s < 10) ? "0" + s : s;

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

  setTimeout(countdown, 1000);
}
window.onload = countdown;

// var startTime;
//
// function startTime() {
//     startTime = setTimeout(function(){ alert("Hello"); }, 10000);
// }
//
// function stopTime() {
//     clearTimeout(myVar);
// }



function popupDate () {
  alert('Change the date by using the Custom Date prompt.');
}

function popupTitle() {
  let newTitle = prompt("What would you like to name your countdown clock?");
  document.getElementById('clockTitle').innerHTML = newTitle;
}


function validateNumber(number) {
  let msg = '';
  if (number != null) {
    if (isNaN(number)) {
      msg = 'The input is not a valid number';
    } else {
      msg = (number %2 == 0) ? "Even Number" : "Odd Number";
    }
  } else {
    msg = 'You cancelled the action';
  }
  document.getElementById('result').innerText = msg;
}

let customPrompt = new function(msg, callback) {
  this.show = function() {
    let dlg = docuent.getElementById('dialog-container');
    dlg.style.top = '10%';
    dlg.style.opacity = 1;
    let dlgMessage = dlg.querySelector('#dlg-message');

  };
}

let okayButton = document.getElementById("okay-button");
  okayButton.addEventListener('click', function customInput() {
    let inputDay = document.getElementById("dialogInputElDay").value;
    let inputMonth = +document.getElementById("dialogInputElMonth").value - 1;
    let inputYear = document.getElementById("dialogInputElYear").value;
    console.log(inputYear, inputMonth, inputDay);
    customCountDown(inputYear, inputMonth, inputDay);

  })

    function customCountDown(inputYear, inputMonth, inputDay) {

    let now = new Date()
    let customDate = new Date(inputYear, inputMonth, inputDay);
    countdown(customDate);
    console.log(customDate);
    let currentTime = now.getTime();

    let eventTime = customDate.getTime();
    console.log(eventTime);
    let remTime = eventTime - currentTime;
    console.log(remTime);

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;
    console.log(d, h, m, s);
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
    console.log(d, h, m, s);
    clearTimeout(countdown);
    // setTimeout(, 1000);
    setTimeout(customCountDown, 1000);
}


// function userEventDate (year, month, day) {
//   let newEventDate = new Date(year, month, day);
//   return newEventDate;
// }
// =====
// newDay = document.getElementById('dialogInputElDay').value;
// document.getElementById('test-day').innerHtml = newDay;
//
// =====
//
//
// msg1 = "Year?";
// msg2 = "Month?";
// msg3 = "Day?";
// title = "Name your countdown clock.";

/*==CUSTOM DATE POPUP==*/


// function popupDate () {
//   // if (document.addEventListener("click") === true) {
//     let newDay =
//     let newMonthInput =
//     // let newMonth = newMonthInput - 1;
//     let newYear =
//     newEventDate = new Date(newYear, newMonth, newDay);
//     alert(newEventDate);
//     // countDown(newEventDate);
//   // }
//   // false;
// }


/*==DROP DOWN==*/

// function popupDate() {
//   let newDay = prompt("Choose a day of the month.");
//   let newMonth = prompt("Choose a month out of the year. (Use numbers)");
//   let newYear = prompt("Choose a year. (Use four digits)");
//   function newCountdown() {
//     let now = new Date()
//     let eventDate = new Date(newYear, newMonth, newDay);
//     let currentTime = now.getTime();
//     let eventTime = eventDate.getTime();
//
//     let remTime = eventTime - currentTime;
//
//     let s = Math.floor(remTime / 1000);
//     let m = Math.floor(s / 60);
//     let h = Math.floor(m / 60);
//     let d = Math.floor(h / 24);
//     h %= 24;
//     m %= 60;
//     s %= 60;
//
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
//
//     document.getElementById("days").innerText = d;
//     document.getElementById("hours").innerText = h;
//     document.getElementById("minutes").innerText = m;
//     document.getElementById("seconds").innerText = s;
//
//     setTimeout(countdown, 1000);
//   }
//   newCountdown();
// }


//

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
