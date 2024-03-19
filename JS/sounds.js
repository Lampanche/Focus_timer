import 
{
    buttonSoundForest,
    iconSoundForest,
    buttonSoundRain,
    buttonSoundCoffeShop,
    buttonSoundFireplace,
    iconSoundRain,
    iconSoundCoffeShop,
    iconSoundFireplace,
    timer,
    cardsSounds   
}
from "./elements.js"

export default function Sounds
({
    creatEventsSounds,
    removeEventsSounds
})
{

    const soundForest = new Audio("/audios/Floresta.wav")
    const soundRain = new Audio("/audios/Chuva.wav")
    const soundCoffeShop = new Audio("/audios/Cafeteria.wav")
    const soundFireplace = new Audio("/audios/Lareira.wav")
    
    
    function resetButtonsSound()
    {
        soundForest.pause()
        soundRain.pause()
        soundCoffeShop.pause()
        soundFireplace.pause()

        buttonSoundForest.style.backgroundColor = "rgba(225, 225, 230, 1)"
        iconSoundForest.style.fill = "#323238"

        buttonSoundRain.style.backgroundColor = "rgba(225, 225, 230, 1)"
        iconSoundRain.style.fill = "#323238"

        buttonSoundCoffeShop.style.backgroundColor = "rgba(225, 225, 230, 1)"
        iconSoundCoffeShop.style.fill = "#323238"

        buttonSoundFireplace.style.backgroundColor = "rgba(225, 225, 230, 1)"
        iconSoundFireplace.style.fill = "#323238"

    }
    
    
    function changeColorButtonAndSvgPlayForest()
    {
        buttonSoundForest.style.backgroundColor = "rgba(2, 121, 157, 1)"
        iconSoundForest.style.fill = "white"
        
    }
    
    function changeColorButtonAndSvgStopForest()
    {
        buttonSoundForest.style.backgroundColor = "rgba(175, 17, 17, 0.808)"
        iconSoundForest.style.fill = "white"        
    }
    
    function playSoundForest()   
    
    {   
        soundForest.play()
        soundForest.loop = true
    
        removeEventsSounds(buttonSoundForest, "click", playSoundForest)
        removeEventsSounds(buttonSoundForest, "click", changeColorButtonAndSvgPlayForest)
        creatEventsSounds(buttonSoundForest, "click",changeColorButtonAndSvgStopForest)
        creatEventsSounds(buttonSoundForest,"click", stopSoundForest)

    }

    function stopSoundForest()
    {
        soundForest.pause()

        setTimeout(function()
        {
            buttonSoundForest.style.backgroundColor = "rgba(225, 225, 230, 1)"
            iconSoundForest.style.fill = "#323238"
        }
      
        , 1500)
        
        removeEventsSounds(buttonSoundForest, "click", stopSoundForest)
        removeEventsSounds(buttonSoundForest, "click", changeColorButtonAndSvgStopForest)
        creatEventsSounds(buttonSoundForest, "click", changeColorButtonAndSvgPlayForest)
        creatEventsSounds(buttonSoundForest, "click", playSoundForest)
    }

    
    function changeColorButtonAndSvgPlayRain()
    {
        buttonSoundRain.style.backgroundColor = "rgba(2, 121, 157, 1)"
        iconSoundRain.style.fill = "white"
    }

    function changeColorButtonAndSvgStopRain()
    {
        buttonSoundRain.style.backgroundColor = "rgba(175, 17, 17, 0.808)"
        iconSoundRain.style.fill = "white"        
    }

    function playSoundRain()
    {
        soundRain.play()
        soundRain.loop = true
        
        removeEventsSounds(buttonSoundRain, "click", playSoundRain)
        removeEventsSounds(buttonSoundRain, "click", changeColorButtonAndSvgPlayRain)
        creatEventsSounds(buttonSoundRain, "click", changeColorButtonAndSvgStopRain)
        creatEventsSounds(buttonSoundRain, "click", stopSoundRain)
    }

    function stopSoundRain()
    {
        soundRain.pause()

        setTimeout(function()
        {
            buttonSoundRain.style.backgroundColor = "rgba(225, 225, 230, 1)"
            iconSoundRain.style.fill = "#323238"
        }
      
        , 1500)

        removeEventsSounds(buttonSoundRain, "click", stopSoundRain)
        removeEventsSounds(buttonSoundRain, "click", changeColorButtonAndSvgStopRain)
        creatEventsSounds(buttonSoundRain, "click", changeColorButtonAndSvgPlayRain)
        creatEventsSounds(buttonSoundRain, "click", playSoundRain)
        
    }
    

    function changeColorButtonAndSvgPlayCoffeShop()
    {
        buttonSoundCoffeShop.style.backgroundColor = "rgba(2, 121, 157, 1)"
        iconSoundCoffeShop.style.fill = "white"
    }

    function changeColorButtonAndSvgStopCoffeShop()
    {
        buttonSoundCoffeShop.style.backgroundColor = "rgba(175, 17, 17, 0.808)"
        iconSoundCoffeShop.style.fill = "white"        
    }

    function playSoundCoffeShop()
    {
        soundCoffeShop.play()
        soundCoffeShop.loop = true

        removeEventsSounds(buttonSoundCoffeShop, "click", playSoundCoffeShop)
        removeEventsSounds(buttonSoundCoffeShop, "click", changeColorButtonAndSvgPlayCoffeShop)
        creatEventsSounds(buttonSoundCoffeShop, "click", changeColorButtonAndSvgStopCoffeShop)
        creatEventsSounds(buttonSoundCoffeShop, "click", stopSoundCoffeShop)
    }

    function stopSoundCoffeShop()
    {
        soundCoffeShop.pause()

        setTimeout(function()
        {
            buttonSoundCoffeShop.style.backgroundColor = "rgba(225, 225, 230, 1)"
            iconSoundCoffeShop.style.fill = "#323238"
        }
      
        , 1500)

        removeEventsSounds(buttonSoundCoffeShop, "click", stopSoundCoffeShop)
        removeEventsSounds(buttonSoundCoffeShop, "click", changeColorButtonAndSvgStopCoffeShop)
        creatEventsSounds(buttonSoundCoffeShop, "click", changeColorButtonAndSvgPlayCoffeShop)
        creatEventsSounds(buttonSoundCoffeShop, "click", playSoundCoffeShop)
    }


    function changeColorButtonAndSvgPlayFireplace()
    {
        buttonSoundFireplace.style.backgroundColor = "rgba(2, 121, 157, 1)"
        iconSoundFireplace.style.fill = "white"        
    }

    function changeColorButtonAndSvgStopFireplace()
    {
        buttonSoundFireplace.style.backgroundColor = "rgba(175, 17, 17, 0.808)"
        iconSoundFireplace.style.fill = "white"
    }

    function playSoundFireplace()
    {
        soundFireplace.play()
        soundFireplace.loop = true

        removeEventsSounds(buttonSoundFireplace, "click", playSoundFireplace)
        removeEventsSounds(buttonSoundFireplace, "click", changeColorButtonAndSvgPlayFireplace)
        creatEventsSounds(buttonSoundFireplace, "click", changeColorButtonAndSvgStopFireplace)
        creatEventsSounds(buttonSoundFireplace, "click", stopSoundFireplace)
    }

    function stopSoundFireplace()
    {
        soundFireplace.pause()

        setTimeout(function()
        {
            buttonSoundFireplace.style.backgroundColor = "rgba(225, 225, 230, 1)"
            iconSoundFireplace.style.fill = "#323238"
        }
      
        , 1500)

        removeEventsSounds(buttonSoundFireplace, "click", stopSoundFireplace)
        removeEventsSounds(buttonSoundFireplace, "click", changeColorButtonAndSvgStopFireplace)
        creatEventsSounds(buttonSoundFireplace, "click", changeColorButtonAndSvgPlayFireplace)
        creatEventsSounds(buttonSoundFireplace, "click", playSoundFireplace)
    }

    return{
        resetButtonsSound,
        playSoundForest,
        playSoundRain,
        playSoundCoffeShop,
        playSoundFireplace,
        changeColorButtonAndSvgPlayForest,
        changeColorButtonAndSvgPlayRain,
        changeColorButtonAndSvgPlayCoffeShop,
        changeColorButtonAndSvgPlayFireplace
    }
    
}

