

/*
Tutorial - 

Put this file in a folder , name of the folder will be the name of your repository

in the like below change the "data.kt" file to the type of extension you want. kt means kotlin.
Github can recognize which language you have workedon based on the file extension


Run Commands -  node init , npm install jsonfile, npm install moment , npm install simple-git , npm install ramdom node index.js 

Then if index.js doesn't give any error , run command - 'git init'

run - node index.js again , it should print out the dates it made commits on.

then from github desktop client add this file to repository and commit it to github

done.

*/

const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");


const FILE_PATH = "./data.java"; // File Extension is Important


async function init() {
  const randomModule = await import('random');
  const random = randomModule.default;

  const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();
    const x = random.int(0, 160); // till how many weeks from year selected
    const y = random.int(0, 6);
    const DATE = moment()
      .subtract(4, "y") // how many years ago from now
      .add(2, "d")
      .add(x, "w")
      .add(y, "d")
      .format();

    const data = {
      date: DATE,
    };
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, () => {
      simpleGit()
        .add([FILE_PATH])
        .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n))
        .push();
    });
  };

  makeCommit(100); // how many random commits 
}

init();


