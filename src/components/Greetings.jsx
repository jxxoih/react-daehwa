import "styles/company.css";

import up from "assets/imgs/up.png";
import logo from "assets/imgs/logo.png";

const Greetings = () => {
    return (
        <div clas>
            <div className="mainHeaderTitleContainer">
                <div className="mainHeaderTitleContainerImg">
                    &nbsp;
                </div>
                <div className="mainHeaderTitle">
                    <p className="titleText1">회사소개</p>
                    <p className="titleText2">Company</p>
                </div>
            </div>

            <div className="mainHeaderTitleContainer_m">
                <div className="subMenuSelectBox">
                    <div className="subMenuSelector_m">
                        <div className="subMenuSelector" id="selectBox" onclick="selectBox();">
                            <p>
                                <span className="mainTitle_m">회사소개</span>
                                <span className="mainTitle_eng_m">Company</span>
                                <span>
                                    <img className="upImg disnone" src={up} alt="" />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="subMenuOption_m disnone">
                        <div className="subMenuOptions">
                            <div className="subMenuOption on" onclick="return false;">
                                <p>인사말</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('history.html')">
                                <p>연혁</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('locationMap.html')">
                                <p>찾아오시는길</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="mainContentContainer">
                <div className="content1">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">인사말</p>
                        <p className="contentTitle2 greetingsSubTitle">"(주)대화공업의 제품은 조그마한 부품 하나에도 기술 집약적인 기업 철학이 담겨 있습니다."</p>
                    </div>
                    <div className="mainContent greetingsContent">
                        <div className="text_img">
                            <img className="contentImg" src={logo} />
                        </div>
                        <div className="contentText">
                            <div>
                                <p className="contentText1">
                                    당사는 1978년 창업이래
                                    리벳트 및 스크류 부품 생산에
                                    최선의 노력을 다하고 있습니다.
                                </p>
                                <p className="contentText1_m">
                                    당사는 1978년 창업이래<br />
                                    리벳트 및 스크류 부품 생산에<br />
                                    최선의 노력을 다하고 있습니다.
                                </p>

                                <p className="contentText2">
                                    그동안 제품 개발에 끊임없는 연구를 계속함으로써 외국에 의존하던 부품을 국산화로 대체하는 효과도 달성하였습니다.<br /><br />
                                    언제나 소비자를 먼저 생각함으로써 최고의 품질, 저렴한 가격, 적기 공급을 기업이념으로 삼고 꾸준한 연구와 품질관리를 계속함으로써
                                    고객들로부터 사랑과 신뢰를 받을 수 있는 기업으로 성장하고자 노사합심, 부단한 노력을 다할 것입니다.<br /><br />
                                    앞으로도 더 많은 지도편달과 성원을 부탁드립니다.<br /><br />
                                    감사합니다.<br /><br />
                                </p>
                                <p className="contentText3">
                                    <span className="rank">주식회사 대화공업 대표이사</span>&nbsp;<span className="ceoNm">송일강</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Greetings;