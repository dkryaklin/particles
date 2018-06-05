//import Particle from './old_particle'
import Particle from './particle'
import fpsMeter from './fps_meter'

const BENCH_AMOUNT = 2000

fpsMeter(document.querySelector('#fps_meter'))

const particles = []

for (let i = 0; i < BENCH_AMOUNT; i++) {
  const initialX = Math.random() * 1000
  const initialY = Math.random() * 1000

  particles.push(new Particle(initialX, initialY))
}
