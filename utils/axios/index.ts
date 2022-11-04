import axios from 'axios'

const handler = async () => {

    const Discord = axios.create({
        baseURL : 'https://discord.com/api/'
    })

    const Api = axios.create({
        baseURL : 'https://api.imagetracker.org/'
    })

    return {
        Api,
        Discord
    }
}

const Axios = (async () => {
    return await handler()
})()

export default Axios