class AviasalesService {
  baseURL = 'https://front-test.dev.aviasales.ru';

  async fetchURL(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }

    return await res.json();
  }

  async getSearchId() {
    const url = `${this.baseURL}/search`;

    return await this.fetchURL(url);
  }

  async getTicketsPack(searchId) {
    const url = `${this.baseURL}/tickets?searchId=${searchId}`;

    return await this.fetchURL(url);
  }
}

const aviasalesService = new AviasalesService();

export default aviasalesService;
