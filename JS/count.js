export default function Count
({
    inputMinutes,
    toggleScreen,
    updateDisplayTimer,
    updateMinutesAndSecondsTimer,
    minutesDisplay,
    updateIdTimeOut,
    secondsDisplay,
    resetButtonsSound    
})
{
    let timerTimeOut

    function count()
    {   
    
        timerTimeOut =  setTimeout(function(){

            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
        
            
            if(minutes <=0 && seconds <=0)
            {
                inputMinutes.value = ""
                toggleScreen()
                resetButtonsSound()
                return
            }
            
            if(seconds == 0)
            {
                seconds = 5
                --minutes
            }
            
            updateDisplayTimer(minutes, --seconds)

            updateMinutesAndSecondsTimer(minutes, seconds)

            count()

            }, 1000)
            
        updateIdTimeOut(timerTimeOut)        
    }

    

    return{
        count,
    }

}