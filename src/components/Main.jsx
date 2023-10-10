import "styles/main.css";

import slide_img_1 from "assets/imgs/slide_img_1.jpg";
import slide_img_m_1 from "assets/imgs/slide_img_m_1.png";
import slide_img_2 from "assets/imgs/slide_img_2.jpg";
import slide_img_m_2 from "assets/imgs/slide_img_m_2.png";
import slide_img_3 from "assets/imgs/slide_img_3.jpg";
import slide_img_m_3 from "assets/imgs/slide_img_m_3.png";
const Main = () => {
    return (
        <div>
            <div className="mainContentContainer">
                <div className="sliderContainer">
                    <div className="swiper mySwiper mainSlider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide mainSlide">
                                <div className="slideTextWrapper">
                                    <span className="slideText1">
                                        (주) 대화공업의 제품은 <br />
                                    </span>
                                    <span className="slideText2">
                                        조그마한 부품하나에도 기술 집약적인 <br />기업철학이 담겨져 있습니다.
                                    </span>
                                </div>
                                <div className="img-size">
                                    <div className="img-center">
                                        <img className="slideImg" src={slide_img_1} alt="슬라이드 이미지" />
                                        <img className="slideImg_m" src={slide_img_m_1} alt="슬라이드 이미지" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide mainSlide">
                                <div className="slideTextWrapper">
                                    <span className="slideText1">
                                        (주) 대화공업의 제품은 <br />
                                    </span>
                                    <span className="slideText2">
                                        창업이래 리벳트 및 스쿠류 부품 생산에 <br />최선의 노력을 다하고 있습니다.
                                    </span>
                                </div>
                                <div className="img-size">
                                    <div className="img-center">
                                        <img className="slideImg" src={slide_img_2} alt="슬라이드 이미지" />
                                        <img className="slideImg_m" src={slide_img_m_2} alt="슬라이드 이미지" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide mainSlide">
                                <div className="slideTextWrapper">
                                    <span className="slideText1">
                                        (주) 대화공업의 제품은 <br />
                                    </span>
                                    <span className="slideText2">
                                        끊임없는 연구를 계속함으로써 외국부품을 <br />국산화로 대체하는 효과를 달성하였습니다.
                                    </span>
                                </div>
                                <div className="img-size">
                                    <div className="img-center">
                                        <img className="slideImg" src={slide_img_3} alt="슬라이드 이미지" />
                                        <img className="slideImg_m" src={slide_img_m_3} alt="슬라이드 이미지" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>

                    {/* <script>
                                    var swiper = new Swiper(".mainSlider", {
                                        centeredSlides: true,
                                    autoplay: {
                                        delay: 4500,
                                    disableOnInteraction: false,
                        },
                                    pagination: {
                                        el: ".swiper-pagination",
                                    clickable: true,
                        },
                                    navigation: {
                                        nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                        },
                                    loop: true,

                    });
                                </script> */}

                </div>
            </div>
        </div>
    );
}

export default Main;