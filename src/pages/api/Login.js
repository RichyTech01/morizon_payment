export default function handler(req, res) {

    if (req.method === 'POST') {
      const { userName, password } = req.body;

      if (userName === 'userName' && password === 'password') {
        res.status(200).json({ success: true });

      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }

    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}