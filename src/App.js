import logo from './logo.svg';
import './App.css';
import './fonts.css';
import MenuComponent from './modules/MenuComponent';
import SectionComponent from './modules/SectionComponent';
import CtaComponent from './modules/CTAComponent';

function App() {
  return (
    <div className="App">
      <MenuComponent />
      <SectionComponent />
      <CtaComponent />
    </div>
  );
}

export default App;
