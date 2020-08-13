//defination the values
var massege1 = document.getElementById("massage1"),
    massege2=document.getElementById("massage2"),
    bookmarkUser =document.getElementById("bookmarkUser"),
    websiteUrl=document.getElementById("websiteUser"),
    items=document.getElementById("items");
    
    var arrayList;
    // test local storage empty or not
    if(localStorage.getItem("productItem")==null ){
        arrayList=[];

    }else{
        arrayList=JSON.parse(localStorage.getItem("productItem"));
        display();
    }
   

// function add product

    function addProduct(){
        //defination object
        var product={
            name:bookmarkUser.value,
            website:websiteUrl.value         
        }
        //test the input if it empty dont display data
        if(bookmarkUser.value==""&&websiteUrl.value==""){
            massege1.style.display="block";
            massege2.style.display="block";   
        }
         else if(bookmarkUser.value==""){
            massege1.style.display="block"; 
            massege2.style.display="none";   
        }

     else if(websiteUrl.value==""){
        massege2.style.display="block";
        massege1.style.display="none";
     }
     else
     {
         arrayList.push(product);
        localStorage.setItem("productItem" ,JSON.stringify(arrayList));
        massege1.style.display="none";
        massege2.style.display="none";  
      clear();
      display();
 
        }         
    }
    //function clear the input
    function clear(){
        bookmarkUser.value="";
        websiteUser.value="";
    }
    // function display the input
  function display(){
      var cartona="";
      for(var i=0;i<arrayList.length;i++){
          cartona+= ` <div class="text-center hidden-Item m-3 ">
          <p class="d-inline">${arrayList[i].name}</p>
          <a class="btn btn-primary m-3 p-3" target="_blank" href=${arrayList[i].website}>visit</a>
          <button  onclick="deletItem(${i})" class="btn btn-danger  m-3 p-3" style="width:100px">delet</button>
      </div>`
      }
      items.innerHTML=cartona;
  }
  // function delet item
  function deletItem(index){
    
        arrayList.splice(index,1);
        localStorage.setItem("productItem",JSON.stringify(arrayList))
        display(); 
  }
    
 
  