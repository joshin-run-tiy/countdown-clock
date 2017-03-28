function countdown() {
  let now = new Date()
  let eventDate = new Date(2017, 11, 25);
  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

  setTimeout(countdown, 1000);
}
countdown();

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
    dlg.style.top = '30%';
    dlg.style.opacity = 1;
    let dlgMessage = dlg.querySelector('#dlg-message');

  };
}

function userEventDate (year, month, day) {
  let newEventDate = new Date(year, month, day);
  return newEventDate;
}

msg1 = "Year?";
msg2 = "Month?";
msg3 = "Day?";
title = "Name your countdown clock.";

// <!-- I stopped listening around 5 min for JS 2/2 -->

// function changeBackground() {
//   body {
//     background-image: url('...');
//   }
// }
