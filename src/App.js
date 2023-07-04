
import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Customer from './screens/Customer';
function App() {
  return (
    <div className="App container">
      <Navbar />
      <hr/>

      {/* main body */}
      <div className='row' style={{padding: "50px"}}>
        <div className='col-4'>
          <Aside />
        </div>
        <div className='col'>
        <Customer />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
