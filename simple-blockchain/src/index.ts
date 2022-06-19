import { createBlock } from "./createBlock";
import { createHash } from "./createHash";
import { Block } from "./datamodel";

const genesisBlockHash = createHash(
  JSON.stringify({
    previousBlockHash: "",
    height: 0,
    txs: []
  })
);

const genesisBlock: Block = {
  previousBlockHash: "",
  height: 0,
  hash: genesisBlockHash,
  txs: []
};

const firstBlock = createBlock(genesisBlock, []);
const secondBlock = createBlock(firstBlock, []);
const thirdBlock = createBlock(secondBlock, []);

console.log("firstBlock:", firstBlock);
console.log("secondBlock:", secondBlock);
console.log("thirdBlock:", thirdBlock);
