import './Style.css'
import Header from './components/Header';
import Sales from './components/Sales';
import Sidenav from './components/Sidebar';
import { DataContextProvider } from './contexts/DataContext';
import Resume from './pages/Resume';

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App
