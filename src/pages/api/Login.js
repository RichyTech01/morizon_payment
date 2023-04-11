export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle login logic here
      const { userName, password } = req.body;
      // Authenticate user credentials
      if (userName === 'userName' && password === 'password') {
        // Return success response
        res.status(200).json({ success: true });
      } else {
        // Return error response
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      // Return error response for unsupported HTTP method
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  