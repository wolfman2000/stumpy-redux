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
  HasMushroom,
  HasFireRodDarkWorld,
  HasShovelLightWorld,
  HasLantern,
  HasHammerLightWorld,
  HasHammerDarkWorld,
  HasFluteNotInverted,
  HasFluteInverted,
  HasBookLightWorld,
  HasBottle,
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
  CanDefeatMiniMoldorms,
  CanBombJumpOrHover,
  HasBootsOrBombs,
  HasBootsOrHookshot,
  HasHookshotOrHover,
  HasHookshotOrBombHover,
  CanCrossInvisibleBridge,
  CanCrossBumperCave,
  CanKnockItemOffTorch,
  HasSpikeCaveProtection,
  HasPowderOrFake,
  CanHoverInLightWorld,
  CanHoverInDarkWorld,
  HasLightSource,
  HasTorchLightSource,
  HasStandardTorchLightSource,
  CanMakeBlocksDisappear,
  HasReliableProjectile,

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

  CanOpenLockedDoorInSewers,

  CanAccessTowerMaze,
  CanAccessTopOfCastleTower,

  HasBigKeyForEastern,
  CanDefeatRedEyegores,

  HasKeyForDesertDungeonItems,
  HasBigKeyForDesert,

  HasKeyForHeraBasement,
  HasBigKeyForHera,

  HasReliableWeapon,
  CanCutCurtainWall,
}

export default NodeConnectionId;
