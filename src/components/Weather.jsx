import styles from './Weather.module.css';
import { useState } from 'react';
import Temperature from './WeatherImages/temperature-low-solid.svg'
import Humidity from './WeatherImages/droplet-solid.svg'
import Pressure from './WeatherImages/circle-up-solid.svg'


function Weather(){
    const [weatherData, setWeatherData] = useState({
        icon: '//cdn.weatherapi.com/weather/64x64/night/122.png'
    });
    const [codeCountry, setCodeCountry] = useState(null);
    async function getWeather(){
        //Get city name
        let cityName = document.querySelector('#city').value;
        //Weather api url
        const apiURL = await fetch(`https://api.weatherapi.com/v1/current.json?key=5da8e385f25448fd8fd03423242901&q=${cityName}&aqi=no`);
        //Decode to JSON
        const data = await apiURL.json()

        console.log(data);
        
        let weather = data.current.condition.text;
        let icon = data.current.condition.icon;
        let name = data.location.name;
        let country = data.location.country;
        let region = data.location.region;
        let feelslike_c = data.current.feelslike_c + 'C°';
        let humidity = data.current.humidity + '%';
        let pressure_mb = data.current.pressure_mb + 'mb';

        
        setWeatherData({
            weather,
            icon,
            name,
            country,
            region,
            feelslike_c,
            humidity,
            pressure_mb,
        });
        

        //Country Info API
        const countryURL = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        
        const countryData = await countryURL.json()

        //console.log(countryData);
        let cca2 = countryData[0].cca2

        setCodeCountry({
            cca2,
        })

        //alert(`${country} - ${name} is ${weather}`);
        
    }
    return(
        <>
            <div className={styles.content}>
                <div className={styles.box}>
                    <section>
                        <img src={`https://flagsapi.com/${codeCountry?.cca2}/flat/64.png`} alt="" />
                        <p>{weatherData?.country}</p>
                        <h1>Weather View</h1>
                    </section>
                    <section>
                        <label className={styles.label} htmlFor="city">Type a city</label>
                        <input placeholder='Exemple.. London' className={styles.city} id="city" type="text"/>
                    </section>
                    <section id={styles.btnSection}>
                        <button onClick={() => getWeather()}>Get Weather</button>
                    </section>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <section className={styles.cardImage}>
                            <img src={weatherData?.icon} alt="" />
                        </section>
                    </div>
                    <section className={styles.cardText}>
                        <p>{weatherData?.weather}</p>
                    </section>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <section className={styles.cardImage}>
                            <img src={Temperature} alt="temperature" />
                        </section>
                    </div>
                    <section className={styles.cardText}>
                        <p>{weatherData?.feelslike_c}</p>
                    </section>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <section className={styles.cardImage}>
                            <img src={Humidity} alt="humidity" />
                        </section>
                    </div>
                    <section className={styles.cardText}>
                        <p>{weatherData?.humidity}</p>
                    </section>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <section className={styles.cardImage}>
                            <img src={Pressure} alt="humidity" />
                        </section>
                    </div>
                    <section className={styles.cardText}>
                        <p>{weatherData?.pressure_mb}</p>
                    </section>
                </div>
    
            </div>
        </>
    )
}

export default Weather;