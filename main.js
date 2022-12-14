function createGame(player1, group, hour, player2) {
  return `
    <li>
      <div class="player-wrapper">
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" 
      title="${player1}" onclick="batata('${player1}', '${group}', '${hour}', '${player2}')"/>

      <p id="${player1}-${group}-${hour}-${player2}" style="display:none;">${player1}</p>
      </div>

      <strong class=""><span class="grupos">${group}</span> <span class="hour">${hour}</span></strong>

      <div class="player-wrapper">
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" title="${player2}" onclick="batata('${player2}', '${group}', '${hour}', '${player1}')"/>

      <p id="${player2}-${group}-${hour}-${player1}" style="display:none;">${player2}</p>
      </div>

    </li>
  `
}

function batata(player1, group, hour, player2) {
  const element=document.getElementById(player1+"-"+group+"-"+hour+"-"+player2)
  const display=element.style.display
  console.log(display)
  element.style.display = display === "none" ? "block" : "none"
  //setTimeout(()=>{element.style.display="none"}, 3000)
}

let delay = -0.2;

function createCard(date, day, games) {
  delay = delay + 0.2;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assets/fifa-world-cup-2022.svg" alt="Logo da Copa do Mundo FIFA 2022" />
  </header>
    <main id="cards">
      ${createCard("20/11", "domingo", createGame("Abertura", "Abertura", "12:00", "Abertura") + createGame("Catar", "Grupo A", "13:00", "Equador"))}

      ${createCard("21/11", "segunda", createGame("Inglaterra", "Grupo B", "10:00", "Irã") + createGame("Senegal", "Grupo A", "13:00", "Holanda") + createGame("Estados Unidos", "Grupo B", "16:00", "País de Gales"))}

      ${createCard("22/11", "terça", createGame("Argentina", "Grupo C", "07:00", "Arábia Saudita") + createGame("Dinamarca", "Grupo D", "10:00", "Tunísia") + createGame("México", "Grupo C", "13:00", "Polônia") + createGame("França", "Grupo D", "16:00", "Austrália"))}

      ${createCard("23/11", "quarta", createGame("Marrocos", "Grupo F", "07:00", "Croácia") + createGame("Alemanha", "Grupo E", "10:00", "Japão") + createGame("Espanha", "Grupo E", "13:00", "Costa Rica") + createGame("Bélgica", "Grupo F", "16:00", "Canadá"))}

      ${createCard("24/11", "quinta", createGame("Suíça", "Grupo G", "07:00", "Camarões") + createGame("Uruguai", "Grupo H", "10:00", "Coreia do Sul") + createGame("Portugal", "Grupo H", "13:00", "Gana") + createGame("Brasil", "Grupo G", "16:00", "Sérvia"))}

      ${createCard("25/11", "sexta", createGame("País de Gales", "Grupo B", "07:00", "Irã") + createGame("Catar", "Grupo A", "10:00", "Senegal") + createGame("Holanda", "Grupo A", "13:00", "Equador") + createGame("Inglaterra", "Grupo B", "16:00", "Estados Unidos"))}

      ${createCard("26/11", "sábado", createGame("Tunísia", "Grupo D", "07:00", "Austrália") + createGame("Polônia", "Grupo C", "10:00", "Arábia Saudita") + createGame("França", "Grupo D", "13:00", "Dinamarca") + createGame("Argentina", "Grupo C", "16:00", "México"))}

      ${createCard("27/11", "domingo", createGame("Japão", "Grupo E", "07:00", "Costa Rica") + createGame("Bélgica", "Grupo F", "10:00", "Marrocos") + createGame("Croácia", "Grupo F", "13:00", "Canadá") + createGame("Espanha", "Grupo E", "16:00", "Alemanha"))}

      ${createCard("28/11", "segunda", createGame("Camarões", "Grupo G", "07:00", "Sérvia") + createGame("Coreia do Sul", "Grupo H", "10:00", "Gana") + createGame("Brasil", "Grupo G", "13:00", "Suíça") + createGame("Portugal", "Grupo H", "16:00", "Uruguai"))}

      ${createCard("29/11", "terça", createGame("Equador", "Grupo A", "12:00", "Senegal") + createGame("Holanda", "Grupo A", "12:00", "Catar") + createGame("Irã", "Grupo B", "16:00", "Estados Unidos") + createGame("País de Gales", "Grupo B", "16:00", "Inglaterra"))}

      ${createCard("30/11", "quarta", createGame("Tunísia", "Grupo D", "12:00", "França") + createGame("Austrália", "Grupo D", "12:00", "Dinamarca") + createGame("Polônia", "Grupo C", "16:00", "Argentina") + createGame("Arábia Saudita", "Grupo C", "16:00", "México"))}

      ${createCard("01/12", "quinta", createGame("Croácia", "Grupo F", "12:00", "Bélgica") + createGame("Canadá", "Grupo F", "12:00", "Marrocos") + createGame("Japão", "Grupo E", "16:00", "Espanha") + createGame("Costa Rica", "Grupo E", "16:00", "Alemanha"))}

      ${createCard("02/12", "sexta", createGame("Coreia do Sul", "Grupo H", "12:00", "Portugal") + createGame("Gana", "Grupo H", "12:00", "Uruguai") + createGame("Sérvia", "Grupo G", "16:00", "Suíça") + createGame("Brasil", "Grupo G", "16:00", "Camarões"))}
    </main>
`
