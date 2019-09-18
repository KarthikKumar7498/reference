var selectedRow = null
document.getElementById("undo").disabled = true;
var pager;
var q=0;
var disp;
var u;
var d;
var databases=[];
var database2=[];
var data;
var obj={};
var rows;
    var database=[
                 { commodityname: 'Apple iPhone XS', description: 'Superfast', price: 90000, category: 'Phone'},
                 { commodityname: 'Lenovo Yoga Tab', description: 'Sleek', price: 12000, category: 'Tablet'},
                 { commodityname: 'HP Probook', description: 'Thin, Lightweight', price: 45000, category: 'Laptop'},
                 { commodityname: 'Asus Zenbook Pro', description: 'Mature Design, Classy Look', price: 65000, category: 'Laptop'},
                 { commodityname: 'Dell XPS 15', description: 'Gamers Choice, Battery long lasting', price: 80000, category: 'Laptop'},
                 { commodityname: 'Samsung Galaxy note 10', description: 'High Definition Camera', price: 70000, category: 'Phone'}, 
                 { commodityname: 'Huawei P30 Pro', description: 'Superspeed Processor', price: 60000, category: 'Phone'},
                 { commodityname: 'Apple IPAD Air', description: 'Light and thin, good build quality', price: 90000, category: 'Tablet'},
                 { commodityname: 'HTC Nexus 9', description: 'Best Android Experience', price: 40000, category: 'Tablet'}, 
                 { commodityname: 'Samsung galaxy Tab S10.5', description: 'AMOLED Touchscreen', price: 45000, category: 'Tablet'},
                 { commodityname: 'Oneplus 7 Pro', description: 'Sheer Power', price: 70000, category: 'Phone'},
                 { commodityname: 'Google Pixel 3XL', description: 'Affordable, Battery Strong', price: 36000, category: 'Phone'},
                 { commodityname: 'LG V4 Thinq', description: 'Handy, Good clarity screen', price: 35000, category: 'Phone'},
                 { commodityname: 'Lenovo Thinkpad Yoga X1', description: 'Buisness Laptop', price: 65000, category: 'Laptop'},
                 { commodityname: 'Microsoft Surface Laptop', description: 'Best keyboard, touchpad', price: 85000, category: 'Laptop'}, 
                 { commodityname: 'Asus Google Nexus 7 Tab', description: 'Premium Gaming Experience', price: 25000, category: 'Tablet'},
                 { commodityname: 'Apple IPAD mini retina', description: 'Compact, Light', price: 70000, category: 'Tablet'},
                 { commodityname: 'Lenovo Ideapad LYNX', description: 'Good Battery', price: 35000, category: 'Tablet'}, 
                 { commodityname: 'Samsung Galaxy A70', description: 'Worth the Price', price: 15000, category: 'Phone'},
                 { commodityname: 'Huawei Mate 20', description: 'High clarity camera', price: 32000, category: 'Phone'},
                 { commodityname: 'Oppo Reno 10X', description: 'Pop up camera', price: 35000, category: 'Phone'},
                 { commodityname: 'Redmi K20 Pro', description: 'Fiery Design, Toughened Glass', price: 35000, category: 'Phone'},
                 { commodityname: 'HP Spectre X360', description: 'Touch Screen', price: 82000, category: 'Laptop'},
                 { commodityname: 'Asus Vivobook S15', description: 'Good hardware', price: 49000, category: 'Laptop'}, 
                 { commodityname: 'Asus Zenfone 5Z', description: 'Big screen', price: 65000, category: 'Phone'},
                 { commodityname: 'Honor 10', description: 'Fast Processor', price: 42000, category: 'Phone'},
                 { commodityname: 'Nokia 8', description: 'Good Selfie Camera', price: 25000, category: 'Phone'},
                 { commodityname: 'Samsung Galaxy C7 Pro', description: 'Good camera, Light weight', price: 68000, category: 'Phone'},
                 { commodityname: 'Sony Xperia Tablet Z', description: 'Gorgeous, Powerful', price: 33000, category: 'Tablet'},
                 { commodityname: 'Acer Aspire 5', description: 'Commendable Battery Life', price: 65000, category: 'Laptop'}  
                ];

                for(var o=0;o<database.length;o++)
                {
                 insertNewRecord(database[o]);
                }
                


function onFormSubmit() 
{
    if (validate()) 
    {
        var formData = readFormData();
        if (selectedRow == null)
            {
                insertNewRecord1(formData);
                
            }   

        else 
            updateRecord(formData);
        resetForm();
    }
    
}

