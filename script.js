const textUserIn = document.querySelector("#input-text");
const textCryptOut = document.querySelector("#output-text");

const cryptMap = [
    ["a", "ai"],      //0
    ["e", "entre"],   //1
    ["i", "imas"],    //2
    ["o", "ober"],    //3
    ["u", "ufat"],    //4
    ];

    function  btnEncryptText() {
        const  textEncrypted = textUserIn.value;
        console.log(textEncrypted);
    }

