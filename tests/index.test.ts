import { test } from '../src'

describe('Dummy test', () => {
  it('should test correctly', () => {
    expect(test('Rod')).toStrictEqual('Hello Rod')
  })
})
