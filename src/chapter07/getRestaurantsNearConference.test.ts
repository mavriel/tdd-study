import AddHelperToThirdParty from './getRestaurantsNearConference';
import ThirdParty from './ThirdParty';

describe('ThirdParty.restaurantApi', () => {
  AddHelperToThirdParty(ThirdParty);
  const api = ThirdParty.restaurantApi();

  console.log(api);

  describe('getRestaurantsNearConference(cuisine)', () => {
    const returnFromUnderlyFunction = '킬킬킬';
    const cuisine = '중화요리';

    beforeEach(() => {
      jest.spyOn(api, 'getRestaurantsWithinRadius').mockReturnValue(returnFromUnderlyFunction);
    });

    it('새로운 함수가 주입되었나 확인', () => {
      expect(api.getRestaurantsNearConference).not.toBeUndefined();
    });

    it('올바른 인자로 getRestaurantsWithinRadius를 호출한다', () => {
      api.getRestaurantsNearConference(cuisine);
      expect(api.getRestaurantsWithinRadius).toBeCalledWith(
        '울산 남구 신정로 20번길 988',
        2.0,
        cuisine,
      );
    });

    it('getRestaurantsWithRadius에서 받은 값을 반환한다.', () => {
      expect(api.getRestaurantsNearConference(cuisine)).toEqual(returnFromUnderlyFunction);
    });
  });
});
