import calculate from './calculate';

describe('calculate(tripMileages, memberMultiplier', () => {
  let testPassenger: any = null;
  beforeEach(() => {
    testPassenger = {
      firstName: '석훈',
      secondName: '홍',
      tripMileages: [500, 600, 3400, 2500],
    };
  });

  it('배율이 1.0이면 원래 마일리지를 반환한다.', () => {
    expect(calculate(testPassenger.tripMileages, 1.0)).toEqual(
      testPassenger.tripMileages,
    );
  });

  it('배율이 3.0이면 해당 마일리지를 계산하여 반환한다.', () => {
    const multiplier = 3.0;
    const expectedResults = testPassenger.tripMileages.map(
      mileage => mileage * multiplier,
    );
    expect(calculate(testPassenger.tripMileages, multiplier)).toEqual(
      expectedResults,
    );
  });
});
