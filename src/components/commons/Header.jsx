import MoveToUrl from "utils/MoveToUrl";
import Logo from "assets/imgs/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer1">
                <div className="headerLogo">
                    <img src={Logo} alt="logo" onClick={() => MoveToUrl(0)} />
                </div>
                <div className="headerMenu">
                    <ul>
                        <li className="subMenuToggle">회사소개</li>
                        <li className="subMenuToggle">제품소개</li>
                        <li className="subMenuToggle">인증서</li>
                        <li className="subMenuToggle">고객센터</li>
                    </ul>
                </div>
            </div>
            <div className="headerContainer2">
                <div className="headerLogo">
                    &nbsp;
                </div>
                <div className="headerSubMenu">
                    <ul>
                        <li>
                            <ul>
                                <li onClick={() => MoveToUrl(1)}>인사말</li>
                                <li onClick={() => MoveToUrl(2)}>연혁</li>
                                <li onClick={() => MoveToUrl(3)}>찾아오시는길</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li onClick={() => MoveToUrl(4)}>제품소개</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li onClick={() => MoveToUrl(5)}>인증서</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li onClick={() => MoveToUrl(6)}>고객문의</li>
                                <li onClick={() => MoveToUrl(7)}>공지사항</li>
                                <li onClick={() => MoveToUrl(8)}>자주묻는질문</li>
                                <li onClick={() => MoveToUrl(9)}>1:1 문의하기</li>
                                <li onClick={() => MoveToUrl(10)}>인재채용</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;