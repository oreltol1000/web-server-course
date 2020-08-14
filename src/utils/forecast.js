const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9d52edccc47a823d0606cf7465961753&query='+latitude+',' +longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } 
        // else if (body.error) {
        //     callback('Unable to find location', undefined)
        // }
         else {
            callback(undefined,'temperature'+body.current.temperature)
        }
    })
}

module.exports = forecast