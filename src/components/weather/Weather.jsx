import styles from './Weather.module.css';
import { useState } from 'react';


function Weather(){
    const [temperature, setTemperature] = useState();
    const [icon, setIcon] = useState();

    async function getWeather(){
        //Weather api url
        const apiURL = await fetch(`https://api.weatherapi.com/v1/current.json?key=5da8e385f25448fd8fd03423242901&q=${countryInput}&aqi=no`);
        //Decode to JSON
        const data = await apiURL.json()
        console.log(data);
        
        const feelslike_c = data.current.feelslike_c + 'C°';
        const Icon = data.current.condition.icon;

        setTemperature(feelslike_c);
        setIcon(Icon);
        
    }

    const [countryInput, setCountryInput] = useState('')

    return(
        <>
            <div className={styles.box}>
                <section className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="city">Type a city</label>
                    <input 
                    placeholder='Exemple.. London' 
                    className={styles.city} 
                    type="text"
                    onChange={(e) => setCountryInput(e.target.value)}
                    />
                </section>
                <section>
                    <button className={styles.getWeather} onClick={() => getWeather()}>Get Weather</button>
                </section>
                { temperature && (
                    <div>
                        <h2>{temperature}</h2>
                        <img className={styles.weatherImage} src={icon} alt="weather image" />
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Weather;