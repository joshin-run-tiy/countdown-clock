const defaultDate = new Date(2017, 12, 25);

let okayButton = document.getElementById("okay-button");
okayButton.addEventListener('click', function() {
  let inputDay = document.getElementById("dialogInputElDay").value;
  let inputMonth = +document.getElementById("dialogInputElMonth").value - 1;
  let inputYear = document.getElementById("dialogInputElYear").value;
  let eventDate = new Date(inputYear, inputMonth, inputDay);
  console.log('eventDate', eventDate);
  console.log('new Date()', new Date());
  eventDate = typeof eventDate.getMonth === 'function' ? eventDate : defaultDate;
  let now = new Date();
  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;
  {
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
  }
  setTimeout(countdown, 1000, eventDate);
});
window.onload = countdown;

  function popupDate () {
    alert('Change the date by using the Custom Date prompt.');
  }
  function popupTitle() {
    let newTitle = prompt("What would you like to name your countdown clock?");
    document.getElementById('clockTitle').innerHTML = newTitle;
  }
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
