import Aop from '../Aop';

export interface SearchApi {
  getRestaurantsWithinRadius: (address: string, radiusMiles: number, cuisine: string) => any;
  getRestaurantsNearConference: (cuisine: string) => { [key: string]: string };
}

export default (api: any) => {
  Aop.around(
    'restaurantApi',
    targetInfo => {
      const orgApi = Aop.next.call(api, targetInfo);

      orgApi.getRestaurantsNearConference = (cuisine: string) => {
        orgApi.getRestaurantsWithinRadius('울산 남구 신정로 20번길 988', 2.0, cuisine);
      };
      return orgApi;
    },
    api,
  );
};
