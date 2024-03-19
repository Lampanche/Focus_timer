import 
{
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeShop,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay
}
from "./elements.js"

export default function Settings(
    { minutes,
      seconds,
      standartMinutes,
      standartSeconds,
      updateUpMinutesfromInput, 
      updateDisplayTimer,
      toggleScreen,
      inputMinutes,
      creatEventsSounds,
      changeColorButtonAndSvgPlayForest,
      playSoundForest,
      changeColorButtonAndSvgPlayRain,
      playSoundRain,
      changeColorButtonAndSvgPlayCoffeShop,
      playSoundCoffeShop,
      changeColorButtonAndSvgPlayFireplace,
      playSoundFireplace 
    })
{
    
    function inputUpdateDisplayMinutes ()
{
        let valueInput = inputMinutes.value
        console.log(valueInput)
        console.log(minutes)

        if(valueInput === "" || valueInput === "0" )
        {  
            updateDisplayTimer(standartMinutes, standartSeconds)
            updateUpMinutesfromInput(standartMinutes, standartSeconds)
            return
        }

        minutes = Number(valueInput)
        updateUpMinutesfromInput(valueInput, seconds)
        updateDisplayTimer(minutes,seconds)
}
    function startSets(event)
{
        event.preventDefault()
        inputUpdateDisplayMinutes()
        
        creatEventsSounds(buttonSoundForest, "click", changeColorButtonAndSvgPlayForest) // Quando registro o evento de alterar as cores depois do evento de dar PLAY, o mesmo não fica disponível em meu arquivo.
        creatEventsSounds(buttonSoundForest, "click", playSoundForest)

        creatEventsSounds(buttonSoundRain, "click", changeColorButtonAndSvgPlayRain)
        creatEventsSounds(buttonSoundRain, "click", playSoundRain)

        creatEventsSounds(buttonSoundCoffeShop, "click", changeColorButtonAndSvgPlayCoffeShop)
        creatEventsSounds(buttonSoundCoffeShop, "click", playSoundCoffeShop)

        creatEventsSounds(buttonSoundFireplace, "click", changeColorButtonAndSvgPlayFireplace)
        creatEventsSounds(buttonSoundFireplace, "click", playSoundFireplace)

        toggleScreen()      
}

    return{
        inputUpdateDisplayMinutes,
        startSets
    }

}