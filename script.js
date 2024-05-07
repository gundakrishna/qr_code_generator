
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = url + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000)
  }
}