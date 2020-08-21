export interface LoginData {
	name: string;
	pass: string;
}

export interface LoginResult {
	status: string;
	id: number;
	name: string;
	token: string;
}

export interface RegisterData {
	name: string;
	pass: string;
	conf: string;
}

export interface Movie {
	id: number;
	idCinema: number;
	name: string;
	slug: string;
	cover: string;
	coverStatus?: number;
	ticket: string;
	ticketStatus?: number;
	imdbUrl: string;
	date: string;
}

export interface MoviesResult {
	status: string;
	numPages: number;
	list: Movie[];
}

export interface MovieResult {
	status: string;
	movie: Movie;
}

export interface Cinema {
	id: number;
	name: string;
	slug: string;
}

export interface CinemasResult {
	status: string;
	list: Cinema[];
}

export interface CinemaResult {
	status: string;
	list: Movie[];
}

export interface DialogField {
	title: string;
	type: string;
	value: string;
	hint?: string;
}

export interface DialogOptions {
	title: string;
	content: string;
	fields?: DialogField[];
	ok: string;
	cancel?: string;
}

export interface StatusResult {
	status: string;
}

export interface MovieSearchResult {
  id: number;
  title: string;
  poster: string;
}

export interface MovieSearchResultList {
  status: string;
  list: MovieSearchResult[];
}

export interface MovieSearchDetailResult {
	status: string;
	title: string;
	poster: string;
	imdbUrl: string;
}
export interface TMDBRootObject {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path?: string;
  id: number;
  adult: boolean;
  backdrop_path?: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
export interface TMDBIDRootObject {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Spokenlanguage {
  iso_639_1: string;
  name: string;
}

export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Belongstocollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}