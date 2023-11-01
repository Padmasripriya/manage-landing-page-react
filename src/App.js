import logo from './logo.svg';
import './App.css';
import './fonts.css';
import MenuComponent from './modules/MenuComponent';
import SectionComponent from './modules/SectionComponent';
import CtaComponent from './modules/CTAComponent';
import HeaderComponent from './modules/HeaderComponent';
import TwoColumnComponent from './modules/TwoColumnComponent';

function App() {
  return (
    <div className="App container">
      <MenuComponent />
      <HeaderComponent />
      <TwoColumnComponent />
      <SectionComponent />
      <CtaComponent />
    </div>
  );
}

export default App;
