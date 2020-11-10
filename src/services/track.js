import galacticMusicService from './music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

    return galacticMusicService.get('/search',{
        params:{ q,type,},
        headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        } 
    }).then(res=>res.data)
    
}

export default trackService