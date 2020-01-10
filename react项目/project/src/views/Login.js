import React, { Component, Fragment } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import 'antd/dist/antd.css'; import { Input } from 'antd';

const imgsArr = ['/img/2.jpg', '/img/9.jpg', '/img/10.jpg'];
export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <div>
          {

            <Input placeholder="Basic usage" />
          }
        </div>

        <div className="swiper-container">
        <div className="swiper-wrapper">
            {
              imgsArr.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img src={item} alt=""/></div>
                )
              })
            }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      </Fragment>

    )
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
