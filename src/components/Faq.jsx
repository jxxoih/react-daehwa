import "styles/serviceCenter.css";
import UpImgComp from "components/UpImgComp";


const Faq = () => {
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
                            <div className="subMenuOption on" onclick="return false;">
                                <p>자주묻는질문</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('question.html')">
                                <p>1:1 문의하기</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('employment.html')">
                                <p>인재채용</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContentContainer">
                <div className="content4">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">자주묻는질문</p>
                        <p className="contentTitle2">자주 문의하시는 질문들에 대한 답변입니다.</p>
                    </div>


                    <div className="mainContent serviceCenter">
                        <div>
                            <ul className="faq">
                                <li onclick="aaa(this)">
                                    <div className="faqTitle">
                                        <p>
                                            Q. 제품별 가격을 알고 싶습니다.
                                        </p>
                                        <p>
                                            <UpImgComp arg="faqUp disnone" />
                                            <UpImgComp arg="faqDown" />
                                        </p>
                                    </div>
                                    <div className="faqSlider disnone faqUp">
                                        <div>
                                            A. 일반적인 제품에 대한 단가는 (주)대화공업에서 운영하고 있는 기업 / 개인 쇼핑몰에서 확인 가능합니다.<br />
                                            또한 전화나 이메일 등으로 연락 주시면 자세하게 안내 드리겠습니다.<br />
                                            (영업본부 전화번호 : 82-581-2277~9)※ 신제품 및 주문제작품은 별도로 문의하시기 바랍니다.
                                        </div>
                                    </div>
                                </li>
                                <li onclick="aaa(this)">
                                    <div className="faqTitle">
                                        <p>
                                            Q. 납품 일정 및 배송 방법에 대해서 궁금합니다.
                                        </p>
                                        <p>
                                            <UpImgComp arg="faqUp disnone" />
                                            <UpImgComp arg="faqDown" />
                                        </p>
                                    </div>
                                    <div className="faqSlider disnone faqUp">
                                        <div>
                                            A. 납품 일정은 담당직원과 협의 후 일정을 조율합니다.<br />
                                            일반적인 배송가능 지역은 서울 및 경기도(일부지역 제외)이며, 협의를 통하여 별도의 배송지역을 선정하실 수 있습니다.<br /><br />
                                            A. 일반 화물배송은 대신화물과 경동화물로 배송하고 있습니다.<br />
                                            화물 마감시간은 평일 오후4시 // 토요일 오전 12시까지 입니다.
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Faq;