var city = document.getElementById("cities");
var optLink = document.querySelector("#optLink");
function run()
{
var option = city.options[city.selectedIndex].value;

if(option == "Chandigarh")
{
optLink.setAttribute("href","#Chandigarh");
}
else if(option == "Delhi")
{
	optLink.setAttribute("href","#Delhi");
}
else if(option == "Haryana")
{
	optLink.setAttribute("href","#Haryana");
}
else if(option == "Pune")
{
	optLink.setAttribute("href","#Pune");
}
else if(option == "Jalandhar")
{
	optLink.setAttribute("href","#Jalandhar");
}
else if(option == "Phagwara")
{
	optLink.setAttribute("href","#Phagwara");
}}
