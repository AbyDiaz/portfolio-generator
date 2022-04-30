const profileDataArgs = process.argv.slice(2);

//const generatePage = (userName, githubName) => {
  //  return `
    //Name: ${userName}
    //GitHub: ${githubName}
    //`;
//};

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };
  
