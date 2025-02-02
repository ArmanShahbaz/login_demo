function showForm(type){
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    if(type==='register'){
        document.getElementById('registerForm').classList.remove('d-none');    }
    else if(type === 'login'){
        document.getElementById('loginForm').classList.remove('d-none');
    }    
}


function register()
{
    const fullname = document.getElementById('regFullname').value ;
    const email = document.getElementById('regEmail').value ;
    const password = document.getElementById('regPassword').value 

    // validation
    if(!fullname)
    {
        alert("Please Enter your Fullname");
        return;
    }
    if(!email)
    {
        alert("Please Enter your Email");
        return;
    }
    if(!password)
    {
        alert("Please Enter your Password");
        return;
    }

    const user ={fullname, email, password}; 
    localStorage.setItem(email,JSON.stringify(user));
    alert("Registration successful!");

    document.getElementById('regFullname').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value ='';
    showForm('login');
}

function login()
{
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if(!email)
    {
        alert("Please Enter your Email")
        return;
    }
    if(!password)
    {
        alert("Please Enter your Password")
        return;
    }

    const user = localStorage.getItem(email);
    console.log(user);
    if (!user)
    {
        alert("User does not exist for the given Email")
        return;
    }

    const parseUser = JSON.parse(user);
    if (password != parseUser.password)
    {
        alert("Wrong Password!")
        return;
    }
    alert("Welcome  " + parseUser.fullname + " !");

    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value ='';
}