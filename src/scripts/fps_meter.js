const fpsMeter = (elem) => {
  const times = []

  const refreshLoop = () => {
    window.requestAnimationFrame(() => {
      const now = performance.now()
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift()
      }

      times.push(now)
      elem.textContent = times.length

      refreshLoop()
    })
  }
  
  refreshLoop()
}

export default fpsMeter
