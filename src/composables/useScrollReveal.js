const REVEAL_SELECTORS = [
  '.section-title',
  '.car__item',
  '.services__item',
  '.feature__item',
  '.about__feature__item',
  '.about__item',
  '.team__item',
  '.testimonial__item',
  '.blog__item',
  '.latest__blog__item',
  '.cta__item',
  '.client__item',
  '.contact__address__item',
  '.counter__item',
]

// Safety net: never leave content permanently invisible if IntersectionObserver
// is blocked (privacy extensions), slow, or a timing quirk swallows an entry.
const FALLBACK_DELAY = 2200

let observer = null

function reveal(el) {
  if (el.classList.contains('reveal--visible')) return
  el.classList.add('reveal--visible')
  observer?.unobserve(el)
}

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target)
      }
    },
    { threshold: 0.05, rootMargin: '0px 0px 120px 0px' },
  )
  return observer
}

export function applyScrollReveal(root = document) {
  const obs = getObserver()
  const els = root.querySelectorAll(REVEAL_SELECTORS.join(','))
  let i = 0
  for (const el of els) {
    if (el.dataset.revealBound) continue
    el.dataset.revealBound = '1'

    // Already in (or above) the viewport when bound — show immediately, no need to animate.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('reveal--visible')
      i += 1
      continue
    }

    el.classList.add('reveal')
    el.style.transitionDelay = `${(i % 4) * 90}ms`
    obs.observe(el)
    setTimeout(() => reveal(el), FALLBACK_DELAY)
    i += 1
  }
}
