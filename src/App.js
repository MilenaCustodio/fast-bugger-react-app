import {Link} from 'react-router-dom';


import './App.css';

function App() {
  return (
  <div className="App">

    <Link to = '/home'> Pagina Principal</Link>
    <Link to = '/admin'> Admin </Link>
  </div>
  );
}

export default App;
