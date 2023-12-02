import './App.css';
import Bar from './components/barComponents/Bar';
import Footer from './components/footerComponents/Footer';
import Main from "./components/mainComponents/Main"


function App() {
  return (
<div className="wrapper">
  <div className="container">
    <Main />

    <Bar />

    <Footer />
  </div>
</div>

  )
}

export default App