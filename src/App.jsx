import "./App.css";
import {
  Cart,
  FlexContent,
  Footer,
  HeroSection,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data.js";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <HeroSection heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories endpoint={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
