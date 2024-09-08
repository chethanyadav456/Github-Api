class Github {
  constructor() {
    this.url = "https://api.github.com";
  }

  async getUser(username) {
    const response = await fetch(`${this.url}/users/${username}`);
    const data = await response.json();
    return data;
  }

  async getRepos(username) {
    const response = await fetch(`${this.url}/users/${username}/repos`);
    const data = await response.json();
    return data;
  }

  async getStarred(username) {
    const response = await fetch(`${this.url}/users/${username}/starred`);
    const data = await response.json();
    return data;
  }

  async getFollowers(username) {
    const response = await fetch(`${this.url}/users/${username}/followers`);
    const data = await response.json();
    return data;
  }

  async getFollowing(username) {
    const response = await fetch(`${this.url}/users/${username}/following`);
    const data = await response.json();
    return data;
  }

  async getContributions(username) {
    const response = await fetch(`${this.url}/users/${username}/contributions`);
    const data = await response.json();
    return data;
  }

  async getOrganizations(username) {
    const response = await fetch(`${this.url}/users/${username}/orgs`);
    const data = await response.json();
    return data;
  }

  async getEvents(username) {
    const response = await fetch(`${this.url}/users/${username}/events`);
    const data = await response.json();
    return data;
  }

  async getReceivedEvents(username) {
    const response = await fetch(
      `${this.url}/users/${username}/received_events`
    );
    const data = await response.json();
    return data;
  }

  async getGists(username) {
    const response = await fetch(`${this.url}/users/${username}/gists`);
    const data = await response.json();
    return data;
  }

  async getGist(gistId) {
    const response = await fetch(`${this.url}/gists/${gistId}`);
    const data = await response.json();
    return data;
  }

  async getGistComments(gistId) {
    const response = await fetch(`${this.url}/gists/${gistId}/comments`);
    const data = await response.json();
    return data;
  }

  async getGistForks(gistId) {
    const response = await fetch(`${this.url}/gists/${gistId}/forks`);
    const data = await response.json();
    return data;
  }

  async getGistStar(gistId) {
    const response = await fetch(`${this.url}/gists/${gistId}/star`);
    const data = await response.json();
    return data;
  }

  async getSubscriptions(username) {
    const response = await fetch(`${this.url}/users/${username}/subscriptions`);
    const data = await response.json();
    return data;
  }
}

export default Github;
