import Availability from './availability';

const unavailable = {
  availability: Availability.Unavailable,
  usesGlitches: false,
};

const available = {
  availability: Availability.Available,
  usesGlitches: false,
};

export { available, unavailable };
