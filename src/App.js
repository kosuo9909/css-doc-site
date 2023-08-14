import './App.css';
import LeftSideBar from './components/LeftNavBar';
import MainContent from './components/MainContent';
import RightAside from './components/RightAside';
import { mockNavBar } from './components/storage/mockNavBar';

function App() {
  return (
    <div className="app">
      <LeftSideBar mockNavBar={mockNavBar} />
      <MainContent/>
      <RightAside />
    </div>
  );
}

export default App;
