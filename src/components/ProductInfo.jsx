import "styles/product.css";

import UpImgComp from "components/UpImgComp";

const ProductInfo = () => {
    return (
        <div>
            <div className="mainHeaderTitleContainer">
                <div className="mainHeaderTitleContainerImg">
                    &nbsp;
                </div>
                <div className="mainHeaderTitle">
                    <p className="titleText1">제품소개</p>
                    <p className="titleText2">Product</p>
                </div>
            </div>

            <div className="mainHeaderTitleContainer_m">
                <div className="subMenuSelectBox">
                    <div className="subMenuSelector_m">
                        <div className="subMenuSelector" id="selectBox">
                            <p>
                                <span className="mainTitle_m">제품소개</span>
                                <span className="mainTitle_eng_m">Product</span>
                                <span>
                                    <UpImgComp arg="upImg disnone" />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContentContainer">
                <div className="content1">
                    <div className="mainContentTitle">
                        <p className="contentTitle1">제품소개</p>
                        <p className="contentTitle2">대화공업의 다양한 제품을 확인하세요!</p>
                    </div>

                    <div className="mainContent productMaingContent">
                        <div className="productWrapper">
                            <div className="productCategory">
                            </div>

                            <div className="productCategory_m">
                            </div>
                        </div>

                        <div className="productWrapper">
                            <div className="productList">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;