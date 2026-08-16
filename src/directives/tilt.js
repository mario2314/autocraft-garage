function handleMove(el, strength) {
  return (e) => {
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * strength
    const rotateY = (px - 0.5) * strength
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
  }
}

function handleLeave(el) {
  return () => {
    el.style.transform = ''
  }
}

export const tilt = {
  mounted(el, binding) {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const strength = binding.value ?? 10
    el.classList.add('tilt-el')
    const onMove = handleMove(el, strength)
    const onLeave = handleLeave(el)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el._tiltCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el) {
    el._tiltCleanup?.()
  },
}
