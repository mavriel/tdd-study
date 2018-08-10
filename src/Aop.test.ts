import Aop from './Aop';

describe('Aop Test', () => {
  let target: any;
  let results: string[];
  const valFromTarget = 'valFromTarget';
  const valFromBefore = 'valFromBefore';
  const valFromAfter = 'valFromAfter';
  const targetName = 'TARGET';

  beforeEach(() => {
    results = [];
    target = {
      targetName,
      runFunc() {
        results.push(this.targetName);
        results.push(valFromTarget);
      },
    };
  });

  it('before', () => {
    Aop.before(
      'runFunc',
      () => {
        results.push(valFromBefore);
      },
      target,
    );
    target.runFunc();
    expect(results).toEqual([valFromBefore, targetName, valFromTarget]);
  });
  it('after', () => {
    Aop.after(
      'runFunc',
      () => {
        results.push(valFromAfter);
      },
      target,
    );
    target.runFunc();
    expect(results).toEqual([targetName, valFromTarget, valFromAfter]);
  });
});
