class Github {
  constructor() {
    this.url = "https://api.github.com";
  }

  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async getUser(username) {
    return this.getData(`${this.url}/users/${username}`);
  }

  async getRepos(username) {
    return this.getData(`${this.url}/users/${username}/repos`);
  }

  async getStarred(username) {
    return this.getData(`${this.url}/users/${username}/starred`);
  }

  async getFollowers(username) {
    return this.getData(`${this.url}/users/${username}/followers`);
  }

  async getFollowing(username) {
    return this.getData(`${this.url}/users/${username}/following`);
  }

  async getContributions(username) {
    return this.getData(`${this.url}/users/${username}/contributions`);
  }

  async getOrganizations(username) {
    return this.getData(`${this.url}/users/${username}/orgs`);
  }

  async getEvents(username) {
    return this.getData(`${this.url}/users/${username}/events`);
  }

  async getReceivedEvents(username) {
    return this.getData(`${this.url}/users/${username}/received_events`);
  }

  async getGists(username) {
    return this.getData(`${this.url}/users/${username}/gists`);
  }

  async getGist(gistId) {
    return this.getData(`${this.url}/gists/${gistId}`);
  }

  async getGistComments(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/comments`);
  }

  async getGistForks(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/forks`);
  }

  async getGistStar(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/star`);
  }

  async getSubscriptions(username) {
    return this.getData(`${this.url}/users/${username}/subscriptions`);
  }
}

export default Github;
