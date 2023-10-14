import closeBtn from "assets/imgs/hambutton_x_m.png";
import menuBtn from "assets/imgs/hambutton.png";
import logo from "assets/imgs/logo_m.png";
import eventUtil from "utils/common.js";


const MobileHeader = (props) => {
    return (
        <div className="header_m">
            <div className="headerContainer2_m vMOff">
                <div className="hambutton_x_m">
                    <img src={closeBtn} alt="close" onClick={eventUtil.closeMenu} />
                </div>
                <div className="hamMenuBar_m">
                    <ul>
                        <li onClick={() => props.func(1)}>
                            <h2>회사소개</h2>
                        </li>
                        <li onClick={() => props.func(1)}>
                            <h2>인사말</h2>
                        </li>
                        <li onClick={() => props.func(2)}>
                            <h2>연혁</h2>
                        </li>
                        <li onClick={() => props.func(3)}>
                            <h2>찾아오시는 길</h2>
                        </li>
                    </ul>

                    {/* <ul>
                        <li onClick={() => props.func(4)}>
                            <h2>제품소개</h2>
                        </li>
                    </ul> */}

                    <ul>
                        <li onClick={() => props.func(5)}>
                            <h2>인증서</h2>
                        </li>
                    </ul>

                    <ul>
                        <li onClick={() => props.func(6)}>
                            <h2>고객센터</h2>
                        </li>
                        <li onClick={() => props.func(6)}>
                            <h2>고객문의</h2>
                        </li>
                        <li onClick={() => props.func(7)}>
                            <h2>공지사항</h2>
                        </li>
                        <li onClick={() => props.func(8)}>
                            <h2>자주묻는질문</h2>
                        </li>
                        <li onClick={() => props.func(9)}>
                            <h2>1:1 문의하기</h2>
                        </li>
                        <li onClick={() => props.func(10)}>
                            <h2>인재채용</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="headerContainer1_m">
                <div className="headerLogo_m">
                    <img className="headerLogoImg_m" src={logo} alt="logo" onClick={() => props.func(0)} />
                </div>
                <div className="headerMenuBar_m" onClick={eventUtil.openMenu}>
                    <img src={menuBtn} alt="hambtn" />
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;