
    document.querySelector("#signup").addEventListener("submit", handleSignup)

    function handleSignup(e) {
        e.preventDefault()
        let myName = document.getElementById("myName").value;
        let myEmail = document.getElementById("myEmail").value;
        let myPassword = document.getElementById("myPassword").value;
        let errorValue = document.getElementById("error-value")

        function validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(myEmail)
        }

        if (!myName || !myEmail || !myPassword) {
            console.log("you should fill all the field")
            errorValue.innerText = "you should fill all the field"
        }
        else if (!validateEmail(myEmail)) {
            errorValue.innerText = "Invalid email format"
        }
        else if (myPassword.length < 5) {
            console.log("password length must be more than 6")
            errorValue.innerText = "password length must be more than 6"
        }
        else {
            errorValue.innerText = "signup successfull"
        }

        let mySignUpData={
            myName:myName,
            myEmail:myEmail,
            myPassword:myPassword
        }
        localStorage.setItem("signup",JSON.stringify(mySignUpData))

}

   document.querySelector("#login").addEventListener("submit", handleLogin)

    function handleLogin(e) {
        e.preventDefault()
       
        let myEmail = document.getElementById("loginEmail").value;
        let myPassword = document.getElementById("loginPassword").value;
        let errorValue = document.getElementById("error-login-value")

      
        const matchData=localStorage.getItem("signup")
      

        if(!matchData){
            errorValue.innerText="user not found"
        }

        const userData=JSON.parse(matchData);
        
        if(userData.myPassword===myPassword){
            errorValue.innerText="password  matched"
        }
        else{
            errorValue.innerText="login successfull"
        }



}
