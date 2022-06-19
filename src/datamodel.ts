export type Hash = string;

export type Block = {
  hash: Hash;
  previousBlockHash: Hash;
  height: number;
  txs: Tx[];
};

export type Tx = {};
