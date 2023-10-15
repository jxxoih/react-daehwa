import "styles/main.css";

import slide_img_1 from "assets/imgs/slide_img_1.jpg";
import slide_img_m_1 from "assets/imgs/slide_img_m_1.png";
import slide_img_2 from "assets/imgs/slide_img_2.jpg";
import slide_img_m_2 from "assets/imgs/slide_img_m_2.png";
import slide_img_3 from "assets/imgs/slide_img_3.jpg";
import slide_img_m_3 from "assets/imgs/slide_img_m_3.png";

import headphones from "assets/imgs/headphones.svg";
import newspaper from "assets/imgs/newspaper.svg";
import favorite from "assets/imgs/favorite.svg";
import telephone from "assets/imgs/telephone.svg";
import placeholder from "assets/imgs/placeholder.svg";
import user from "assets/imgs/user.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"



const Main = (props) => {
    const imgsUrl = "assets/imgs/";
    const mainProductObj = [
        {
            img: "product1.png",
            name: "칼라피스",
        },
        {
            img: "product2.png",
            name: "육각머리 직결피스",
        },
        {
            img: "product3.png",
            name: "알루미늄리벳",
        },
        {
            img: "product4.png",
            name: "와샤머리(W)",
        },
    ];


    return (
        <div>
            <div className="mainContentContainer">
                <div className="sliderContainer">
                    <Swiper
                        className="mySwiper mainSlider"
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        loop={true}
                        style={{
                            "--swiper-pagination-color": "rgba(255,255,255,0.8)",
                            "--swiper-navigation-color": "rgba(255,255,255,0.8)",
                            "--swiper-pagination-bottom": "1.5rem",
                            "--swiper-navigation-sides-offset": "20px"
                        }}
                    >
                        <SwiperSlide className="mainSlide">
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
                        </SwiperSlide>
                        <SwiperSlide className="mainSlide">
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
                        </SwiperSlide>
                        <SwiperSlide className="mainSlide">
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
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="mainProductContainer">
                    <div className="titleWrapper">
                        <div className="containerTitle">
                            <p>
                                <span className="containerTitleKR">제품</span>
                                <span className="containerTitleEng">Products</span>
                            </p>
                            <p className="containerComment">상세한 제품 이미지와 다양한 제품정보를 보실 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="mainWrapper">
                        {!props.moblieStat && (

                            <Swiper
                                className="mySwiper productSlider"
                                slidesPerView={2.5}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{ clickable: true }}
                            >

                                <div className="swiper-wrapper mainProductSlider">
                                    {mainProductObj.map((item) => (
                                        <SwiperSlide className="productList">
                                            <div className="product">
                                                <div>
                                                    <img src={`${imgsUrl}${item.img}`} alt="상품이미지" />
                                                </div>
                                                <div className="productNm">
                                                    <span>{item.name}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        )}
                        {props.moblieStat && (
                            <Swiper
                                className="mySwiper productContainer_m"
                                slidesPerView={1.2}
                                spaceBetween={30}
                                freeMode={true}
                            >
                                {mainProductObj.map((item) => (
                                    <SwiperSlide className="productSlide_m">
                                        <div>
                                            <img src={`${imgsUrl}${item.img}`} alt="상품이미지" />
                                        </div>
                                        <div className="productNm">
                                            <span>{item.name}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>

                <div class="mainContent serviceContainer">
                    <div>
                        <div class="containerTitle">
                            <p>
                                <span class="containerTitleKR">고객지원</span>
                                <span class="containerTitleEng">Customer Service</span>
                            </p>
                            <p class="containerComment">궁금한 사항은 언제든지 문의 해주세요!</p>
                        </div>

                        <div class="mainWrapper mainWrapper_service">
                            <div>
                                <div class="serviceList">
                                    <div class="service1">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-headphones"
                                                onClick={() => props.func(6)}>
                                                <img src={headphones} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>고객문의</span>
                                        </div>
                                    </div>
                                    <div class="service1">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-newspaper" onClick={() => props.func(7)}>
                                                <img src={newspaper} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>공지사항</span>
                                        </div>
                                    </div>
                                    <div class="service1">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-favorite" onClick={() => props.func(8)}>
                                                <img src={favorite} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>자주묻는 질문</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="serviceList">
                                    <div class="service2">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-telephone" onClick={() => props.func(9)}>
                                                <img src={telephone} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>1:1 문의하기</span>
                                        </div>
                                    </div>
                                    <div class="service2">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-placeholder"
                                                onClick={() => props.func(3)}>
                                                <img src={placeholder} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>오시는 길</span>
                                        </div>
                                    </div>
                                    <div class="service2">
                                        <div class="serviceImg">
                                            <div class="imgFrame imgFrame-user"
                                                onClick={() => props.func(10)}
                                            >
                                                <img src={user} loading="lazy" />
                                            </div>
                                        </div>
                                        <div class="serviceNm">
                                            <span>인재채용</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mainWrapper_service_m">
                            <div>
                                <div class="serviceList_m">
                                    <div class="service_m">
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-headphones"
                                                    onClick={() => props.func(6)}>
                                                    <img src={headphones} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>고객문의</span>
                                            </div>
                                        </div>
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-newspaper" onClick={() => props.func(7)}>
                                                    <img src={newspaper} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>공지사항</span>
                                            </div>
                                        </div>
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-favorite" onClick={() => props.func(8)}>
                                                    <img src={favorite} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>자주묻는 질문</span>
                                            </div>
                                        </div>
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-telephone"
                                                    onClick={() => props.func(9)}>
                                                    <img src={telephone} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>1:1 문의하기</span>
                                            </div>
                                        </div>
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-placeholder"
                                                    onClick={() => props.func(3)}>
                                                    <img src={placeholder} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>오시는 길</span>
                                            </div>
                                        </div>
                                        <div class="service1">
                                            <div class="serviceImg">
                                                <div class="imgFrame imgFrame-user"
                                                    onClick={() => props.func(10)}
                                                >
                                                    <img src={user} />
                                                </div>
                                            </div>
                                            <div class="serviceNm">
                                                <span>인재채용</span>
                                            </div>
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

export default Main;