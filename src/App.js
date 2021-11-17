import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Reservations from './components/Reservations'
import ReservationForm from './components/ReservationForm'

// the process of splitting our component through different URLs
// start from declaring different ROUTES

// for declaring routes, first and foremost wrap everything inside a BrowserRouter
// the BrowserRouter is a wrapper component that allows inner elements to be routed

// Routes is a component that must live just inside BrowserRouter, you're going
// to use it for inserting any url-dependent component

// a Route component is going to render your 'element' just if a match of 'path' is found
// in the URL

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* the MyNavbar really doens't need to be url-dependent */}
        <MyNavbar brand="Strivestaurant" />
        <Routes>
          {/* here we must have just Route components */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<h1>PROFILE PAGE</h1>} />
          <Route
            path="/reservations"
            element={
              <>
                <Reservations />
                <ReservationForm />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
