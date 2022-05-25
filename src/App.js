import logo from './logo.svg';
import './App.css';
import '../src/asset/style.scss';
import MainRouter from './routers/mainRouters';

function App() {

  return (
    <>
      <main className='container'>
        <MainRouter />
      </main>
    </>
  );
}

export default App;
