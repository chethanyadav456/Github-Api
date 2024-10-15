/**
 * Class representing a GitHub API handler.
 * Provides methods to interact with the GitHub API.
 */
class Github {
  /**
   * Creates a GitHub API instance.
   * Sets the base URL for API calls.
   */
  constructor() {
    this.url = "https://api.github.com";
  }

  /**
   *
   * @param {url} url - The URL to fetch data from
   * @returns
   */
  static async getData(url) {
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
  getUser(username) {
    return Github.getData(`${this.url}/users/${username}`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the repos of the user
   * @returns
   */
  getRepos(username) {
    return Github.getData(`${this.url}/users/${username}/repos`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the starred repos of the user
   * @returns
   */
  getStarred(username) {
    return Github.getData(`${this.url}/users/${username}/starred`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the followers of the user
   * @returns
   */
  getFollowers(username) {
    return Github.getData(`${this.url}/users/${username}/followers`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the following of the user
   * @returns
   */
  getFollowing(username) {
    return Github.getData(`${this.url}/users/${username}/following`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the contributions of the user
   * @returns
   */
  getContributions(username) {
    return Github.getData(`${this.url}/users/${username}/contributions`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the organizations of the user
   * @returns
   */
  getOrganizations(username) {
    return Github.getData(`${this.url}/users/${username}/orgs`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the events of the user
   * @returns
   */
  getEvents(username) {
    return Github.getData(`${this.url}/users/${username}/events`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the received events of the user
   * @returns
   */
  getReceivedEvents(username) {
    return Github.getData(`${this.url}/users/${username}/received_events`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the gists of the user
   * @returns
   */
  getGists(username) {
    return Github.getData(`${this.url}/users/${username}/gists`);
  }

  /**
   *
   * @param {string} gistId - The id of the gist
   * @description Get the gist details
   * @returns
   */
  getGist(gistId) {
    return Github.getData(`${this.url}/gists/${gistId}`);
  }

  /**
   *
   * @param {string} gistId - The id of the gist
   * @description Get the gist comments
   * @returns
   */
  getGistComments(gistId) {
    return Github.getData(`${this.url}/gists/${gistId}/comments`);
  }

  /**
   *
   * @param {string} gistId - The id of the gist
   * @description Get the gist forks
   * @returns
   */
  getGistForks(gistId) {
    return Github.getData(`${this.url}/gists/${gistId}/forks`);
  }

  /**
   *
   * @param {string} gistId - The id of the gist
   * @description Get the gist star
   * @returns
   */
  getGistStar(gistId) {
    return Github.getData(`${this.url}/gists/${gistId}/star`);
  }

  /**
   *
   * @param {string} username - The username of the github user
   * @description Get the subscriptions of the user
   * @returns
   */
  getSubscriptions(username) {
    return Github.getData(`${this.url}/users/${username}/subscriptions`);
  }

  /**
   * @description Get all licenses
   * @example Github.getLicenses();
   */
  getLicenses() {
    return Github.getData(`${this.url}/licenses`);
  }
}

module.exports = Github;
