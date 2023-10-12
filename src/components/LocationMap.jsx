import "styles/company.css";

import location_m from "assets/imgs/location_m.png";
import MoblieSelectBox from "components/commons/MoblieSelectBox";


const LocationMap = (props) => {
    return (
        <div>
            <div className="mainHeaderTitleContainer">
                <div className="mainHeaderTitleContainerImg">
                    &nbsp;
                </div>
                <div className="mainHeaderTitle">
                    <p className="titleText1">회사소개</p>
                    <p className="titleText2">Company</p>
                </div>
            </div>

            <MoblieSelectBox func={props.func} pageIdx={props.pageIdx} num={props.num} />

            <div className="mainContentContainer">
                <div className="content3">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">찾아오시는 길</p>
                        <p className="contentTitle2">대화공업 사업장 위치를 알려드립니다.</p>
                    </div>

                    <div className="mapContainer">
                        <div className="map">
                        </div>
                        <div className="map_m">
                            <div>
                                <img src={location_m} alt="맵이미지" />
                            </div>
                            <div className="map_m_text">
                                <p>
                                    <span className="map_m_text_title">사업장 주소</span><br />
                                    <span>대구광역시 달서구 월암동 1080-1 우편번호 : 704-833</span>
                                </p>
                                <p>
                                    <span className="map_m_text_title">사업장 연락처</span><br />
                                    <span>TEL : 82-581-2277~9</span><br />
                                    <span>FAX : 82-53-582-2252</span><br />
                                    <span>E-mail : webmaster@daehwaind.com</span><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default LocationMap;