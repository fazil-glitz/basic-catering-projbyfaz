var carContainer=document.getElementById("collections")
var search=document.getElementById("search")
var carlist=carContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<carlist.length;count=count+1)
    {
        var carname=carlist[count].querySelector("p").textContent
        if(carname.toUpperCase().indexOf(enteredValue)<0)
        {
            carlist[count].style.display="none"
        }
        else
        {
            carlist[count].style.display="block"
        }
    }
})