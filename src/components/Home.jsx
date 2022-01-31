import Header from "./Header";
import Featured from "./Featured";
import Overview from "./Overview";
import Event from "./Event";
import Contact from "./Contact";
import Product from "./product/Product";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Featured />
      <Overview />
      <Event />
      <Contact />
    </div>
  );
}

export default Home;
