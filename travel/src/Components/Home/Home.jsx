import React, { useEffect } from 'react';
import './home.css';
import './home.scss';
import video from '../../images/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='home'>
            <div className='videoWrapper'>
                <video src={video} muted autoPlay loop type='video/mp4'></video>
                <div className='overlay'></div>
            </div>

            <div className='homeContent container'>
                <div className='textDiv'>
                    <span data-aos='fade-up' className='smallText'>
                        OUR PACKAGES
                    </span>
                    <h1 data-aos='fade-up' className='homeTitle'>
                        VACATION VIBZZZZZ
                    </h1>
                </div>
                <div className='cardDiv grid'>
                    <div className='destinationInput'>
                        <label htmlFor='city'> Tour quest </label>
                        <div className='input flex'>
                            <input type='text' placeholder='Enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                    <div className='dateInput'>
                        <label htmlFor='date'> Pick-a-day</label>
                        <div className='input flex'>
                            <input type='date'></input>
                        </div>
                    </div>
                    <div className='priceInput'>
                        <div className='label_total flex'>
                            <label htmlFor='price'>Ultimate range</label>
                            <h3 className='total'> $5000 </h3>
                        </div>
                        <div className='input flex'>
                            <input type='range' max='5000' min='1000'></input>
                        </div>
                    </div>
                    <div className='searchOptions flex'>
                        <HiFilter className='icon' />
                        <span>ADDITIONAL OPTIONS</span>
                    </div>
                </div>
                <div data-aos='fade-up' className='homeFooterIcons flex'>
                    <div className='rightIcons'>
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
                        <SiTripadvisor className='icon' />
                    </div>
                    <div className='leftIcons'>
                        <BsListTask className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
