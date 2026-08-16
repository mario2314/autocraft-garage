export const countUp = {
  mounted(el) {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10)
    if (Number.isNaN(target)) return

    el.textContent = '0'
    const duration = 1400
    let started = false

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started) continue
          started = true
          const startTime = performance.now()

          function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            el.textContent = Math.round(eased * target).toLocaleString('id-ID')
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    el._countUpObserver = observer
  },
  unmounted(el) {
    el._countUpObserver?.disconnect()
  },
}
