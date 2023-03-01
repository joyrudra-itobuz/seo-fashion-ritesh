

  // form validation

  document.getElementById("check").addEventListener("click", () => {
    event.preventDefault();
    a = document.getElementById("email");
    b = document.getElementById("output");
    if (a.value == "") {
      b.innerHTML = `<span style="color:red;">*Please enter the info</span>`;
      disappear();
    }
    else {
      b.innerHTML = `<span style="color:green;">*Your entry is recorded</span>`;
    
      a.value = "";
      disappear();
    }
  });
  function disappear() {
    setTimeout(function () {
      b.innerHTML = "";
    }, 3000);
  }

