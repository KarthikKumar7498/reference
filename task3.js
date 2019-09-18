        function changeSettings() {
            if(loggedIn == true) {
                if(typeof(Storage)!= "undefined") {
                    var backg = document.getElementById("bgc").value;
                    if(backg!="") {
                        localStorage.setItem("backgroundColor", backg);
                        document.body.style.background = localStorage.getItem("backgroundColor");
                    } else {
                        alert("Enter a color.")
                    }
                } else {
                    alert("No support.")
                }
            } else {
                alert("You must be logged in to do that.")
            }
        }

        function loadSettings() {
            if(typeof(Storage)!="undefined") {
                document.body.style.background = localStorage.getItem("backgroundColor");
            } else {
                alert("No support.")
            }
        }

        function signup() {
            if(typeof(Storage)!= "undefined") {
                var username = document.getElementById("textbox").value;
                var password = document.getElementById("textbox2").value;
                if(username!="" && password!="") {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    alert("Please enter a valid username and password.")
                }
            } else {
                alert("No support.")
            }
        }

        function login() {
            if(typeof(Storage)!= "undefined") {
                var username = localStorage.getItem("username");
                var password = localStorage.getItem("password");
                var usernameInput = document.getElementById("textbox3").value;
                var passwordInput = document.getElementById("textbox4").value;
                if(usernameInput!="" && passwordInput!="") {
                    if(usernameInput == username && passwordInput == password) {
                        document.getElementById("result").innerHTML = "Logged in!";
                        loggedIn = true;
                        loadSettings();
                    } else {
                        document.getElementById("result").innerHTML = "Wrong password/username!";
                    }
                } else {
                    alert("Please enter a valid username and password.")
                }
            } else  {
                alert("No support.")
            }
        }
 var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

db.transaction(function (tx) {   
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")'); 
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');  
});


