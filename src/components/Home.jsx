import Header from "./Header";
import Featured from "./Featured";
import Overview from "./Overview";
import Event from "./Event";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Featured />
      <Overview />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
