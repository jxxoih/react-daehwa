import employment from "assets/imgs/employment.png";
import employment_m from "assets/imgs/employment_m.png";
import MobileSelectBox from "components/commons/MobileSelectBox";

const Employment = (props) => {
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
                                        <button onClick={() => props.func(9)}>문의하기</button>
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
                                        <button onClick={() => props.func(9)}>문의하기</button>
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