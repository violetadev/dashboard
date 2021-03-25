import newsArticlesMiddleware from '../../features/newsArticles/newsArticles.middleware';
import apiMiddleware from '../../features/request/request.middleware';

const rootMiddleware = [newsArticlesMiddleware, apiMiddleware];

export default rootMiddleware;
