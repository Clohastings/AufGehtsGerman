
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Contact from './components/pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/cover.css';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/contact" component={Contact}/>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
