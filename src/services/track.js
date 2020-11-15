import galacticMusicService from './music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

    return galacticMusicService.get('/search',{
        params:{ q,type,},
        headers: {
            "x-rapidapi-key": "98fec081dfmsh49ad33f660f88efp169e9ejsn11ec6fe46fc1",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        } 
    }).then(res=>res.data)
    
}

export default trackService