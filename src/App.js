import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Category from './routes/Category';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
