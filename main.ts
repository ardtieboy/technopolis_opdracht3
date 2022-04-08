input.onButtonPressed(Button.A, function () {
    teller = 0
})
input.onGesture(Gesture.Shake, function () {
    teller += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(teller)
    basic.clearScreen()
})
let teller = 0
teller = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (teller == 10) {
        music.playMelody("B A G G - G B C5 ", 120)
        basic.showString("Goed gedaan!")
        teller = 0
    }
})
