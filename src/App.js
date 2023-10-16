import React, { useEffect, useState } from "react";

import NotFound from "pages/NotFound";

import topBtn from "assets/imgs/top.png";
import eventUtil from "utils/common.js";

import "styles/common.css";
import "styles/header.css";
import "styles/footer.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "components/commons/MainLayout";
import { Suspense } from "react";

// import Main from "components/Main";
const Main = React.lazy(() => import('components/Main'))
const Greetings = React.lazy(() => import('components/Greetings'));
const LocationMap = React.lazy(() => import('components/LocationMap'));
const Certificate = React.lazy(() => import('components/Certificate'));
const ServiceCenter = React.lazy(() => import('components/ServiceCenter'));
const Notice = React.lazy(() => import('components/Notice'));
const Faq = React.lazy(() => import('components/Faq'));
const Question = React.lazy(() => import('components/Question'));
const Employment = React.lazy(() => import('components/Employment'));
const History = React.lazy(() => import('components/History'));
const NoticeDetail = React.lazy(() => import('components/NoticeDetail'));


function App() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [curLoc, setCurLoc] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [notiNum, setNotiNum] = useState(null);

  const mainPath = "/";
  const greetingsPath = "/greetings";
  const historyPath = "/history";
  const locMapPath = "/locationMap";
  const productPath = "/";
  const certificatePath = "/certificate";
  const serviceCenterPath = "/serviceCenter";
  const noticePath = "/notice";
  const faqPath = "/faq";
  const questionPath = "/question";
  const employmentPath = "/employment";
  const noticeDetailPath = "/noticeDetail";

  const pathArr = [
    mainPath,
    greetingsPath,
    historyPath,
    locMapPath,
    productPath,
    certificatePath,
    serviceCenterPath,
    noticePath,
    faqPath,
    questionPath,
    employmentPath,
    noticeDetailPath,
  ]

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

  const MoveToUrl = (idx, nNum) => {
    if (isMobile) {
      eventUtil.closeMenu();
    }

    setNotiNum(nNum);

    if (curLoc === 0) {
      navigate("/");
    }

    if (curLoc !== idx && nNum) {
      eventUtil.topScroll();
    }
    setCurLoc(idx);
    navigate(pathArr[idx])
  }

  return (
    <div className="App">
      {isScroll && (
        <div className="topBtn" onClick={() => eventUtil.topScroll()}>
          <img src={topBtn} alt="topBtn" />
        </div>
      )}
      <Suspense>
        <Routes>
          <Route element={<MainLayout func={MoveToUrl} />}>
            <Route
              path={mainPath}
              element={<Main
                moblieStat={isMobile}
                func={MoveToUrl}
              />}
            />
            <Route
              path={greetingsPath}
              element={<Greetings
                func={MoveToUrl}
                pageIdx={1}
                num={0}
              />}
            />
            <Route
              path={historyPath}
              element={<History
                func={MoveToUrl}
                pageIdx={2}
                num={0}
              />}
            />
            <Route
              path={locMapPath}
              element={<LocationMap
                func={MoveToUrl}
                pageIdx={3}
                num={0}
              />}
            />
            <Route
              path={certificatePath}
              element={<Certificate
                func={""}
                pageIdx={4}
                num={1}
              />}
            />
            <Route
              path={serviceCenterPath}
              element={<ServiceCenter
                func={MoveToUrl}
                pageIdx={6}
                num={2}
              />}
            />
            <Route
              path={noticePath}
              element={<Notice
                func={MoveToUrl}
                pageIdx={7}
                num={2}
              />}
            />
            <Route
              path={noticeDetailPath}
              element={<NoticeDetail
                func={MoveToUrl}
                pageIdx={11}
                num={2}
                notiNum={notiNum}
              />}
            />
            <Route
              path={faqPath}
              element={<Faq
                func={MoveToUrl}
                pageIdx={8}
                num={2}
              />}
            />
            <Route
              path={questionPath}
              element={
                <Question
                  func={MoveToUrl}
                  pageIdx={9}
                  num={2}
                />
              }
            />
            <Route
              path={employmentPath}
              element={
                <Employment
                  func={MoveToUrl}
                  pageIdx={10}
                  num={2}
                />
              }
            />
          </Route>

          <Route
            path="*"
            element={<NotFound func={MoveToUrl} />}
          />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
