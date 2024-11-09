# Github API
A Unofficial library for the GitHub API that fetches data from the API.

[![npm](https://img.shields.io/npm/v/@chethanyadav456/github-api?color=crimson&logo=npm)](https://www.npmjs.com/package/@chethanyadav456/github-api)
![NPM License](https://img.shields.io/npm/l/%40chethanyadav456%2Fgithub-api?logo=npm)
![NPM Downloads](https://img.shields.io/npm/d18m/%40chethanyadav456%2Fgithub-api?logo=npm)
![Discord](https://img.shields.io/discord/807872777490137088?logo=discord&link=https%3A%2F%2Fdiscord.gg%2FKMKas4pTkZ)

[![DeepSource](https://app.deepsource.com/gh/chethanyadav456/Github-Api.svg/?label=code+coverage&show_trend=true&token=iQeRMNE2mbRs0Olsv46Z_gMj)](https://app.deepsource.com/gh/chethanyadav456/Github-Api/)
[![DeepSource](https://app.deepsource.com/gh/chethanyadav456/Github-Api.svg/?label=active+issues&show_trend=true&token=iQeRMNE2mbRs0Olsv46Z_gMj)](https://app.deepsource.com/gh/chethanyadav456/Github-Api/)
[![DeepSource](https://app.deepsource.com/gh/chethanyadav456/Github-Api.svg/?label=resolved+issues&show_trend=true&token=iQeRMNE2mbRs0Olsv46Z_gMj)](https://app.deepsource.com/gh/chethanyadav456/Github-Api/)

## Installation
To install this package, you can use the following command:
```bash
npm install @chethanyadav456/github-api
```

## Usage
To use this package, you can import it as follows:
```javascript
const GithubAPI = require('@chethanyadav456/github-api');
```

### Searching for user data
To search for user data, you can use the `getUser` method. This method takes a query string as an argument and returns an array of user objects. For example:
```javascript
const github = new GithubAPI();
github.getUser('chethanyadav456').then(data => {
  console.log(data);
});
```


### Searching for repositories
To search for repositories, you can use the `getRepos` method. This method takes a query string as an argument and returns an array of repository objects. For example:
```javascript
const github = new GithubAPI();
github.getRepos('chethanyadav456').then(data => {
  console.log(data);
});
```

## License
This project is licensed under the MIT license.

## Contributing
To contribute to this project, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Security Policy
To report a security vulnerability, please use the [Security Policy](SECURITY.md) file.

## Authors
- M Chethan Yadav



