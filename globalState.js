document.querySelector('section > .container')
.addEventListener('click',function (e){displayMode(e)})

let changeMode = false
let localState = []
const displayMode = (event) => {
  if(event.target.id == 'favorisBtn'){
    return
  }

  if(!changeMode){
      
    localState = globalState

    const filtered = globalState
    .data
    .filter(mode => {
        if(!mode.attributes.difficulty){
          mode.attributes.difficulty = 'Facile' 
        }
  
      return mode.attributes.difficulty == event.target.id
     
      
    } )
  
    display({data:filtered})
    changeMode = true




}else {
    changeMode = false
     
    display(localState)
    displayMode(event)
    

}

  


}