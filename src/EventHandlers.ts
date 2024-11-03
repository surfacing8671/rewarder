/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  R,
  R_AmountNotEnough,
  R_EpochCealingReached,
  R_LpAdded,
  R_LpLimitReached,
  R_LpRemoved,
  R_PendingRewardsUpdated,
  R_RewardsCalculated,
  R_RewardsDeposited,
  R_RewardsTransferred,
  R_TotalPendingRewardsUpdated,
  R_TradeUpdated,
  R_TradeVolumeUpdated,
  R_VibeToHigh,
  R_Withdrawn,
} from "generated";

R.AmountNotEnough.handler(async ({ event, context }) => {
  const entity: R_AmountNotEnough = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    buyVolume: event.params.buyVolume,
  };

  context.R_AmountNotEnough.set(entity);
});

R.EpochCealingReached.handler(async ({ event, context }) => {
  const entity: R_EpochCealingReached = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.R_EpochCealingReached.set(entity);
});

R.LpAdded.handler(async ({ event, context }) => {
  const entity: R_LpAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpAddress: event.params.lpAddress,
    router: event.params.router,
    dailyMaxPerLp: event.params.dailyMaxPerLp,
    dailyMaxPerUserLp: event.params.dailyMaxPerUserLp,
    swapMultiplier: event.params.swapMultiplier,
    vibeLimit: event.params.vibeLimit,
    randomMultiplier: event.params.randomMultiplier,
    divisor: event.params.divisor,
    sellMultiplier: event.params.sellMultiplier,
    buyMultiplier: event.params.buyMultiplier,
  };

  context.R_LpAdded.set(entity);
});

R.LpLimitReached.handler(async ({ event, context }) => {
  const entity: R_LpLimitReached = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.R_LpLimitReached.set(entity);
});

R.LpRemoved.handler(async ({ event, context }) => {
  const entity: R_LpRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpAddress: event.params.lpAddress,
  };

  context.R_LpRemoved.set(entity);
});

R.PendingRewardsUpdated.handler(async ({ event, context }) => {
  const entity: R_PendingRewardsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pendingAmount: event.params.pendingAmount,
    epoch: event.params.epoch,
    lpAddress: event.params.lpAddress,
  };

  context.R_PendingRewardsUpdated.set(entity);
});

R.RewardsCalculated.handler(async ({ event, context }) => {
  const entity: R_RewardsCalculated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
    epoch: event.params.epoch,
    lpAddress: event.params.lpAddress,
    vibes: event.params.vibes,
    accumulatedVolume: event.params.accumulatedVolume,
  };

  context.R_RewardsCalculated.set(entity);
});

R.RewardsDeposited.handler(async ({ event, context }) => {
  const entity: R_RewardsDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    depositor: event.params.depositor,
    amount: event.params.amount,
  };

  context.R_RewardsDeposited.set(entity);
});

R.RewardsTransferred.handler(async ({ event, context }) => {
  const entity: R_RewardsTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.R_RewardsTransferred.set(entity);
});

R.TotalPendingRewardsUpdated.handler(async ({ event, context }) => {
  const entity: R_TotalPendingRewardsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newTotalPending: event.params.newTotalPending,
    epoch: event.params.epoch,
  };

  context.R_TotalPendingRewardsUpdated.set(entity);
});

R.TradeUpdated.handler(async ({ event, context }) => {
  const entity: R_TradeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpAddress: event.params.lpAddress,
    dailyMaxPerLp: event.params.dailyMaxPerLp,
    dailyMaxPerUserLp: event.params.dailyMaxPerUserLp,
    swapMultiplier: event.params.swapMultiplier,
    vibeLimit: event.params.vibeLimit,
    randomMultiplier: event.params.randomMultiplier,
    divisor: event.params.divisor,
    sellMultiplier: event.params.sellMultiplier,
    buyMultiplier: event.params.buyMultiplier,
  };

  context.R_TradeUpdated.set(entity);
});

R.TradeVolumeUpdated.handler(async ({ event, context }) => {
  const entity: R_TradeVolumeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    lpAddress: event.params.lpAddress,
    buyVolume: event.params.buyVolume,
    sellVolume: event.params.sellVolume,
  };

  context.R_TradeVolumeUpdated.set(entity);
});

R.VibeToHigh.handler(async ({ event, context }) => {
  const entity: R_VibeToHigh = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    vibes: event.params.vibes,
  };

  context.R_VibeToHigh.set(entity);
});

R.Withdrawn.handler(async ({ event, context }) => {
  const entity: R_Withdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
    epoch: event.params.epoch,
  };

  context.R_Withdrawn.set(entity);
});
