
import './App.css'
import Header from './Components/Header/Header'

import PortfolioSection from './Components/PortfolioSection/PortfolioSection';
import AboutMeSection from './Components/AboutMeSection/AboutMeSection';
import SkillSection from './Components/SkillSection/SkillSection'
import ContactsSection from './Components/ContactsSection/ContactsSection';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <>
    <Header/>
    <AboutMeSection/>    
    <SkillSection/>
    <PortfolioSection/>
    <ContactsSection/>
    <Footer/>
    </>

  );
  
}

export default App;
