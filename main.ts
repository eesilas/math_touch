keyboard.kbEvent(KeyValue.key4, function () {
    radio.sendNumber(4)
    basic.showString("4")
    keyboard.setIndexColor(4, 0x00ff00)
})
keyboard.kbEvent(KeyValue.key7, function () {
    radio.sendNumber(7)
    basic.showString("7")
    keyboard.setIndexColor(7, 0x65471f)
})
keyboard.kbEvent(KeyValue.key1, function () {
    radio.sendNumber(1)
    basic.showString("1")
    keyboard.setIndexColor(1, 0xff0000)
})
keyboard.kbEvent(KeyValue.key5, function () {
    radio.sendNumber(5)
    basic.showString("5")
    keyboard.setIndexColor(5, 0xb09eff)
})
function rest () {
    for (let index = 0; index <= 9; index++) {
        keyboard.setIndexColor(index, keyboard.rgb(0, 0, 0))
        keyboard.showColor(index)
    }
}
keyboard.kbEvent(KeyValue.key9, function () {
    radio.sendNumber(9)
    basic.showString("9")
    keyboard.setIndexColor(9, 0x7f00ff)
})
keyboard.kbEvent(KeyValue.key8, function () {
    radio.sendNumber(8)
    basic.showString("8")
    keyboard.setIndexColor(8, 0x0000ff)
})
keyboard.kbEvent(KeyValue.key0, function () {
    radio.sendNumber(0)
    basic.showString("0")
    keyboard.setIndexColor(0, 0xffffff)
})
function init () {
    radio.setGroup(111)
    radio.setTransmitPower(7)
    keyboard.setBrightness(28)
    basic.showIcon(IconNames.Duck)
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(200)
    keyboard.vibrationMotor(OnOff.OFF)
}
keyboard.kbEvent(KeyValue.key6, function () {
    radio.sendNumber(6)
    basic.showString("6")
    keyboard.setIndexColor(6, 0x00ffff)
})
keyboard.kbEvent(KeyValue.key3, function () {
    radio.sendNumber(3)
    basic.showString("3")
    keyboard.setIndexColor(3, 0xffff00)
})
keyboard.kbEvent(KeyValue.keydf, function () {
    rest()
})
keyboard.kbEvent(KeyValue.key2, function () {
    radio.sendNumber(2)
    basic.showString("2")
    keyboard.setIndexColor(2, 0xff8000)
})
init()
basic.forever(function () {
	
})
