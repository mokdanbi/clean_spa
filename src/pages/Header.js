import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <header className="Header">
      <div className="top_bar">
        <ul className="inner">
          <li>부산 아파트입주청소 이사청소 깔끔이청소 : 부산 아파트입주청소 부산 양산 김해 기장 아파트입주청소 이사청소 오피스텔청소 상가청소 전문업체 깔끔이청소</li>
          <li>
            <Link to="/admin">
              <div className="xi-pause"></div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="inner">
        <h1>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
          </Link>
        </h1>
        <nav>
          <NavMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header