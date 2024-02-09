function validate()
{
    var name = document.getElementById("name").value;
    console.log(name);

    var arr = name.split("")

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>='A'&&arr[i]<='Z'||arr[i]>='a'&&arr[i]<='z'||arr[i]==" ")
        {
            
            break;
        }
        else
        {
            alert("INVALID NAME TYPE");
            break;
        }
    }
}

var pass = document.getElementById("pass").value;
    console.log(pass);

    if(pass.length<8)
    {
        alert("SHOULD BE ATLEAST 8");
        return;
    }

    var arr = pass.split("")

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>='A'&&arr[i]<='z'||arr[i]>='0'&&arr[i]<='9'||arr[i]=="@")
        {
            
            break;
        }
        else
        {
            alert("INVALID PASSWORD");
            break;
        }
    }
    if(validate()==true)
    {
    alert("REGISTRATION SUCCESFUL");
    }
