import { API_SUCCESS } from '../request/request.reducer';

export interface NewsStateInterface {
  news: {
    science: string[];
    technology: string[];
    sport: string[];
    commentisfree: string[];
    culture: string[];
    lifeandstyle: string[];
    business: string[];
    world: string[];
  };
  loading: boolean;
}

export const GET_NEWS = 'GET_NEWS';

export type Action = {
  type: string;
  payload?: {
    data?: any;
  };
};

export const getNews = (topics: string[]): Action => ({
  type: GET_NEWS,
  payload: { data: topics },
});

const initialState: NewsStateInterface = {
  news: {
    science: [],
    technology: [],
    sport: [],
    commentisfree: [],
    culture: [],
    lifeandstyle: [],
    business: [],
    world: [],
  },
  loading: false,
};

const newsReducer = (
  state = initialState,
  action: { type: string; payload: { data: any; meta: any } }
): NewsStateInterface => {
  switch (action.type) {
    case `${GET_NEWS} ${API_SUCCESS}`: {
      const newsFound = action.payload.data.response.results;
      const { topic } = action.payload.meta.extraData;
      const newsByTopic = newsFound.filter(
        article => article.sectionId === topic
      );
      return {
        ...state,
        news: {
          ...state.news,
          [`${topic}`]: newsByTopic,
        },
      };
    }

    default:
      break;
  }
  return state;
};

export default newsReducer;
