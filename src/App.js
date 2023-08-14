import './App.css';
import LeftSideBar from './components/LeftNavBar';
import { mockNavBar } from './components/storage/mockNavBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar mockNavBar={mockNavBar} />
    </div>
  );
}

export default App;
