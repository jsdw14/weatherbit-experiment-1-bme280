weatherbit.startWeatherMonitoring()
let lightVal = 0
let light2 = false
let item = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    while (item == 0) {
        basic.showString("T:" + ("" + Math.idiv(weatherbit.temperature(), 100)))
    }
    while (item == 1) {
        basic.showString("H:" + ("" + Math.idiv(weatherbit.humidity(), 1024)))
    }
    while (item == 2) {
        basic.showString("P:" + ("" + Math.idiv(weatherbit.pressure(), 25600)))
    }
    item = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    light2 = true
    item += 1
    while (light2 == true) {
        lightVal = input.lightLevel()
        led.plotBarGraph(lightVal, 255)
        if (input.buttonIsPressed(Button.A)) {
            light2 = false
        }
        
    }
})
