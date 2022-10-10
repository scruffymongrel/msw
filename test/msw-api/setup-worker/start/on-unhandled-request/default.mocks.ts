import { setupWorker, rest, HttpResponse } from 'msw'

const worker = setupWorker(
  rest.get('/user', () => {
    return HttpResponse.json({ firstName: 'John' })
  }),
)

// By default any unhandled requests are preformed as-is
// but produce warnings.
worker.start()
