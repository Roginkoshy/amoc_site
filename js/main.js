//myFunction()

function myFunction(c) {
    if(c==1)
    {
    var x = document.getElementById("myDIV1");
    }
    if(c==2)
    {
    	var x = document.getElementById("myDIV2");
    }
    if(c==3)
    {
    	var x = document.getElementById("myDIV3");
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


