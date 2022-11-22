const messages = [
    "Ask not what your country can do for you; ask what you can do for your country",
    "Eighty percent of success is showing up",
    "For those to whom much is given, much is required.",
    "Go ahead, make my day",
    "Houston, we have a problem.",
    "If at first you don’t succeed, try, try again.",
    "If you build it, they will come.",
    "To be or not to be, that is the question.",
    "Knowledge is power.",
    "The love of money is the root of all evil.",
    "There's no place like home.",
    "You must be the change you wish to see in the world.",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };