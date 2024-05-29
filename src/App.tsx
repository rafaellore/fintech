import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Style.css'
import Header from './components/Header';
import Sales from './components/Sales';
import Sidenav from './components/Sidebar';
import { DataContextProvider } from './contexts/DataContext';
import Resume from './pages/Resume';
import Sell from './components/Sell';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resume />} />
              <Route path='/vendas' element={<Sales />} />
              <Route path='/vendas/:id' element={<Sell />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider></BrowserRouter>
  );
}

export default App
