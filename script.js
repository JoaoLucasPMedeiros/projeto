function toggLeMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* O COD PODE SER SIMPLIFICADO ATRAVES DO CLASSLIST.TOGGLE QUE REMOVE CASO NÃO TENHA E INSERE O ARGUMENTO */
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Ellipse.png")
  } else {
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/serio.png")
  }
}
