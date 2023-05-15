function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Logo ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Logo ${player2}">
    </li>
    
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
            </div>
    `
}

document.querySelector("#app").innerHTML = `

    <header> 
        <img src="./assets/logo.svg" alt="Logo NLW">  
    </header> 
        <main id="cards">
            ${createCard("24/11", "quinta", createGame('switzerland', '07:00','camaroon') + createGame('uruguay', '10:00','south-korea') + createGame('portugal','13:00','ghana') + createGame('brazil','16:00','serbia') 
            )
        }
        ${createCard("28/11","segunda", createGame('camaroon','07:00','serbia') + createGame('south-korea','10:00','ghana') + createGame('brazil', '13:00','switzerland') + createGame('portugal','16:00','uruguay')
            
            )
        }
            ${createCard("02/12","sexta", createGame('south-korea','12:00','portugal') + createGame('ghana','12:00','uruguay') + createGame('serbia','16:00','switzerland') + createGame('brazil', '16:00','camaroon')
            )
        
        }

            
        </main>

 `
//'brazil', '13:00','switzerland'