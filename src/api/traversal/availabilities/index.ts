import Availability from './availability';
import AvailabilityLogic from './availability-logic';

const unavailable: AvailabilityLogic = {
  availability: Availability.Unavailable,
  usesGlitches: false,
};

const available: AvailabilityLogic = {
  availability: Availability.Available,
  usesGlitches: false,
};

const visible: AvailabilityLogic = {
  availability: Availability.Visible,
  usesGlitches: false,
};

const possible: AvailabilityLogic = {
  availability: Availability.Possible,
  usesGlitches: false,
}

const availableWithGlitches: AvailabilityLogic = {
  availability: Availability.Available,
  usesGlitches: true,
};

const visibleWithGlitches: AvailabilityLogic = {
  availability: Availability.Visible,
  usesGlitches: true,
};

const possibleWithGlitches: AvailabilityLogic = {
  availability: Availability.Possible,
  usesGlitches: true,
};

export {
  available,
  availableWithGlitches,
  visible,
  visibleWithGlitches,
  possible,
  possibleWithGlitches,
  unavailable
};
