import Navbor from './components/Navbor';
import Categories from './components/Categories';
import SalesImage from './components/SalesImage';
import Recommendedcard from './components/recommended_card'; 
import RecTopic from './components/RecTopic';
import PopTopic from './PopTopic';
import Footer from './components/Footer';
import Footers from './components/Footers';

function App() {
  return (
    <div className="App">
      <Navbor />
      <Categories />
      <SalesImage />
      <Recommendedcard />
      <RecTopic />
      <PopTopic />
      <Footer />
      <Footers />
    </div>
  );
}

export default App;
