import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer,
  Approval,
  TokenExchange,
  AddLiquidity,
  RemoveLiquidity,
  RemoveLiquidityOne,
  RemoveLiquidityImbalance,
  CommitNewAdmin,
  NewAdmin,
  CommitNewFee,
  NewFee,
  RampA,
  StopRampA
} from "../generated/Contract/Contract"
import { Withdrawals } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let user = event.params.sender
  let userWithdrawal = Withdrawals.load(user.toHex())
  if (userWithdrawal == null) {
    userWithdrawal = new Withdrawals(user.toHex())
    userWithdrawal.user = event.params.sender;
    userWithdrawal.transferAmounts = new Array<BigInt>();
    userWithdrawal.lpWithdrawTimestamps = new Array<BigInt>();
  }
  let lpWithdrawTimestamps = userWithdrawal.lpWithdrawTimestamps;
  let transferAmounts = userWithdrawal.transferAmounts;
  transferAmounts.push(event.params.value);
  lpWithdrawTimestamps.push(event.address);
  userWithdrawal.lpWithdrawTimestamps = lpWithdrawTimestamps;
  userWithdrawal.transferAmounts = transferAmounts;
  userWithdrawal.save();
}

export function handleApproval(event: Approval): void {}

export function handleTokenExchange(event: TokenExchange): void {}

export function handleAddLiquidity(event: AddLiquidity): void {}

export function handleRemoveLiquidity(event: RemoveLiquidity): void {}

export function handleRemoveLiquidityOne(event: RemoveLiquidityOne): void {}

export function handleRemoveLiquidityImbalance(
  event: RemoveLiquidityImbalance
): void {}

export function handleCommitNewAdmin(event: CommitNewAdmin): void {}

export function handleNewAdmin(event: NewAdmin): void {}

export function handleCommitNewFee(event: CommitNewFee): void {}

export function handleNewFee(event: NewFee): void {}

export function handleRampA(event: RampA): void {}

export function handleStopRampA(event: StopRampA): void {}
