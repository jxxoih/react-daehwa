import "styles/serviceCenter.css";

import MobileSelectBox from "components/commons/MobileSelectBox";



const Notice = (props) => {
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
                                    <tr onClick={()=> props.func(11, 1)}>
                                        <td>2</td>
                                        <td>안전신문, 대화공업 무재해 7배 달성</td>
                                        <td>2023-01-25</td>
                                    </tr>
                                    <tr onClick={()=> props.func(11, 0)}>
                                        <td>1</td>
                                        <td>대화공업 소개페이지 입니다.</td>
                                        <td>2023-01-25</td>
                                    </tr>


                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3">
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