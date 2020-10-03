
document.getElementById("submit").addEventListener("click", submit)


function submit(){
    let option = document.getElementById("options").value;
    if(option == "Convert to ASCII"){
        let message = document.getElementById("message").value;
            var new_string_value = [];
            for(i=0; i < message.length; i++){
                value = message[i];
                let string_value = value.charCodeAt(0);
                new_string_value.push(String(string_value));
            }
            for(i=0; i<message.length; i++){
                document.getElementById("result").innerHTML = "value of " + message + " is " + new_string_value;
            }
    }
    else{
        let message = Number(document.getElementById("message").value);
        if(isNaN(message) == false){
            ascii_value = String.fromCharCode(Number(message))
            document.getElementById("result").innerHTML = "The Value of "+ message + " : " + ascii_value;
        }
        else{
            alert("Idiot, You don't know what ASCII is?")
        }
    }
}