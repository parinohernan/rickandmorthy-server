const users = require('../utils/users');

module.exports = (req, res) => {
  const {email, password} = req.query;
  let access = false;

  users.forEach(e => {
    if(e.email === email && e.password=== password){
        access= true;
    }
  });
  if (access) {
    return res.status(200).json({access});  
  }
  return res.status(403).json({access});  
  }  


