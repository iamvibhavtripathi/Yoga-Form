import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
import Payment from './Components/Payment';
import Completion from './Components/Completion';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Payment/>
      <Completion/>
      <Footer/>
    </div>
  );
}

export default App;
