import React, { useEffect } from "react";
import './main.css';
import './main.scss';
import images from '../../images/andaman.jpeg';
import place1 from '../../images/bangkok.jpeg';
import place2 from '../../images/belgium.jpeg';
import place3 from '../../images/christthereedemer.jpeg';
import place4 from '../../images/eiffletower.jpeg';
import place5 from '../../images/mountrushmore.jpeg';
import place6 from '../../images/operasydney.jpeg';
import place7 from '../../images/tajmahal.jpeg';
import place8 from '../../images/towerbridge.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

const Data = [{
    id: 1,
    imgSrc: images,
    desTitle: 'ANBAMAN AND NICOBAR ISLANDS',
    location: 'BAY OF BENGAL',
    grade: 'TROPICAL BEACH',
    fees: '$400',
    description: 'Experience the essence of a tropical paradise, Discover azure waters and pristine beaches.'
},
{
    id: 2,
    imgSrc: place1,
    desTitle: 'BANGKOK',
    location: 'THAILAND',
    grade: 'HISTORIC CHARM',
    fees: '$800',
    description: 'Explore an exotic hub of culture and cuisine,where ancient traditions meet modern wonders.'
},
{
    id: 3,
    imgSrc: place2,
    desTitle: 'BRUSSELS',
    location: 'BELGIUM',
    grade: 'ARTISTIC MARVEL',
    fees: '$900',
    description: 'Explore artistic marvels and architectural splendor,indulge in culinary delights and gourmet chocolates.'
},
{
    id: 4,
    imgSrc: place3,
    desTitle: 'CHRIST THE REDEEMER',
    location: 'BRAZIL',
    grade: 'ICONIC LANDMARK',
    fees: '$1500',
    description: 'Embrace the symbol of peace and faith,feel the presence of a spiritual beacon.'
},
{
    id: 5,
    imgSrc: place4,
    desTitle: 'EIFFEL TOWER',
    location: 'PARIS',
    grade: 'ROMANTIC SYMBOL',
    fees: '$600',
    description: 'The ultimate symbol of romance,embodying timeless elegance and charm.'
},
{
    id: 6,
    imgSrc: place5,
    desTitle: 'MOUNT RUSHMORE',
    location: 'SOUTH DAKOTA',
    grade: 'SYMBOL OF DEMOCRACY',
    fees: '$750',
    description: 'An epic sculpture of monumental scale,the faces of presidential icons.'
},
{
    id: 7,
    imgSrc: place6,
    desTitle: 'OPERA HOUSE',
    location: 'SYDNEY',
    grade: 'CITY VIBES',
    fees: '$1000',
    description: 'A cultural landmark of global renown, a hub for world-class performing arts.'
},
{
    id: 8,
    imgSrc: place7,
    desTitle: 'TAJ MAHAL',
    location: 'INDIA',
    grade: 'MUGHAL MASTERPIECE',
    fees: '$1000',
    description: 'A historic treasure of the world, monument to eternal love.'
},
{
    id: 9,
    imgSrc: place8,
    desTitle: 'TOWER BRIDGE',
    location: 'LONDON',
    grade: 'GOTHIC REVIVAL',
    fees: '$1000',
    description: 'A masterpiece of Victorian engineering,gateway to the heart of London.'
}
];

const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className="title">
                    Most visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="desTitle">
                                        {desTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className='fees flex'>
                                        <span>{grade} <small> +1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className='btn flex'> DETAILS <HiOutlineClipboardCheck className="icon" /></button>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Main;
