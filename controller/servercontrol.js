const wellcomeToServer = (req, res) => {
  res.send("<h1> Welcome to the myserver</h1>");
};

const lolpage = (req, res) => {
  res.send("<h1> this is lol page </h1>");
};

module.exports = { wellcomeToServer, lolpage };
