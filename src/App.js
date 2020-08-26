import React from 'react';
import Chart  from './Chart/Chart';
import CountryPicker  from './CountryPicker/CountryPicker';
import Cards  from './Cards/Cards';
import styles from "./App.module.css";
import {fetchData} from "./api";
import img from "./images/image.png";

class App extends React.Component {

  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetcheddata = await fetchData();

    this.setState({data:fetcheddata});
  }
  
  handleCountryChange = async(country)=>{
    const fetcheddata = await fetchData(country);
    this.setState({data:fetcheddata, country:country});
  }

  render() {
    const {data, country}= this.state;

    return (
      <div className={styles.container}>
        <img src={img} alt="Covid-19" className={styles.image}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  };
}

export default App
