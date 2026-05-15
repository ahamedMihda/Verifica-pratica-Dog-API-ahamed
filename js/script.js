const ListAllBreeds = "https://dog.ceo/api/breeds/list/all"
const allSubRaceogListURL = "https://dog.ceo/api/breeds/list/all" 
const afghan = document.querySelector("#afghan")
const basset = document.querySelector("#basset")
const blood = document.querySelector("#blood")
const english = document.querySelector("#english")
const ibizan = document.querySelector("#ibizan")


async function mostra(razza_arrivata){
    const razza = razza_arrivata.value.trim()
    if (!razza) return
    
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${razza}/images/random/3`)
        const images = await response.json()
        console.log(images)
    } catch (error) {
        
    }
}

