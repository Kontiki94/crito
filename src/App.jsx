import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import NotFound from './Components/NotFound/NotFound';
import News from './Views/News';
import NewsDetails from './Views/NewsDetails';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details' element={<NewsDetails/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
