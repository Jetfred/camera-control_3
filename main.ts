bluetooth.onBluetoothConnected(function () {
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Logo")
    basic.showLeds(`
        # # # . .
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showString("CAM")
bluetooth.startButtonService()
bluetooth.startTemperatureService()
