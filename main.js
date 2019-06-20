/**
This tool is subject to change
javascript 1.8.5
html 5
Version 1.3 - June 2019
*/

// Remove all white spaces in a string
function removeAllWhiteSpaces() {
  var productText = document.getElementById("productText").value;
  var platformText = document.getElementById("platformText").value;
  var brandText = document.getElementById("brandText").value;
  var campaignText = document.getElementById("campaignText").value;
  var ioText = document.getElementById("ioText").value;
  var full_str = productText + "_" + platformText + "_" + brandText + "_" + campaignText + "_" + ioText;
  var clean_str = full_str.replace(/\s/g, '');
  var order_clean_str = clean_str + "     -     " + ioText;
  document.getElementById("noSpaceString").innerHTML = order_clean_str;
  document.getElementById("contractName").innerHTML = "<b>Contract Name - Netsuite order id</b>";
  generateLineItems(clean_str);
}


function generateLineItems(clean_str){
	var numLines = document.getElementById("numLineItems").value;
	var ioText = document.getElementById("ioText").value;
    var num = parseInt(numLines);
    if (!Number.isNaN(num) && num < 100) {
      var lineP = "<p><b>Line Item Name - Netsuite line id</b></p>";
      document.getElementById("noSpaceString").insertAdjacentHTML('beforeEnd', lineP);
  	  var p;
  	  for (var i = 1; i < num+1; i ++){
  	    if (i < 10) {
            p = "<p>00" + i + "_" + clean_str + "     -     " + ioText + "-" + "00" + i.toString() + "</p>";
        } else {
          	p = "<p>0" + i + "_" + clean_str + "     -     " + ioText + "-" + "0" + i.toString() + "</p>";
        }
        document.getElementById("noSpaceString").insertAdjacentHTML('beforeEnd', p);
      }
    }
}

// Clears out existing text on page
function reset() {
  document.getElementById("productText").value = "";
  document.getElementById("platformText").value = "";
  document.getElementById("brandText").value = "";
  document.getElementById("campaignText").value = "";
  document.getElementById("ioText").value = "";
  document.getElementById("numLineItems").value = "";
    
  document.getElementById("contractName").innerHTML = "";
  document.getElementById("noSpaceString").innerHTML = "";

}
