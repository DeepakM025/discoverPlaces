import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import ErrorMsg from '../components/error';
import WeatherDay from '../components/weatherDay';

const API_KEY = "4bdf104e7d4519f8395f9a406535098c";

class home extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weatherData: "",
      mappedData: [],
      errorFlag: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      city: e.target.value,
      errorFlag : false,
      weatherData: "",
      mappedData: [],
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.city){
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}`)
      .then(res => {
        let uniqueDay = [];
        let nextFiveDays = [];
        let avgTemp = [];
        let finalTemp = [];
        this.setState({
          weatherData: res.data,
          errorFlag : false
        })
        res.data.list.forEach(element => {
          let elementObj = {};
          elementObj["date"] = element.dt;
          elementObj["temp"] = Math.round(element.main.temp - parseInt(273.15));
          elementObj["day"] = moment.unix(element.dt).format('dddd, MMM D');
          elementObj["desc"] = element.weather[0].description;
          if (nextFiveDays.indexOf(moment.unix(element.dt).format('dddd, MMM D')) === -1) {
            nextFiveDays.push(moment.unix(element.dt).format('dddd, MMM D'));
          }
          uniqueDay.push(elementObj);
        })

        for (let index = 0; index < nextFiveDays.length; index++) {
          let obj = uniqueDay.filter(o => o.day === nextFiveDays[index]);
          avgTemp.push(obj);
        }

        for (let index = 0; index < avgTemp.length; index++) {
          let newObj = {};
          let temp = 0;
          let date;
          let desc;
          avgTemp[index].forEach(elem => {
            temp = temp + elem.temp;
            date = elem.day;
            desc = elem.desc;
          })
          newObj["day"] = date;
          newObj["temp"] = Math.round(temp / avgTemp[index].length);
          newObj["desc"] = desc;

          finalTemp.push(newObj);
        }

        setTimeout(() => {
          this.setState({
            mappedData: finalTemp
          })
        }, 100);
      }).catch(error => {
        this.setState({
          errorFlag : true
        })
      })
    }else{
      this.setState({
        mappedData: [],
        weatherData: ""
      })
    }
    
  }
  render() {
    return (
      <div className="container mainBody text-center">
        <h2>Weather Report</h2>
        <form>
          <input type="search" placeholder="Enter City..." onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Get Weather Report</button>
        </form>
        {
          this.state.errorFlag &&
             <ErrorMsg city={this.state.city} /> 
        }
        <div className="daysWeatherWrapper">
          {
            this.state.weatherData &&
              this.state.mappedData.map((dayweather, i) => {
                return <WeatherDay dayweather={dayweather} key={i}  />
              })
          }
        </div>
      </div>
    )
  }
}

export default home;