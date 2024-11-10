function carregar() {
  let msg = document.getElementById("msg");
  let imagem = document.getElementById("imagem");
  let agora = new Date();
  let hora = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  
  //Formata para dois dígitos
  hora = String(hora).padStart(2, "0");
  minutos = String(minutos).padStart(2, "0");
  segundos = String(segundos).padStart(2, "0");

  msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;


  if (hora >= 0 && hora < 12) {
    //Bom dia
    imagem.src = "./imagens/manha.png";
  } else if (hora >= "12" && hora < "18") {
    //Boa tarde
    imagem.src = "./imagens/tarde.png";
    document.body.style.background = "#356741bd";
  } else {
    //Boa noite
    imagem.src = "./imagens/noite.png";
    document.body.style.background = "#5e35b1";
  }
}
// Chama a função a cada segundo (1000 ms) para atualizar o relógio
setInterval(carregar, 1000);

// Chama a função imediatamente para mostrar o horário ao carregar a página
carregar();
