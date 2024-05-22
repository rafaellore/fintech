import './Style.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { DataContextProvider } from './contexts/DataContext';
import Resume from './pages/Resume';

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidebar />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App
