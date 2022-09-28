radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Square)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
radio.setTransmitPower(7)
let 送る = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
