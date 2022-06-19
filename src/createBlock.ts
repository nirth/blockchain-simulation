import { Block, Tx } from "./datamodel";
import { createHash } from "./createHash";

export const createBlock = (previousBlock: Block, txs: Tx[]): Block => {
  const {
    blockHash: previousBlockHash,
    height: previousBlockHeight
  } = previousBlock;

  const height = previousBlockHeight + 1;

  const hash = createHash(
    JSON.stringify({
      previousBlockHash,
      height,
      txs
    })
  );

  return {
    hash,
    previousBlockHash,
    height,
    txs
  };
};
