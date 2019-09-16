import IAvailabilityLogic from './availability-logic';

interface IAvailabilityMap {
  [x: number]: IAvailabilityLogic;
}

export default IAvailabilityMap;
