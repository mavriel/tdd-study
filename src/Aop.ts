export interface TargetInfo {
  fn: (arg: any) => any;
  args: any[];
  obj: any;
}

export function around(fnName: string, advice: (arg: any) => any, fnObj: object) {
  const originalFn = fnObj[fnName];
  fnObj[fnName] = function() {
    return advice.call(this, { fn: originalFn, args: arguments, obj: fnObj });
  };
}

export function next(this: any, targetInfo: TargetInfo) {
  return targetInfo.fn.apply(targetInfo.obj, targetInfo.args);
}

export function before(fnName: string, advice: (arg: any) => any, fnObj: object) {
  around(
    fnName,
    function(this: any, targetInfo: TargetInfo) {
      advice.apply(this, targetInfo.args);
      return next(targetInfo);
    },
    fnObj,
  );
}

export function after(fnName: string, advice: (arg: any) => any, fnObj: object) {
  around(
    fnName,
    function(this: any, targetInfo: TargetInfo) {
      const ret = next(targetInfo);
      advice.apply(this, targetInfo.args);
      return ret;
    },
    fnObj,
  );
}

export default {
  after,
  around,
  before,
  next,
};
