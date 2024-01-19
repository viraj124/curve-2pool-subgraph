// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Withdrawals extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrawals entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrawals entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrawals", id.toString(), this);
  }

  static load(id: string): Withdrawals | null {
    return store.get("Withdrawals", id) as Withdrawals | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get transferAmounts(): Array<BigInt> {
    let value = this.get("transferAmounts");
    return value.toBigIntArray();
  }

  set transferAmounts(value: Array<BigInt>) {
    this.set("transferAmounts", Value.fromBigIntArray(value));
  }

  get lpWithdrawTimestamps(): Array<BigInt> {
    let value = this.get("lpWithdrawTimestamps");
    return value.toBigIntArray();
  }

  set lpWithdrawTimestamps(value: Array<BigInt>) {
    this.set("lpWithdrawTimestamps", Value.fromBigIntArray(value));
  }
}
