export const apiKey = {}

apiKey.verifyAPIKey = (req, res, next) => {
    const key = req.query.key || req.headers['apikey'] || req.session.apikey
    key === process.env.API_KEY ? next() : res.redirect("/apikey")
};

apiKey.authorize = (req, res, next) => {
    const key = req.body.key
    if (key === process.env.API_KEY) {
        req.session.apikey = key;
        return next();
    } 
    req.session.status = "Wrong API key provided."
    return res.redirect("/apikey")
};
