import Github from "./lib/Github.js";
const github = new Github();

github.getUser("vikramadityawence").then((data) => {
    console.log(data);
});
// return Github;
