import {
    buttonPlay,
    buttonSetMinutes,
    buttonPause,
    buttonAdd,
    buttonDecrease,
    buttonReset,
}
from './elements.js'

export default function Events
({
    startSets,
    count,
    pause,
    addMinutes,
    decreaseMinutes,
    resetTime,
    
})
{
    function creatEvents()
{
    buttonSetMinutes.addEventListener("click", startSets)
    buttonPlay.addEventListener("click", count)
    buttonPause.addEventListener("click", pause)
    buttonAdd.addEventListener("click", addMinutes)
    buttonDecrease.addEventListener("click", decreaseMinutes)
    buttonReset.addEventListener("click", resetTime)
    
}
    
    return{
        creatEvents
    }

}