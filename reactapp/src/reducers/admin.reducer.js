export default function (admin = "", action) {
    switch (action.type) {
        case "populate":
            const adminLoggedIn = { token: action.token, firstName: action.firstName }
            return adminLoggedIn;
        case "delete":
            return false;
        default:
            return admin;
    }
}