function readFormData() {
    var formData = {};
    formData["commodityname"] = document.getElementById("commodityname").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["category"] = document.getElementById("category").value;
    return formData;
}

function insertNewRecord(data) 
{
    
    var table = document.getElementById("gadgetlist").getElementsByTagName('tbody')[0];
  
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.commodityname; 
     
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
   
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.category;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button id="edit" onClick="onEdit(this)">Edit</button>
                       <button id="read" onClick="onRead(this)">Read</button>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<input type="checkbox" name="chk"/>';
    
    }
    function insertNewRecord1(data) 
    {   
        duplicate(data);
        if(d==0)
        {
        var obj={};
        var table = document.getElementById("gadgetlist").getElementsByTagName('tbody')[0];
        
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.commodityname; 
         
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.description;
       
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.price;
        
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.category;
        
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button id="edit" onClick="onEdit(this)">Edit</button>
                           <button id="read" onClick="onRead(this)">Read</button>`;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = '<input type="checkbox" name="chk"/>';     
        obj["commodityname"]=data.commodityname;
        obj["description"]=data.description;
        obj["price"]=data.price; 
        obj["category"]=data.category;
        database.push(obj);
       
       
        pager = new Pager('gadgetlist',disp);
        pager.init();
        pager.showPageNav('pager', 'pageNavPosition');
       
        
      
        }
      
    }
    
    function duplicate(data)
    {  
        d = 0; 
        for(var w=0;w<database.length;w++)
        {
            if(((database[w].commodityname).toUpperCase())==((data.commodityname).toUpperCase()))
            {
                alert("Commodity already exists");
                d=1;
                
            }

        }
        return d;
       
    }
    

function resetForm() {
    document.getElementById("commodityname").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    selectedRow = null;
}

function onEdit(td) {
   
    selectedRow = td.parentElement.parentElement;
    document.getElementById("commodityname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("category").value = selectedRow.cells[3].innerHTML;

}
var modal = document.getElementById("myModal");
function onRead(td)
{
 
printmod(td);  
openmod();
 
}
function printmod(td)
{
  
    selectedRow = td.parentElement.parentElement;
    document.getElementById("cname").innerHTML = selectedRow.cells[0].innerHTML;
    document.getElementById("descp").innerHTML = selectedRow.cells[1].innerHTML;
    document.getElementById("pric").innerHTML = selectedRow.cells[2].innerHTML;
    document.getElementById("categ").innerHTML = selectedRow.cells[3].innerHTML;
}
function openmod()
{
    modal.style.display = 'block';
}

function closemod()
{
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
function updateRecord(formData) 
{
    
    selectedRow.cells[0].innerHTML = formData.commodityname;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.category;
}



function validate()
{
    val=true;
    if(( document.getElementById("commodityname").value == "")||( document.getElementById("description").value == "")||( document.getElementById("price").value == "")||( document.getElementById("category").value == ""))
    {
    alert("All fields are compulsory"); 
    val=false;
    }
    else if((document.getElementById("price").value)<0)
    {
    alert("Price can't be negative"); 
    val=false;
    }
    else{
        val=true;
    }
    return val;
    
}

function deleteRow()
{
  
      
      var table = document.getElementById("gadgetlist");
      var rowCount = table.rows.length; 
      
      for(var i=1;i<rowCount;i++)
        {
            var row = table.rows[i];
				var chkbox = row.cells[5].childNodes[0];
                if(chkbox != null && chkbox.checked == true) 
                {
                   
                    addd(i);
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                    
                }
                
        } 
        
        document.getElementById("undo").disabled = false;
        
        pager = new Pager('gadgetlist',disp);
        pager.init();
        pager.showPageNav('pager', 'pageNavPosition');
        pager.showPage(1);
        
     
}
function addd(i)
{
     
    var table = document.getElementById("gadgetlist");
    obj["commodityname"]=table.rows[i].cells[0].innerHTML;
    obj["description"]=table.rows[i].cells[1].innerHTML;
    obj["price"]=table.rows[i].cells[2].innerHTML;
    obj["category"]=table.rows[i].cells[3].innerHTML;
    databases.splice(q,0,obj);
    q++;
}

    function selectAll()
    {
        var items=document.getElementsByName('chk');
        for(var i=0; i<items.length; i++)
        {
            if(items[i].type=='checkbox')
                items[i].checked=true;
        }
    }

    function deselectAll()
    {
        var items=document.getElementsByName('chk');
        for(var i=0; i<items.length; i++)
        {
            if(items[i].type=='checkbox')
                items[i].checked=false;
        }
    }		
    
    function search() 
    {
        var input, filter, table, tr, tk, td, i, txtValue, txtValue1;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("gadgetlist");
        tr = table.getElementsByTagName("tr");
        tk = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) 
        {
          td = tr[i].getElementsByTagName("td")[0];
          tk = tr[i].getElementsByTagName("td")[1];
          tl = tr[i].getElementsByTagName("td")[3];
          if (td||tk||tl) 
          {
            txtValue = td.textContent||td.innerText;
            txtValue1 = tk.textContent||tk.innerText;
            txtValue2 = tl.textContent||tl.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1||txtValue1.toUpperCase().indexOf(filter) > -1||txtValue2.toUpperCase().indexOf(filter) > -1) 
            {
              tr[i].style.display = "";
            } else 
            {
              tr[i].style.display = "none";
            }
             
         }   

            
        }
         
      }

      function pagecustom()
      {
        disp=parseInt(document.getElementById("ent").value,10);
        pager = new Pager('gadgetlist',disp);
        pager.init();
        pager.showPageNav('pager', 'pageNavPosition');
        pager.showPage(1);
      }
     
      
    
      
        function Pager(tableName, itemsPerPage) 
        {
          
            
          this.tableName = tableName;
          
          this.itemsPerPage = itemsPerPage;
          
          this.currentPage = 1;
          
          this.pages = 0;
          
          this.inited = false;
          
          this.showRecords = function(from, to) {
          
          var rows = document.getElementById(tableName).rows;
          
         
          
          for (var i = 1; i < rows.length; i++) {
          
          if (i < from || i > to)
          
          rows[i].style.display = 'none';
          
          else
          
          rows[i].style.display = '';
         
          }
          
          }
          
          this.showPage = function(pageNumber) {
          
          if (! this.inited) {
          
          alert("not inited");
          
          return;
          
          }
          
          var oldPageAnchor = document.getElementById('pg'+this.currentPage);
          
          oldPageAnchor.className = 'pg-normal';
          
          this.currentPage = pageNumber;
          
          var newPageAnchor = document.getElementById('pg'+this.currentPage);
          
          newPageAnchor.className = 'pg-selected';
          
          var from = (pageNumber - 1) * itemsPerPage + 1;
          
          var to = from + itemsPerPage - 1;
          
          this.showRecords(from, to);
          
          }
          
          this.prev = function() {
          
          if (this.currentPage > 1)
          
          this.showPage(this.currentPage - 1);
          
          }
          
          this.next = function() {
          
          if (this.currentPage < this.pages) {
          
          this.showPage(this.currentPage + 1);
          
          }
          
          }
          
          this.init = function() {
          
          var rows = document.getElementById(tableName).rows;
          
          var records = (rows.length - 1);
          
          this.pages = Math.ceil(records / itemsPerPage);
          
          this.inited = true;
          
          }
          
          this.showPageNav = function(pagerName, positionId) {
          
          if (! this.inited) {
          
          alert("not inited");
          
          return;
          
          }
          
          var element = document.getElementById(positionId);
          
          var pagerHtml = '<span onclick="' + pagerName + '.prev();" class="pg-normal">Prev</span> ';
          
          for (var page = 1; page<=this.pages; page++)
          
          pagerHtml += '<span id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');">' + page + '</span> ';
          
          pagerHtml += '<span onclick="'+pagerName+'.next();" class="pg-normal">Next</span>';
          
          element.innerHTML = pagerHtml;
          
          }
          console.log(database);
          console.log(databases);
          }

         
          
            
        function undo() 
        { 
            
        
        for(var o=0;o<1;o++)
        {
         insertNewRecord2(databases[o]);
        }
        
        function insertNewRecord2(data) 
        {
        
            var table = document.getElementById("gadgetlist").getElementsByTagName('tbody')[0];
            
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.commodityname; 
             
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.description;
           
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.price;
            
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.category;
            
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<button id="edit" onClick="onEdit(this)">Edit</button>
                               <button id="read" onClick="onRead(this)">Read</button>`;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = '<input type="checkbox" name="chk"/>';     
           
        }

        document.getElementById("undo").disabled = true;

    } 

   