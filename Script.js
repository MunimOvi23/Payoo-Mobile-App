// Login Page JS Code:
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    const number = document.getElementById("mobile").value;
    const pin = document.getElementById("pin").value;

    if (!number || !pin) {
        Swal.fire("Error!", "Please fill each box", "error");
        return;
    }

    if(number.length >= 11){
        if(pin === "1234"){
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Successfully Logged In",
                confirmButtonText: "Continue",
                confirmButtonColor: "#0874F2",
                color: "#080808",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "./Home.html";
                }
            });
            
        }else{
            Swal.fire("Error!", "Pin is not correct", "error");

        }
    }else{
        Swal.fire("Error!", "Phone Number is less than 11 Digit", "error");
        
    }
})

