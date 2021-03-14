import thunk from 'redux-thunk';
import userSettingsMiddleware from '../../features/userSettings/userSettings.middleware';

const rootMiddleware = [thunk, userSettingsMiddleware];

export default rootMiddleware;
