'use strict'

window.addEventListener('load', () => {

    //Get info about visitor
    fetch("https://ipinfo.io/json?token=c3376073e3f554").then(
        (response) => response.json()
      ).then(
        (jsonResponse) => {
          sessionStorage.setItem("ip", jsonResponse.ip);
          sessionStorage.setItem("country", jsonResponse.country);
          sessionStorage.setItem("city", jsonResponse.city);
          sessionStorage.setItem("clicks", 0);
        } 
      
      )  
      
    //Get info about visitor Country and statistics
      let GetCountryAPI = 'https://praise-click.herokuapp.com/api/country/BE'; 
      fetch(GetCountryAPI)
      .then((response) => response.json())
      .then((data) => {
          document.getElementById('country_details').innerText = data.clicks + " : " + data.name;
      })
    //Get info about Total
    let GetAllAPI = 'https://praise-click.herokuapp.com/api/all'; 
    fetch(GetAllAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
        document.getElementById('TotalClicks').innerText = data.clicks;
    })
    //Get info about all Country and statistics
    let GetAll = 'https://praise-click.herokuapp.com/api/top'; 
    fetch(GetAll)
    .then((response) => response.json())
    .then((data) => {
        let top = data.sort((a,b) => {
            return b.country_clicks - a.country_clicks;
        });
        document.getElementById('top').innerText = top[0].country_clicks + " : " + top[0].country_name;
    });
      //Start for new visitor
      let StartAPI = 'https://praise-click.herokuapp.com/api/start';
                  fetch(StartAPI,
                      {
                          method: "POST",
                          body: JSON.stringify({
                                  "ip": sessionStorage.getItem('ip'),
                                  "country": sessionStorage.getItem('country'),
                                  "city": sessionStorage.getItem('city'),
                                  "clicks": 1
                                }),
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                          }
                      })
                      .then(((response) => response.json()))
                      .then((data) => {
                        document.getElementById('clicks').innerText = 0;
                    })
      
      
      //Add one Click evry time visitor clicks
      document.getElementById('click').addEventListener('click', () => {
        let ClickAPI = 'https://praise-click.herokuapp.com/api/click';
                  fetch(ClickAPI,
                      {
                          method: "POST",
                          body: JSON.stringify({
                                  "ip": sessionStorage.getItem('ip'),
                                  "country": sessionStorage.getItem('country'),
                                  "city": sessionStorage.getItem('city'),
                                  "clicks": 1
                                }),
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                          }
                      })
                      .then(((response) => response.json()))
                      .then((data) => {
                    })
      let before = sessionStorage.getItem('clicks');
      let after = parseInt(before) + 1;
      sessionStorage.setItem('clicks', after);
      document.getElementById('clicks').innerText = after;
      });



});