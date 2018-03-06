export default class Search{
    static loadGif(w){
        let url = `http://api.giphy.com/v1/gifs/search?api_key=CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO&q=${w}`
        return fetch(url)
        .then(response => response.json())
        .then(giphs => giphs.data.map(g => ({id: g.id, url: g.images.fixed_height.url})))
    }
}