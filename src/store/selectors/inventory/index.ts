export function wrap( val: number, min: number, max: number ) {
  if ( val < min ) {
    return max;
  }
  if ( val > max ) {
    return min;
  }
  return val;
}
