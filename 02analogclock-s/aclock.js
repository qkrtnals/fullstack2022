setInterval(setClock, 1000)

var hourHands = document.getElementsByClassName("hand hour")  // 이렇게도 가능
                                                            // 단 이경우 collection을 리턴함
//const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('div .minute')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    

    const hourHand = hourHands.item(0)
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
    
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()