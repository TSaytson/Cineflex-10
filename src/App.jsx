import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './assets/Topbar'
import Home from './components/Home'
import Movie from './components/Movie'
import Session from './components/Session'
import Success from './components/Success'
import { ResetCSS } from './ResetCss'

export default function App() {

  return (
    <>
    <ResetCSS/>
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />}/>
        <Route path="/session/:showtimeId" element={<Session />} />
        <Route path='/success' element={<Success />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
