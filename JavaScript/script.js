function appearReceiveForm(){
    //btn要素の取得
    let btnR = document.getElementById("btnReceive");
    let btnG = document.getElementById("btnGive");

    //クリックした時btnのカーソル反応を消し次の画面へ繊維
    btnR.classList.add("pointer-none");
    btnG.classList.add("pointer-none");

    btnR.classList.add("d-none-slow-scale");
    btnG.classList.add("d-none-slow");

    //受注ログイン画面を出す
    let ReceiveLoginScreen = document.getElementById("Receive-login-screen");
    ReceiveLoginScreen.classList.remove("d-none");
    ReceiveLoginScreen.classList.add("d-apper-slow");
}

function appearGiveForm(){
    //btn要素の取得
    let btnR = document.getElementById("btnReceive");
    let btnG = document.getElementById("btnGive");

    //クリックした時btnのカーソル反応を消し次の画面へ繊維
    btnR.classList.add("pointer-none");
    btnG.classList.add("pointer-none");

    btnR.classList.add("d-none-slow");
    btnG.classList.add("d-none-slow-scale");

    //受注ログイン画面を出す
    let ReceiveLoginScreen = document.getElementById("Give-login-screen");
    ReceiveLoginScreen.classList.remove("d-none");
    ReceiveLoginScreen.classList.add("d-apper-slow");
}