let y = 0
let j = 0
let x = 0
let i = 0
basic.forever(function () {
    y = 0
    j = 0
    x = randint(0, 4)
    i = randint(0, 4)
    while (y <= 7 && j <= 7 && i != x) {
        led.plotBrightness(x, y, 250)
        led.plotBrightness(x, y - 1, 150)
        led.plotBrightness(x, y - 2, 50)
        led.plotBrightness(x, y - 3, 0)
        basic.pause(100)
        y += 1
        led.plotBrightness(i, j, 250)
        led.plotBrightness(i, j - 1, 150)
        led.plotBrightness(i, j - 2, 50)
        led.plotBrightness(i, j - 3, 0)
        basic.pause(100)
        j += 1
    }
})
basic.forever(function () {
    y = 0
    j = 0
    x = randint(0, 4)
    i = randint(0, 4)
    while (y <= 7 && j <= 7 && i != x) {
        led.plotBrightness(x, y, 250)
        led.plotBrightness(x, y - 1, 150)
        led.plotBrightness(x, y - 2, 50)
        led.plotBrightness(x, y - 3, 0)
        basic.pause(100)
        y += 1
        led.plotBrightness(i, j, 250)
        led.plotBrightness(i, j - 1, 150)
        led.plotBrightness(i, j - 2, 50)
        led.plotBrightness(i, j - 3, 0)
        basic.pause(100)
        j += 1
    }
})
