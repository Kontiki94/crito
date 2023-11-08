import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import NotFound from './Components/NotFound/NotFound';
import News from './Views/News';
import NewsDetails from './Views/NewsDetails';
import ScrollToTop from './Components/ScrollToTop';
import { ArticleProvider } from './Contexts/ArticleContext';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ArticleProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<NewsDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter >
  );
}

export default App;
