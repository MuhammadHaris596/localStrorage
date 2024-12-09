var userValue = document.getElementById('userValue')
var getusername;
var customUser = document.getElementById('customUser')

function Display(){
    userValue.value
    localStorage.setItem("Username" , userValue.value)

    getusername = localStorage.getItem("Username")
    console.log(getusername)

   

    customUser.textContent = getusername
    console.log(customUser.textContent)

    
    window.location = 'page.html'

}