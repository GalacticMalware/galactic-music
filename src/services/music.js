import trae from 'trae'
import configService from './config'

const galacticMusicService = trae.create({
    baseUrl: configService.apiUrl
})

export default galacticMusicService