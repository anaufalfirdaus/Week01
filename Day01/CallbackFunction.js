function SayHai() {
    console.log('Halo');
}
function Nama() {
    console.log('Saya Naufal');
}

function all(callBackFunction) {
    callBackFunction(),
    Nama()
}
all(SayHai)