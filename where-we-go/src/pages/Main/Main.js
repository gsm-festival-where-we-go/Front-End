import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/Header.js';
import './Main.css';
import mainPageImage from './mainPageImage.png';
import RegionImage from './RegionImage.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cheungchungdo from './Cheungchungdo.png';
import Gangwondo from './Gangwondo.png';
import Gyeongido from './Gyeongido.png';
import Gyeongsangdo from './Gyeongsangdo.png';
import Junlado from './Junlado.png';

const Main = () => {
    const options = {
        dots: true,
        centerMode: true,
        infinite: true,
        arrow: true,
        
    }

    return (
        <div style={{userSelect: 'none'}} id="body">
            <Header/>
            <div className="MainFirstPage">
                <div className="TextPlace">
                    <div className="MainText">
                        여기갈래와<br/>
                        여행을 준비하고<br/>
                        찾으세요!
                    </div>
                    <div className="SubText">
                        간단한 검색으로 원하는 지역의 날<br/>
                        씨를 찾을 수 있고, 당일 놀러가고<br/>
                        싶은 곳을 쉽게 검색할 수 있습니다.
                    </div>
                </div>
                <div className="ImagePlace">
                    <img src={mainPageImage} style={{width: '1000px', height: '711px', marginTop: '-4px', pointerEvents: 'none'}}/>
                </div>
 
            </div>

            <div className="MainSecondPage">
                <div className="SlidePlace">
                    <Slider {...options} className="Slider">
                        <div className="ifes">
                            <img src={Junlado} style={{width: '900px', height: '500px'}}/>
                        </div>
                        <div className="ifes"> 
                            <img src={Gangwondo} style={{width: '930px', height: '500px'}}/>
                        </div>
                        <div className="ifes">
                            <img src={Cheungchungdo} style={{width: '930px', height: '500px'}}/>
                        </div>
                        <div className="ifes">
                            <img src={Gyeongido} style={{width: '930px', height: '500px'}}/>
                        </div>
                        <div className="ifes">
                            <img src={Gyeongsangdo} style={{width: '930px', height: '500px'}}/>
                        </div>
                    </Slider>
                </div>
            </div>
            
            <div className="MainThirdPage">
                <div className="Title">여행지 추천</div>
                <ul className="Menu">
                    <li className="List">전체</li>
                    <li className="List">맑은 곳</li>
                    <li className="List">바다</li>
                    <li className="List">산</li>
                    <li className="List">좋은 곳</li>
                </ul>

                <div className="Recommend">
                    <img src={RegionImage} className="Image"/>
                    <img src={RegionImage} className="Image"/>
                    <img src={RegionImage} className="Image"/>
                </div>
            </div>
        </div>
    )
}

export default Main;