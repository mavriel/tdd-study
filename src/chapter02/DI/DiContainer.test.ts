import DiContainer from './DiContainer';

describe('DiContainer', () => {
  let container: any;
  beforeEach(() => {
    container = new DiContainer();
  });
  describe('register(name, dependencies, func', () => {
    it('인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다.', () => {
      const badArgs = [
        [],
        ['Name'],
        ['Name', ['Dependency1', 'Dependency2']],
        ['Name', () => {
        }],
        [1, ['a', 'b'], () => {
        }],
        ['Name', [1, 2], () => {
        }],
        ['Name', ['a', 'b'], 'should be a function'],
      ];
      badArgs.forEach(args => {
        expect(() => container.register.apply(container, args)).toThrowError(
          DiContainer.messages.registerRequiresArgs,
        );
      });
    });
  });

  describe('get(name)', () => {
    it('name이 등록되어 있지 않으면 undefined 반환', () => {
      expect(container.get('notDefined')).toBeUndefined();
    });

    it('등록된 함수를 실행한 결과를 반환한다.', () => {
      const name = 'MyName';
      const returnFromRegisterdFunction = '반환값';

      container.register(name, [], () => returnFromRegisterdFunction);
      expect(container.get(name)).toBe(returnFromRegisterdFunction);
    });

    it('등록된 함수에 의존성을 제공한다.', () => {
      const main = 'main';
      const dep1 = 'dep1';
      const dep2 = 'dep2';

      container.register(
        main,
        [dep1, dep2],
        (dep1Func: () => any, dep2Func: () => any) => () =>
          dep1Func() + dep2Func(),
      );

      container.register(dep1, [], () => () => 1);
      container.register(dep2, [], () => () => 2);

      expect(container.get(main)()).toBe(3);
    });
  });
});
