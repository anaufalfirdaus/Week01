const SayHai = () =>{
    console.log('Hai'); 
}
const Name = () =>{
    console.log('Saya Naufal'); 
}

const all = (callBack) => {
    callBack()
    Name()
}
all(SayHai)