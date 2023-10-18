import "styles/company.css";
import MobileSelectBox from "components/commons/MobileSelectBox";



const History = (props) => {
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

            <MobileSelectBox func={props.func} pageIdx={props.pageIdx} num={props.num} />

            <div className="mainContentContainer">
                <div className="content2">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">연혁</p>
                        <p className="contentTitle2">1978년부터 걸어온 대화공업의 자랑스런 발걸음.</p>
                    </div>


                    <div className="history">
                        <div className="listRight">
                            <span></span>
                            <div>
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>2000</dt>
                                            <dt>01월 01일</dt>
                                            <dd>대구시 달서구 월암동 1080-1 법인 설립.</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>1997</dt>
                                            <dt>01월 24일</dt>
                                            <dd>대구시 달서구 월암동 1080-1 확장 이전.</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>1994</dt>
                                            <dt>03월 06일</dt>
                                            <dd>대구시 달서구 갈산동 26-1 확장 이전.</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>1986</dt>
                                            <dt>02월 01일</dt>
                                            <dd>대구시 북구 노원3가 256-1번지 확장 이전.</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>1978</dt>
                                            <dt>12월 06일</dt>
                                            <dd>대구시 북구 노원동 507번지 설립.</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="history_m">
                        <div className="listRight_m">
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <span className="year">2000</span>
                                            <span className="month">01월 01일</span>
                                        </dt>
                                        <dd>대구시 달서구 월암동 1080-1 법인 설립.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <span className="year">1997</span>
                                            <span className="month">01월 24일</span>
                                        </dt>
                                        <dd>대구시 달서구 월암동 1080-1 확장 이전.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <span className="year">1994</span>
                                            <span className="month">02월 01일</span>
                                        </dt>
                                        <dd>대구시 달서구 갈산동 26-1 확장 이전.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <span className="year">1986</span>
                                            <span className="month">01월 01일</span>
                                        </dt>
                                        <dd>대구시 북구 노원3가 256-1번지 확장 이전.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <span className="year">1978</span>
                                            <span className="month">01월 01일</span>
                                        </dt>
                                        <dd>대구시 북구 노원동 507번지 설립.</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default History;