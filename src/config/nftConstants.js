import { Amount, convertDecStringToHexString, convertHexStringToDecString} from "@signumjs/util";

export const NftConstants = {
    Methods: {
      TransferRoyalties: "7174296962751784077",
    },
    Fees: {
      Interaction: Amount.fromSigna(0.01),
      Activation: Amount.fromSigna(0.3),
    },
  };

export const constants_1 = {
    Constants: {
      ServiceFee: 20,
      Accounts: {
        Collection: "1502073279564421257",
        PlatformFee: "8926959845844390999",
        NftTrackSetNotForSale: "14986235278515523967",
        NftTrackSetForSale: "12845950337514560867",
        NftTrackAuctionOpened: "2892883396191715547",
        NftTrackAuctionBid: "5402814080676359773",
        NftTrackNewOwner: "752572214749075641",
        NftTrackOwnershipTransferred: "1437517716086571749",
        NftTrackRoyaltiesTransferred: "14653783900473749918",
        NftTrackLikeReceived: "1235333885279400565",
        NftTrackDutchAuctionOpened: "14874413796446025648",
        NftTrackOfferReceived: "14297788612977302728",
        NftTrackOfferRemoved: "4028407282971252591",
      },
      Contract: {
        BaseName: "NFTSRC40",
        Reference: {
          Testnet: "2506608D961BF2CBFA275F63E3883104E0248096FEC2F86D6DA73CFF213B7D8C",
          MainNet: "4C840330C4352C62871D34CFBD0242F68F551FDBB9C12E013A1489A26009E16D",
        },
        InteractionFee: 0.02,
        ActivationCosts: 0.3,
        MinimumSellAmount: 0.01,
        MinimumPriceDrop: 0.001,
        MaximumRoyaltyFee: 250,
        AuctionTimeoutMinimum: 60,
        AuctionTimeoutMaximum: 44640,
      },
    },
  }

