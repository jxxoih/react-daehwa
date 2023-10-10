import footer_m_logo from "assets/imgs/footer_m_logo.png";

const MobileFooter = () => {
    return (
        <div className="footer_m">
            <div className="footer_m_info">
                <div className="footer_m_logo">
                    <img src={footer_m_logo} alt="footerlogo" />
                </div>
                <div className="footer_m_context">
                    <p>
                        대구광역시 달서구 성서동로 158 (우 : 42721)<br />
                        #158, SEONGSEODONG-RO,DALSEO-GU,DAEGU,KOREA.
                    </p>
                    <br />
                    <p>
                        TEL : 82-581-2277~9 FAX : 82-53-582-2252<br />
                        E-mail : webmaster@daehwaind.com
                    </p>
                </div>
                <div className="footer_m_copyright">
                    <p>
                        ⓒ 2023. DAEHWA All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MobileFooter;