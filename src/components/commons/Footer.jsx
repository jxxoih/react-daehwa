const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-frame">
                <div className="footerText">
                    리벳트 및  스크류 부품 생산에 최선의 노력을 다하고 있는 대화공업입니다.
                </div>

                <div className="footerContainer1">
                    <div className="footerSitemapArea">
                        <ul>
                            <li className="footerSitemapList">
                                <h2 className="footerMenu">회사소개</h2>
                                <ul>
                                    <li onClick={() => props.func(1)}>인사말</li>
                                    <li onClick={() => props.func(2)}>연혁</li>
                                    <li onClick={() => props.func(3)}>찾아오시는 길</li>
                                </ul>
                            </li>
                            {/* <li className="footerSitemapList">
                                <h2 className="footerMenu">제품소개</h2>
                                <ul>
                                    <li onClick={() => props.func(4)}>제품소개</li>
                                </ul>
                            </li> */}
                            <li className="footerSitemapList">
                                <h2 className="footerMenu">인증서</h2>
                                <ul>
                                    <li onClick={() => props.func(5)}>인증서</li>
                                </ul>
                            </li>
                            <li className="footerSitemapList">
                                <h2 className="footerMenu">고객센터</h2>
                                <ul>
                                    <li onClick={() => props.func(6)}>고객문의</li>
                                    <li onClick={() => props.func(7)}>공지사항</li>
                                    <li onClick={() => props.func(8)}>자주묻는질문</li>
                                    <li onClick={() => props.func(9)}>1:1 문의하기</li>
                                    <li onClick={() => props.func(10)}>인재채용</li>
                                </ul>
                            </li>
                            <div className="footerExtraArea">
                                <div className="footerServiceCenter">
                                    <div>
                                        <span className="serviceCenterText">
                                            고객센터 운영시간
                                        </span>
                                    </div>
                                    <div>
                                        <span className="serviceCenterTime">
                                            <span className="textStyle">AM</span>
                                            07:50 ~
                                            <span className="textStyle">PM</span>
                                            18:10
                                        </span>
                                    </div>
                                    <div>
                                        <span className="tel">
                                            Tel 82+ 053-581-2277~9
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="footerContainer2">
                    <div className="footerCopyright">
                        <div>대구광역시 달서구 성서동로 158(월암동) 우편번호 : 42721 #158, SEONGSEODONG-RO,DALSEO-GU,DAEGU,KOREA</div>
                        <div>TEL : 82-581-2277~9 FAX : 82-53-582-2252 E-mail : webmaster@daehwaind.com</div>
                        <div className="footerReserved">ⓒ 2023. DAEHWA All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;