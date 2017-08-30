import key from './APIkey'

export function fetchNowPlaying() {
	
	fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=$%7Bpage%7D`)
		.then(data => data.json())
		.then(data => console.log(data))
}
