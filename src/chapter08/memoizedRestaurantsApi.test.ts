// import { SearchApi } from '../chapter07/getRestaurantsNearConference';
import ThirdParty from '../chapter07/ThirdParty';
import memoizedRestaurantsApi from './memoizedRestaurantsApi';

describe('memoizedRestaurantsApi', () => {
  const api = ThirdParty.restaurantApi();
  const service = memoizedRestaurantsApi(api);
  const returnedFromService = { xxx: 'aaa' };
  const spy = jest.spyOn(api, 'getRestaurantsWithinRadius');

  beforeEach(() => {
    spy.mockClear();
  });

  describe('getRestaurantsNearConference(cuisine)', () => {
    it('기대인자를 넘겨 api의 getRestaurantsNearConference를 실행', () => {
      const cuisine = '물회';
      service.getRestaurantsNearConference(cuisine);
      expect(api.getRestaurantsWithinRadius).toBeCalledWith('주소', 2.0, cuisine);
    });

    it('서드파티 API의 반환값을 확인한다.', () => {
      const cuisine = '물막국수';
      spy.mockReturnValue(returnedFromService);
      const value = service.getRestaurantsNearConference(cuisine);
      expect(value).toBe(returnedFromService);
    });

    it('같은 요리를 여러 번 요청해도 api는 한번만 요청한다.', () => {
      const cuisine = '냉면';
      for (let i = 0; i < 5; i++) {
        service.getRestaurantsNearConference(cuisine);
      }
      expect(api.getRestaurantsWithinRadius).toHaveBeenCalledTimes(1);
    });

    it('같은 요리를 여러 번 요청해도 api는 같은 값을 리턴한다.', () => {
      const cuisine = '쫄면';
      spy.mockReturnValue(returnedFromService);
      for (let i = 0; i < 5; i++) {
        expect(service.getRestaurantsNearConference(cuisine)).toBe(returnedFromService);
      }
    });
  });
});
