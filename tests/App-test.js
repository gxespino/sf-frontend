import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import App from 'src/components/App'

describe('App component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<App/>, node, () => {
      expect(node.textContent).toContain('Smarter Flips')
    })
  })
})
