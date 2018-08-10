import { SearchApi } from '../chapter07/getRestaurantsNearConference';

function memoizedRestaurentsApi(api: SearchApi): SearchApi {
  const cache = {};

  return {
    getRestaurantsNearConference: cuisine => {
      let result = cache[cuisine];
      if (result === undefined) {
        result = api.getRestaurantsWithinRadius('주소', 2.0, cuisine);
        cache[cuisine] = result;
      }
      return result;
    },
    getRestaurantsWithinRadius: api.getRestaurantsWithinRadius,
  };
}

export default memoizedRestaurentsApi;
