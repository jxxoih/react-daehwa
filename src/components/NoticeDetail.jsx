
import MoblieSelectBox from "components/commons/MoblieSelectBox";

import article_img1 from "assets/imgs/article_img1.png";
import eventUtil from "utils/common.js";
import { useEffect, useState } from "react";


const NoticeDetail = (props) => {
    const maxArticleNum = 2;
    const [isFirst, setIsFirst] = useState(false);
    const [isLast, setIsLast] = useState(false);
const html = document.querySelector('html');
const div = document.querySelector('.App');
    const prevArticle = (e) => {
        setIsFirst(false);
        setIsLast(false);

        if (e === 1 || e === 0) {
            setIsFirst(true);
        }

        props.func(11, e - 1);
    };

    const nextArticle = (e) => {
        setIsFirst(false);
        setIsLast(false);

        e = e + 1;

        if (e === 1 || e === maxArticleNum - 1) {
            setIsLast(true);
        }

        props.func(11, e);
    };

    useEffect(() => {
        if (props.notiNum === 0) {
            setIsFirst(true);
        }
        if (props.notiNum === maxArticleNum - 1) {
            setIsLast(true);
        }
    }, []);

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


                    <div className="mainContent serviceCenter">
                        <div>
                            {props.notiNum === 0 && (
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
                            )}
                            {props.notiNum === 1 && (

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
                            )}

                            <div className="articleBtns">
                                <div>
                                    <button className="articleBtn" id="aPrevBtn" disabled={isFirst} onClick={() => prevArticle(props.notiNum)}>이전글</button>
                                    <button className="articleBtn" id="aNextBtn" disabled={isLast} onClick={() => nextArticle(props.notiNum)}>다음글</button>
                                </div>
                                <div>
                                    <button className="articleBtn boardBtn" id="boardBtn" onClick={() => props.func(7)}>목록</button>
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