const factsBtn = document.getElementById('facts-btn')
// console.log(factsBtn);

function randoFact(){
    let facts = ['saturn has 82 moons!', 'Saturn is the most distant planet that can be seen with the naked eye', 'Saturn orbits the Sun once every 29.4 Earth years', 'Saturn is the flattest planet.', 'Saturn is made mostly of hydrogen', 'Four spacecraft have visited Saturn', 'Saturn has more moons than any other planet.']

    let randomFact = facts[Math.floor(Math.random() * facts.length)]
        document.getElementById('the-fact').innerHTML = randomFact
       


      
        
        
}

factsBtn.addEventListener('click', randoFact)