const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


// -- Encriptar texto ---
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase() // Solo trabajar con minúsculas y sin acentos

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

// -- Desencriptar texto --
function btnDesencriptar(){
    const textoDesncriptado = desencriptar(textArea.value)
    mensaje.value = textoDesncriptado 
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


// Función que se ejecuta cuando el usuario empieza a escribir
textArea.addEventListener("input", () => {
    if (textArea.value.trim() !== "") {
        textArea.style.backgroundImage = "none"; // Oculta la imagen de fondo
    }
});

// -- Copiar texto --
// Función para copiar el texto al portapapeles
async function btnCopiar() {
    try {
        const textoParaCopiar = mensaje.value;
        
        // Usar la API del portapapeles
        await navigator.clipboard.writeText(textoParaCopiar);

        // Opcional: Notificar al usuario que el texto ha sido copiado
        alert("Texto copiado al portapapeles!");
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
}





