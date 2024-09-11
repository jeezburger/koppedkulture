// pages/api/revalidate.js

export default async function handler(req, res) {
    // Check for a secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Extract the path from the query parameters
    const path = req.query.path;

    if (!path) {
        return res.status(400).json({ message: 'Path is required' });
    }

    try {
        // Trigger revalidation for the specific path
        await res.revalidate(path);
        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).json({ message: 'Error revalidating' });
    }
}
