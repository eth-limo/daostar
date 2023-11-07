// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewRegistration extends ethereum.Event {
  get params(): NewRegistration__Params {
    return new NewRegistration__Params(this);
  }
}

export class NewRegistration__Params {
  _event: NewRegistration;

  constructor(event: NewRegistration) {
    this._event = event;
  }

  get daoAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get daoURI(): string {
    return this._event.parameters[1].value.toString();
  }

  get registration(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class EIP4824RegistrationSummoner__registrationAddressResult {
  value0: Address;
  value1: boolean;

  constructor(value0: Address, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getAddr(): Address {
    return this.value0;
  }

  getExists(): boolean {
    return this.value1;
  }
}

export class EIP4824RegistrationSummoner__summonRegistrationResult {
  value0: Address;
  value1: Array<Bytes>;

  constructor(value0: Address, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBytesArray(this.value1));
    return map;
  }

  getRegistration(): Address {
    return this.value0;
  }

  getResults(): Array<Bytes> {
    return this.value1;
  }
}

export class EIP4824RegistrationSummoner extends ethereum.SmartContract {
  static bind(address: Address): EIP4824RegistrationSummoner {
    return new EIP4824RegistrationSummoner(
      "EIP4824RegistrationSummoner",
      address
    );
  }

  registrationAddress(
    by: Address,
    salt: Bytes
  ): EIP4824RegistrationSummoner__registrationAddressResult {
    let result = super.call(
      "registrationAddress",
      "registrationAddress(address,bytes32):(address,bool)",
      [ethereum.Value.fromAddress(by), ethereum.Value.fromFixedBytes(salt)]
    );

    return new EIP4824RegistrationSummoner__registrationAddressResult(
      result[0].toAddress(),
      result[1].toBoolean()
    );
  }

  try_registrationAddress(
    by: Address,
    salt: Bytes
  ): ethereum.CallResult<
    EIP4824RegistrationSummoner__registrationAddressResult
  > {
    let result = super.tryCall(
      "registrationAddress",
      "registrationAddress(address,bytes32):(address,bool)",
      [ethereum.Value.fromAddress(by), ethereum.Value.fromFixedBytes(salt)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EIP4824RegistrationSummoner__registrationAddressResult(
        value[0].toAddress(),
        value[1].toBoolean()
      )
    );
  }

  summonRegistration(
    salt: Bytes,
    daoURI_: string,
    manager: Address,
    contracts: Array<Address>,
    data: Array<Bytes>
  ): EIP4824RegistrationSummoner__summonRegistrationResult {
    let result = super.call(
      "summonRegistration",
      "summonRegistration(bytes32,string,address,address[],bytes[]):(address,bytes[])",
      [
        ethereum.Value.fromFixedBytes(salt),
        ethereum.Value.fromString(daoURI_),
        ethereum.Value.fromAddress(manager),
        ethereum.Value.fromAddressArray(contracts),
        ethereum.Value.fromBytesArray(data)
      ]
    );

    return new EIP4824RegistrationSummoner__summonRegistrationResult(
      result[0].toAddress(),
      result[1].toBytesArray()
    );
  }

  try_summonRegistration(
    salt: Bytes,
    daoURI_: string,
    manager: Address,
    contracts: Array<Address>,
    data: Array<Bytes>
  ): ethereum.CallResult<
    EIP4824RegistrationSummoner__summonRegistrationResult
  > {
    let result = super.tryCall(
      "summonRegistration",
      "summonRegistration(bytes32,string,address,address[],bytes[]):(address,bytes[])",
      [
        ethereum.Value.fromFixedBytes(salt),
        ethereum.Value.fromString(daoURI_),
        ethereum.Value.fromAddress(manager),
        ethereum.Value.fromAddressArray(contracts),
        ethereum.Value.fromBytesArray(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EIP4824RegistrationSummoner__summonRegistrationResult(
        value[0].toAddress(),
        value[1].toBytesArray()
      )
    );
  }

  template(): Address {
    let result = super.call("template", "template():(address)", []);

    return result[0].toAddress();
  }

  try_template(): ethereum.CallResult<Address> {
    let result = super.tryCall("template", "template():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SummonRegistrationCall extends ethereum.Call {
  get inputs(): SummonRegistrationCall__Inputs {
    return new SummonRegistrationCall__Inputs(this);
  }

  get outputs(): SummonRegistrationCall__Outputs {
    return new SummonRegistrationCall__Outputs(this);
  }
}

export class SummonRegistrationCall__Inputs {
  _call: SummonRegistrationCall;

  constructor(call: SummonRegistrationCall) {
    this._call = call;
  }

  get salt(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get daoURI_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get manager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get contracts(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class SummonRegistrationCall__Outputs {
  _call: SummonRegistrationCall;

  constructor(call: SummonRegistrationCall) {
    this._call = call;
  }

  get registration(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[1].value.toBytesArray();
  }
}