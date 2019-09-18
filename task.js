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
    
    var username = []; var password=[];
    if(window.localStorage["username"] != null)
    username = JSON.parse(window.localStorage["username"]);
    username.push(document.getElementById("textbox").value);
    window.localStorage["username"] = JSON.stringify(username);
    
    if(window.localStorage["password"] != null)
    password = JSON.parse(window.localStorage["password"]);
    password.push(document.getElementById("textbox2").value);
    window.localStorage["password"] = JSON.stringify(password);
    
    alert("Succesfully Registered")
  }
}

function login() 
{
  us = JSON.parse(localStorage.getItem("username"));
  pw= JSON.parse(localStorage.getItem("password"));
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
        data += '<td><button id="edit" onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.complaints.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('addname');
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
    var count=1;
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.complaints[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var complaint = el.value;
      if (count==1) {
        // Edit value
        self.complaints.splice(item, 1, complaint.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
      document.getElementById('edit').style.display = 'block';
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

addname.value = localStorage.getItem('addname');
addname.oninput = () => {
  localStorage.setItem('addname', addname.value)
};


function clos()
{
  window.open("complaints.html","_blank");
  setTimeout('self.opener=null;self.close()',500);
}

