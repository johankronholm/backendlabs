export const apiKey = {}

apiKey.verifyAPIKey = (req, res, next) => {
    const key = req.query.key || req.headers['apikey'];
    key === "1337" ? next() : res.status(401).send("You provided the wrong API key.");
};
