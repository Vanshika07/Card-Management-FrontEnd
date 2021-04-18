
function out(res1)
{

 document.getElementById("ddd").value = res1;
 
}

function outstat(res3)
{

document.getElementById("outstat").value = res3;
}


var res;
   function inp()
   {
    var i=document.getElementById("ll").value;
       $(document).ready(function() {
        $.get("http://localhost:8080/card-scheme/verify/"+i,function(data){
            res=data;
            out(res);
        })
    })
     
   }
   
   
   function inp2()
   {
   var i=document.getElementById("strt").value;
   var j=document.getElementById("lt").value;
       $(document).ready(function() {
        $.get("http://localhost:8080/card-scheme/stats?start="+i+"&limit="+j,function(data){
            ress=data;
            outstat(ress);


            
        })
    })
   }
   

   
   

