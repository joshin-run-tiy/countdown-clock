let okayButton = document.getElementById('okay-button');
  okayButton.addEventListener('click', function () {
    customCountdown();
  });

  function customCountdown() {
    let inputDay = document.getElementById('dialogInputElDay').value;
    let inputMonth = +document.getElementById('dialogInputElMonth').value - 1;
    let inputYear = document.getElementById('dialogInputElYear').value;
    let now = new Date()
    let customDate = new Date(inputYear, inputMonth, inputDay);

    let currentTime = now.getTime();
    let eventTime = customDate.getTime();
    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

    setTimeout(customCountdown, 1000);
  }

  function validateNumber(number) {
    let msg = '';
    if (number != null) {
      if (isNaN(number)) {
        msg = 'The input is not a valid number';
      } else {
        msg = (number %2 == 0) ? 'Even Number' : 'Odd Number';
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

  function popupDate () {
    alert('Change the date by using the Custom Date prompt.');
  }

  function popupTitle() {
    let newTitle = prompt('What would you like to name your countdown clock?');
    document.getElementById('clockTitle').innerHTML = newTitle;
  }

  function myFunction() {
      document.getElementById('myDropdown').classList.toggle('show');
  }

  function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      div = document.getElementById('myDropdown');
      a = div.getElementsByTagName('a');
      for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        }
    }
}
