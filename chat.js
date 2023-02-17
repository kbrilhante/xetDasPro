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

const nomeUsuario = localStorage.getItem("nomeUsuario");
const nomeSala = localStorage.getItem("nomeSala");

inicializar();

function inicializar() {
    document.getElementById("nomeSala").textContent = '#' + nomeSala;

    getData();
}

function getData() {}

function send() {
    const txtMsg = document.getElementById("msg");
    const msg = txtMsg.value;

    if (msg.trim()) {
        firebase.database().ref('/' + nomeSala).push({
            nome: nomeUsuario,
            mensagem: msg,
            likes: 0
        });
        txtMsg.value = "";
    }
}