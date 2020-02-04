const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', ()=> {
  fetchAllTrainers()
})

function fetchAllTrainers() {
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => trainers.forEach(trainer => {
    buildTrainerCard(trainer)
  }))
}


function buildTrainerCard(trainer) {
  let mainDiv = document.getElementById('trainer-collection')
  let trainerDiv = document.createElement('div')
  trainerDiv.className = 'card'
  let trainerName = document.createElement('p')
  trainerName.innerText = trainer.name

  trainerDiv.appendChild(trainerName)
  mainDiv.appendChild(trainerDiv)

}
