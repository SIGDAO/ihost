"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionService = void 0;
const core_1 = require("@signumjs/core");
const util_1 = require("@signumjs/util");
const inputValidationService_1 = require("./inputValidationService");
const constants_1 = require("./constants");
const jsonValidator_1 = require("../../ajv/jsonValidator");
class CollectionService {
    context;
    constructor(context) {
        this.context = context;
    }
    async createCollection(args) {
        const descriptor = {
            nc: args.name,
            ds: args.description,
            si: {
                [args.socialMediaImage.ipfsHash]: args.socialMediaImage.mimeType,
            },
            bg: { [args.background.ipfsHash]: args.background.mimeType },
            hp: args.homePage,
            sc: args.socials,
        };
        jsonValidator_1.jsonValidator.validateCollection(descriptor);
        args.homePage && inputValidationService_1.InputValidationService.assertURL(args.homePage);
        args.socials && inputValidationService_1.InputValidationService.assertURL(args.socials);
        const { profile, ledger } = this.context;
        const { publicKey, signPrivateKey } = profile.getKeys();
        return ledger.message.sendMessage({
            feePlanck: util_1.Amount.fromSigna(0.06).getPlanck(),
            senderPublicKey: publicKey,
            senderPrivateKey: signPrivateKey,
            message: JSON.stringify(descriptor),
            messageIsText: true,
            recipientId: constants_1.Constants.Accounts.Collection,
            deadline: 60,
        });
    }
    assertCorrectOwner(tx) {
        const { publicKey } = this.context.profile.getKeys();
        if (publicKey !== tx.senderPublicKey) {
            throw new Error("Permission denied! You are not the owner/creator of given collection");
        }
    }
    async fetchCollection(collectionId) {
        const { ledger } = this.context;
        const transaction = await ledger.transaction.getTransaction(collectionId);
        this.assertCorrectOwner(transaction);
        const { attachment } = transaction;
        const data = new core_1.AttachmentMessage(attachment);
        const descriptor = JSON.parse(data.message);
        jsonValidator_1.jsonValidator.validateCollection(descriptor);
        const toMediaType = (ds) => {
            if (!ds) {
                return {
                    ipfsHash: "",
                    mimeType: "",
                };
            }
            const [ipfsHash, mimeType] = Object.entries(ds)[0];
            return {
                ipfsHash,
                mimeType,
            };
        };
        return {
            name: descriptor.nc,
            description: descriptor.ds,
            socials: descriptor.sc,
            homePage: descriptor.hp,
            background: toMediaType(descriptor.bg),
            socialMediaImage: toMediaType(descriptor.si),
        };
    }
}
exports.CollectionService = CollectionService;
