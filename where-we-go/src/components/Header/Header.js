import React from 'react';
import Logo from './Logo.png';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    return(
        <div>
            <div className="Header">
                <div className="LeftContainer">
                    <img src={Logo} style={{width: '130px', height: '43px', marginLeft: '20px'}}/>
                </div>
                
                <div className="CenterContainer">
                    <div className="SearchBar">
                        <input type="textbox" className="InputText" placeholder="검색 시작하기"/>
                        <button className="SearchButton">
                            <AiOutlineSearch color="#ffffff" size="25px" style={{marginTop: '3px'}}/>
                        </button>
                    </div>
                </div>

                <div className="RightContainer">
                    <div className="RightContents">
                        <div className="HoverCursor">공지사항 &nbsp; &nbsp;</div>
                        <div className="HoverCursor">마이페이지 &nbsp; &nbsp;</div>
                        <div className="HoverCursor">로그인/회원가입 &nbsp; &nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;