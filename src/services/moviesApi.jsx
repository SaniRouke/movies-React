export default class MoviesApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.themoviedb.org/3";
    this.imageUrl =
      "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
  }

  async createGuestSession() {
    const response = await fetch(
      `${this.baseUrl}/authentication/guest_session/new?api_key=${this.apiKey}`
    );
    return await response.json();
  }
  async getSearchList(sessionID, query = "gekis", page = 1) {
    const sessionIDFiled = sessionID ? `&seisson_id=${sessionID}` : "";
    const response = await fetch(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}${sessionIDFiled}&query=${query}&page=${page}`
    );
    return await response.json();
  }
}
