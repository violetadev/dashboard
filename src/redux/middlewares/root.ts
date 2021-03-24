import newsArticlesMiddleware from '../../features/newsArticles/newsArticles.middleware';
import userSettingsMiddleware from '../../features/userSettings/userSettings.middleware';
import apiMiddleware from '../../features/request/request.middleware';

const rootMiddleware = [
  userSettingsMiddleware,
  newsArticlesMiddleware,
  apiMiddleware,
];

export default rootMiddleware;
