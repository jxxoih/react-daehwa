import { useEffect, useState } from "react";

import Header from 'components/commons/Header';
import MobileHeader from 'components/commons/MobileHeader';
import Footer from 'components/commons/Footer';

import "styles/common.css";
import "styles/header.css";
import "styles/footer.css";

function App() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth;
      if (width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="App">
      {!isMobile && (
        <Header />
      )}
      {isMobile && (
        <MobileHeader />
      )}

      <Footer />
    </div>
  );
}

export default App;
