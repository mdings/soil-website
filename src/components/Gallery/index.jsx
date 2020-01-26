import './swiper.css'
import './style.sass'

import Image1 from '../../../static/assets/impressions/microlab1.jpeg'

export default (state, children) => (
    <div class="c-gallery swiper-container">
        <div class="swiper-wrapper">
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div data-src={Image1} class="swiper-slide swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
        </div>
    </div>
)
