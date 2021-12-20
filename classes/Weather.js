class Weather {
    constructor(city) {
        this.city = city
        this.key = 'feabf737c0396f2a57dddb353e18684c'
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city
    }
}