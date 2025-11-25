import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configStore.js'
import routes from './routes/routes.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider> */}
      <Provider store={store}>
        <RouterProvider router={routes}/>
      </Provider>
      <App />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
