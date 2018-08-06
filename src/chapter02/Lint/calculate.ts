const calculate = (tripMileages: number[], memberMultiplier: number) => {
  // return tripMileages.map(mileage => mileage * memberMultiplier);
  const upgradeMileage = [];
  let i = 0;
  for (i = 0; i < tripMileages.length; i++) {
    // @ts-ignore
    function cal(m) {
      return m * memberMultiplier;
    }

    upgradeMileage[i] = cal(tripMileages[i]);
  }
  return upgradeMileage;
};

export default calculate;
