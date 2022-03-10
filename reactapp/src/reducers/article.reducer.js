export default function (article = "", action) {
    switch (action.type) {
        case "chooseArticle":
            return action.article;
        default:
            return article;
    }
}