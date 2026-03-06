export const dateChecker = {}; 

dateChecker.verifyDate = (req, res, next) => {

    const query = req.query.date || null;
    const date = query ? new Date(query) : new Date();
    const data = {currDate : date};
    return res.render("home/day", data);
}