document.addEventListener("DOMContentLoaded",() =>
{
    document.querySelector("#validate").addEventListener("click",(e) =>
    {
        let password = document.getElementById('password');
        let verify = document.getElementById('verify');
        
        if (password.value.length < 8)
        {
            alert("The password must be at least 8 characters long.")
            e.preventDefault();
        }
        else if (password.value != verify.value)
        {
            alert("The passwords do not match, try again.")
            e.preventDefault();
        }
        else
        {
            alert("Password Accepted!");
            e.preventDefault();
        }
	});
});