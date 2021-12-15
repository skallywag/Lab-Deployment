const factsBtn = document.getElementById('facts-btn')
// console.log(factsBtn);

function randoFact(){
    let facts = ['Mars Had Water In The Ancient Past', 'Mars Has Frozen Water Today', 'Mars Used To Have A Thicker Atmosphere', 'Mars Has Some Extreme Highs And Lows In Terrain', 'We Have Pieces Of Mars On Earth', 'Mars Is A Popular Spacecraft Destination']

    let randomFact = facts[Math.floor(Math.random() * facts.length)]
        document.getElementById('the-fact').innerHTML = randomFact
                   
}
factsBtn.addEventListener('click', randoFact)


