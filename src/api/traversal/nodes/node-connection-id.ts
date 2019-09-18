enum NodeConnectionId {
  // De facto.
  Always,
  AlwaysVisible,

  // Pure Settings
  IsInverted,
  IsNotInverted,

  // Pure Items
  HasHookshotLightWorld,
  HasHookshotDarkWorld,
  HasBombsLightWorld,
  HasBombsDarkWorld,
  HasFireRodDarkWorld,
  HasShovelLightWorld,
  HasLantern,
  HasHammerLightWorld,
  HasHammerDarkWorld,
  HasFluteNotInverted,
  HasFluteInverted,
  HasBookLightWorld,
  HasMirror,
  HasMirrorInverted,
  HasGloveLightWorld,
  HasGloveDarkWorld,
  HasTitansLightWorld,
  HasTitansDarkWorld,
  HasBootsLightWorld,
  HasBootsDarkWorld,
  HasFlippers,
  HasFakableFlippers,

  // Simple actions
  CanActInLightWorld,
  CanActInDarkWorld,

  // More descriptive.
  CanPullPedestal,
  CanEnterPyramidWall,
  CanEnterDarkWorldViaAgahnim,
  CanEnterLightWorldViaAgahnim,
  HasNotBeatenAgahnimForDarkWorld,
  CanEnterCastleTower,
  CanEnterLumberjackTree,
  CanLiftToDarkWorld,
  CanLiftToLightWorld,
  CanHeavyLiftToDarkWorld,
  CanHeavyLiftToLightWorld,
  CanWalkToUpperTurtleRockSurface,
  CanLeaveUpperTurtleRockSurface,
  CanWarpToDarkFromUpperTurtleRock,
  IsTabletAccessible,
  CanGetItemsAfterWaterfall,
  CanEnterMiseryMire,
  CanEnterTurtleRock,
}

export default NodeConnectionId;
