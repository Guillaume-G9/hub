import {setLocalState, display} from './index.js'

document.querySelector('section > .container')
.addEventListener('click',function (e){displayMode(e)})

let changeMode = false
let localState = []
const displayMode = (event) => {
  if(event.target.id == 'favorisBtn'){
    return
  }
  
  if(!changeMode){
    
    localState = setLocalState()
    
    const filtered = setLocalState()
    .data
    .filter(mode => {
      if(!mode.attributes.difficulty){
        mode.attributes.difficulty = 'Facile' 
      }
      
      return mode.attributes.difficulty == event.target.id
      
      
    } )
    
    display({data:filtered})
    console.log("lol",{data:filtered})

    searchBar.addEventListener('keyup', () => {
      if (!changeMode) {
        let input = searchBar.value
        input=input.toLowerCase();
        const filter = filtered.filter(data => {
            return (
            data.attributes.category.toLowerCase().includes(input) || data.attributes.title.toLowerCase().includes(input)
            )
        })
        display({data:filter})
      }  
  })

    changeMode = true




}else {
    changeMode = false
     
    display(localState)
    displayMode(event)
    

}

}