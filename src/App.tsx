import './Style.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
      <Sidebar />
      <main>
        <Header />
        <Resume />
      </main>
    </div>
  );
}

export default App
