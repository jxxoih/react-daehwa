import "styles/serviceCenter.css";
import UpImgComp from "components/UpImgComp";


const Notice = () => {
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
                            <div className="subMenuOption on" onclick="return false;">
                                <p>공지사항</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className="subMenuOption" onclick="moveToUrl('faq.html')">
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
                <div className="content2">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">공지사항</p>
                        <p className="contentTitle2">유용한 정보 및 다양한 공지를 안내드립니다.</p>
                    </div>


                    <div className="mainContent serviceCenter">
                        <div>
                            <table className="board">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th className="noticeTitle">제목</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onclick="articleDetail(3);">
                                        <td>3</td>
                                        <td>영상</td>
                                        <td>2023-06-16</td>
                                    </tr>
                                    <tr onclick="articleDetail(2);">
                                        <td>2</td>
                                        <td>안전신문, 대화공업 무재해 7배 달성</td>
                                        <td>2023-01-25</td>
                                    </tr>
                                    <tr onclick="articleDetail(1);">
                                        <td>1</td>
                                        <td>대화공업 소개페이지 입니다.</td>
                                        <td>2023-01-25</td>
                                    </tr>


                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3">
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notice;