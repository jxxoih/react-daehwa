import MoblieSelectBox from "components/commons/MoblieSelectBox";



const Question = (props) => {
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
                <div className="content3">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">1:1 문의하기</p>
                        <p className="contentTitle2">궁금한 점을 쉽고 빠르게 문의해보세요.</p>
                    </div>


                    <div className="mainContent">
                        <div className="questionContainer">
                            <div>
                                <div className="questionGuide">
                                    <li>&nbsp;&nbsp;필수 입력 항목</li>
                                </div>
                                <div className="question">

                                    <div className="fields">
                                        <div className="inputFieldLow">
                                            <div className="questionText">
                                                <span>이름&nbsp;</span>
                                                <li></li>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="성함을 입력해주세요." className="lowInput" />
                                            </div>
                                        </div>
                                        <div className="inputFieldLow">
                                            <div className="questionText">
                                                <span>업체명&nbsp;</span>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="업체명을 입력해주세요." className="lowInput" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fields">
                                        <div className="inputFieldLong">
                                            <div className="questionText">
                                                <span>사업구분&nbsp;</span>
                                                <li></li>
                                            </div>
                                            <div className="bizDivision">
                                                <input type="radio" name="faqRadio" id="wholesale" />
                                                <label for="wholesale">도매업</label>
                                                <input type="radio" name="faqRadio" id="retail" />
                                                <label for="retail">소매업</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fields">
                                        <div className="inputFieldLow">
                                            <div className="questionText">
                                                <span>이메일&nbsp;</span>
                                                <li></li>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="이메일을 입력해주세요." className="lowInput" />
                                            </div>
                                        </div>
                                        <div className="inputFieldLow">
                                            <div className="questionText">
                                                <span>연락처&nbsp;</span>
                                                <li></li>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="연락처를 입력해주세요." className="lowInput" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fields">
                                        <div className="inputFieldLong">
                                            <div className="questionText">
                                                <span>제목&nbsp;</span>
                                                <li></li>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="제목을 입력해주세요." className="longInput" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputFieldLong">
                                            <div className="questionText">
                                                <span>문의내용&nbsp;</span>
                                            </div>
                                            <div>
                                                <textarea type="text" placeholder="문의내용을 입력해주세요." className="fieldTextArea"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fields">
                                        <div className="inputFieldLong">
                                            <div className="questionText">
                                                <span>개인정보처리방침&nbsp;</span>
                                            </div>
                                            <div>
                                                <div className="privacyPolicy">
                                                    <div>
                                                        <div>
                                                            <p className="ppNum">1. 수집하는 개인정보의 항목</p>
                                                            필수항목 : 이름, 회사명, 이메일, 연락처, 문의내용<br />
                                                            <p className="ppNum">2. 개인정보의 수집 및 이용 목적</p>
                                                            개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는
                                                            사용되지 않으며 이용 목적이 변경될 시에는「개인정보보호법」제 18조에 따라 별도의
                                                            동의를 받는 등 필요한 조치를 이행할 예정입니다. “개인정보의 처리”란 개인정보의 수집, 생성,기록, 저장,
                                                            보유, 가공, 편집, 검색, 출력, 정정(訂正), 복구, 이용,
                                                            제공, 공개, 파기(破棄), 그 밖에 이와 유사한 행위를 말함.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="radioCheck">
                                        <div>
                                            <input type="checkbox" name="radioCheck" id="radioCheck" onchange="aa(1)" hidden />
                                            <input type="radio" name="check" className="check" id="radio1" onclick="aa(2);" />
                                            <input type="radio" name="check" className="check" id="radio2" hidden />

                                            <label for="radioCheck" className="radioCheckLabel">
                                                개인정보 수집 및 이용 동의 개인정보취급방침
                                            </label>
                                        </div>
                                    </div>

                                    <div className="sendBtnFrame">
                                        <div className="sendBtn">

                                        </div>
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

export default Question;