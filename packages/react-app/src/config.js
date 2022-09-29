import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x596c20065878b93e7827743fa2fcdd781b4ab096";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/1YOKHDpnL9ckDty1sox-xfLseVA84I7J",
  },
};
