var a = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0

btn.addEventListener("click", function()
{
    if (flag == 0)
    {
        bulb.style.backgroundColor ="yellow";
        console.log("Bulb ON");
        flag = 1;
    }
    else{
        bulb.style.backgroundColor ="transparent";
        console.log("Bulb OFF");
        flag = 0;
    }
});