import UpImgComp from "components/UpImgComp";
import { useState } from "react";


const MoblieSelectBox = (props) => {
    const [pageSelectBox, setPageSelectBox] = useState(false);
    const [pageName, setPageName] = useState([{
        kr: "회사소개",
        en: "Company"
    }, {
        kr: "고객센터",
        en: "Customer Center"
    }]);

    const selectBox = () => {
        setPageSelectBox(!pageSelectBox)
    };

    const moveLoc = (arg) => {
        props.func(arg);
    }

    return (
        <div className="mainHeaderTitleContainer_m">
            <div className="subMenuSelectBox">
                <div className="subMenuSelector_m">
                    <div className={`subMenuSelector ${pageSelectBox ? "_toggle" : ""}`} id="selectBox" onClick={() => selectBox()}>
                        <p>

                            <span className="mainTitle_m">{pageName[props.num].kr}</span>
                            <span className="mainTitle_eng_m">{pageName[props.num].en}</span>

                            <span>
                                {pageSelectBox && (
                                    <UpImgComp arg="upImg" />
                                )}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="subMenuOption_m">
                    {pageSelectBox && props.num === 0 && (
                        <>
                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 1 && "on"}`}
                                    onClick={() => moveLoc(1)}
                                >
                                    <p>인사말</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 2 && "on"}`}
                                    onClick={() => moveLoc(2)}
                                >
                                    <p>연혁</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 3 && "on"}`}
                                    onClick={() => moveLoc(3)}
                                >
                                    <p>찾아오시는길</p>
                                </div>
                            </div>
                        </>
                    )}
                    {pageSelectBox && props.num === 1 && (
                        <>
                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 6 && "on"}`}
                                    onClick={() => moveLoc(6)}
                                >
                                    <p>고객문의</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 7 && "on"}`}
                                    onClick={() => moveLoc(7)}
                                >
                                    <p>공지사항</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 8 && "on"}`}
                                    onClick={() => moveLoc(8)}
                                >
                                    <p>자주묻는질문</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 9 && "on"}`}
                                    onClick={() => moveLoc(9)}
                                >
                                    <p>1:1 문의하기</p>
                                </div>
                            </div>

                            <div className="subMenuOptions">
                                <div className={`subMenuOption ${props.pageIdx === 10 && "on"}`}
                                    onClick={() => moveLoc(10)}
                                >
                                    <p>인재채용</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MoblieSelectBox;