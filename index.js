let email = document.getElementById("email");
let password = document.getElementById("pass");
let login = document.getElementById("log");

let checklocal = [];
checklocal.push(JSON.parse(localStorage.data));

function check() {
  for (i = 0; i < checklocal.length; i++) {
    for (x = 0; x < checklocal[i].length; x++) {
      console.log(checklocal[i][x]);

      if (
        email.value == checklocal[i][x].email &&
        password.value == checklocal[i][x].fristpassword
      ) {
        claer();
      } else if (email.value == "" && password.value == "") {
        email.style.boxShadow = "none";
        password.style.boxShadow = "none";
      } else if (
        email.value != checklocal[i][x].email &&
        password.value == checklocal[i][x].fristpassword
      ) {
        email.style.boxShadow = "inset 0px 0px 15px red";
        password.style.boxShadow = "none";
      } else if (
        email.value == checklocal[i][x].email &&
        password.value != checklocal[i][x].fristpassword
      ) {
        password.style.boxShadow = "inset 0px 0px 15px red";
        email.style.boxShadow = "none";
      } else if (
        email.value != checklocal[i][x].email &&
        password.value != checklocal[i][x].fristpassword
      ) {
        password.style.boxShadow = "inset 0px 0px 15px red";
      } else {
        email.style.boxShadow = "none";
        password.style.boxShadow = "none";
      }
    }
  }
}

function claer() {
  email.value = "";
  password.value = "";
  password.style.boxShadow = "none";
  email.style.boxShadow = "none";
}

function box() {
  if (password.value == "") {
    password.style.boxShadow = "none";
  }
}

function boxemail() {
  if (email.value == "") {
    email.style.boxShadow = "none";
  }
}

function gotopage() {
  for (y = 0; y < checklocal.length; y++) {
    for (z = 0; z < checklocal[y].length; z++) {
      if (
        email.value == checklocal[y][z].email &&
        password.value == checklocal[y][z].fristpassword
      ) {
        login.innerHTML = `
      
      <a id="gotopage" href="https://mohammedel4nawy.github.io/abibass/">log in</a>
      
      `;
      } else {
        login.innerHTML = `
      log in
        
      `;
      }
    }
  }
}
