import * as _ from 'lodash';
import Aop from '../Aop';
import Aspect from './Aspect';

describe('returnValueCache', () => {
  let testObject: any;
  const testValue = { a: 1 };
  let args: any;
  let spy: jest.SpyInstance;
  let testFuntionExecutionCount: number;

  beforeEach(() => {
    testObject = {
      testFunction(arg: any) {
        return testValue;
      },
    };
    spy = jest.spyOn(testObject, 'testFunction');
    testFuntionExecutionCount = 0;
    Aop.around('testFunction', Aspect.returnValueCache().advice, testObject);
    args = [{ key: 'value' }, 'someValue'];
  });

  describe('advice(targetInfo)', () => {
    it('첫번째 실행 시 장식된 함수의 반환값을 반환한다.', () => {
      const value = testObject.testFunction.apply(testObject, args);
      expect(value).toBe(testValue);
    });
    it('여러번 실행시 장식된 함수의 반환값을 반환한다.', () => {
      _.times(3).forEach(() => {
        const value = testObject.testFunction.apply(testObject, args);
        expect(value).toBe(testValue);
      });
    });
    it('같은 키값으로 여러번 실행해도 장식된 함수만 실행한다.', () => {
      _.times(3).forEach(() => {
        const value = testObject.testFunction.apply(testObject, args);
        expect(value).toBe(testValue);
      });
      expect(spy.mock.calls.length).toBe(1);
    });
    it('고유한 각 키값마다 꼭 한번씩 장식된 함수를실행한다', () => {
      const keyValues = ['value1', 'value2', 'value3'];
      keyValues.forEach(arg => testObject.testFunction(arg));
      keyValues.forEach(arg => testObject.testFunction(arg));

      expect(spy.mock.calls.length).toBe(keyValues.length);
    });
  });
});
