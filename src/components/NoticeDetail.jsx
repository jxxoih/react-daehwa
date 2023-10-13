
import MoblieSelectBox from "components/commons/MoblieSelectBox";

import article_img1 from "assets/imgs/article_img1.png";

const NoticeDetail = (props) => {
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

            <MoblieSelectBox func={props.func} pageIdx={props.pageIdx} num={props.num} />


            <div className="mainContentContainer">
                <div className="content2">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">공지사항</p>
                        <p className="contentTitle2">유용한 정보 및 다양한 공지를 안내드립니다.</p>
                    </div>


                    <div className="mainContent">
                        <div>
                            <div className="article" id="article1">
                                <div className="articleTitle">
                                    <p>
                                        대화공업의 홈페이지가 리뉴얼 되었습니다!
                                    </p>
                                    <p>
                                        2023-01-25
                                    </p>
                                </div>

                                <div className="articleTitleWrapper">
                                    <div className="articleTitle_m">
                                        <p>
                                            대화공업의 홈페이지가 리뉴얼 되었습니다!
                                        </p>
                                    </div>
                                    <div className="articleTitle_m_date">
                                        <p>
                                            2023-01-25
                                        </p>
                                    </div>
                                </div>

                                <div className="articleContent">
                                    <p>
                                        대화공업의 홈페이지가 리뉴얼 되었습니다!<br />
                                        또한 기업 및 개인 쇼핑몰도 새롭게 준비하였으니 많은 관심 부탁드립니다.<br />
                                        감사합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="article" id="article2">
                                <div className="articleTitle">
                                    <p>
                                        안전신문, 대화공업 무재해 7배 달성
                                    </p>
                                    <p>
                                        2023-01-25
                                    </p>
                                </div>

                                <div className="articleTitleWrapper">
                                    <div className="articleTitle_m">
                                        <p>
                                            안전신문, 대화공업 무재해 7배 달성
                                        </p>
                                    </div>
                                    <div className="articleTitle_m_date">
                                        <p>
                                            2023-01-25
                                        </p>
                                    </div>
                                </div>

                                <div className="articleContent">
                                    <p>
                                        <img src={article_img1} alt="" />
                                        <br /><br />
                                        안전보건공단 대구서부지사(지사장 이주영)는 31일 무재해 7배를 달성한 대화공업과<br />
                                        무재해 2배를 달성한 에이비테크(주)를 각각 방문해 인증서를 전달했다.<br />
                                        <br />
                                        특히 대화공업은 사고사례교육을 실시하는 등 산업재해 예방을 위해 지속적인 노력을 기울인 결과<br />
                                        대화공업은 2006년 10월부터 2017년 6월까지 3000일 넘게 무재해를 유지했다.<br />
                                        <br />
                                        출처 : 안전신문(https://www.safetynews.co.kr)
                                        <br /><br />
                                    </p>
                                </div>
                            </div>

                            <div className="article" id="article3">
                                <div className="articleTitle">
                                    <p>
                                        영상
                                    </p>
                                    <p>
                                        2023-06-16
                                    </p>
                                </div>

                                <div className="articleTitleWrapper">
                                    <div className="articleTitle_m">
                                        <p>
                                            영상
                                        </p>
                                    </div>
                                    <div className="articleTitle_m_date">
                                        <p>
                                            2023-06-16
                                        </p>
                                    </div>
                                </div>

                                <div className="articleContent">
                                    <p>
                                        <div id="player">

                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className="articleBtns">
                                <div>
                                    <button className="articleBtn" id="aPrevBtn" onclick="prevArticle(this);">이전글</button>
                                    <button className="articleBtn" id="aNextBtn" onclick="nextArticle(this);">다음글</button>
                                </div>
                                <div>
                                    <button className="articleBtn boardBtn" id="boardBtn" onclick="moveToUrl('./notice.html');">목록</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;