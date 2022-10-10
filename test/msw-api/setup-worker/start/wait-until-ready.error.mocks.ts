import { setupWorker, rest, HttpResponse } from 'msw'

const worker = setupWorker(
  rest.get('/numbers', () => {
    return HttpResponse.json([1, 2, 3])
  }),
  rest.get('/letters', () => {
    return HttpResponse.json(['a', 'b', 'c'])
  }),
)

worker.start({
  // Force an exception during Service Worker registration.
  // @ts-expect-error Providing invalid option value.
  serviceWorker: 'invalid-value',
})

fetch('/numbers')

const req = new XMLHttpRequest()
req.open('GET', '/letters')
req.send()
