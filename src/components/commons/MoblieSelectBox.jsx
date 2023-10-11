import UpImgComp from "components/UpImgComp";
import { useState } from "react";


const MoblieSelectBox = (props) => {
    const [pageSelectBox, setPageSelectBox] = useState(false);

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
                            <span className="mainTitle_m">고객센터</span>
                            <span className="mainTitle_eng_m">Customer Center</span>
                            <span>
                                {pageSelectBox && (
                                    <UpImgComp arg="upImg" />
                                )}
                            </span>
                        </p>
                    </div>
                </div>
                {pageSelectBox && (
                    <div className="subMenuOption_m">
                        <div className="subMenuOptions">
                            <div className={`subMenuOption ${props.pageIdx === 6 && "on"}`}
                                onClick={props.pageIdx === (6) ? console.log("a") : () => moveLoc(6)}>
                                <p>고객문의</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className={`subMenuOption ${props.pageIdx === 7 && "on"}`}
                                onClick={props.pageIdx === (7) ? console.log("a") : () => moveLoc(7)}>
                                <p>공지사항</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className={`subMenuOption ${props.pageIdx === 8 && "on"}`}
                                onClick={props.pageIdx === 8 ? console.log("a") : () => moveLoc(8)}
                            >
                                <p>자주묻는질문</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className={`subMenuOption ${props.pageIdx === 9 && "on"}`}
                                onClick={props.pageIdx === (9) ? console.log("a") : () => moveLoc(9)}>
                                <p>1:1 문의하기</p>
                            </div>
                        </div>

                        <div className="subMenuOptions">
                            <div className={`subMenuOption ${props.pageIdx === 110 && "on"}`}
                                onClick={props.pageIdx === (10) ? console.log("a") : () => moveLoc(10)}>
                                <p>인재채용</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MoblieSelectBox;