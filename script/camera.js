const video = document.getElementById('video');

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => console.error("Erro ao acessar a câmera: ", err));
}

startVideo();



function redirectAfterDelay() {
    setTimeout(() => {
        window.location.href = 'loan.html';
    }, 6000); // 6000 milissegundos = 6 segundos
}

window.onload = redirectAfterDelay;