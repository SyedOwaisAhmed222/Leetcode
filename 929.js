var numUniqueEmails = function (emails) {
  let emailCount = 0;
  const map = {};
  for (let i = 0; i < emails.length; i++) {
    let email = "";
    let domain = false;
    let localEnded = false;
    for (let j = 0; j < emails[i].length; j++) {
      if (domain === false && localEnded === false) {
        if (emails[i][j] === "+") {
          localEnded = true;
        } else if (emails[i][j] === ".") {
          continue;
        } else if(emails[i][j]!=="@") {
          email += emails[i][j];
        }
      }
      if (
        (domain === false && emails[i][j] === "@") ||
        domain === true
      ) {
        domain = true;
        email += emails[i][j];
      }
    }
    if (map[email] === undefined) {
      map[email] = i;
      emailCount += 1;
    }
    console.log("ending", email);
  }

  return emailCount;
};
const a = numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.email@leetcode.com",
]);
console.log(a);
