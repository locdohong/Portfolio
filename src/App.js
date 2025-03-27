import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

export const AppContext = createContext(null);

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowScroll((showScroll) => {
        if (
          !showScroll &&
          (document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150)
        )
          return true;

        if (
          showScroll &&
          document.body.scrollTop < 50 &&
          document.documentElement.scrollTop < 50
        )
          return false;

        return showScroll;
      });
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppContext.Provider value={{ alert, setAlert }}>
      <div className="App">
        <Header />
        <Introduction />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <Alert />
        <div
          className={`scroll_top box_shadow ${showScroll ? "active" : ""}`}
          onClick={handleScrollTop}
        >
          <i className="fa-solid fa-arrow-up" />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
