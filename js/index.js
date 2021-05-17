function enviaMensagem() {
    var valorInputUm = document.getElementById("inputUm").value


    alert("Mensagem de " + valorInputUm + " enviada!")
}

function hide() {
    //element = document.getElementById("menu");
    const element = document.querySelector('#menu')
    
    if(getComputedStyle(element).display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}