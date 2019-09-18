var pw = new Array()
var us= new Array()
var flag;
var loggedIn=false;


function changeSettings() 
{
    if(loggedIn == true) 
    {
        var backg = document.getElementById("bgc").value;
        if(backg!="") 
        {
            localStorage.setItem("backgroundColor", backg);
            document.body.style.background = localStorage.getItem("backgroundColor");
        } 
        else
        {
            alert("Enter a color.")
        }  
    } 
    else if(loggedIn == false)
    {
        alert("You must be logged in to do that.")
    }
}

function loadSettings() 
{
    document.body.style.background = localStorage.getItem("backgroundColor");
}

function signup() 
{
    if(typeof(Storage)!= "undefined") 
    {
        
        var myArray = []; var urarray=[];
        if(window.localStorage["savedArray"] != null)
        myArray = JSON.parse(window.localStorage["savedArray"]);
        myArray.push(document.getElementById("textbox").value);
        window.localStorage["savedArray"] = JSON.stringify(myArray);
        
        if(window.localStorage["saveArray"] != null)
        urarray = JSON.parse(window.localStorage["saveArray"]);
        urarray.push(document.getElementById("textbox2").value);
        window.localStorage["saveArray"] = JSON.stringify(urarray);
        
        alert("Succesfully Registered")
    }
}

function login() 
{
    us = JSON.parse(localStorage.getItem("savedArray"));
    pw= JSON.parse(localStorage.getItem("saveArray"));
    var usernameInput = document.getElementById("textbox3").value;
    var passwordInput = document.getElementById("textbox4").value;
    if(usernameInput!="" && passwordInput!="")
    {   for(var v=0; v < us.length; v++)
        {
            if(usernameInput == us[v] && passwordInput == pw[v]) 
            {
                flag= true;
                break;
            } 
            
            else
            {
                flag = false; 
            } 
        }
        
    }
    if(flag == true)
    {
        alert("Logged in!");
        loggedIn = true;
        loadSettings();
    }
    else
    {
        alert("Wrong password/username!");
        loggedIn = true;
    }
} 

function logout()
{
    if(loggedIn == true)
    { 
        hideLogout();
    }
    else
    alert("You should Log in first")
}


function hideLogout()
{
    document.getElementById('logout').style.visibility = 'hidden';
}

  var app = new function() {
    this.el = document.getElementById('complaints');
    this.complaints = [];
    this.naming = [];
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'complaint';
      if (data) {
        if (data > 1) {
          name = 'complaints';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.FetchAll = function() {
      var data = '';
      if (this.complaints.length > 0) {
        for (i = 0; i < this.complaints.length; i++) {
          data += '<tr>';
          data += '<td>' + this.naming[i] + '</td>';
          data += '<td>' + this.complaints[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')">Editable</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
      this.Count(this.complaints.length);
      return this.el.innerHTML = data;
    };
    this.Add = function () {
      el = document.getElementById('add-name');
      // Get the value
      var complaints = el.value;
      if (complaints) {
        // Add the new value
        this.complaints.push(complaints.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
    this.Edit = function (item) {
      var el = document.getElementById('edit-name');
      // Display value in the field
      el.value = this.complaints[item];
      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        // Get value
        var complaint = el.value;
        if (complaint) {
          // Edit value
          self.complaints.splice(item, 1, complaint.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
    this.Delete = function (item) {
      // Delete the current row
      this.complaints.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
    
  }
  app.FetchAll();
  function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }
  area.value = localStorage.getItem('area');
  area.oninput = () => {
    localStorage.setItem('area', area.value)
  };

  var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
           
 /*   
function hideLogin()
{
    document.getElementById('login').style.visibility = 'hidden';
}
   */ 
