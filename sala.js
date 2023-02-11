const firebaseConfig = {
    apiKey: "AIzaSyC-QnSo-T5PNbrXZVAFirMWn-ZV601-AU4",
    authDomain: "xetdaspro.firebaseapp.com",
    databaseURL: "https://xetdaspro-default-rtdb.firebaseio.com",
    projectId: "xetdaspro",
    storageBucket: "xetdaspro.appspot.com",
    messagingSenderId: "923147826650",
    appId: "1:923147826650:web:1caa4e26da07875c1d7ce3"
};

firebase.initializeApp(firebaseConfig);

inicializar();

function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    // console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

    getData();
}

function addSala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
            purpose: "sala criada"
        });

        carregaSala(nomeSala);
    }
}

function getData() {}

function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
//     location = "chat.html";
}
