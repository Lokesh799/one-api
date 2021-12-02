export const VIEW_BOOK = 'VIEW_BOOK';
export const VIEW_MOVIE = 'VIEW_MOVIE';
export const VIEW_MOVIE_FILTER = 'VIEW_MOVIE_FILTER';
export const VIEW_MOVIE_QUOTE = 'VIEW_MOVIE_QUOTE';
export const VIEW_CHARACTER = 'VIEW_CHARACTER';
export const VIEW_CHARACTER_FILTER = 'VIEW_CHARACTER_FILTER';



export const viewBook = (payload) => ({ type: VIEW_BOOK, payload });
export const viewMovie = (payload) => ({ type: VIEW_MOVIE, payload });
export const viewMovieFilter = (payload) => ({ type: VIEW_MOVIE_FILTER, payload });
export const viewMovieQuote = (payload) => ({ type: VIEW_MOVIE_QUOTE, payload });
export const viewCharacter = (payload) => ({ type: VIEW_CHARACTER, payload });
export const viewCharacterFilter = (payload) => ({ type: VIEW_CHARACTER_FILTER, payload });