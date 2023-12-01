// loginbackend.js

const loginBackend = (db) => async (req, res) => {
    const { Email, password } = req.body;
    try {
      // Perform your login logic using the SQLite database connection (db)
      const query = 'SELECT * FROM Login WHERE email = ? AND password = ?';
      const params = [Email, password];
  
      db.get(query, params, (err, row) => {
        if (err) {
          console.error(err);
          res.status(500).json({ success: false, message: 'Server error' });
          return;
        }
  
        if (row) {
          res.json({ success: true, message: 'Login successful' });
        } else {
          res.json({ success: false, message: 'Invalid email or password' });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
  module.exports = loginBackend;
  