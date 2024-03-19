const inputMinutes = document.querySelector("#set-minutes")
const buttonSetMinutes = document.querySelector(".button-set")

const timer = document.querySelector(".timer")
const cardsSounds = document.querySelector(".sounds")
const setMinutes = document.querySelector(".settings")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".stop")
const buttonAdd = document.querySelector(".addMinutes")
const buttonDecrease = document.querySelector(".decreaseMinutes")
const buttonReset = document.querySelector(".button-reset-time")

const buttonSoundForest = document.querySelector(".sound-forest")
const iconSoundForest = document.querySelector(".sound-forest svg path")

const buttonSoundRain = document.querySelector(".sound-rain")
const iconSoundRain = document.querySelector(".sound-rain svg path")

const buttonSoundCoffeShop = document.querySelector(".sound-coffeshop")
const iconSoundCoffeShop = document.querySelector(".sound-coffeshop svg path")

const buttonSoundFireplace = document.querySelector(".fireplace")
const iconSoundFireplace = document.querySelector(".fireplace svg path")



export{
    inputMinutes,
    buttonSetMinutes,
    timer,
    cardsSounds,
    setMinutes,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonAdd,
    buttonDecrease,
    buttonReset,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeShop,
    buttonSoundFireplace,
    iconSoundForest,
    iconSoundRain,
    iconSoundCoffeShop,
    iconSoundFireplace
}