// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import reducer from '../../reducers/rootReducer'

function wraperRender(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { wraperRender }