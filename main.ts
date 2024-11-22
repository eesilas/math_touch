keyboard.kbEvent(KeyValue.key4, function () {
    keyboard.setIndexColor(4, 0x00ff00)
    radio.sendNumber(4)
    basic.showNumber(4)
})
keyboard.kbEvent(KeyValue.key7, function () {
    keyboard.setIndexColor(7, 0x65471f)
    radio.sendNumber(7)
    basic.showNumber(7)
})
keyboard.kbEvent(KeyValue.key1, function () {
    keyboard.setIndexColor(1, 0xff0000)
    radio.sendNumber(1)
    basic.showNumber(1)
})
keyboard.kbEvent(KeyValue.key5, function () {
    keyboard.setIndexColor(5, 0xb09eff)
    radio.sendNumber(5)
    basic.showNumber(5)
})
function rest () {
    for (let index = 0; index <= 9; index++) {
        keyboard.setIndexColor(index, keyboard.rgb(0, 0, 0))
        keyboard.showColor(index)
    }
}
keyboard.kbEvent(KeyValue.key9, function () {
    keyboard.setIndexColor(9, 0x7f00ff)
    radio.sendNumber(9)
    basic.showNumber(9)
})
keyboard.kbEvent(KeyValue.key8, function () {
    keyboard.setIndexColor(8, 0x0000ff)
    radio.sendNumber(8)
    basic.showNumber(8)
})
keyboard.kbEvent(KeyValue.key0, function () {
    keyboard.setIndexColor(0, 0xffffff)
    radio.sendNumber(0)
    basic.showNumber(0)
})
function init () {
    basic.showIcon(IconNames.Duck)
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(200)
    keyboard.vibrationMotor(OnOff.OFF)
    radio.setTransmitPower(7)
    radio.setGroup(111)
    keyboard.setBrightness(72)
    basic.pause(100)
    keyboard.ledRainbow(
    0,
    15,
    1,
    360
    )
}
keyboard.kbEvent(KeyValue.key6, function () {
    keyboard.setIndexColor(6, 0x00ffff)
    radio.sendNumber(6)
    basic.showNumber(6)
})
keyboard.kbEvent(KeyValue.key3, function () {
    keyboard.setIndexColor(3, 0xffff00)
    radio.sendNumber(3)
    basic.showNumber(3)
})
keyboard.kbEvent(KeyValue.keydf, function () {
    rest()
})
keyboard.kbEvent(KeyValue.key2, function () {
    keyboard.setIndexColor(2, 0xff8000)
    radio.sendNumber(2)
    basic.showNumber(2)
})
init()
basic.forever(function () {
	
})
