import React from 'react';
import Card from '../Card/Card.js';

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&APPID=7494224150a0e014d94a45bdaa22177a";

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">Minsk, BY</h5>
        <div className="row justify-content-center">
          {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default WeekContainer