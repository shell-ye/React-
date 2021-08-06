import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

export default class Movies extends Component {
    componentDidMount () {
        console.log(this.props)
    }

    showData = () => {
        return this.props.movies.map(item => (
            <SwiperSlide key={ item.id }><img key={ item.id } src={ item.img.replace('w.h', '74.109') } alt={ item.nm } /></SwiperSlide>
        ))
    }

    render() {
        const { movies, activeIndex } = this.props
        console.log(movies[activeIndex].img.replace('w.h', '148.208'))
        return (
            <div className="movies">
                <div className="swiper">
                    <div className="bg" style={{backgroundImage: 'url(' + movies[activeIndex].img.replace('w.h', '148.208') + ')'}}></div>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={3.4}
                        onSlideChange={(value) => this.props.changeMovieIndex(value.activeIndex)}
                        centeredSlides={true}
                    >{ this.showData() }</Swiper>
                </div>
                <div className="info">
                    <p>
                        <span>{ movies[activeIndex].nm }</span>
                        <span>{ movies[activeIndex].sc }</span>
                        <span>分</span>
                    </p>
                    <p>{ movies[activeIndex].desc }</p>
                </div>
            </div>
        )
    }
}
