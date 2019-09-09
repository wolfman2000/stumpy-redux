export const wrap = ( val: number, min: number, max: number ): number => {
  if ( val < min ) {
    return max;
  }
  if ( val > max ) {
    return min;
  }
  return val;
};
