class Github {
  constructor() {
    this.url = "https://api.github.com";
  }

  /**
   * 
   * @param {url} url - The URL to fetch data from
   * @returns 
   */
  async getData(url) {
    try {
      const response = await fetch(url, {});
      const data = await response.json();
      return data;
    } catch (error) {
      return new Error(error);
    }
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the user details
   * @returns 
   */
  async getUser(username) {
    return this.getData(`${this.url}/users/${username}`);
  }

  /**
   * 
   * @param {string} username - The username of the github user 
   * @description Get the repos of the user
   * @returns 
   */
  async getRepos(username) {
    return this.getData(`${this.url}/users/${username}/repos`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the starred repos of the user 
   * @returns 
   */
  async getStarred(username) {
    return this.getData(`${this.url}/users/${username}/starred`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the followers of the user
   * @returns 
   */
  async getFollowers(username) {
    return this.getData(`${this.url}/users/${username}/followers`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the following of the user
   * @returns 
   */
  async getFollowing(username) {
    return this.getData(`${this.url}/users/${username}/following`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the contributions of the user
   * @returns 
   */
  async getContributions(username) {
    return this.getData(`${this.url}/users/${username}/contributions`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the organizations of the user
   * @returns 
   */
  async getOrganizations(username) {
    return this.getData(`${this.url}/users/${username}/orgs`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the events of the user
   * @returns 
   */
  async getEvents(username) {
    return this.getData(`${this.url}/users/${username}/events`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the received events of the user
   * @returns 
   */
  async getReceivedEvents(username) {
    return this.getData(`${this.url}/users/${username}/received_events`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the gists of the user
   * @returns 
   */
  async getGists(username) {
    return this.getData(`${this.url}/users/${username}/gists`);
  }

  /**
   * 
   * @param {string} gistId - The id of the gist
   * @description Get the gist details
   * @returns 
   */
  async getGist(gistId) {
    return this.getData(`${this.url}/gists/${gistId}`);
  }

  /**
   * 
   * @param {string} gistId - The id of the gist
   * @description Get the gist comments
   * @returns 
   */
  async getGistComments(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/comments`);
  }

  /**
   * 
   * @param {string} gistId - The id of the gist
   * @description Get the gist forks
   * @returns 
   */
  async getGistForks(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/forks`);
  }

  /**
   * 
   * @param {string} gistId - The id of the gist
   * @description Get the gist star
   * @returns 
   */
  async getGistStar(gistId) {
    return this.getData(`${this.url}/gists/${gistId}/star`);
  }

  /**
   * 
   * @param {string} username - The username of the github user
   * @description Get the subscriptions of the user
   * @returns 
   */
  async getSubscriptions(username) {
    return this.getData(`${this.url}/users/${username}/subscriptions`);
  }
  
  /**
   * @description Get all licenses
   * @example Github.getLicenses();
   */
  async getLicenses() {
    return this.getData(`${this.url}/licenses`);
  }
}

module.exports = Github;
