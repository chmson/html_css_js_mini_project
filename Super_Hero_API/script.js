const heroImage = document.getElementById('heroImage')
const heroButton = document.getElementById('heroButton')
const searchero = document.getElementById('serach')
const searchinput = document.getElementById('input')
const acess_token='1437578056981745'
const base_url=`https://www.superheroapi.com/api.php/${acess_token}`

const get_random_super_hero=(hero_id)=>{
  //here put api.php where php is ,ust otherwise it won't work
  // name--->base_url/search/hero_name
  // id--->base_url/id
  
fetch(`${base_url}/${hero_id}`)
.then(response=>response.json())
  .then(json=>{
    console.log(json)

  const superHero=json
    showHeroInfo(superHero)
  })
  // random_hero()
    // heroImage.innerHTML= `<img src="${json}"/>`
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}
const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImage.innerHTML = `${name}${img}${stats}`
}

const  get_search_hero = (name) => {
  // console.log(searchinput.value)
  fetch(`${base_url}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero= json.results[0]
      // const hero_name=json.results[0].name
      
    // heroImage.innerHTML=` <b>${hero_name}<b> <br> <img src="${hero.image.url}" height=400 width=200/></br>`
      
      // console.log(hero)
      showHeroInfo(hero)
      
       })
}

const random_hero = () => {

  const random_hero_number = Math.floor(Math.random() * 731)+1
  return random_hero_number
}
// let hero_random_id=random_hero()
// console.log(hero_random_id)
// hero(hero_random_id)
heroButton.onclick=()=>get_random_super_hero(random_hero())

searchero.onclick=()=>get_search_hero(searchinput.value)

  


// results-for