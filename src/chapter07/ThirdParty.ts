export default {
  restaurantApi: () => ({
    getRestaurantsNearConference: () => ({}),
    getRestaurantsWithinRadius: (address: string, radiusMiles: number, cuisine: string) => ({
      address: '울산 남구 신정로 20번길 988',
      name: '대성각',
    }),
  }),
};
