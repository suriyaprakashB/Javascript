
function calculate()
{
    var number1 = parseFloat(prompt("Enter number 1:"));
    if (isNaN(number1)) 
    {
        alert("Please enter number only");
        return;
    }
    var number2 = parseFloat(prompt("Enter number 2:"));
    if (isNaN(number2)) 
    {
        alert("Please enter number only");
        return;
    }
    var number3 = parseFloat(prompt("Enter number 3:"));
    if (isNaN(number3)) 
    {
        alert("Please enter number only");
        return;
    }
    else
    {   
        var average = (number1 + number2 + number3) / 3;
        /* The output is display in alert box */
        alert("The average is:"+average);
    } 
        /* The output is display in console */
        console.log("The average is:"+average)

        /* The output is display in Html page */
        document.getElementById("result").innerHTML = "The average is: " + average;
    }