const networks_1 = require("../../../lib/networks");
const ledgerService_1 = require("../../../lib/services/ledgerService");
async function pushCollectionToChain({ collectionInfo, profile, logger, mediaFiles, }) {
    logger.log("Pushing collection to chain...");
    const spinner = (0, ora_1.default)("Searching optimal Signum Node...").start();
    try {
        //ok
        const ledger = await (0, networks_1.createNetworkClient)(profile.network); 
        logger.log(`Connected to Signum Node [${ledger.service.settings.nodeHost}]`);
        spinner.succeed(`Using Signum Node: ${ledger.service.settings.nodeHost}`);
        // 
        const service = new ledgerService_1.LedgerService(ledger, profile);
        logger.log(`Creating Collection Transaction...`);
        spinner.start("Create Collection on chain...");
        const { transaction } = await service.collection.createCollection({
            name: collectionInfo.name,
            description: collectionInfo.description,
            socials: collectionInfo.socials,
            homePage: collectionInfo.homepage,
            background: mediaFiles.banner,
            socialMediaImage: mediaFiles.bannerSocial,
        });
        spinner.succeed(`Collection successfully transmitted`);
        console.log("You can track the transaction here", service.getChainExplorerLinkForTx(transaction));
        logger.log(`Successfully created collection with Tx ID [${transaction}]`);
        return transaction;
    }
    catch (e) {
        spinner.fail(e.message);
        throw e;
    }
}
export default pushCollectionToChain ;
