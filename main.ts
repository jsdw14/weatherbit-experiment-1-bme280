input.onButtonPressed(Button.A, function () {
    while (item == 0) {
        basic.showString("T:")
        basic.showNumber(Math.idiv(weatherbit.temperature(), 100))
    }
    while (item == 1) {
        basic.showString("H: ")
        basic.showNumber(Math.idiv(weatherbit.humidity(), 1024))
    }
    while (item == 2) {
        basic.showString("P: ")
        basic.showNumber(Math.idiv(weatherbit.pressure(), 25600))
    }
    item = 0
})
input.onButtonPressed(Button.B, function () {
    light2 = true
    item += 1
    while (light2 == true) {
        lightVal = input.lightLevel()
        led.plotBarGraph(
        lightVal,
        255
        )
        if (input.buttonIsPressed(Button.A)) {
            light2 = false
        }
    }
})
let lightVal = 0
let light2 = false
let item = 0
item = 0
light2 = false
weatherbit.startWeatherMonitoring()
