import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Movie from './components/Movie'
import Session from './components/Session'
import Success from './components/Success'
import { ResetCss } from './ResetCss'

export default function App() {

  return (
    <>
    <ResetCss/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />}/>
        <Route path="/session/:sessionId" element={<Session />} />
        <Route path='/sucess' element={<Success />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
