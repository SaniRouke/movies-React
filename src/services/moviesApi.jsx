class MoviesApi {
  constructor() {
    this.apiKey = "e3cafce94e3a863833765608b4d85428";
    this.baseUrl = "https://api.themoviedb.org/3";
    this.imageBaseUrl = "https://image.tmdb.org/t/p";
  }

  async createGuestSession() {
    const response = await fetch(
      `${this.baseUrl}/authentication/guest_session/new?api_key=${this.apiKey}`
    );
    return await response.json();
  }
  async getSearchList(sessionID, query = "a", page = 1) {
    const sessionIDFiled = sessionID ? `&seisson_id=${sessionID}` : "";
    const queryFiled = query !== "" ? query : "a";
    console.log("ID in API:", sessionID, sessionIDFiled);
    const response = await fetch(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}${sessionIDFiled}&query=${queryFiled}&page=${page}`
    );
    return await response.json();
  }
  getImagePath(width, path) {
    const errorImg =
      "https://avatanplus.com/files/resources/original/57b1a0f710a0b1568ddcc51c.jpg";
    return path !== null ? `${this.imageBaseUrl}/w${width}${path}` : errorImg;
  }
}
export default new MoviesApi();
