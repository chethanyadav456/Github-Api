# Github API
A library for the GitHub API that fetches data from the API.


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



