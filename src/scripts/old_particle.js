export default class Particle {
    constructor(initialX, initialY) {
        this.speed = this.getRandomNumber(10, 20)

        this.el = document.createElement('div')
        this.el.style.position = 'absolute'
        this.el.style.transition = 'all 0.1s ease 0s'
        this.el.style['border-radius'] = '50%'

        document.body.appendChild(this.el)

        this.setPosition(initialX, initialY)
        this.setRandomSize()
        this.setRandomColor()
        this.startBrownianMotion()
    }

    getRandomNumber(from, to) {
        const rnd = Math.random()
        return parseInt((rnd * (to - from)) + from)
    }

    setRandomColor() {
        const rnd = Math.random()
        const hex = 0x1000000 + rnd * 0xffffff
        const color = hex.toString(16).substr(1, 6)
        this.el.style.background = ['#', color].join('')
    }

    getPixels(property) {
        const value = this.el.style[property]
        return parseInt(value)
    }

    setPixels(property, value) {
        this.el.style[property] = [value, 'px'].join('')
    }

    setRandomSize() {
        const side = this.getRandomNumber(20, 70)
        this.setPixels('width', side)
        this.setPixels('height', side)
    }

    getPositionX() {
        return this.getPixels('left')
    }

    getPositionY() {
        return this.getPixels('top')
    }

    setPosition(x, y) {
        this.setPixels('left', x)
        this.setPixels('top', y)
    }

    moveRandomly() {
        const to = parseInt(this.speed / 2)
        const from = to * -1
        const prevX = this.getPositionX()
        const prevY = this.getPositionY()
        const nextX = prevX + this.getRandomNumber(from, to)
        const nextY = prevY + this.getRandomNumber(from, to)
        this.setPosition(nextX, nextY)
    }

    startBrownianMotion() {
        const timeout = 100
        const interval = setInterval(this.moveRandomly.bind(this), timeout)
    }

    remove() {
        clearInterval(this.interval)
        this.el.remove()
    }
}
