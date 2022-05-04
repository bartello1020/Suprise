var objPeople = [
  {
    username: "Bartek",
    password: "admin21",
  },
  {
    username: "Kalina",
    password: "Misiaczek",
  },
];







function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
	  location.href="main.html";
      console.log(username + "zalogowal sie");
      return;
    }
    
  }
  location.href="index.html";
  alert("Niepoprawny login lub hasło");
    console.log("blad");
	
}
