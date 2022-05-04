let compass = 0
basic.forever(function () {
    compass = input.compassHeading()
    if (compass < 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (compass < 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (compass < 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (compass < 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (compass < 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (compass < 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (compass < 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (compass < 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
