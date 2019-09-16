enum NodeConnectionId {
  // De facto.
  Always,
  AlwaysVisible,

  // Pure Settings
  IsInverted,
  IsNotInverted,

  // Pure Items
  HasHookshotLightWorld,
  HasBombsLightWorld,
  HasShovelLightWorld,
  HasLantern,
  HasHammerLightWorld,
  HasFluteNotInverted,
  HasFluteInverted,
  HasBookLightWorld,
  HasMirror,
  HasMirrorInverted,
  HasGloveLightWorld,
  HasTitansLightWorld,
  HasBootsLightWorld,
  HasFlippers,
  HasFakableFlippers,

  // Simple actions
  CanActInLightWorld,

  // More descriptive.
  CanEnterDarkWorldViaAgahnim,
  HasNotBeatenAgahnimForDarkWorld,
  CanEnterCastleTower,
  CanEnterLumberjackTree,
  CanLiftToDarkWorld,
  CanHeavyLiftToDarkWorld,
  CanWalkToUpperTurtleRockSurface,
  CanLeaveUpperTurtleRockSurface,
  CanWarpToDarkFromUpperTurtleRock,
  IsTabletAccessible,
  CanGetItemsAfterWaterfall,
}

export default NodeConnectionId;
