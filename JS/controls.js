import { minutesDisplay, secondsDisplay } from "./elements.js"

export default function Controls
    ({
        
        updateMinutes,
        updateSeconds,
        updateDisplayTimer,
        toggleScreen,
        inputMinutes,
        resetButtonsSound
    })

{   
    let updateTimeOut

    function updateIdTimeOut(newIdTimeOut)
    {
        updateTimeOut = newIdTimeOut
    }

    function pause()
    {
        clearTimeout(updateTimeOut)
    }

    function updateUpMinutesfromInput(valueInputMinutes, valueInputSeconds)
    {
        updateMinutes = Number(valueInputMinutes)
        updateSeconds = valueInputSeconds
    }

    function updateMinutesAndSecondsTimer(newMinutes, newSeconds)
    {
        updateMinutes = newMinutes
        updateSeconds = newSeconds
    }

    function addMinutes()
    {
        updateMinutes+= 5
        updateDisplayTimer(updateMinutes,updateSeconds)    
    }

    function decreaseMinutes()
    {
        let minutesDecreaseLessZero = updateMinutes-=5 
        if(minutesDecreaseLessZero < 0)
        {
            return
        }

        updateDisplayTimer(updateMinutes,updateSeconds)
    }

    
    function resetTime()
    {
        pause()

        resetButtonsSound()

        inputMinutes.value = "" 
        toggleScreen()

    }

    return{
        pause,
        addMinutes,
        decreaseMinutes,
        resetTime,
        updateIdTimeOut,
        updateMinutesAndSecondsTimer,
        updateUpMinutesfromInput,    
    }

}