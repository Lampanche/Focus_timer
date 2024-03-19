export default function Untils
({
    timer,
    cardsSounds,
    setMinutes,
    minutesDisplay,
    secondsDisplay,
})
{
    function toggleScreen()
    {
        timer.classList.toggle("hide")
        cardsSounds.classList.toggle("hide")
        setMinutes.classList.toggle("hide")
    }
    
    function updateDisplayTimer(minutes, seconds)
    {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function creatEventsSounds(element, type, method)
    {
        element.addEventListener(type, method)
    }

    function removeEventsSounds(element, type, method)
    {
        element.removeEventListener(type, method)
    }

    
    return{
        toggleScreen,
        updateDisplayTimer,
        creatEventsSounds,
        removeEventsSounds
    }

}

