import "styles/certificate.css";

import up from "assets/imgs/up.png";
import kr1 from "assets/imgs/kr1.png";
import kr2 from "assets/imgs/kr2.png";
import cn1 from "assets/imgs/cn1.png";
import cn2 from "assets/imgs/cn2.png";



const Certificate = () => {
    return (
        <div>
            <div className="mainHeaderTitleContainer">
                <div className="mainHeaderTitleContainerImg">
                    &nbsp;
                </div>
                <div className="mainHeaderTitle">
                    <p className="titleText1">인증서</p>
                    <p className="titleText2">Certificate</p>
                </div>
            </div>
            <div className="mainHeaderTitleContainer_m">
                <div className="subMenuSelectBox">
                    <div className="subMenuSelector_m">
                        <div className="subMenuSelector" id="selectBox">
                            <p>
                                <span className="mainTitle_m">인증서</span>
                                <span className="mainTitle_eng_m">Certificate</span>
                                <span><img className="upImg disnone" src={up} alt="" /></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContentContainer">
                <div className="content1">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">인증서</p>
                        <p className="contentTitle2">대화공업은 표준을 엄격히 준수합니다.</p>
                    </div>


                    <div className="mainContent certificate">
                        <div className="certificateList">
                            <div className="certificateItem">
                                <h2>1. 한국공장 품질인증</h2>
                                <div>
                                    <img className="certificateImg" src={kr1} alt="인증서1" />
                                    <img className="certificateImg" src={kr2} alt="인증서2" />
                                </div>
                            </div>
                            <div className="certificateItem">
                                <h2>2. 중국공장 품질인증</h2>
                                <div>
                                    <img className="certificateImg" src={cn1} alt="인증서1" />
                                    <img className="certificateImg" src={cn2} alt="인증서2" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Certificate;