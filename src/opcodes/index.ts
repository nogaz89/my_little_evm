import ExecutionContext from "../classes/execution";
import Instruction from "../classes/instructions";

const Opcodes: {
  0: Instruction;
  [key: number]: Instruction | undefined;
} = {
  0x00: new Instruction(0x00, "STOP", (ctx: ExecutionContext) => ctx.stop()),
  0x01: new Instruction(0x01, "ADD"),
  0x02: new Instruction(0x02, "MUL"),
  0x03: new Instruction(0x03, "SUB"),
  0x04: new Instruction(0x04, "DIV"),
  0x06: new Instruction(0x06, "MOD"),
  0x0a: new Instruction(0x0a, "EXP"),
  0x10: new Instruction(0x10, "LT"),
  0x11: new Instruction(0x11, "GT"),
  0x14: new Instruction(0x14, "EQ"),
  0x16: new Instruction(0x16, "AND"),
  0x17: new Instruction(0x17, "OR"),
  0x18: new Instruction(0x18, "XOR"),
  0x19: new Instruction(0x19, "NOT"),
  0x50: new Instruction(0x50, "POP"),
  0x51: new Instruction(0x51, "MLOAD"),
  0x52: new Instruction(0x52, "MSTORE"),
  0x54: new Instruction(0x54, "SLOAD"),
  0x55: new Instruction(0x55, "SSTORE"),
  0x56: new Instruction(0x56, "JUMP"),
  0x57: new Instruction(0x57, "JUMPI"),
  0x5b: new Instruction(0x5b, "JUMPDEST"),
  0x60: new Instruction(0x60, "PUSH1"),
  0x61: new Instruction(0x61, "PUSH2"),
  0x62: new Instruction(0x62, "PUSH3"),
  0x63: new Instruction(0x63, "PUSH4"),
  0x64: new Instruction(0x64, "PUSH5"),
  0x65: new Instruction(0x65, "PUSH6"),
  0x66: new Instruction(0x66, "PUSH7"),
  0x67: new Instruction(0x67, "PUSH8"),
  0x68: new Instruction(0x68, "PUSH9"),
  0x69: new Instruction(0x69, "PUSH10"),
  0x6a: new Instruction(0x6a, "PUSH11"),
  0x6b: new Instruction(0x6b, "PUSH12"),
  0x6c: new Instruction(0x6c, "PUSH13"),
  0x6d: new Instruction(0x6d, "PUSH14"),
  0x6e: new Instruction(0x6e, "PUSH15"),
  0x6f: new Instruction(0x6f, "PUSH16"),
  0x70: new Instruction(0x70, "PUSH17"),
  0x71: new Instruction(0x71, "PUSH18"),
  0x72: new Instruction(0x72, "PUSH19"),
  0x73: new Instruction(0x73, "PUSH20"),
  0x74: new Instruction(0x74, "PUSH21"),
  0x75: new Instruction(0x75, "PUSH22"),
  0x76: new Instruction(0x76, "PUSH23"),
  0x77: new Instruction(0x77, "PUSH24"),
  0x78: new Instruction(0x78, "PUSH25"),
  0x79: new Instruction(0x79, "PUSH26"),
  0x7a: new Instruction(0x7a, "PUSH27"),
  0x7b: new Instruction(0x7b, "PUSH28"),
  0x7c: new Instruction(0x7c, "PUSH29"),
  0x7d: new Instruction(0x7d, "PUSH30"),
  0x7e: new Instruction(0x7e, "PUSH31"),
  0x7f: new Instruction(0x7f, "PUSH32"),
  0x80: new Instruction(0x80, "DUP1"),
  0x81: new Instruction(0x81, "DUP2"),
  0x82: new Instruction(0x82, "DUP3"),
  0x83: new Instruction(0x83, "DUP4"),
  0x84: new Instruction(0x84, "DUP5"),
  0x85: new Instruction(0x85, "DUP6"),
  0x86: new Instruction(0x86, "DUP7"),
  0x87: new Instruction(0x87, "DUP8"),
  0x88: new Instruction(0x88, "DUP9"),
  0x89: new Instruction(0x89, "DUP10"),
  0x8a: new Instruction(0x8a, "DUP11"),
  0x8b: new Instruction(0x8b, "DUP12"),
  0x8c: new Instruction(0x8c, "DUP13"),
  0x8d: new Instruction(0x8d, "DUP14"),
  0x8e: new Instruction(0x8e, "DUP15"),
  0x8f: new Instruction(0x8f, "DUP16"),
  0x90: new Instruction(0x90, "SWAP1"),
  0x91: new Instruction(0x91, "SWAP2"),
  0x92: new Instruction(0x92, "SWAP3"),
  0x93: new Instruction(0x93, "SWAP4"),
  0x94: new Instruction(0x94, "SWAP5"),
  0x95: new Instruction(0x95, "SWAP6"),
  0x96: new Instruction(0x96, "SWAP7"),
  0x97: new Instruction(0x97, "SWAP8"),
  0x98: new Instruction(0x98, "SWAP9"),
  0x99: new Instruction(0x99, "SWAP10"),
  0x9a: new Instruction(0x9a, "SWAP11"),
  0x9b: new Instruction(0x9b, "SWAP12"),
  0x9c: new Instruction(0x9c, "SWAP13"),
  0x9d: new Instruction(0x9d, "SWAP14"),
  0x9e: new Instruction(0x9e, "SWAP15"),
  0x9f: new Instruction(0x9f, "SWAP16"),
  0xf3: new Instruction(0xf3, "RETURN"),
};

export default Opcodes;
