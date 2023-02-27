const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

document.getElementById("copiar-mensagem").style.display = "none";

function criptografar(textoCriptografado) {
    
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    textoCriptografado = textoCriptografado.toLowerCase();
    textoCriptografado = textoCriptografado.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoCriptografado.includes(matrizCodigo[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoCriptografado;

}
function btnCriptografar() {

    let texto = textArea.value;

    if(texto == "") {
       
        alert("Digite uma mensagem.");

    } else {
   
        const stringCriptografada = criptografar(textArea.value);
        mensagem.value = stringCriptografada;
        textArea.value = "";

        document.getElementById("nenhuma-mensagem").style.display = "none";
        document.getElementById("copiar-mensagem").style.display = "block";
    }
}

function descriptografar(textoDescriptografado) {
    
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];
    textoDescriptografado = textoDescriptografado.toLowerCase();
    textoDescriptografado = textoDescriptografado.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');


    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoDescriptografado.includes(matrizCodigo[i][1])) {
            textoDescriptografado = textoDescriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDescriptografado;
}

function btnDescriptografar() {

    let texto = textArea.value;

    if(texto == "") {
       
        alert("Digite ou cole a mensagem a ser descriptografada.");
        
    } else {

        const stringDescriptografada = descriptografar(textArea.value);
        mensagem.value = stringDescriptografada;
        textArea.value = "";
}
    
}

function btnCopiar() {
    
    let semConteudo = mensagem.value;
    
    if(semConteudo == "") {
    
        alert("Não há mensagem.");
    
    } else {
       
        let copyText = document.getElementById("textOut");
        copyText.select();
        document.execCommand("copy");
        navigator.clipboard.writeText(copyText.value);
    
        alert("Copiado.");
    }
}

