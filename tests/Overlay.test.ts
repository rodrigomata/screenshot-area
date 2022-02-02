import { Overlay } from '../src/lib'

describe('Overlay test', () => {
  it('dummy test', () => {
    const overlay = new Overlay({})
    console.log('overlay', overlay)
    expect(true).toBeTruthy()
  })
})
