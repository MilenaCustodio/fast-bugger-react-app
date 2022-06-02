import {Link} from 'react-router-dom';


import './App.css';

function App() {
  return (
  <div className="App">

    <Link to = '/pages/home'> Pagina Principal</Link>
    <Link to = '/pages/admin'> Admin </Link>
  </div>
  );
}

export default App;
