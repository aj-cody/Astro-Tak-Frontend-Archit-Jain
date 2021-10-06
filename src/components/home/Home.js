import Footer from '../footer/Footer';
import Header from '../header/Header';

import aries from '../../signs/aries.png';
import taurus from '../../signs/taurus.png';
import gemini from '../../signs/gemini.png';
import cancer from '../../signs/cancer.png';
import leo from '../../signs/leo.png';
import virgo from '../../signs/virgo.png';
import libra from '../../signs/libra.png';
import scorpio from '../../signs/scorpio.png';
import sagittarius from '../../signs/sagittarius.png';
import capricorn from '../../signs/capricorn.png';
import aquarius from '../../signs/aquarius.png';
import pisces from '../../signs/pisces.png';

import arvind from '../../astrologers/ArvindShukla.webp';
import './Home.css';
import { useEffect, useState } from 'react';

function Home() {

    const [askDetails, setAskDetails] = useState({});
    const [astrologerDetails, setAstrologerDetails] = useState({});
    const [bannersDetails, setBannersDetails] = useState({});
    const [feedbackDetails, setFeedbackDetails] = useState({});
    const [horoscopeDetails, setHoroscopeDetails] = useState({});
    const [reportsDetails, setReportsDetails] = useState({});

    useEffect(() => {
        const setValues = (data) => {
            for(var i=0; i<data.length; i++) {
                if(i==0) {
                    console.log(data[i]);
                    setAskDetails(data[i])
                } else if(i==1) {
                    console.log(data[i]);
                    setAstrologerDetails(data[i])
                } else if(i==2) {
                    console.log(data[i]);
                    setBannersDetails(data[i])
                } else if(i==3) {
                    console.log(data[i]);
                    setFeedbackDetails(data[i])
                } else if(i==4) {
                    console.log(data[i]);
                    setHoroscopeDetails(data[i])
                } else if(i==5) {
                    console.log(data[i]);
                    setReportsDetails(data[i])
                }
            }
        }

        fetch('http://localhost:8080/astro-tak', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => setValues(response.data))
    }, []);

    const askList = [];
    for(var i=0; i<askDetails.length; i++) {
        askList.push(<option value="actual value 2">{askDetails[i].name}</option>) 
    }

    const astrologerList = [];
    for(var i=0; i<astrologerDetails.length; i++) {
        astrologerList.push(
            <div class="astrologers">
                    <div class="acardimgdiv">
                        <img class="acardimg"
                        src={astrologerDetails[i].images}
                        />
                    </div>
                <div class="astroInfo">
                    <p class="astroName col-11">{astrologerDetails[i].firstName + " " + astrologerDetails[i].lastName}</p>
                    <p class="astroRating col-1">{astrologerDetails[i].rating}</p>
                </div>
                <p class="astroSpec">{astrologerDetails[i].skills[0]}</p>
                <div class="astroInfo2">
                    <p class="astroCharge col-4">&#8377; {astrologerDetails[i].minimumCallDurationCharges} / min</p>
                    <button class="astroBtn col-8" type="button">Talk Now</button>
                </div>
            </div>
        )
    }
    
    const bannersList = [];
    for(var i=0; i<bannersDetails.length; i++) {
        bannersList.push(
            <div class="card">
                <a href={bannersDetails[i].landingUrl}>
                    <img class="cardimg"
                    src={bannersDetails[i].imageUrl}
                    />
                </a>
            </div>
        )
    }
    
    const feedbackList = [];
    for(var i=0; i<feedbackDetails.length; i++) {
        feedbackList.push(
            <div class="feedback">
                <span class="dbquote dbquotet">"</span>
                <div class="feedbackDiv">
                    <p>{feedbackDetails[i].description}</p>
                </div>
                <div class="feedbackInfo">
                    <div class="fImg">
                        <svg class="person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                    <p class="fName">{feedbackDetails[i].name}</p>
                    <p class="fCity">{feedbackDetails[i].place}</p>
                </div>
            </div>
        )
    }

    const horoscopeList = [];
    const horoscopeImages = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces];
    for(var i=0; i<horoscopeDetails.length; i++) {
        horoscopeList.push(<div class="signs"> 
            <div class="scardimgdiv">
                <img class="scardimg"
                src={horoscopeImages[i]}
                />
            </div>
            <p class="signName">{horoscopeDetails[i].name}</p>
            <p class="signDate">{horoscopeDetails[i].date}</p>
        </div>)
    }
    
    const reportsList = [];
    for(var i=0; i<reportsDetails.length; i++) {
        reportsList.push(
            <div className="news-card">
                <img src={reportsDetails[i].imageUrl}
                    alt="In depth horoscope"
                    className="news-card_image"/>
                <div className="news-card_text-wrapper">
                    <div className="news-card_details">
                        <p className="news-card_price col-8">&#8377; {reportsDetails[i].price} / min</p>
                        <a href="#"
                        className="news-card_btn col-4">Buy Now</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
      <div class="">
          <Header/>
                <div class="topm">
                    <div class="qdiv">
                        <div class="quotediv col-9">
                            <div class="qu">
                            <span class="dbquote dbquotet col-1">""</span>
                            <p class="qp col-11">There is no better boat than
                                <br></br>
                                horoscope to help man
                                <br></br>
                                cross over the sea of life.
                                
                                <span class="dbquote dbquoteb">""</span>
                                <br></br>
                                <span class="by">- Varahmihira</span>
                            </p>
                            </div>
                        </div>

                        <div class="quoteimgdiv col-3">
                            <img class="quoteimg"
                                src="https://i.pinimg.com/474x/a5/de/2b/a5de2b8b1d0480823794a67c9c0bad06.jpg"
                            />
                        </div>
                    </div>

                    {/* Banners section */}
                    <div class="banner">
                        <div class="scrolling-wrapper">
                            {bannersList}
                        </div>
                    </div>
                
                    {/* Daily horoscope section */}
                    <div class="section">
                        <div class="seeAll">
                            <p class="col-9">Daily Horoscopes</p>
                            <a href="#" class="col-3 seeAllLink">
                                <p>See All 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"        fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </p>
                            </a>
                        </div>

                        <p class="info">Read your daily horoscope based on your sunsign, select your zodiac sign and give the right start to your day.</p>

                        <div>
                        <div class="scrolling-wrapper">
                                {horoscopeList}
                            </div>
                        </div>
                    </div>

                    {/* Talk to an astrologer section */}
                    <div class="section">
                        <div class="seeAll">
                            <p class="col-9">Talk to an Astrologer</p>
                            <a href="/talk-to-astrologer" class="col-3 seeAllLink">
                                <p>See All 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"        fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </p>
                            </a>
                        </div>

                        <p class="info">Leading astrologers of India are just a phone call away. Our panel of astrologers not just provide solutions to your life problems but also guide you so that you can take the right path towards growth and prosperity.</p>

                        <div>
                            <div class="scrolling-wrapper">
                                {astrologerList}
                            </div>
                        </div>
                    </div>

                    {/* Reports section */}
                    <div class="section">
                        <div class="seeAll">
                            <p class="col-9">Reports</p>
                            <a href="#" class="col-3 seeAllLink">
                                <p>See All 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"        fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </p>
                            </a>
                        </div>

                        <p class="info">Astrology report or what is commonly known as Horoscope report is basically an in depth look at your birth chart. Horoscope report will look at various planetary positions in your birth charts and also derive relationships and angle to  understand your personality and trait.</p>

                        <div>
                            <div class="scrolling-wrapper">
                                {reportsList}
                            </div>
                        </div>
                    </div>
                    
                    {/* Ask a question section */}
                    <div class="section">
                        <div class="seeAll">
                            <p>Ask a Question</p>
                        </div>

                        <p class="info">Seek accurate answers to your life problems and guide you towards the right path. Whether the problem is related to love, self, life, business, money, education or work, our astrologers will do an in depth study of your birth chart provide personalized responses along with remedies.</p>

                        <div class="askdiv">
                            <p class="askCateg">Choose Category</p>
                            <div class="aselect">
                                <select class="askDrop">
                                    <option>Select a category: Love, career, more</option>
                                    {askList}
                                </select>
                            </div>
                            <div class="askPrice">
                                <p class="askp col-4">&#8377; 99 <span class="askgst">(Including GST)</span></p>
                                <p class="aski col-4">Ideas what to ask</p>
                                <button class="askbtn col-4">Ask a Question</button>
                            </div>
                        </div>
                    </div>
                      
                    {/* Feedback section */}
                    <div class="section">
                        <div class="seeAll">
                            <p>Hear from our Happy Customers!</p>
                        </div>

                        <div class="scrolling-wrapper">
                            {feedbackList}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div class="section">
                        <div class="copyright">
                            <p><span class="copy">&#169;</span> Copyright 2020 All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            <Footer/>
      </div>
    );
  }
  
  export default Home;