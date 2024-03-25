import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'

import Error from './pages/Error-page/ErrorPage'

import AboutUs from './pages/About-us/aboutUs';
import Propertypage from './pages/Property/Propertypage.tsx';

import Captureallproperty from './components/Captureproperty/Captureallproperty.tsx';
import { Contact } from './pages/Contact/Contact.tsx';



const router = createHashRouter([
  {
    path: "/", element: <App />, errorElement: <Error />,
  },
  {
    path: "/nosotros", element: <AboutUs />, errorElement: <Error />,
  },
  {
    path: "/propiedades", element: <Captureallproperty />, errorElement: <Error />,
  },
  {
    path: "/propiedades/:id", element: <Propertypage />, errorElement: <Error />,
  },
  {
    path: "/contacto", element: <Contact />, errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
