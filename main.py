y = 0
j = 0
x = 0
i = 0

def on_forever():
    global y, j, x, i
    y = 0
    j = 0
    x = randint(0, 4)
    i = randint(0, 4)
    while y <= 7 and j <= 7 and i != x:
        led.plot_brightness(x, y, 250)
        led.plot_brightness(x, y - 1, 150)
        led.plot_brightness(x, y - 2, 50)
        led.plot_brightness(x, y - 3, 0)
        basic.pause(100)
        y += 1
        led.plot_brightness(i, j, 250)
        led.plot_brightness(i, j - 1, 150)
        led.plot_brightness(i, j - 2, 50)
        led.plot_brightness(i, j - 3, 0)
        basic.pause(100)
        j += 1
basic.forever(on_forever)
