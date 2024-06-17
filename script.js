
const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrTextInput = document.getElementById("qrTextInput");

const generateQR=()=>{
    if(qrTextInput.value>0){

        qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTextInput.value;
        imgBox.classList.add("show-img")
    }
    else{
        qrTextInput.classList.add('error');
        setTimeout(()=>{
            qrTextInput.classList.remove('error');

        },1000)
    }
}

