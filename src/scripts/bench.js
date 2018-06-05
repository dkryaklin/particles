import OldParticle from './old_particle'
import Particle from './particle'
import fpsMeter from './fps_meter'

let amount = 20
let isNew = true
let particles = []

fpsMeter(document.querySelector('#fps_meter'))

document.querySelector('#bench_amount').addEventListener('change', (event) => {
  amount = parseInt(event.target.value)
  startBench()
})

document.querySelector('#bench_switch').addEventListener('change', (event) => {
  isNew = event.target.checked
  startBench()
})

function startBench() {
  if (particles.length) {
    for (let i = 0; i < particles.length; i++) {
      particles[i].remove()
    }
    particles = []
  }

  for (let i = 0; i < amount; i++) {
    const initialX = Math.random() * 1000
    const initialY = Math.random() * 1000
  
    if (isNew) {
      particles.push(new Particle(initialX, initialY))
    } else {
      particles.push(new OldParticle(initialX, initialY))
    }
    
  }
}

startBench()
