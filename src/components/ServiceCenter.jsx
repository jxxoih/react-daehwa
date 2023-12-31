import "styles/serviceCenter.css";

import MobileSelectBox from "components/commons/MobileSelectBox";



const ServiceCenter = (props) => {

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

            <MobileSelectBox func={props.func} pageIdx={props.pageIdx} num={props.num} />

            <div className="mainContentContainer">
                <div className="content1">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">고객문의</p>
                        <p className="contentTitle2">무엇이든 물어보세요.</p>
                    </div>


                    <div className="mainContent serviceCenter">
                        <div className="serviceCenterGuide">
                            <div>
                                <p>
                                    대화공업은 4차 산업에 맞춰 '변화 속의 성장'을 이루기 위해 신제품 개발 및 신소재, 볼트 경량화 등 연구개발에 매진하고 있습니다.
                                    고객 감동 품질경영을 목표로, 지속적인 설비투자와 함께 핵심기술 개발, 인재 육성 등을 통해 경쟁력을 더욱 튼튼히 확보하고 있으며,
                                    어떠한 어려움 속에서도 끊임없는 도전과 혁신으로 급변하는 시장환경에서 고객의 다양한 Needs에 부합할 수 있는 품질과 원가 경쟁력을
                                    확보하기 위해 더욱더 노력할 것을 약속드립니다.
                                </p>
                                <p>
                                    제품관련 문의는 전화, FAX 및 1:1문의하기를 통해 E-mail로 주시기 바랍니다.
                                </p>
                                <p>
                                    Tel. 053-581-2277~9<br />
                                    Fax. 053-582-2252<br />
                                    E-mail. webmaster@daehwaind.com<br />
                                </p>
                                <div className="qna">
                                    <button className="qnaBtn" onClick={() => props.func(9)}>1:1 문의하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCenter;