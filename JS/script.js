import Settings from './settings.js'
import Controls from './controls.js'
import Count from './count.js'
import Untils from './untils.js'
import Events from './events.js'
import Sounds from './sounds.js'
import 
    {
    inputMinutes,
    timer,
    cardsSounds,
    setMinutes,
    minutesDisplay,
    secondsDisplay,
    }
    from './elements.js'

let standartMinutes = minutesDisplay.textContent
let standartSeconds = secondsDisplay.textContent    
  
    
let minutes = Number(minutesDisplay.textContent)
let seconds = secondsDisplay.textContent

let updateMinutes = Number(minutesDisplay.textContent)
let updateSeconds = secondsDisplay.textContent

const untils = Untils
({  
    timer,
    cardsSounds,
    setMinutes,
    minutesDisplay,
    secondsDisplay,
})

const sounds = Sounds
({
    creatEventsSounds: untils.creatEventsSounds,
    removeEventsSounds: untils.removeEventsSounds,
})

const controls = Controls
({
    updateMinutes,
    updateSeconds,
    updateDisplayTimer: untils.updateDisplayTimer,
    toggleScreen: untils.toggleScreen,
    inputMinutes,
    resetButtonsSound: sounds.resetButtonsSound
})

const settings = Settings
({
    minutes,
    seconds, 
    inputMinutes,
    standartMinutes,
    standartSeconds,
    updateDisplayTimer: untils.updateDisplayTimer,
    toggleScreen: untils.toggleScreen,
    creatEventsSounds: untils.creatEventsSounds,
    changeColorButtonAndSvgPlayForest: sounds.changeColorButtonAndSvgPlayForest, 
    playSoundForest: sounds.playSoundForest,
    changeColorButtonAndSvgPlayRain: sounds.changeColorButtonAndSvgPlayRain,
    playSoundRain: sounds.playSoundRain,
    changeColorButtonAndSvgPlayCoffeShop: sounds.changeColorButtonAndSvgPlayCoffeShop,
    playSoundCoffeShop: sounds.playSoundCoffeShop,
    changeColorButtonAndSvgPlayFireplace: sounds.changeColorButtonAndSvgPlayFireplace,
    playSoundFireplace: sounds.playSoundFireplace,
    updateUpMinutesfromInput: controls.updateUpMinutesfromInput
})
  
const count = Count
({
    inputMinutes,
    minutesDisplay,
    secondsDisplay,
    toggleScreen: untils.toggleScreen,
    updateDisplayTimer: untils.updateDisplayTimer,
    updateMinutesAndSecondsTimer: controls.updateMinutesAndSecondsTimer,
    updateIdTimeOut: controls.updateIdTimeOut,
    resetButtonsSound: sounds.resetButtonsSound
})

const events = Events
({
    startSets: settings.startSets,
    count: count.count,
    pause: controls.pause,
    addMinutes: controls.addMinutes,
    decreaseMinutes: controls.decreaseMinutes,
    resetTime: controls.resetTime,
        
})    

    

events.creatEvents()





