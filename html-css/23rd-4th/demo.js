function popup1(){
    alert("Get Started");

}

function popup2(){
    alert("Learn More");
}

function popup3(){
    alert("Contact Us");
}

function popup4(){
    alert(" join us! ");
}

function popup5(){
    alert("Subscribed!!");
}

function popup6(){
    alert("Signed in sucessfully");
}

function popup7(){
    alert("signed up sucessfully");
}

function popup8(){
    alert("thankyou for your review");
}

function formbox(){
    alert("Form opened");
    
}


function formsubmited() {
    if (
        document.getElementById("name").value === "" ||
        document.getElementById("phone").value === "" ||
        document.getElementById("address").value === ""
    ) {
        alert("Please fill the form!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}