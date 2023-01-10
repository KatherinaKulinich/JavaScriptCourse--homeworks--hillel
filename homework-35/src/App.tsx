import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {

  return (
    <div className="container">
      <Header/>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App
