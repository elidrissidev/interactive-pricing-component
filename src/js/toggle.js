const planMap = {
  1: { pageviews: '10k', price: 8 },
  2: { pageviews: '50k', price: 12 },
  3: { pageviews: '100k', price: 16 },
  4: { pageviews: '500k', price: 24 },
  5: { pageviews: '1M', price: 36 },
}

const planPageviewsEl = document.querySelector('.js-plan-pageviews')
const planPriceEl = document.querySelector('.js-plan-price')
const sliderEl = document.querySelector('.js-slider')
const planDurationToggleEl = document.querySelector('.js-toggle-plan')

sliderEl.addEventListener('input', function() {
  const plan = planMap[this.value]
  const isPressed = planDurationToggleEl.getAttribute('aria-pressed') === 'true'
  const price = isPressed ? (plan.price * 0.75) : plan.price
  planPageviewsEl.textContent = `${plan.pageviews} pageviews`
  planPriceEl.textContent = `$${price}.00`
})

planDurationToggleEl.addEventListener('click', function() {
  const isPressed = !(this.getAttribute('aria-pressed') === 'true')
  this.setAttribute('aria-pressed', isPressed)

  const plan = planMap[sliderEl.value]
  const price = isPressed ? (plan.price * 0.75) : plan.price
  planPriceEl.textContent = `$${price}.00`
})

document.querySelector('.js-start-trial').addEventListener('click', () => alert('Alas, trial period has ended'))
