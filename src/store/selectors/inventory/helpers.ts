export const hasItemForLightWorld = (
  inverted: boolean,
  moon: boolean,
  item: boolean,
): boolean => item && ( !inverted || moon );

export const hasItemForDarkWorld = (
  inverted: boolean,
  moon: boolean,
  item: boolean,
): boolean => item && ( inverted || moon );
