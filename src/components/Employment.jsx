import UpImgComp from "components/UpImgComp";

import employment from "assets/imgs/employment.png";
import employment_m from "assets/imgs/employment_m.png";

const Employment = () => {
    return (
        <div>

            <div className="mainHeaderTitleContainer">
                <div className="mainHeaderTitleContainerImg">
                    &nbsp;
                </div>
                <div className="mainHeaderTitle">
                    <p className="titleText1">고객센터</p>
                    <p className="titleText2">Customer Center</p>
                </div>
            </div>

            <div className="mainHeaderTitleContainer_m">
                <div className="subMenuSelectBox">
                    <div className="subMenuSelector_m">
                        <div className="subMenuSelector" id="selectBox" onclick="selectBox();">
                            <p>
                                <span className="mainTitle_m">고객센터</span>
                                <span className="mainTitle_eng_m">Customer Center</span>
                                <span>
                                    <UpImgComp arg="upImg disnone" />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="subMenuOption_m disnone">
                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('serviceCenter.html')">
                                <p>고객문의</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('notice.html')">
                                <p>공지사항</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('faq.html')">
                                <p>자주묻는질문</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('question.html');">
                                <p>1:1 문의하기</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption on" onclick="return false;">
                                <p>인재채용</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContentContainer">
                <div className="content1">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">인재채용</p>
                        <p className="contentTitle2">대화와 함께할 인재를 기다립니다.</p>
                    </div>


                    <div className="mainContent employmentMain">
                        <div>
                            <div className="employmentFrame">
                                <div>
                                    <div>
                                        <p>
                                            현재 채용중인 공고가 없습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="employmentImg">

                                <img src={employment} alt="" />

                                <div className="employmentImg1">
                                    <div className="employmentImgText">
                                        <p>채용 관련 문의사항이 있으신가요?</p>
                                        <p>대화공업은 리벳트 및 스크류 부품을 생산하는 기업입니다.</p>
                                    </div>
                                    <div className="emplymentImgBtn">
                                        <button onclick="moveToUrl('question.html')">문의하기</button>
                                    </div>
                                </div>
                            </div>

                            <div className="employmentImg_m">
                                <img src={employment_m} alt="" />

                                <div className="employmentImg1">
                                    <div className="employmentImgText">
                                        <p>채용 관련 문의사항이 있으신가요?</p>
                                        <p>대화공업은 리벳트 및 스크류 부품을 <br />생산하는 기업입니다.</p>
                                    </div>
                                    <div className="emplymentImgBtn">
                                        <button onclick="moveToUrl('question.html')">문의하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Employment;