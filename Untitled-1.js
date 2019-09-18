var myJSON = { "name": "prasanna", "pw": "1" , "name1": "adharsh", "pw1": "2", "name2": "dhinesh", "pw2": "3", "name3": "karthik", "pw3": "4" }
localStorage.setItem("str",myJSON)
var myString = JSON.stringify(myJSON);
localStorage.setItem("atr",myString)
localStorage.getItem("atr")


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


        us = document.getElementById("textbox").value;
        pw = document.getElementById("textbox2").value;   