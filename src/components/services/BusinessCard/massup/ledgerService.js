"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nftService_1 = require("./nftService");
const collectionService_1 = require("./collectionService");
const util_1 = require("@signumjs/util");
const MachineCodeHashSRC40 = "15155055045342098571";
class LedgerService {
    ledger;
    profile;
    nftService;
    collectionService;
    constructor(ledger, profile) {
        this.ledger = ledger;
        this.profile = profile;
        const context = {
            ledger,
            profile,
        };
        this.nftService = new nftService_1.NftService(context);
        this.collectionService = new collectionService_1.CollectionService(context);
    }
    get nft() {
        return this.nftService;
    }
    get collection() {
        return this.collectionService;
    }
    getChainExplorerHost() {
        return this.profile.network !== "Signum Main Net"
            ? "https://t-chain.signum.network"
            : "https://chain.signum.network";
    }
    getChainExplorerLinkForAddress(accountId) {
        return this.getChainExplorerHost() + `/address/${accountId}`;
    }
    getChainExplorerLinkForTx(transactionId) {
        return this.getChainExplorerHost() + `/tx/${transactionId}`;
    }
    async getAvailableBalance() {
        const { unconfirmedBalanceNQT } = await this.ledger.account.getAccountBalance(this.profile.getAccountId());
        return util_1.Amount.fromPlanck(unconfirmedBalanceNQT);
    }
}
export default LedgerService;