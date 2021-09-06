// function to update rate on changing the html input element
function updateRate() {
    var rateVal = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = `${rateVal}%`;
}

// function to compute interest
// function gets called when button is clicked
function compute()
{
    var principal = document.getElementById("principal").value;          // principal value
    var rate = document.getElementById("rate").value;                    // rate value
    var years = document.getElementById("years").value;                  // number of years

    // Check: To see if entered principal is not less than or equal to 0
    if (principal <= 0) {
        alert('Enter a positive number');       // generates alert
    } else {
        var amount = principal * years * rate / 100;          // SI interest
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    
}
        
