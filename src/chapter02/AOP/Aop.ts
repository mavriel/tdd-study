export interface TargetInfo {
  args: any[];
  fn: () => void;
}

function around(
  fnName: string,
  advice: (targetInfo: TargetInfo) => any,
  targetObj: any,
) {
  const originalFn = targetObj[fnName];
  targetObj[fnName] = function() {
    return advice.call(this, {
      args: arguments,
      fn: originalFn,
    });
  };
}

export default {
  around,
};
