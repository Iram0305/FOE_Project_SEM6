function validate_signup()
{
    full_name()
    address()
    phone()
    username()
    Password()
}
function full_name()
{
    console.log("Full_Name Working....");
    var name=document.getElementById("name").value;
    console.log(name);
    if(name.length!=="")
    {
        alert("Enter Name....");
    }
    var name_array=name.split("");
    for(i=0;i<name_array.length;i++)
    {
        if((name_array[i]>='A' && name_array[i]<='Z')||(name_array[i]>='a' && name_array[i]<='z')||(name_array[i]==" "))
        {
            continue;
        }
        else
        {
            alert("Please enter correct Name...")
            break;
        }
    }
}
function address()    
{
    console.log("Address Working...");
    var address=document.getElementById("add").value;
    console.log(address);
    var address_array=address.split("");
    var regex=/^[A-Za-z0-9,.-/()]+$/
    for(i=0;i<address_array.length;i++)
    {
        if(address_array.match(regex))
        {
            continue;
        }
        else
        {
            alert("Invalid Address...");
            break;
        }
    }
}
function phone()
{
    console.log("Phone number Working...");
    var phone=document.getElementById("no").value;
    console.log(phone);
    var phone_array=phone.split("");
    for(i=0;i<phone_array.length;i++)
    {
        if(phone.length!=10)
        {
            alert("Invalid Phone Number...");
            break;
        }
        else if((phone_array[i]>='A' && phone_array[i]<='Z')||(phone_array[i]>='a' && phone_array[i]<='z'))
        {
            alert("Invalid Phone Number...");
        }
        else
        {
            continue;
        }
    }
}
function username()
{
    console.log("Username Working");
    var username=document.getElementById("username").value;
    console.log(username);
    var username_array=username.split("");
    var regex=/^[A-Za-z0-9,.-!@#$%^&()/<>]+$/
    for(i=0;i<username_array.length;i++)
    {
        if(username_array.match(regex))
        {
            continue;
        }
        else
        {
            alert("Choose an appropriate Username...");
        }
    }
}
function Password()
{
    console.log("Password Working...");
    var Password=document.getElementById("password").value;
    console.log(Password);
    var Password_array=Password.split("");
    var regex=/^[A-Za-z0-9,.-!@#$%^&()/<>]+$/
    for(i=0;i<Password_array.length;i++)
    {
        if(Password_array.match(regex))
        {
            continue;
        }
        else
        {
            alert("Choose an appropriate Password...");
            break;
        }
    }
}