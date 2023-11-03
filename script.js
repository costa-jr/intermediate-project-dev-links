function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // ↑ MÉTODO PRÓPRIO JS QUE SIMPLIFICA O IF/ELSE ACIMA NESSE CASO!

  // PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  // SUBSTITUIR A IMGAGEM
  if (html.classList.contains("light")) {
    // SE TIVER LIGHT-MODE, ADICIONAR A IMG LIGHT
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // SE TIVER SEM LIGHT-MODE, MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/avatar.png")
  }
}
