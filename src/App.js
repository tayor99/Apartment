import './App.css';
import './component/Sidebar';
import Sidebar from './component/Sidebar';
import Body from './component/Body.js';
// import Header from './component/Header.js';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
