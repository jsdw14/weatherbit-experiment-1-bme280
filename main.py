
weatherbit.start_weather_monitoring()
lightVal = 0
light2 = False
item = 0

def on_button_pressed_a():
    global item
    while item == 0:
        basic.show_string("T:" + str(Math.idiv(weatherbit.temperature(), 100)))
    while item == 1:
        basic.show_string("H:" + str(Math.idiv(weatherbit.humidity(), 1024)))
    while item == 2:
        basic.show_string("P:" + str(Math.idiv(weatherbit.pressure(), 25600)))
    item = 0

def on_button_pressed_b():
    global light2, item, lightVal
    light2 = True
    item += 1
    while light2 == True:
        lightVal = input.light_level()
        led.plot_bar_graph(lightVal, 255)
        if input.button_is_pressed(Button.A):
            light2 = False

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

