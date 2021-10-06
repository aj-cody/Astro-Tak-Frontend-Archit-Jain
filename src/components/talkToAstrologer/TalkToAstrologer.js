import Footer from '../footer/Footer';
import Header from '../header/Header';
import './TalkToAstrologer.css';
import { useEffect, useState } from 'react';

import filter from '../../assetspng/filter.png';
import sort from '../../assetspng/sort.png';
import search from '../../assetspng/search.png';

import $ from 'jquery';

function TalkToAstrologer() {

  const [astrologersDetails, setAstrologersDetails] = useState({});
  
  //tried using toggleClass in every possible way but it didn't worked so..
  var searchIcon = $('#searchIcon');
  var searchBar = $('#search');
  var count1=0;
  searchIcon.click(function() {
    count1++;
    if(count1%2!=0){
      searchBar.removeClass("isInActive");
      sortBar.addClass("isInActive");
    } else
      searchBar.addClass("isInActive");
  });

  var sortIcon = $('#sortIcon');
  var sortBar = $('#sort');
  var count2=0;
  sortIcon.click(function() {
    count2++;
    if(count2%2!=0) {
      sortBar.removeClass("isInActive");
      searchBar.addClass("isInActive");
    } else
      sortBar.addClass("isInActive");
  });

  // var searchText1 = document.getElementById('srchtxt');
  // var text;
  // searchText.addEventListener("keyup", function(event) {
  //   // Number 13 is the "Enter" key on the keyboard
  //   if (event.keyCode === 13) {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // Trigger the button element with a click
  //     text = searchText.value();
  //   }
  // });

  // function searchText(event) {
  //   searchText1.addEventListener("keypress", function(event) {
  //     // Number 13 is the "Enter" key on the keyboard
  //     if (event.keyCode == 13) {
  //       // Cancel the default action, if needed
  //       event.preventDefault();
  //       // Trigger the button element with a click
  //       text = searchText1.value();
  //     }
  //   });
    // if (event.keyCode == 13) {
    //    console.log("Enter key is pressed");
    //    text = searchText1.value();
    //    return true;
    // } else {
    //    return false;
    // }
  // }
  
  // console.log("asasas", text);

  useEffect(() => {
    const setValues = (data) => {
      setAstrologersDetails(data)
    }

    fetch('http://localhost:8080/astro-tak/talk-to-astrologer', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setValues(response.astrologer))
  }, []);

  console.log("assaf", astrologersDetails);

  const astrologersList = [];
  for(var i=0; i<astrologersDetails.length; i++) {
    var skills = '';
    astrologersDetails[i].skills.forEach((skill, index) => {
      if(index == astrologersDetails[i].skills.length-1)
        skills += skill;
      else
        skills += skill + ", ";
    })
    astrologersList.push(
      <div class="astrologer">
        <div class="astro">
          <img class="col-3" 
          src={astrologersDetails[i].images}/>
          <div class="info col-6">
            <p class="name">{astrologersDetails[i].firstName + " " + astrologersDetails[i].lastName}</p>
            
            <div class="skills">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff7414" class="skillsIcon col-1 bi bi-layers-fill" viewBox="0 0 16 16">
                <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/>
                <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/>
              </svg>
              <p class="skillsTxt col-11">
                {skills}
              </p>
            </div>

            <div class="language">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff7414" class="languageIcon col-1 bi bi-translate" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
              </svg>
              <p class="languageTxt col-11">{astrologersDetails[i].languages}</p>
            </div>

            <div class="price">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff7414" class="priceIcon col-1 bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
              </svg>
              <p class="priceTxt col-11">&#8377; {astrologersDetails[i].minimumCallDurationCharges}/ min</p>
            </div>
          </div>
          <p class="year col-3">{astrologersDetails[i].experience} Years</p>
        </div>

        <div class="astrobtn">
          <div class="col-4"></div>
          <button class="abtn col-4" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="phone bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg> Talk on Call</button>
          <div class="col-4"></div>
        </div>
      </div>
    )

  }

  console.log("fnfjkjnf", astrologersList);


    return (
      <div class="">
          <Header/>
            <div class="topm">
              <div class="heading">
                <p class="txt col-9">Talk to an Astrologer</p>
                <img id="searchIcon" class="col-1" src={search} alt="ham" width="25" height="25"/>
                <img class="col-1" src={filter} alt="ham" width="25" height="25"/>
                <img id="sortIcon" class="col-1" src={sort} alt="ham" width="25" height="25"/>
              </div>

              <div class="sortMethod isInActive" id="sort">
                <p class="sortHeading">Sort By</p>
                <hr/>
                <div class="radioInp">
                  <input class="radioTxt" type="radio" name="sort" value="expHtL"/> Experience - high to low<br/>
                  <input class="radioTxt" type="radio" name="sort" value="expLtH"/> Experience - low to high<br/>
                  <input class="radioTxt" type="radio" name="sort" value="priceHtL"/> Price - high to low<br/>
                  <input class="radioTxt" type="radio" name="sort" value="priceLtH"/> Price - low to high<br/>
                </div>
              </div>

              <div class="searchBar isInActive" id="search">
                <img class="col-1" src={search} alt="ham" width="25" height="25"/>
                <input id="srchtxt" class="searchTxt col-10" 
                    placeholder="Search Astrologer"
                    />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff7414" class="cross col-1 bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
              </div>


              <div class="scrollable">
                {astrologersList}
              </div>

            </div>
          <Footer/>
      </div>
    );
  }
  
  export default TalkToAstrologer;