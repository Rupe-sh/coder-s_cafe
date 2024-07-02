import Headers from "./components/Headers";
import Flook from "./components/Flook";
import Aboutus from "./components/Aboutus";
import Whychoose from "./components/Whychoose";
import Statscounter from "./components/Statscounter";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Chefs from "./components/Chefs";
import Booktable from "./Booktable";
import Gallery from "./components/Gallery";
import Contactus from "./components/Contactus";
import Futer from "./components/Futer";

function App() {
  return (
    <>
      <div className='app'>
        <Headers />
        <Flook />
        <main id="main">
          <Aboutus />
          <Whychoose />
          <Statscounter />
          <Menu />
          <Testimonials />
          <Events />
          <Chefs />
          <Booktable />
          <Gallery />
          <Contactus />
        </main>
        <footer id="footer" className="footer">
          <Futer />
        </footer>

        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <div id="preloader"></div>

      </div>
    </>
  )
}

export default App;