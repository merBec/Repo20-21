var shiftActive = false;
var capsLockActive = false;

function input(value) {
  // console.log(value);
  if (capsLockActive || shiftActive) {
    value = value.toUpperCase();
  }

  var tbInput = document.getElementById("tbInput");
  tbInput.value = tbInput.value + value;

  shift(false);
}

function del() {
  var tbInput = document.getElementById("tbInput");
  tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
}

function submit() {
  var tbInput = document.getElementById("tbInput");
  alert(tbInput.value);
}

function space() {
  var tbInput = document.getElementById("tbInput");
  tbInput.value = tbInput.value + " ";
}

function capsLock() {
  capsLockActive = !capsLockActive;

  var clBtn = document.getElementById("btnCapsLock");
  capsLockActive
    ? clBtn.classList.add("active")
    : clBtn.classList.remove("active");
}

function shift(active) {
  shiftActive = active;

  var shiftBtn = document.getElementById("btnShift");
  shiftActive
    ? shiftBtn.classList.add("active")
    : shiftBtn.classList.remove("active");
}
