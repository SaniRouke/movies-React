class MoviesApi {
  constructor() {
    this.apiKey = 'e3cafce94e3a863833765608b4d85428';
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.imageBaseUrl = 'https://image.tmdb.org/t/p';
  }

  async createGuestSession() {
    const response = await fetch(`${this.baseUrl}/authentication/guest_session/new?api_key=${this.apiKey}`);
    return response.json();
  }

  async getSearchList(sessionID, query = 'a', page = 1) {
    const sessionIDFiled = sessionID ? `&seisson_id=${sessionID}` : '';
    const queryFiled = query !== '' ? query : 'a';
    console.log('ID in API:', sessionID, sessionIDFiled);
    let response;
    try {
      response = await fetch(
        `${this.baseUrl}/search/movie?api_key=${this.apiKey}${sessionIDFiled}&query=${queryFiled}&page=${page}`
      );
    } catch (error) {
      return {
        error,
        results: [],
      };
    }

    return response.json();
  }

  getImagePath(width, path) {
    const errorImg = 'https://avatanplus.com/files/resources/original/57b1a0f710a0b1568ddcc51c.jpg';

    return path !== null ? `${this.imageBaseUrl}/w${width}${path}` : errorImg;
  }

  async rateMovie(guestSessionID, movieID) {
    const body = {
      value: 8.5,
    };
    const response = await fetch(
      `${this.baseUrl}/movie/${movieID}/rating?api_key=${this.apiKey}&guest_session_id=${guestSessionID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      }
    );
    console.log('ID in API:', guestSessionID, movieID);

    return response.json();
  }

  async getRatedListGuestSession(guestSessionID) {
    let response;
    console.log('ID in API:', guestSessionID);
    try {
      response = await fetch(`
    ${this.baseUrl}/guest_session/${guestSessionID}/rated/movies?api_key=${this.apiKey}&language=en-US&sort_by=created_at.asc`);
    } catch (error) {
      return {
        error,
        results: [],
      };
    }
    return response.json();
  }
}

export default new MoviesApi();
