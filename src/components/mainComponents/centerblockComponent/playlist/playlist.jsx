import React, { useState, useEffect } from 'react'

const Playlist = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
         // Задаем таймер для изменения состояния после 3000 миллисекунд (5 секунды)
         const timer = setTimeout(() => {
            setLoading(false)
         }, 5000)
         // Очистка таймера при размонтировании компонента
         return () => clearTimeout(timer)
    }, []);

    return (
        <div className="content__playlist playlist">
            <div className="playlist__item">
                <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                    
                        {loading ? (
                            <div className='playlist__img-skeleton' style={{ backgroundColor: '#313131',
                            width: 51, height: 51
                        }}>

                        </div>
                        ) : (
                            <svg className="track__title-svg" alt="music">
                                 <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                        )} 
                            
                        
                     
                  </div>

                            {loading ? (
                                <div className='playList__title-text' style={{ backgroundColor: '#313131',
                                width: 356, height: 19
                                }}>

                                </div>
                                ) : (
                                    <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Guilt <span className="track__title-span" />
                    </a>
                  </div>
                                )
                            }

                  
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Nero
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Welcome Reality
                  </a>
                </div>
                <div className="track__time">
                            
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>

                  <span className="track__time-text">4:44</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Elektro <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Elektro
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      I’m Fire <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Ali Bakgor
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    I’m Fire
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Non Stop
                      <span className="track__title-span">(Remix)</span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Стоункат, Psychopath
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Non Stop
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">4:12</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Run Run
                      <span className="track__title-span">(feat. AR/CO)</span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Jaded, Will Clarke, AR/CO
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Run Run
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">2:54</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Eyes on Fire
                      <span className="track__title-span">
                        (Zeds Dead Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Blue Foundation, Zeds Dead
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Eyes on Fire
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">5:20</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Mucho Bien
                      <span className="track__title-span">
                        (Hi Profile Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Mucho Bien
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">3:41</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">1:48</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      How Deep Is Your Love
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Calvin Harris, Disciples
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    How Deep Is Your Love
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">3:32</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Morena <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Tom Boxer
                  </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Soundz Made in Romania
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">3:36</span>
                </div>
              </div>
            </div>

            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a className="track__author-link" href="http://" > </a>
                </div>
                <div className="track__album">
                  <a className="track__album-link" href="http://" > </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text" />
                </div>
              </div>
            </div>

          </div>
    )
}

export default Playlist