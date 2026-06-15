console.log("Welcome to the Community Portal");

window.onload=function(){

    alert("Page Loaded Successfully");
}

function showFee(value){

    document.getElementById("fee").innerHTML=
    "Event Fee: ₹"+value;

    localStorage.setItem("selectedEvent",value);
}

function validatePhone(input){

    if(input.value.length!=10){

        alert("Phone number must contain 10 digits");
    }
}

document.getElementById("eventForm")
.addEventListener("submit",function(event){

event.preventDefault();

document.getElementById("confirmation").innerHTML=
"Registration Successful";

let modal=
new bootstrap.Modal(
document.getElementById("successModal")
);

modal.show();

});

function enlargeImage(img){

    img.style.width="400px";
}

function countCharacters(text){

    let count=text.value.length;

    document.getElementById("charCount")
    .innerHTML="Characters: "+count;
}

function videoReady(){

    document.getElementById("videoMessage")
    .innerHTML="Video Ready To Play";
}

function warningMessage(){

    return "Form not submitted";
}

function clearStorage(){

    localStorage.clear();

    sessionStorage.clear();

    alert("Storage Cleared");
}

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

        function(position){

            document.getElementById("location")
            .innerHTML=

            "Latitude: "+position.coords.latitude+
            "<br>Longitude: "+position.coords.longitude;

        },

        function(){

            alert("Location Access Denied");
        },

        {
            enableHighAccuracy:true,
            timeout:5000
        }

        );
    }
}