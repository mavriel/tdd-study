import Aop, { TargetInfo } from '../Aop';

const returnValueCache = () => {
  const cache: any = {};
  return {
    advice: (targetInfo: TargetInfo) => {
      const arg = JSON.stringify(targetInfo.args);
      const result = cache[arg];
      if (result) {
        return result;
      }
      cache[arg] = Aop.next(targetInfo);
      return cache[arg];
    },
  };
};

export default { returnValueCache };
