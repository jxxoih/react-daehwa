import { useEffect, useState } from "react";

import Header from 'components/commons/Header';
import MobileHeader from 'components/commons/MobileHeader';
import Footer from 'components/commons/Footer';
import MobileFooter from 'components/commons/MobileFooter';

import topBtn from "assets/imgs/top.png";
import eventUtil from "utils/common.js";

import "styles/common.css";
import "styles/header.css";
import "styles/footer.css";

import Main from "components/Main";
import Greetings from "components/Greetings";
import LocationMap from "components/LocationMap";
import ProductInfo from "components/ProductInfo";
import Certificate from "components/Certificate";
import ServiceCenter from "components/ServiceCenter";
import Notice from "components/Notice";
import Faq from "components/Faq";
import Question from "components/Question";
import Employment from "components/Employment";
import History from "components/History";


function App() {
  const [isMobile, setIsMobile] = useState(null);
  const [curLoc, setCurLoc] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function topBtn() {
      let offsetY = window.pageYOffset;

      if (offsetY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }


    function handleResize() {
      let width = window.innerWidth;
      if (width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('scroll', topBtn);
    topBtn();

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', topBtn);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const MoveToUrl = (idx) => {
    setCurLoc(idx);
  }

  return (
    <div className="App">
      {!isMobile && (
        <Header
          func={MoveToUrl}
        />
      )}
      {isMobile && (
        <MobileHeader
          func={MoveToUrl}
        />
      )}

      {isScroll && (
        <div className="topBtn" onClick={() => eventUtil.topScroll()}>
          <img src={topBtn} alt="topBtn" />
        </div>
      )}

      {curLoc == 0 && (
        <Main />
      )}
      {curLoc == 1 && (
        <Greetings />
      )}
      {curLoc == 2 && (
        <History />
      )}
      {curLoc == 3 && (
        <LocationMap />
      )}
      {/* {curLoc == 4 && (
        <ProductInfo />
      )} */}
      {curLoc == 5 && (
        <Certificate />
      )}
      {curLoc == 6 && (
        <ServiceCenter
          func={MoveToUrl}
          pageIdx={6}
          num={3}
        />
      )}
      {curLoc == 7 && (
        <Notice
          func={MoveToUrl}
          pageIdx={7}
          num={3}
        />
      )}
      {curLoc == 8 && (
        <Faq
          func={MoveToUrl}
          pageIdx={8}
          num={3}
        />
      )}
      {curLoc == 9 && (
        <Question
          func={MoveToUrl}
          pageIdx={9}
          num={3}
        />
      )}
      {curLoc == 10 && (
        <Employment
          func={MoveToUrl}
          pageIdx={10}
          num={3}
        />
      )}





      {!isMobile && (
        <Footer
          func={MoveToUrl}
        />
      )}
      {isMobile && (
        <MobileFooter />
      )}
    </div>
  );
}

export default App;
