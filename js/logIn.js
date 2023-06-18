document.getElementById("submit-btn").addEventListener("click", () => {
    
    const email = document.getElementsByName("mail")[0].value;
    const password = document.getElementsByName("password")[0].value;

    fetch('../data/userList.json') // Temporary log-in request. This will change.
        .then((response) => response.json())
        .then((json) => {
            const isVerificated = json.some((user) => {
                return user.email == email && user.password == password;
            })
            
            if(isVerificated){
                window.location.href="dashboard.html";
            }else{
                document.getElementById("error-text").style.display = "flex"
            }
        })

})