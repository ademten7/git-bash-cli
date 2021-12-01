#! /usr/bin/env node
const { exec, execSync } = require("child_process");
const [message, branchName] = process.argv.slice(2);

if (message && branchName) {
  //   let { err, stdout, stderr } = execSync("git add .");
  //   if (!err) {
  //     let { error, stdout, stderr } = execSync(`git commit -m ${message}`);
  //     if (!error) {
  //       let { errormessage, stdout, stderr } = execSync(
  //         `git push -u origin ${branchName}`
  //       );
  //       if (!errormessage) {
  //         console.log("successfully pushed your code to github");
  //         console.log(stdout);
  //       }
  //     }
  //   }

  ////////  OR

  exec("git add .", (err, stdout, errorbycommand) => {
    if (err) {
      throw new Error("something is wrong");
    }
    exec(`git commit -m ${message}`, (err, stdout, errorbycommand) => {
      if (err) {
        throw new Error("something is wrong");
      }
      exec(
        `git push -u origin ${branchName}`,
        (err, stdout, errorbycommand) => {
          if (err) {
            throw new Error("something is wrong");
          }
          console.log("successfully pushed your code to github");
          console.log(stdout);
        }
      );
    });
  });
} else {
  console.log("please provide message and branch name");
}
//add bin inside the json
//g "update" master
