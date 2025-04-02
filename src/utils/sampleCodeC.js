import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { CgRemove } from "@react-icons/all-files/cg/CgRemove";
import { AiFillIdcard } from "@react-icons/all-files/ai/AiFillIdcard";
import { CgSmartHomeWashMachine } from "@react-icons/all-files/cg/CgSmartHomeWashMachine";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { VscOrganization } from "@react-icons/all-files/vsc/VscOrganization";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { MdPayment } from "@react-icons/all-files/md/MdPayment";
import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { SiIpfs } from "@react-icons/all-files/si/SiIpfs";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import { GrCertificate } from "react-icons/gr";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";

export const scDescriptionC = {
    //for smartC
  configurableTimer: "The contract will act as a timer for any incoming transactions, dispatching all balance to target address on next block that is multiple of a configurable number. Creator must configure target address with a message.",
  liquidityPool: `Implements a liquidity pool (constant product formula).
  Includes measures to protect traders from sandwich attack: bots that monitor transactions to manipulate prices by changing transactions order.
  Liquity providers receive liquitidy tokens (lpToken) to redeem the balance later.
  Holders of lpTokens receive payments from trades fees.`,
  EchoAnySize: `Simple contract that reads the incoming text message until a zero byte is found on last byte of last page read. Clears the rest of message buffer and then send the "same message" to sender. Smart contracts only can send 32 bytes each time, so expect the received message to be multiple of 32, padded with zero bytes. Online at tesnet TS-LZYH-PE75-JZTB-FJ88Y. Note that there is no API to get the message size, so the program must handle the input end in some way. Activation amount is huge because the fees to read/send info for a smart contract are much higher than sending manually and the contract must handle input text up the 1000 bytes, the current blockchain limit.`,
  GetATCreatorID: `Simple contract that receives a message with some AT ID (text message in decimal representation) and return to sender a message with the creator's ID of that AT (also in text unsigned decimal representation). Online at tesnet TS-7MUA-SSZ8-W6QR-6M892`,
  PublicMethodsOnSmartC: `SmartJ uses a simple concept to integrate Smart Contracts. It works by defining a public method that can be called by other classes and also imported in other projects. SmartC does not have this kind of java integration, but the same result can be achieved.

  To be clear, skeleton codes for SmartC and SmartJ are shown. The main loop for processing messages is hidden in SmartJ, and this part calls the protected methods. Also the switch statement for routing transactions to the public methods is prepared. This is reached using magic numbers to make relationship between the message and the method.`,
  remoteControl: `The contract will dispatch transactions according to instructions from its creator.`,
  dropper: `Sends a fixed amount of signa to a defined account every N blocks. `,
  get3Random: `When a message arrives, the program tries to parse a number
  from message. Number must be bigger or equal 5 and lower or equal 9999999. If
  found, then program mixes random hash for 3 blocks and send back a message
  to the sender with the random numbers without repetition. When there is no  more
  pending messages, all balance remaining is sent to program creator.`,
  remoteControl: `The contract will dispatch transactions according to instructions from its creator.`,
    //for smartJ
    AlwaysRunning:`A contract that runs on every block until there is no more balance.`,
    Auction:` * Auction smart contract.
    
    An Auction smart contract that will allow people to send funds which
    will be refunded back to them (minus the activation fee) if someone
    else sends more. Minimum bid should be higher than the INITIAL_PRICE.
    
    After the auction timed-out a final transaction (likely to come from
    the beneficiary) is needed to trigger the payment and close the auction.
    
    This auction contract cannot be reused, once closed or timedout the
    auction is never open again.

    Inspired by http://ciyam.org/at/at_auction.html
    @author jjos`,
    AuctionNFT:`
    Auction smart contract with a beneficiary and with 1% fee for creator.
    
    An Auction smart contract that will allow people to send funds which will be
    refunded back to them (minus the activation fee) if someone else sends more.
    
    This smart contract is initially closed and the beneficiary (the current owner)
    is the creator. Then one can call the {@link #open(Address, long, long)} method.
    
    After the auction times-out any new transaction received will trigger the auction
    closing logic. When closing, the current beneficiary receive the highest bid amount
    and the highest bidder becomes the new beneficiary. This new beneficiary can
    choose to open the auction again with a new timeout and new minimum bid value.

    Inspired by http://ciyam.org/at/at_auction.html
    
    @author jjos
    `,
    BurstGame:`
    An betting game where each participant has a chance of winning proportional to the amount bet.
    
    Someone creates this contract and then send some amount to initialize it. Let's say the creator
    send 1000 BURST plus fees. Then, say a challenger bet against the creator by sending 100 BURST
    plus fees.
    
    Based on the next block hash (on future) a random number will be generated between 1 and 1000+100.
    Any number between 1-1000 will make the creator the winner and any number between 1001-1100
    will make the challenger the winner. So, if you bet with a larger amount you increase your
    chances but put more at stake.
    
    This code tips the developer 0.5% when the creator is the winner and 1% when the challenger
    is the winner. This difference is to make incentives in putting bets available.
    
    @author jjos
    `,
    Crowdfund:`
    Crowdfunding smart contract
    
    If a target balance is achieved by a hard-coded time then the entire
    balance will be sent to an account which is also hard-coded.
    If not then the txs that were sent to this contract will be iterated and
    refunded to one by one.

    Inspired by http://ciyam.org/at/at_crowdfund.html
    
    @author jjos
    `,
    CrowdfundPlatform:`
    Crowd-funding smart contract to be used in a crowd-funding platform.
    
    If a target amount is achieved before the given number of blocks, then the entire
    balance will be sent to the beneficiary account (minus a platform fee).
    If target is not achieved, then all transactions are refunded (minus the gas fee).

    Inspired by http://ciyam.org/at/at_crowdfund.html
    
    @author jjos
    `,
    Echo:` A smart contract that simply echoes the message received.
    @author jjos`,
    Faucet:`
    A faucet smart contract sending back 30 BURST for every transaction received.
    
    This will run until there is no more balance. Anyone can recharge this
    contract by sending more than 30 BURST.
    
    @author jjos
    `,
    Forward: `
    A smart contract that simply forwards all funds received to another account.
    
    @author jjos
    `,
    ForwardMin:`
    A smart contract that forwards all funds received to another account
    every time the balance reaches 1000 BURST.
        
    @author jjos
    `,
    HappyCIP20:`
    This is a sample contract planned to run as a celebration of CIP20.
    
    In case CIP20 goes live, there are plans to run a contract that will return more BURST
    than it receives until it goes out of balance.
    
    In the implementation below, anyone sending only the activation amount (to be decided)
    will get back 1 BURST. The implementation is very inefficient, since it iterates over
    all transaction history for every new transaction. This contract would run out of
    balance much faster on the previous AT fees.
    
    The idea is to people with new wallets to get a very small anount of BURST from one
    of the faucets and then get 1 BURST from this contract (automatically activating their
    accounts).
    `,
    HashLoop:`A contract that run hashes until there is no more balance.`,
    HashedTimeLock:`A hashed time lock smart contract.
    
    This small sample can be extended to implement cross-chain atomic swaps.
    
    This contract should be initialized with a hashlock and beneficiary.
    
    If the beneficiary sends the correct key the funds are unlocked. If the
    creator send a transaction and the timelock as passed, the funds are
    withdraw.
    
    @author jjos`,
    Hello: `A contract that simply send a "Hello, World" message back.
     
    Contract publishing fee currently is 4 BURST for this contract and its
    execution fee is 15.1 BURST (activation fee should be this later value or
    more).

    @author jjos
    `,
    KohINoor:`The 'Koh-i-Noor' smart contract.
    
    This smart contract was designed to be single, in the sense that there is
    only one of his category in the entire world.
    
    When created, the contract is <i>owned</i> by the creator and a selling price
    of 5000 BURST is set. Anyone that transfers more than this amount is the new
    owner. When a new owner is set, the contract price is automatically increased by
    10%.
    
    So, every new owner either have 10% return of investment (minus 1% fee) or
    keep the ownership of the Koh-i-Noor.
    
    @author jjos
    `,
    MultiSigLock:`A funds locking smart contract allowing to move funds after a pre-defined
    number of signatures.
    
    Each of the hardcoded owners has the ability to *sign* (or *vote*) for a
    funds transfer for a given address. When the minium number of signatures is
    reached (and all signees agree in terms of the amount) the transfer takes
    place and the signatures (or votes) are erased.
    
    This contract can be reused many times and can also be recharged with more
    balance by just sending more transactions to it.
    
    @author jjos`,
    NFT2:`A Non-Fungible Token smart contract with DEX and auction capabilities.
    
    This contract represents a non-fungible or unique token for Burst blockchain.
    
    When created the contract is <i>owned</i> by the creator. After that, the
    owner can transfer the ownership to another address. Additionally, the owner
    can put the token for sale or for auction with a given timeout.
    
    Although this was inspired by http://erc721.org/, the mechanics are very
    different. For instance, there is one contract <i>instance</i> per token and
    each token is already a decentralized exchange (DEX) with absolutely no
    middle man.
    
    @author jjos`,
    OddsGame:`An 'odds and evens game' contract that pays double or nothing on a 50% chance.
    
    From the amount sent to the contract the activation fee is subtracted and this resulting
    amount is doubled if the sender wins. Let's say the activation fee was set as 10 BURST,
    a winning bet of 100 BURST will receive back (100-10)*2 == 180 BURST. A winning bet
    of 1000 BURST will receive back (1000-10)*2 = 1980 BURST.
    
    Every transaction sent to this contract has an even or odd value attributed
    according to the transaction number. A block in future is used to decide the winning
    value (even or odd), chosen based on the block hash (random source).
    
    Winners of previous bets are computed as new bets come in, so people need to keep
    betting to keep the system working.
    
    A value in the future is used as source for randomness to difficult tampering
    from malicious miners. For the same reason, a high activation fee is also advisable
    and a MAX_PAYMENT is set.
    
    @author jjos`,
    PaymentChannel:`A unidirectional (micro) payment channel.

    The creator is the payer and someone else is the payee. There is no way for
    the payer to reduce the BURST amount in an open channel, only to increase it
    by depositing more BURST on it.
    
    So the payer should write "checks" ({@link #approveAmount(long, long)} signed
    messages) and send them to the payee (off-chain). Neither the payer nor the
    payee usually broadcast these messages, since that would cost a transaction
    fee without additional benefit.
    
    Whenever the payee finds suitable (but before the channel timeout) the
    payee broadcast the payer mesage for the largest value approved and then
    closes the channel {@link #closeChannel(long)} to receive the BURST amount.
    
    By extending this contract, a bi-directional channel could be implemented.
    Either that or simply open two different channels with payer and payee roles
    inverted.
    
    @author jjos`,
    ProofOfBurn:`A smart contract that burns all BURST it receives.
    
    @author jjos`,
    Refund:`
    A contract that simply refunds any funds received (minus activation fee).
    
    @author jjos`,
    Sha256_64:`A smart contract that simply echoes the message received.

    `,
    TXCounter:`A smart contract that simply counts the number of received transactions
    and processed blocks (with transactions).
    
    @author jjos`,
    TXCounter2:` *A smart contract that simply counts the number of received transactions
    and processed blocks (with transactions).`,
    
    TipThanks:`A smart contract for accepting tips and return a tank you message.
    
    For every transaction received (amount higher than the activation fee),
    a "Thank you!" message is returned. Messages from smart contracts
    currently come only as hexadecimal numbers. To actually read the
    message contents convert from hexadecimal to string using, for instance,
    https://codebeautify.org/hex-string-converter.
    
    When the balance reaches a specified mininum amount, the balance
    is transfered to the beneficiary.
    
    @author jjos`,
    UniqueToken: `A unique (non-fungible) token smart contract.
    
    This contract represents a non-fungible or unique token for Burst blockchain.
    
    When created the contract is <i>owned</i> by the creator. After that the
    owner can transfer the ownership to another address. Additionally, the owner
    can put the token on sale with a given timeout.

    Although this was inspired by http://erc721.org/, the mechanics are very
    different. For instance, there is one contract <i>instance</i> per token and
    each token is already a decentralized exchange (DEX) with absolutely no
    middle man.
    
    @author jjos`,
    Will:`A "will" contract that transfers its balance to beneficiary account 
    if a given timeout is reached.

    Inspired by http://ciyam.org/at/at_dormant.html
    
    @author jjos`,
    GamevoteContract: `@author evolver
 this is the smart contract for the flashwork second layer solution
 features:
 - depositing and lock a amount for the second layer
 - get profit with votepoints
 - request a withdrawal that needs to be voted on
 - vote for withdrawal requests
 - prevent doublevotes
 - prevent fraud
 still in developement`,
    PollContract: `This contract serves as a distributor contract for polls`,
    SolarSystemContract: `@author evolver
 this smart contract implements a solar system`,
    ZeptorlightContract: `@author hansmeuller`,

}

export const scCodeC = {
  configurableTimer: `#define MULTIPLE 5

  #program name MultipleOf
  #program description Creator deploys the contract and send a binary
   message with target address. The contract will act as a timer for
   any incoming transactions, dispatching all balance to target address on
   next block that is multiple of MULTIPLE.
  #program activationAmount 1_1000_0000
  
  /* Do not change below here */
  
  #include APIFunctions
  #pragma version 1.0
  
  const long multiple = MULTIPLE, n32 = 32;
  long lastTimestamp, sleepBlocks, creator;
  
  B_To_Address_Of_Creator();
  creator = Get_B1();
  
  // phase 1: wait to receive target address from creator
  do {
      A_To_Tx_After_Timestamp(lastTimestamp);
      if (Get_A1() == 0) {
          halt;
          continue;
      }
      lastTimestamp = Get_Timestamp_For_Tx_In_A();
      B_To_Address_Of_Tx_In_A();
      if (Get_B1() == creator) {
          Message_From_Tx_In_A_To_B();
          break;
      }
  } while (true);
  
  // phase 2: Endless timer transaction
  do {
      sleepBlocks = multiple - ((Get_Block_Timestamp() >> 32) % multiple);
      if (sleepBlocks != multiple) {
          sleep sleepBlocks;
      }
      Send_All_To_Address_In_B();
  } while (true);`,
  liquidityPool: `#program name TMGSignaLiquidityPool
  #program description 1) Implements a liquidity pool (constant product formula).
   2) Includes measures to protect traders from sandwich attack: bots that
   monitor transactions to manipulate prices by changing transactions order.
   3) Liquity providers receive liquitidy tokens (lcToken) to redeem the balance
   later. 4) Holders of lcTokens receive payments from trades fees.
  #define ACTIVATION_AMOUNT 4200_0000
  #program activationAmount ACTIVATION_AMOUNT
  
  // #pragma verboseAssembly
  #pragma optimizationLevel 3
  
  #pragma version 2.1.1
  
  #define SIMULATOR
  // Name for liquidity token (max 8, only letters and number)
  #define LP_TICKER "lcTMG"
  // Pool fee in parts per thousand for each trade
  #define POOL_FEE 20
  // Platform fee in percent for each distribution (only signa part)
  #define PLATFORM_FEE 5
  // If true, fees collected in asset will be traded inside the pool before
  // distribution, so liquidity providers receive only Signa. If false, the
  // distribution will have Signa and assets
  #define DISTRIBUTE_ONLY_SIGNA false
  
  #ifdef SIMULATOR
    // Try distribution every block
    #define DISTRIBUTION_INTERVAL 1
    #define ASSET_ID 222333
    #program codeHashId 12551049878178174318
  #else
    // Try distribution every day
    #define DISTRIBUTION_INTERVAL 360
    #define ASSET_ID 11955007191311588286
    #program codeHashId 5997699537277718563
  #endif
  
  /* End of configurations */
  
  #define FIELD_TRADE_AMOUNT 0
  #define FIELD_TRADE_SENDER 1
  #define FIELD_REMOVE_AMOUNT 2
  #define FIELD_REMOVE_SENDER 3
  
  #define sqrt(val) (powf(val,half))
  
  const fixed half = 0.5;
  const long assetId = ASSET_ID;
  const long distributeOnlySigna = DISTRIBUTE_ONLY_SIGNA;
  long liquidityToken;
  
  struct TXINFO {
      long txid;
      long sender;
      long amount;
      long quantity;
      long message[2];
  } currentTX;
  
  struct TOTAL {
      long signaTotal;
      long assetTotal;
  } pool, block;
  
  struct STATS {
      long trades, volume;
  } stats;
  
  long currentLiquidity;
  long enqueuedTrades, enqueuedRemovals;
  long lastDistribution;
  long i;
  
  // Constructor
  long owner = getCreator();
  long newOwner = 0;
  long shutdown = false;
  liquidityToken = issueAsset(LP_TICKER, "", 0);
  lastDistribution = getCurrentBlockheight();
  // end Constructor
  
  void main () {
      enqueuedTrades = 0;
      enqueuedRemovals = 0;
      block.assetTotal = 0;
      block.signaTotal = 0;
      while ((currentTX.txid = getNextTx()) != 0) {
          // get details
          currentTX.sender = getSender(currentTX.txid);
          currentTX.amount = getAmount(currentTX.txid);
          readShortMessage(currentTX.txid, currentTX.message, currentTX.message.length);
          currentTX.quantity = getQuantity(currentTX.txid, assetId);
          if (shutdown != 0) {
              refundTransaction();
              continue;
          }
          // process command
          switch (currentTX.message[0]) {
          case 'add':
              addLiquidity();
              break;
          case 'remove':
              removeLiquidity();
              break;
          case 'trade':
              processTrade();
              break;
          case "":
              // No message, do not process
              break;
          case 'accept':
              // new owner accepts ownership
              if (currentTX.sender == newOwner) {
                  owner = currentTX.sender;
                  newOwner = 0;
              }
              break;
          default:
              // unknow command
              if (currentTX.sender == owner) {
                  processCreatorCommand();
                  break;
              }
              refundTransaction();
          }
      }
      // After all transactions processed
      processEnqueuedTrades();
      processEnqueuedRemovals();
      shutdownHandler();
  }
  
  void refundTransaction() {
      if (currentTX.quantity > 0) {
          sendQuantityAndAmount(currentTX.quantity, assetId, currentTX.amount, currentTX.sender);
      } else if (currentTX.amount > 0) {
          sendAmount(currentTX.amount, currentTX.sender);
      }
  }
  
  void addLiquidity() {
      long operationAsset,  operationSigna;
      long operationLiquidity, excessSigna;
      if (currentTX.amount == 0 || currentTX.quantity == 0) {
          refundTransaction();
          return;
      }
      if (currentLiquidity == 0) {
          excessSigna = 0;
          operationSigna = currentTX.amount;
          operationAsset = currentTX.quantity;
          operationLiquidity = sqrt(operationAsset) * sqrt(operationSigna);
      } else {
          excessSigna = currentTX.amount - mdv(currentTX.quantity, pool.signaTotal, pool.assetTotal);
          long excessAsset = currentTX.quantity - mdv(currentTX.amount, pool.assetTotal, pool.signaTotal);
          if (excessSigna < 0) {
              // Refund the excess of asset
              sendQuantity(excessAsset, assetId, currentTX.sender);
              operationAsset = currentTX.quantity - excessAsset;
              operationSigna = currentTX.amount;
          } else {
              // Refund the excess of signa
              operationAsset = currentTX.quantity;
              operationSigna = currentTX.amount - excessSigna;
          }
          operationLiquidity = currentLiquidity * operationSigna / pool.signaTotal ;
      }
      // Issue/send liquidity token
      mintAsset(operationLiquidity, liquidityToken);
      sendQuantityAndAmount(operationLiquidity, liquidityToken, excessSigna, currentTX.sender);
      // Update totals
      pool.signaTotal += operationSigna;
      pool.assetTotal += operationAsset;
      currentLiquidity += operationLiquidity;
  }
  
  void removeLiquidity() {
      long liquidityWithdraw = getQuantity(currentTX.txid, liquidityToken);
      if (liquidityWithdraw == 0) {
          return;
      }
      setMapValue(FIELD_REMOVE_AMOUNT, enqueuedRemovals, liquidityWithdraw);
      setMapValue(FIELD_REMOVE_SENDER, enqueuedRemovals, currentTX.sender);
      enqueuedRemovals++;
  }
  
  void processEnqueuedRemovals() {
      for (i = 0; i < enqueuedRemovals; i++) {
          long qty = getMapValue(FIELD_REMOVE_AMOUNT, i);
          long sender = getMapValue(FIELD_REMOVE_SENDER, i);
          long calculatedSigna = pool.signaTotal * qty / currentLiquidity;
          long calculatedAsset = pool.assetTotal * qty / currentLiquidity;
          // Burn liquidity token
          sendQuantity(qty, liquidityToken, 0);
          // Send withdraw
          sendQuantityAndAmount(calculatedAsset, assetId, calculatedSigna, sender);
          // Update totals
          pool.signaTotal -= calculatedSigna;
          pool.assetTotal -= calculatedAsset;
          if (pool.signaTotal <= 0 || pool.assetTotal <= 0) {
              pool.signaTotal = 0;
              pool.assetTotal = 0;
              currentLiquidity = 0;
              return;
          }
          currentLiquidity -= qty;
      }
  }
  
  void processTrade() {
      if (currentTX.amount == 0 && currentTX.quantity == 0) {
          return;
      }
      if (currentLiquidity == 0) {
          refundTransaction();
          return;
      }
      if (currentTX.quantity != 0) {
          // User sending asset to get Signa
          sendAmount(currentTX.amount, currentTX.sender);
          setMapValue(FIELD_TRADE_AMOUNT, enqueuedTrades, -currentTX.quantity);
          setMapValue(FIELD_TRADE_SENDER, enqueuedTrades, currentTX.sender);
          block.assetTotal += currentTX.quantity;
          enqueuedTrades++;
          return;
      }
      // User sending Signa to get asset
      setMapValue(FIELD_TRADE_AMOUNT, enqueuedTrades, currentTX.amount);
      setMapValue(FIELD_TRADE_SENDER, enqueuedTrades, currentTX.sender);
      block.signaTotal += currentTX.amount;
      enqueuedTrades++;
  }
  
  void processEnqueuedTrades() {
      struct TRADES {
          long signa, quantity, sender;
      } currTrade;
      long opSigna, opAsset, deltaSigna, deltaAsset;
      struct TOTAL newTotal;
  
      if (enqueuedTrades == 0) {
          return;
      }
      // Process the sum of all trades as only two trades.
      // Avoid manipulation for trades order in blockchain.
      // The order is choosed to reward traders that help pool stability.
      block.signaTotal = mdv(block.signaTotal , 1000 - POOL_FEE, 1000);
      block.assetTotal = mdv(block.assetTotal , 1000 - POOL_FEE, 1000);
      long assetForSigna = pool.assetTotal * block.signaTotal / pool.signaTotal;
      long signaForAsset = pool.signaTotal * block.assetTotal / pool.assetTotal;
      if (assetForSigna > block.assetTotal) {
          // more signa incoming than asset. Process signa trade first
          deltaAsset = mdv(pool.signaTotal, pool.assetTotal, pool.signaTotal + block.signaTotal);
          deltaSigna = pool.signaTotal + block.signaTotal;
          newTotal.signaTotal = mdv(deltaAsset, deltaSigna, deltaAsset + block.assetTotal);
          newTotal.assetTotal = deltaAsset + block.assetTotal;
      } else {
          // Process signa trade second
          deltaSigna = mdv(pool.assetTotal, pool.signaTotal, pool.assetTotal + block.assetTotal);
          deltaAsset = pool.assetTotal + block.assetTotal;
          newTotal.assetTotal = mdv(deltaSigna, deltaAsset, deltaSigna + block.signaTotal);
          newTotal.signaTotal = deltaSigna + block.signaTotal;
      }
      // process all trades with same price ratio
      for (i = 0; i < enqueuedTrades; i++ ) {
          long temp = getMapValue(FIELD_TRADE_AMOUNT, i);
          currTrade.sender = getMapValue(FIELD_TRADE_SENDER, i);
          if (temp < 0) {
              currTrade.signa = 0;
              currTrade.quantity = -temp;
          } else {
              currTrade.signa = temp;
              currTrade.quantity = 0;
          }
          if (currTrade.quantity == 0) {
              // User sending Signa to get asset
              opSigna = mdv(currTrade.signa, 1000 - POOL_FEE, 1000);
              opAsset = mdv(opSigna, pool.assetTotal, newTotal.signaTotal);
              sendQuantity(opAsset, assetId, currTrade.sender);
          } else {
              // User sending asset to get Signa
              opAsset = mdv(currTrade.quantity, 1000 - POOL_FEE, 1000);
              opSigna = mdv(opAsset, pool.signaTotal, newTotal.assetTotal);
              sendAmount(opSigna, currTrade.sender);
          }
          stats.volume += opSigna;
      }
      stats.trades += enqueuedTrades;
      pool.signaTotal = newTotal.signaTotal;
      pool.assetTotal = newTotal.assetTotal;
  }
  
  void shutdownHandler() {
      switch (shutdown) {
      case 0:
          // regular distribution
          distributeDividends();
          break;
      case 1:
          // Return values to liquidity providers
          do {
              // Retry every block until distribution is done!
              distributeToHolders(
                  0,
                  liquidityToken,
                  getCurrentBalance() - ACTIVATION_AMOUNT,
                  assetId,
                  getAssetBalance(assetId)
              );
              if (getCurrentBalance() > ACTIVATION_AMOUNT) {
                  sleep;
                  continue;
              }
          } while (false);
          pool.signaTotal = 0;
          pool.assetTotal = 0;
          currentLiquidity = 0;
          shutdown = 2;
          break;
      default:
          // burn excess
          sendAmount(getCurrentBalance() - ACTIVATION_AMOUNT, 0);
          shutdown++;
      }
  }
  
  void distributeDividends() {
      long thisBlock = getCurrentBlockheight();
      if (thisBlock - lastDistribution >= DISTRIBUTION_INTERVAL) {
          long feesBalance = getCurrentBalance() - pool.signaTotal - ACTIVATION_AMOUNT;
          if (feesBalance < ACTIVATION_AMOUNT) {
              // do not distribute dust
              return;
          }
          long assetFeesBalance = getAssetBalance(assetId) - pool.assetTotal;
          if (distributeOnlySigna) {
              // Trade the asset fees to send only signa to liquidity providers
              long tradeAmount = mdv(pool.signaTotal, assetFeesBalance, pool.assetTotal + assetFeesBalance);
              pool.signaTotal -= tradeAmount;
              pool.assetTotal += assetFeesBalance;
              feesBalance += tradeAmount;
              assetFeesBalance = 0;
          }
          long platformFee = mdv(feesBalance, PLATFORM_FEE, 100);
          feesBalance -= platformFee;
          sendAmount(platformFee, owner);
          distributeToHolders(0, liquidityToken, feesBalance, assetId, assetFeesBalance);
          lastDistribution = thisBlock;
      }
  }
  
  void processCreatorCommand() {
      switch (currentTX.message[0]) {
      case 'extract':
          if (currentTX.message[1] == 0 || currentTX.message[1] == assetId) {
              // owner can get stuck tokens in the contract, but not signa or
              // the pool asset.
              // message = { 'extract', stuckAssetId }
              return;
          }
          sendQuantity(0x7fffffffffffffff, currentTX.message[1], owner);
          return;
      case 'shutdown':
          shutdown = 1;
          return;
      case 'newowner':
          // prepare to change ownership.
          newOwner = currentTX.message[1];
          return;
      }
  }`,
  EchoAnySize: `#program name EchoAnySize
  #program description Reads the incoming message until a zero byte
   is found on last byte of last page read. Clears the rest of buffer
   and then send the same message to sender. Expect text messages.
  #program activationAmount 5_0000_0000
  
  struct TXINFO {
     long txId;
     long sender;
     long amount;
     long message[132];
  } currentTX;
  
  long zero;
  
  while (true)
  {
      while ((currentTX.txId = getNextTx()) != 0) {
          currentTX.sender = getSender(currentTX.txId);
          currentTX.amount = getAmount(currentTX.txId);
          readMessage(currentTX.txId, 0, currentTX.message);
  
          processTX();
      }
      sendBalance(getCreator());
  }
  
  // just echoes a received message back to sender.
  void processTX(void) {
  
      long messagePage, currentLong;
  
      // Last read on getNextTxDetails
      currentLong = 4;
      while (currentLong < currentTX.message.length) {
          if (((currentTX.message[currentLong - 1]) >>  56) == 0) {
             // Found a null byte at last byte of last page that was read.
             break;
          }
          messagePage = currentLong / 4;
          readMessage(currentTX.txId, messagePage,  currentTX.message + currentLong);
          currentLong += 4;
      }
      while (currentLong < currentTX.message.length) {
          // clear the rest of buffer.
          currentTX.message[currentLong++] = zero;
          currentTX.message[currentLong++] = zero;
          currentTX.message[currentLong++] = zero;
          currentTX.message[currentLong++] = zero;
      }
      currentLong = 0;
      do {
          // send message loop
          sendMessage(currentTX.message + currentLong, currentTX.sender);
          currentLong += 4;
      } while (((currentTX.message[currentLong - 1]) >>  56) != 0 && currentLong < currentTX.message.length);
  }`,
  GetATCreatorID: `#program name GetATCreator
  #program description Receives a message with some AT ID and return to sender a\
   message with the creator${"`"}s ID of that AT.
  #program activationAmount 1_5000_0000
  
  struct TXINFO {
     long txId;
     long sender;
     long amount;
     long message[4];
  } currentTX;
  
  long messageToSend[4];
  
  while (true)
  {
      while ((currentTX.txId = getNextTx()) != 0) {
          currentTX.sender = getSender(currentTX.txId);
          currentTX.amount = getAmount(currentTX.txId);
          readMessage(currentTX.txId, 0, currentTX.message);
  
          processTX();
      }
      sendBalance(getCreator());
  }
  
  // Return to sender the creator of a given AT.
  void processTX(void) {
      long atId = messageToId();
      long creatorID = getCreatorOf(atId);
      IdToMessage(creatorID);
      sendMessage(messageToSend, currentTX.sender);
  }
  
  
  long i, auxDiv, auxShift, auxMask, auxNum;
  const long n8 = 8, n10 = 10, n15 = 15, n48 = 48, n57 = 57, n255 = 255;
  void IdToMessage(long id){
      long currDiv = 10;
      messageToSend[] = "00000000000000000000            ";
      // using i as temp var;
      i = (id >> 1) / 5;
      messageToSend[2] |= (id - (i * 10)) << 24;
      id = i;
  
      for (i = 18; id != 0; i--) {
          auxNum = id % currDiv;
          id /= 10;
          auxDiv = i/8;
          auxShift = (i % 8) * 8;
          auxMask = 0xff << auxShift;
          messageToSend[i/8] |= auxNum << auxShift;
      }
  }
  
  // Expects a numeric ID in currentTX.message[0] to [3]
  // return its long representation
  long messageToId(void) {
      long currMul = 1;
      long ret=0;
      
      for (i = 19; i>=0; i--) {
          auxDiv = i/8;
          auxShift = (i % 8) * 8;
          auxMask = 0xff << auxShift;
          auxNum = (currentTX.message[i/8] & auxMask) >> auxShift;
          if (auxNum == 0) {
              continue;
          }
          if (auxNum < '0' || auxNum > '9' ) {
              // invalid char
              return 0;
          }
          auxNum &= 0xF;
          auxNum *= currMul;
          ret += auxNum;
          currMul *= 10;
      }
      return ret;
  }`,
  PublicMethodsOnSmartC: `// global variables, will be available in all functions
  long myVar;
  
  // ****** This part of processing is hidden in SmartJ ******
  
  // Set public functions magic numbers
  #define GET_SNACKS 0xfc73947c1b89e15e
  #define GET_DRINKS 0x2ad652b169fff962
  
  struct TXINFO {
      long txId,
          timestamp,
          sender,
          amount,
          message[4];
  } currentTX;
  
  constructor();
  
  void main(void) {
      blockStarted();
      while ((currentTX.txId = getNextTx()) != 0) {
          currentTX.sender = getSender(currentTX.txId);
          currentTX.amount = getAmount(currentTX.txId);
          readMessage(currentTX.txId, 0, currentTX.message);
  
          switch (currentTX.message[0]) {
          case GET_SNACKS:
              GetSnacks(currentTX.message[1]);
              break;
          case GET_DRINKS:
              GetDrinks(currentTX.message[1], currentTX.message[2]);
              break;
          default:
              txReceived();
          }
      }
      blockFinished();
  }
  // ****** end of hidden part ****** 
  
  // ****** These are public methods in SmartJ ****** 
  void GetSnacks(long bites) {
      // Do your stuff
      myPrivateMethod();
  }
  
  void GetDrinks(long type, long quantity) {
      // Do your stuff
  }
  
  // ****** These are private methods in SmartJ ****** 
  void myPrivateMethod() {
      // Do your stuff
  }
  
  // ****** These are protected methods in SmartJ ****** 
  void constructor(void) {
      // this function will be called only once on first activation.
  }
  
  void txReceived(void) {
      // Will handle any incoming message that is not direct to public methods
  }
  
  void blockStarted(void) {
      // Run when contract is activated by a transaction, but before
      // to get the currentTX details. currentTX will have details from last
      // transaction received in a a previous block.
  }
  
  void blockFinished(void) {
      // Run when all transactions were already processed. currentTX will
      // keep the values of last transaction processed.
  }`,
  remoteControl: `#program name RemoteControl
  #program description I just do what the boss tells me to.
  #define ACTIVATION_AMOUNT 1010_0000
  #program activationAmount ACTIVATION_AMOUNT
  
  #pragma verboseAssembly
  #pragma optimizationLevel 3
  
  #pragma version 2.1.1
  #pragma maxConstVars 4
  
  #program codeHashId 0
  
  /* End of configurations */
  
  struct TXINFO {
      long txid;
      long sender;
      long commands;
      long currentPage;
      long pageContent[4];
  } currentTX;
  
  // Constructor
  long owner = getCreator();
  // end Constructor
  
  void main () {
      while ((currentTX.txid = getNextTx()) != 0) {
          // get details
          currentTX.sender = getSender(currentTX.txid);
          readShortMessage(currentTX.txid, &currentTX.commands, 1);
          if (currentTX.sender != owner) {
              break;
          }
          currentTX.currentPage = 1;
          while ((currentTX.commands & 0x7) != 0) {
              sendCommand();
              currentTX.commands >>= 3;
          }
      }
      // After all transactions processed
  }
  
  void sendCommand() {
      // process command
      readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
      ++currentTX.currentPage;
      switch (currentTX.commands & 0x7) {
          case 1: // Send amount
              sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
              break;
          case 2: // Send short message (16 bytes)
              sendShortMessage(currentTX.pageContent + 2, 2, currentTX.pageContent[1]);
              sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
              break;
          case 3: // Send long message (up to 900 bytes)
              long noOfPages = currentTX.pageContent[2];
              long recipient = currentTX.pageContent[1];
              sendAmount(currentTX.pageContent[0], recipient);
              while (noOfPages > 0) {
                  readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
                  ++currentTX.currentPage;
                  --noOfPages;
                  sendMessage(currentTX.pageContent, recipient);
              }
              break;
          case 4: // Send quantity
              sendQuantityAndAmount(currentTX.pageContent[2], currentTX.pageContent[3], currentTX.pageContent[0], currentTX.pageContent[1]);
              break;
      }
  }`,
  dropper: `#program name Dropper
  #program description Sends a fixed amount of signa to a defined account every N blocks. 
  #program activationAmount 0.2
  
  // Configure how many blocks to sleep until next send. 
  #define SLP_BLOCKS 2
  // Configure balance to stay on contract
  #define CONTRACT_MIN_BALANCE 1.0
  // Configure the amount to send every time
  #define EACH_BLOCK .2
  // Set the desired account
  #define RECIPIENT "S-3A2N-ZD7P-KZKU-FPWKQ"
  
  // Endless loop
  while (true) {
     if (getCurrentBalanceFx() < CONTRACT_MIN_BALANCE) {
         // Stops contracts before it hits end of balance
         halt;
     } else {
         sendAmountFx(EACH_BLOCK, RECIPIENT);
         sleep SLP_BLOCKS;
     }
  }`,
  get3Random: `/* DEPRECATION NOTICE:
  * This contract may be not compatible with SmartC version greater or equal 2
  * because Signum Rainbow Hard Fork broke some compatibilities.  Test before
  * use or convert the API calls to new built-in functions.
  */
 
 #program name Get3Random
 #program description When a message arrives, the program tries to parse a number\
  from message. Number must be bigger or equal 5 and lower or equal 9999999. If\
  found, then program mixes random hash for 3 blocks and send back a message\
  to the sender with the random numbers without repetition. When there is no  more\
  pending messages, all balance remaining is sent to program creator.
 #program activationAmount 1_0000_0000
 
 #pragma version 0.2
 #pragma maxAuxVars 2
 #pragma maxConstVars 2
 #pragma globalOptimization
 
 #include APIFunctions
 
 struct TXINFO
 {
    long timestamp;
    long sender;
    long amount;
 } currentTX;
 
 long i, userNumber, result_1, result_2, result_3, result_4;
 const long n8=8, n10=10, n0xff=0xff;
 
 B_To_Address_Of_Creator();
 long CREATOR = Get_B1();
 
 while (true) {
 
     // Loop all incoming TX
     for (A_To_Tx_After_Timestamp(currentTX.timestamp); Get_A1() != 0; A_To_Tx_After_Timestamp(currentTX.timestamp) ) {
 
         // Get TX details
         currentTX.amount = Get_Amount_For_Tx_In_A();
         currentTX.timestamp = Get_Timestamp_For_Tx_In_A();
         Message_From_Tx_In_A_To_B();
         userNumber = atoi(Get_B1());
         B_To_Address_Of_Tx_In_A();
         currentTX.sender = Get_B1();
 
         if (userNumber < 5) {
             // Send an error message
             Set_A1_A2("Please s","end a va");
             Set_A3_A4("lue >= 5", 0);
             Send_A_To_Address_In_B();
             // Return any excess balance given
             if (currentTX.amount > 0)
                 Send_To_Address_In_B(currentTX.amount);
             // Proceed to next message.
             continue;
         }
 
         // Draw mixing randomness of 3 blocks
         Clear_A_And_B();
         i = 0;
         do {
             do {
                 if (i != 0)
                     sleep 1;
                 Put_Last_Block_Hash_In_A();
                 XOR_B_with_A();
                 i++;
             } while (i <= 2);
 
             // Get 4 random numbers between 1 and userNumber
             result_1 = ((Get_B1() >> 2 ) % userNumber) + 1;
             result_2 = ((Get_B2() >> 2 ) % userNumber) + 1;
             result_3 = ((Get_B3() >> 2 ) % userNumber) + 1;
             result_4 = ((Get_B4() >> 2 ) % userNumber) + 1;
             // Try to avoid a new round using 4th number
             if (result_1 == result_2)
                 result_1 = result_4;
             else if (result_1 ==  result_3)
                 result_1 = result_4;
             else if (result_2 ==  result_3)
                 result_2 =  result_4;
         // Repeat process next block if still there are repeated numbers.
         } while (result_1 == result_2 || result_1 == result_3 || result_2 == result_3);
 
         // Send message with draw numbers
         Set_B1(currentTX.sender);
         Set_A1_A2("Draw:   ", itoa_plus(result_1));
         Set_A3_A4(itoa_plus(result_2), itoa_plus(result_3));
         Send_A_To_Address_In_B();
         Send_To_Address_In_B(currentTX.amount);
 
     }
 
     // Send all remaining balance to creator and freeze contract until next message
     Set_B1(CREATOR);
     Send_All_To_Address_In_B();
 }
 
 
 /* **************   Library functions    **************************** */
 
 // Iterative function to implement atoi() function in C
 // Expects a long containing a string. If any byte is not a char numeric
 // representation, then stop and return. Only positive numbers, decimal, 
 // and integers are converted. Returns zero if no number was processed.
 long atoi(long val)
 {
     long ret = 0, chr;
     do {
         chr = (0xff & val) - '0';
         if (chr < 0 || chr >= n10)
             break;
         ret *= n10;
         ret += chr;
         val >>= n8;
     } while (1);
     return ret;
 }
 
 // Iterative function to implement itoa() function in C
 // Expects a long. If number is negative or bigger than MAX_STRING
 // (it will not fit in a long), returns long meaning "#error".
 // Pad beginning with spaces to allow easy concatenation
 long itoa_plus(long val)
 {
     long ret = "        ";
     if (val == 0) {
         return (ret << n8) + '0';
     }
 
     if (val > 0 && val <= 9999999) {
         do {
             if (val == 0) {
                 return ret;
             }
             ret <<= n8;
             ret += '0' + val % n10;
             val /= n10;
         } while (1);
     }
     return "  #error";
 }`,
 remoteControl: `#program name RemoteControl
 #program description I just do what the boss tells me to.
 #define ACTIVATION_AMOUNT 1010_0000
 #program activationAmount ACTIVATION_AMOUNT
 
 #pragma verboseAssembly
 #pragma optimizationLevel 3
 
 #pragma version 2.1.1
 #pragma maxConstVars 4
 
 #program codeHashId 0
 
 /* End of configurations */
 
 struct TXINFO {
     long txid;
     long sender;
     long commands;
     long currentPage;
     long pageContent[4];
 } currentTX;
 
 // Constructor
 long owner = getCreator();
 // end Constructor
 
 void main () {
     while ((currentTX.txid = getNextTx()) != 0) {
         // get details
         currentTX.sender = getSender(currentTX.txid);
         readShortMessage(currentTX.txid, &currentTX.commands, 1);
         if (currentTX.sender != owner) {
             break;
         }
         currentTX.currentPage = 1;
         while ((currentTX.commands & 0x7) != 0) {
             sendCommand();
             currentTX.commands >>= 3;
         }
     }
     // After all transactions processed
 }
 
 void sendCommand() {
     // process command
     readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
     ++currentTX.currentPage;
     switch (currentTX.commands & 0x7) {
         case 1: // Send amount
             sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
             break;
         case 2: // Send short message (16 bytes)
             sendShortMessage(currentTX.pageContent + 2, 2, currentTX.pageContent[1]);
             sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
             break;
         case 3: // Send long message (up to 900 bytes)
             long noOfPages = currentTX.pageContent[2];
             long recipient = currentTX.pageContent[1];
             sendAmount(currentTX.pageContent[0], recipient);
             while (noOfPages > 0) {
                 readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
                 ++currentTX.currentPage;
                 --noOfPages;
                 sendMessage(currentTX.pageContent, recipient);
             }
             break;
         case 4: // Send quantity
             sendQuantityAndAmount(currentTX.pageContent[2], currentTX.pageContent[3], currentTX.pageContent[0], currentTX.pageContent[1]);
             break;
     }
 }`,
     //for smartJ
     AlwaysRunning:`package bt.sample;

     import bt.BT;
     import bt.Contract;
     import bt.ui.EmulatorWindow;
     
     /**
      * A contract that runs on every block until there is no more balance.
      * 
      * @author jjos
      */
     public class AlwaysRunning extends Contract {
       
         // Initialization, cost is less than 1 BURST
         public AlwaysRunning() {
             while(true) {
                 sleep(1);
             }
         }
     
         @Override
         public void txReceived() {
             // we do nothing, as it never leaves the constructor method infinite loop
         }
     
         public static void main(String[] args) {
             BT.activateCIP20(true);
             BT.setNodeAddress(BT.NODE_TESTNET);
             
             new EmulatorWindow(AlwaysRunning.class);
         }
     }`,
     Auction:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * Auction smart contract.
      * 
      * An Auction smart contract that will allow people to send funds which
      * will be refunded back to them (minus the activation fee) if someone
      * else sends more. Minimum bid should be higher than the INITIAL_PRICE.
      * 
      * After the auction timed-out a final transaction (likely to come from
      * the beneficiary) is needed to trigger the payment and close the auction.
      * 
      * This auction contract cannot be reused, once closed or timedout the
      * auction is never open again.
      *
      * Inspired by http://ciyam.org/at/at_auction.html
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Auction extends Contract {
     
         public static final String BENEFICIARY = "BURST-TSLQ-QLR9-6HRD-HCY22";
         public static final long INITIAL_PRICE = 1000*ONE_BURST;
         public static final int TIMEOUT_MIN = 40; // 40 minutes == 10 blocks
     
         public static final int ACTIVATION_FEE = 22; // expected activation fee in BURST
         
         boolean isOpen;
         Address beneficiary;
         long highestBid;
         Address highestBidder;
         Timestamp timeout;
         
         long newBid, fee;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public Auction(){
             beneficiary = parseAddress(BENEFICIARY);
             timeout = getBlockTimestamp().addMinutes(TIMEOUT_MIN);
             isOpen = true;
             highestBid = INITIAL_PRICE; // Start value, we will not accept less than this
             highestBidder = null;
         }
         
         /**
          * Private function for checking if the timeout expired.
          * 
          * @return true if this contract expired
          */
         private boolean expired(){
             if(!isOpen)
                 return true;
             
             if(getBlockTimestamp().ge(timeout)) {
                 isOpen = false;
                 fee = getCurrentBalance()/100;
                 sendAmount(fee, getCreator());
                 // send the funds (best auction) to the beneficiary, minus the current TX
                 // amount that will be refunded
                 sendAmount(getCurrentBalance() - getCurrentTxAmount(), beneficiary);
             }
             return !isOpen;
         }
     
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             if(expired()){
                 // Send back this last funds or they will be lost
                 refund();
                 return;
             }
     
             newBid = getCurrentTxAmount() + ACTIVATION_FEE;
             if(newBid > highestBid){
                 // we have a new higher bid, return the previous one
                 if(highestBidder != null) {
                     sendAmount(highestBid - ACTIVATION_FEE, highestBidder);
                 }
                 highestBidder = getCurrentTxSender();
                 highestBid = newBid;
             }
             else {
                 // just send back
                 refund();
             }
         }
         
         /**
          * Refunds the last received transaction
          */
         private void refund() {
             sendAmount(getCurrentTxAmount(), getCurrentTxSender());
         }
     
         public static void main(String[] args) throws Exception {
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
     
             Address creator = Emulator.getInstance().getAddress(BENEFICIARY);
             emu.airDrop(creator, 1000*Contract.ONE_BURST);
             Address auction = Emulator.getInstance().getAddress("AUCTION");
             emu.createConctract(creator, auction, Auction.class, Contract.ONE_BURST);
     
             emu.forgeBlock();
     
             new EmulatorWindow(Auction.class);
         }
     }
     
     `,
     AuctionNFT:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * Auction smart contract with a beneficiary and with 1% fee for creator.
      * 
      * An Auction smart contract that will allow people to send funds which will be
      * refunded back to them (minus the activation fee) if someone else sends more.
      * 
      * This smart contract is initially closed and the beneficiary (the current owner)
      * is the creator. Then one can call the {@link #open(Address, long, long)} method.
      * 
      * After the auction times-out any new transaction received will trigger the auction
      * closing logic. When closing, the current beneficiary receive the highest bid amount
      * and the highest bidder becomes the new beneficiary. This new beneficiary can
      * choose to open the auction again with a new timeout and new minimum bid value.
      *
      * Inspired by http://ciyam.org/at/at_auction.html
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class AuctionNFT extends Contract {
     
         public static final long MIN_BALANCE = ONE_BURST * 4;
         public static final long ACTIVATION_FEE = ONE_BURST * 30;
     
         boolean isOpen;
         Address beneficiary;
         long highestBid;
         Address highestBidder;
         Timestamp timeout;
         long newBid, fee;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public AuctionNFT() {
             beneficiary = getCreator();
         }
     
         /**
          * Private function for checking if the timeout expired.
          * 
          * @return true if this contract expired
          */
         private boolean expired() {
             if (!isOpen)
                 return true;
     
             if (getBlockTimestamp().ge(timeout)) {
                 isOpen = false;
                 if (highestBidder != null) {
                     // we have a bidder
                     fee = highestBid / 100; // 1% fee
                     sendAmount(fee, getCreator());
     
                     // send the balance to the current beneficiary, minus the current TX
                     // amount (that will be refunded and a min balance to ensure the
                     // contract can run a few more lines of code)
                     sendAmount(getCurrentBalance() - getCurrentTxAmount() - MIN_BALANCE, beneficiary);
     
                     // set the new beneficiary
                     beneficiary = highestBidder;
                 }
             }
             return !isOpen;
         }
     
         /**
          * Opens the auction giving a beneficiary, a timeout and a minimum price.
          * 
          * @param timeout the number of minutes this auction will time out
          * @param minBid   the new minimum bid
          * @param beneficiary the beneficiary of this auction, or null to keep the current one
          */
         public void open(long timeout, long minBid, Address beneficiary) {
             if (!isOpen && getCurrentTxSender() == this.beneficiary) {
                 // only the current beneficiary can re-open the auction
                 if(beneficiary!=null)
                     this.beneficiary = beneficiary;
                 this.timeout = getBlockTimestamp().addMinutes(timeout);
                 highestBid = minBid;
                 highestBidder = null;
                 isOpen = true;
             }
         }
     
         /**
          * Bids will be handled by this function, which is called when transactions are received.
          */
         public void txReceived() {
             if (expired()) {
                 // Send back this transaction funds
                 refund();
                 return;
             }
     
             newBid = getCurrentTxAmount() + ACTIVATION_FEE;
             if (newBid > highestBid) {
                 // we have a new higher bid, return the previous one
                 if (highestBidder != null) {
                     sendAmount(highestBid - ACTIVATION_FEE, highestBidder);
                 }
                 highestBidder = getCurrentTxSender();
                 highestBid = newBid;
             } else {
                 // Bid too low, just send back
                 refund();
             }
         }
     
         /**
          * Refunds the last received transaction
          */
         private void refund() {
             sendAmount(getCurrentTxAmount(), getCurrentTxSender());
         }
     
         public static void main(String[] args) throws Exception {
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
     
             Address creator = Emulator.getInstance().getAddress("BENEFICIARY");
             emu.airDrop(creator, 1000 * Contract.ONE_BURST);
             Address auction = Emulator.getInstance().getAddress("AUCTION");
             emu.createConctract(creator, auction, AuctionNFT.class, Contract.ONE_BURST);
     
             emu.forgeBlock();
     
             new EmulatorWindow(AuctionNFT.class);
         }
     }`,
     BurstGame:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * An betting game where each participant has a chance of winning proportional to the amount bet.
      * 
      * Someone creates this contract and then send some amount to initialize it. Let's say the creator
      * send 1000 BURST plus fees. Then, say a challenger bet against the creator by sending 100 BURST
      * plus fees.
      * 
      * Based on the next block hash (on future) a random number will be generated between 1 and 1000+100.
      * Any number between 1-1000 will make the creator the winner and any number between 1001-1100
      * will make the challenger the winner. So, if you bet with a larger amount you increase your
      * chances but put more at stake.
      * 
      * This code tips the developer 0.5% when the creator is the winner and 1% when the challenger
      * is the winner. This difference is to make incentives in putting bets available.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class BurstGame extends Contract {
     
         Address challenger;
     
         long challengerAmount;
         long creatorAmount;
         long balance;
         long blockHash;
     
         static final String DEV_ADDRESS = "BURST-JJQS-MMA4-GHB4-4ZNZU";
     
         public void txReceived(){
             challenger = getCurrentTx().getSenderAddress();
             if(challenger == getCreator()){
                 if(getCurrentTx().getAmount() == 0){
                     // If creator sends a message with 0 amount (exactly the activation fee)
                     // we withdraw the current balance
                     sendBalance(challenger);
                 }
                 // do nothing, creator is just increasing his amount
                 return;
             }
     
             challengerAmount = getCurrentTx().getAmount();
     
             balance = getCurrentBalance();
             creatorAmount = balance - challengerAmount;
     
             // sleep two blocks
             sleep(2);
     
             blockHash = getPrevBlockHash().getValue1();
             blockHash &= 0x0FFFFFFFFFFFFFFFL; // avoid negative values
             blockHash %= balance;
             
             if(blockHash < creatorAmount){
                 // tip developer with 0.5 percent
                 sendAmount(balance/200, parseAddress(DEV_ADDRESS));
     
                 // creator wins
                 sendBalance(getCreator());
             }
             else {
                 // tip developer with 1 percent
                 sendAmount(balance/100, parseAddress(DEV_ADDRESS));
     
                 // challenger wins
                 sendBalance(challenger);
             }
         }
     
         /**
          * Main function, for debbuging purposes only, not exported to bytecode.
          */
         public static void main(String[] args) throws Exception {
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
     
             Address creator = Emulator.getInstance().getAddress("CREATOR");
             Address challenger = Emulator.getInstance().getAddress("CHALLENGER");
             emu.airDrop(creator, 1000 * ONE_BURST);
             emu.airDrop(challenger, 1000 * ONE_BURST);
     
             Address odds = Emulator.getInstance().getAddress("GAME");
             emu.createConctract(creator, odds, BurstGame.class, ONE_BURST);
     
             emu.forgeBlock();
     
             // 10 bets each
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
             emu.send(challenger, odds, 100*ONE_BURST);
     
             emu.forgeBlock();
             emu.forgeBlock();
     
             // another transaction to trigger the sorting mechanism
             emu.send(challenger, odds, 10*ONE_BURST);
             emu.forgeBlock();
             emu.send(challenger, odds, 20*ONE_BURST);
             emu.forgeBlock();
             emu.forgeBlock();
             emu.send(challenger, odds, 30*ONE_BURST);
             emu.forgeBlock();
             emu.forgeBlock();
     
             new EmulatorWindow(BurstGame.class);
         }
     }`,
     Crowdfund:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * Crowdfunding smart contract
      * 
      * If a target balance is achieved by a hard-coded time then the entire
      * balance will be sent to an account which is also hard-coded.
      * If not then the txs that were sent to this contract will be iterated and
      * refunded to one by one.
      *
      * Inspired by http://ciyam.org/at/at_crowdfund.html
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Crowdfund extends Contract {
         
         Address targetAddress;
         long targetAmount;
         long raisedAmount;
         Timestamp timeout;
         boolean paid;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public Crowdfund(){
             targetAddress = parseAddress("BURST-TSLQ-QLR9-6HRD-HCY22");
             targetAmount = 1000000 * ONE_BURST;
             timeout = getBlockTimestamp().addMinutes(60*24*15); // 15 days from now
             paid = false;
         }
     
         /**
          * Private function for checking if the timeout expired.
          * 
          * @return true if this contract expired
          */
         private boolean expired(){
             return paid || getBlockTimestamp().ge(timeout);
         }
     
         /**
          * Private function that pays this contract.
          */
         private void pay(){
             if(raisedAmount >= targetAmount) {
                 sendBalance(targetAddress);			
             }
             else {
                 // send back funds
                 Timestamp ts = getCreationTimestamp();
                 while(true) {
                     Transaction txi = getTxAfterTimestamp(ts);
                     if(txi == null)
                         break;
                     sendAmount(txi.getAmount(), txi.getSenderAddress());
                     ts = txi.getTimestamp();
                 }
     
             }
             paid = true;
         }
     
         /**
          * A new transaction received (new participant)
          */
         @Override
         public void txReceived(){
             if(paid){
                 // Send back funds or they will be lost
                 sendAmount(getCurrentTx().getAmount(), getCurrentTx().getSenderAddress());
                 return;
             }
     
             raisedAmount += getCurrentTx().getAmount();
             if(expired()){
                 pay();
             }
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(Crowdfund.class);
         }
     }
     
     `,
     CrowdfundPlatform:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * Crowd-funding smart contract to be used in a crowd-funding platform.
      * 
      * If a target amount is achieved before the given number of blocks, then the entire
      * balance will be sent to the beneficiary account (minus a platform fee).
      * If target is not achieved, then all transactions are refunded (minus the gas fee).
      *
      * Inspired by http://ciyam.org/at/at_crowdfund.html
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class CrowdfundPlatform extends Contract {
         
         Address beneficiary;
         long targetAmount;
         long nBlocksSleep;
         Address platform;
         long platformFeePerThousand;
         
         boolean successful;
         long fee;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public CrowdfundPlatform(){
             // We immediately put the contract to sleep by the specified number of blocks
             sleep(nBlocksSleep);
             
             // After the sleep, we check if it is successful or not
             successful = getCurrentBalance() >= targetAmount;
         }
     
         /**
          * Iterates over every transaction received
          */
         @Override
         public void txReceived(){
             if(!successful){
                 // Send back funds since it failed
                 sendAmount(getCurrentTxAmount(), getCurrentTxSender());
             }
         }
         
         @Override
         protected void blockFinished() {
             if(successful) {
                 fee = getCurrentBalance()*platformFeePerThousand/1000;
                 sendAmount(fee, platform);
                 sendBalance(beneficiary);
             }
             else {
                 // Send the remaining gas fee to the platform
                 sendBalance(platform);
             }
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(CrowdfundPlatform.class);
         }
     }
     
     `,
     Echo:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that simply echoes the message received.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Echo extends Contract {
         
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             sendMessage(getCurrentTx().getMessage(), getCurrentTx().getSenderAddress());
         }
     
         public static void main(String[] args) {
             BT.activateCIP20(true);
             new EmulatorWindow(Echo.class);
         }
     }
     
     `,
     Faucet:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A faucet smart contract sending back 30 BURST for every transaction received.
      * 
      * This will run until there is no more balance. Anyone can recharge this
      * contract by sending more than 30 BURST.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Faucet extends Contract {
     
         /**
          * For every transaction received we send back 30 BURST.
          */
         public void txReceived() {
             sendAmount(30 * ONE_BURST, getCurrentTxSender());
         }
     
     
         /**
          * Main function for testing or publishing the contract on chain.
          */
         public static void main(String[] args) {
             new EmulatorWindow(Faucet.class);
         }
     }`,
     Forward: `package bt.sample;

     import bt.Address;
     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that simply forwards all funds received to another account.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Forward extends Contract {
         
         public static final String ADDRESS = "BURST-TSLQ-QLR9-6HRD-HCY22";
         Address bmf;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public Forward(){
             bmf = parseAddress(ADDRESS);
         }
         
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             sendAmount(getCurrentTxAmount(), bmf);
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(Forward.class);
         }
     }
     
     `,
     ForwardMin:`package bt.sample;

     import bt.Address;
     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that forwards all funds received to another account
      * every time the balance reaches 1000 BURST.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class ForwardMin extends Contract {
         
         Address bmf;
         public static final long MIN_AMOUNT = 1000*Contract.ONE_BURST;
         public static final String ADDRESS = "BURST-TSLQ-QLR9-6HRD-HCY22";
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public ForwardMin(){
             bmf = parseAddress(ADDRESS);
         }
         
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             if(getCurrentBalance() > MIN_AMOUNT)
                 sendAmount(MIN_AMOUNT, bmf);
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(ForwardMin.class);
         }
     }
     
     `,
     HappyCIP20:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * This is a sample contract planned to run as a celebration of CIP20.
      * 
      * In case CIP20 goes live, there are plans to run a contract that will return more BURST
      * than it receives until it goes out of balance.
      * 
      * In the implementation below, anyone sending only the activation amount (to be decided)
      * will get back 1 BURST. The implementation is very inefficient, since it iterates over
      * all transaction history for every new transaction. This contract would run out of
      * balance much faster on the previous AT fees.
      * 
      * The idea is to people with new wallets to get a very small anount of BURST from one
      * of the faucets and then get 1 BURST from this contract (automatically activating their
      * accounts).
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class HappyCIP20 extends Contract {
     
         static final long AMOUNT = ONE_BURST;
     
         boolean alreadyGotSome;
         Transaction tx, curTX;
         Address sender;
     
         @Override
         public void txReceived() {
             alreadyGotSome = false;
     
             curTX = getCurrentTx();
             sender = curTX.getSenderAddress();
     
             // we will iterate all the transactions, from the first one
             // to the last one
             tx = this.getTxAfterTimestamp(null);
             while(tx!=null && tx != curTX){
                 if(tx.getSenderAddress() == sender){
                     alreadyGotSome = true;
                     break;
                 }
                 tx = getTxAfterTimestamp(tx.getTimestamp());
             }
     
             if(!alreadyGotSome){
                 sendMessage("Happy CIP20!", sender);
                 sendAmount(AMOUNT, sender);
             }
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(HappyCIP20.class);
         }
     }`,
     HashLoop:`package bt.sample;

     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A contract that run hashes until there is no more balance.
      * 
      * @author jjos
      *
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class HashLoop extends Contract {
         long hash;
     
         /**
          * Every time a transaction is sent to the contract, this method is called
          */
         @Override
         public void txReceived() {
             while(true){
                 // run this forever
                 // execution will freeze when there is no more balance and can be resumed
                 // by charging the contract with more BURST
                 hash = performSHA256_64(getPrevBlockHash1(), hash);
             }
         }
     
         /**
          * A main function for debugging purposes only, this method is not
          * compiled into bytecode.
          * 
          * @param args
          */
         public static void main(String[] args) {
             new EmulatorWindow(HashLoop.class);
         }
     }`,
     HashedTimeLock:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A hashed time lock smart contract.
      * 
      * This small sample can be extended to implement cross-chain atomic swaps.
      * 
      * This contract should be initialized with a hashlock and beneficiary.
      * 
      * If the beneficiary sends the correct key the funds are unlocked. If the
      * creator send a transaction and the timelock as passed, the funds are
      * withdraw.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class HashedTimeLock extends Contract {
     
         /** Expected activation fee in BURST */
         public static final long ACTIVATION_FEE = 1 * ONE_BURST;
     
         /** Timeout in minutes */
         public static final int TIMEOUT = 12;
     
         Register hashlock;
         Address beneficiary;
     
         Timestamp timelock;
         Register key, hashedKey;
     
         /**
          * This constructor is called the first time the contract receives a
          * transaction.
          * 
          * The contract creator should send a transaction with the amount to be
          * locked. After this transaction is received the timelock is set with
          * the configured TIMEOUT.
          */
         public HashedTimeLock() {
             timelock = getBlockTimestamp().addMinutes(TIMEOUT);
         }
     
         /**
          * Any new transaction received will be handled by this function.
          * 
          * The benefitiary should send a message with the key to unlock the funds. The
          * creator can withdraw the funds if the timelock has expired.
          * 
          */
         public void txReceived() {
             if (getCurrentTx().checkMessageSHA256(hashedKey)) {
                 sendBalance(beneficiary);
             }
     
             if (getBlockTimestamp().ge(timelock)) {
                 // creator can claim back the balance after the timelock
                 sendAmount(getCurrentBalance(), getCreator());
             }
         }
     
         public static void main(String[] args) throws Exception {
             new EmulatorWindow(HashedTimeLock.class);
         }
     }`,
     Hello: `package bt.sample;

     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A contract that simply send a "Hello, World" message back.
      * 
      * Contract publishing fee currently is 4 BURST for this contract and its
      * execution fee is 15.1 BURST (activation fee should be this later value or
      * more).
      * 
      * @author jjos
      *
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Hello extends Contract {
     
         /**
          * Every time a transaction is sent to the contract, this method is called
          */
         @Override
         public void txReceived() {
             sendMessage("Hello, World", getCurrentTxSender());
         }
     
         /**
          * A main function for debugging or publishing purposes only, this method is not
          * compiled into bytecode.
          * 
          * @param args
          */
         public static void main(String[] args) {
             new EmulatorWindow(Hello.class);
         }
     }`,
     KohINoor:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     
     /**
      * The 'Koh-i-Noor' smart contract.
      * 
      * This smart contract was designed to be single, in the sense that there is
      * only one of his category in the entire world.
      * 
      * When created, the contract is <i>owned</i> by the creator and a selling price
      * of 5000 BURST is set. Anyone that transfers more than this amount is the new
      * owner. When a new owner is set, the contract price is automatically increased by
      * 10%.
      * 
      * So, every new owner either have 10% return of investment (minus 1% fee) or
      * keep the ownership of the Koh-i-Noor.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class KohINoor extends Contract {
     
         public static final long ACTIVATION_FEE = ONE_BURST * 30;
         public static final long INITIAL_PRICE = ONE_BURST * 5000;
     
         Address owner;
         long balance;
         long price, fee, activationFee;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public KohINoor() {
             owner = getCreator();
             price = INITIAL_PRICE;
             activationFee = ACTIVATION_FEE;
         }
     
         /**
          * A buyer needs to transfer the current price to the contract.
          * 
          * Current owner will receive this amount and the sender will become the new
          * owner. On this event, the price is increased by 10% automatically.
          * 
          */
         public void txReceived() {
             if (getCurrentTxAmount() + activationFee >= price) {
                 // Conditions match, let's execute the sale
                 fee = price / 100; // 1% fee
                 sendAmount(price - fee, owner); // pay the current owner the price, minus fee
                 sendMessage("Koh-i-Noor has a new owner.", owner);
                 owner = getCurrentTxSender(); // new owner
                 sendMessage("You are the Koh-i-Noor owner!", owner);
     
                 price += 10 * price / 100; // new price is 10% more
                 return;
             }
     
             // send back funds of an invalid order
             sendMessage("Amount sent was not enough.", getCurrentTxSender());
             sendAmount(getCurrentTxAmount(), getCurrentTxSender());
         }
     
         @Override
         protected void blockFinished() {
             // round up with the creator if there is some balance left
             balance = getCurrentBalance();
             if(balance > activationFee)
                 sendAmount(balance - activationFee, getCreator());
         }
     }`,
     MultiSigLock:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A funds locking smart contract allowing to move funds after a pre-defined
      * number of signatures.
      * 
      * Each of the hardcoded owners has the ability to *sign* (or *vote*) for a
      * funds transfer for a given address. When the minium number of signatures is
      * reached (and all signees agree in terms of the amount) the transfer takes
      * place and the signatures (or votes) are erased.
      * 
      * This contract can be reused many times and can also be recharged with more
      * balance by just sending more transactions to it.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class MultiSigLock extends Contract {
     
         public static final long ACTIVATION_FEE = 30*ONE_BURST; // expected activation fee in BURST
     
         // will be much easier when we have BlockTalk support for arrays
         Address owner1, owner2, owner3, owner4, owner5;
         Address receiver1, receiver2, receiver3, receiver4, receiver5;
         long amount1, amount2, amount3, amount4, amount5;
     
         long minSignatures, nSignatures;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public MultiSigLock() {
             owner1 = parseAddress("BURST-TMSU-YBH5-RVC7-6J6WJ");
             owner2 = parseAddress("BURST-GFP4-TVNR-S7TY-E5KAY");
             owner3 = parseAddress("BURST-SCE6-9VGS-MCVB-7HCU3");
             owner4 = null;
             owner5 = null;
     
             minSignatures = 3;
         }
     
         /**
          * Sign for sending the given amout to the given receiver address.
          * 
          * A transfer will actually be accomplished only when the minimum number of
          * signatures sending the same amount to the same address are received.
          * 
          */
         public void sign(Address receiver, long amount) {
             // Identify the sender, must be one of the owners
             if (getCurrentTxSender() == owner1) {
                 receiver1 = receiver;
                 amount1 = amount;
             }
             if (getCurrentTxSender() == owner2) {
                 receiver2 = receiver;
                 amount2 = amount;
             }
             if (getCurrentTxSender() == owner3) {
                 receiver3 = receiver;
                 amount3 = amount;
             }
             if (getCurrentTxSender() == owner4) {
                 receiver4 = receiver;
                 amount4 = amount;
             }
             if (getCurrentTxSender() == owner5) {
                 receiver5 = receiver;
                 amount5 = amount;
             }
     
             nSignatures = 0;
             if (receiver == receiver1 && amount == amount1)
                 nSignatures++;
             if (receiver == receiver2 && amount == amount2)
                 nSignatures++;
             if (receiver == receiver3 && amount == amount3)
                 nSignatures++;
             if (receiver == receiver4 && amount == amount4)
                 nSignatures++;
             if (receiver == receiver5 && amount == amount5)
                 nSignatures++;
     
             if (nSignatures < minSignatures)
                 return; // not enough signatures
     
             if (nSignatures >= minSignatures && receiver != null) {
                 // make the transfer
                 sendAmount(amount, receiver);
                 // clear the signatures for the next transfer
                 nSignatures = 0;
                 receiver1 = null;
                 receiver2 = null;
                 receiver3 = null;
                 receiver4 = null;
                 receiver5 = null;
             }
         }
     
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived() {
             // we do nothing, probably just recharging the contract with new funds
         }
     
         public static void main(String[] args) throws Exception {
             new EmulatorWindow(MultiSigLock.class);
         }
     }`,
     NFT2:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A Non-Fungible Token smart contract with DEX and auction capabilities.
      * 
      * This contract represents a non-fungible or unique token for Burst blockchain.
      * 
      * When created the contract is <i>owned</i> by the creator. After that, the
      * owner can transfer the ownership to another address. Additionally, the owner
      * can put the token for sale or for auction with a given timeout.
      *
      * Although this was inspired by http://erc721.org/, the mechanics are very
      * different. For instance, there is one contract <i>instance</i> per token and
      * each token is already a decentralized exchange (DEX) with absolutely no
      * middle man.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class NFT2 extends Contract {
     
         public static final int STATUS_NOT_FOR_SALE = 0;
         public static final int STATUS_FOR_SALE = 1;
         public static final int STATUS_FOR_AUCTION = 2;
     
         public static final long ACTIVATION_FEE = ONE_BURST * 1;
     
         int status;
         Address owner;
     
         long salePrice;
         Timestamp auctionTimeout;
         Address highestBidder;
         long highestBid;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public NFT2() {
             // Initially token is owned by the creator
             owner = getCreator();
             status = STATUS_NOT_FOR_SALE;
         }
     
         /**
          * Transfers the ownership of this token.
          * 
          * Only the current owner can transfer the ownership.
          * 
          * @param newOwner
          */
         public void transfer(Address newOwner) {
             if (highestBidder==null && owner.equals(this.getCurrentTxSender())) {
                 // only if there is no bidder and it is the current owner
                 owner = newOwner;
                 status = STATUS_NOT_FOR_SALE;
             }
         }
     
         /**
          * Cancels an open for sale or auction and sets it as not for sale.
          */
         public void setNotForSale(){
             if (highestBidder==null && owner.equals(this.getCurrentTxSender())) {
                 // only if there is no bidder and it is the current owner
                 status = STATUS_NOT_FOR_SALE;
                 salePrice = 0;
             }
         }
     
         /**
          * Put this token for sale for the given price.
          * 
          * Buyer needs to transfer at least the asked amount.
          * 
          * @param priceNQT the price in NQT==1E-8 BURST (buyer needs to transfer at least
          *                 this amount)
          */
         public void putForSale(long priceNQT) {
             if (highestBidder==null && owner.equals(this.getCurrentTxSender())) {
                 // only if there is no bidder and it is the current owner
                 status = STATUS_FOR_SALE;
                 salePrice = priceNQT - ACTIVATION_FEE;
             }
         }
     
         /**
          * Put this token for auction with the minimum bid price.
          * 
          * Bidders need to transfer more than current highest to become the new
          * highest bidder. Previous highest bidder is refunded in case of a new
          * highest bid arrives.
          * 
          * @param priceNQT the minimum bid price in NQT==1E-8 BURST (buyer need to
          *                 transfer at least this amount)
          * @param timeout  how many minutes the sale will be available
          */
         public void putForAuction(int priceNQT, int timeout) {
             if (highestBidder==null && owner.equals(this.getCurrentTxSender())) {
                 // only if there is no bidder and it is the current owner
                 status = STATUS_FOR_AUCTION;
                 auctionTimeout = getBlockTimestamp().addMinutes(timeout);
                 highestBid = priceNQT - ACTIVATION_FEE;
             }
         }
     
         /**
          * If this contract is for sale or for auction, this method handles the payment/bid.
          * 
          * A buyer needs to transfer the asked price to the contract.
          * 
          * If the token is for auction, a bidder need to transfer more than the current highest
          * bid to become the new highest bidder. Previous highest bidder is then refunded (minus
          * the activation fee). After the auction timeout, any transaction received will trigger
          * the ownership transfer.
          * 
          * If the token was not for sale or the amount is not enough, the order is
          * refunded (minus the contract activation fee).
          */
         public void txReceived() {
             if (status == STATUS_FOR_SALE) {
                 if (getCurrentTxAmount() >= salePrice) {
                     // Conditions match, let's execute the sale
                     sendAmount(salePrice, owner); // pay the current owner
                     owner = getCurrentTxSender(); // new owner
                     status = STATUS_NOT_FOR_SALE;
                     return;
                 }
             }
             if (status == STATUS_FOR_AUCTION) {
                 if (getBlockTimestamp().ge(auctionTimeout)) {
                     // auction timed out, apply the transfer if any
                     if (highestBidder != null) {
                         sendAmount(highestBid, owner); // pay the current owner
                         owner = highestBidder; // new owner
                         highestBidder = null;
                         status = STATUS_NOT_FOR_SALE;
                     }
                     // current transaction will be refunded below
                 } else if (getCurrentTxAmount() > highestBid) {
                     // Conditions match, let's register the bid
     
                     // refund previous bidder, if some
                     if (highestBidder != null)
                         sendAmount(highestBid, highestBidder);
     
                     highestBidder = getCurrentTxSender();
                     highestBid = getCurrentTxAmount();
                     return;
                 }
             }
             // send back funds of an invalid order
             refund();
         }
     
         /**
          * Send back funds of the current transaction.
          */
         void refund() {
             // send back funds of an invalid order
             sendAmount(getCurrentTxAmount(), getCurrentTxSender());
         }
     
         /**
          * A main function for debugging purposes only.
          * 
          * This function is not compiled into bytecode and do not go to the blockchain.
          */
         public static void main(String[] args) throws Exception {
             BT.activateCIP20(true);
             
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
             Address creator = Emulator.getInstance().getAddress("CREATOR");
             emu.airDrop(creator, 1000 * Contract.ONE_BURST);
     
             Address token1 = Emulator.getInstance().getAddress("TOKEN");
             emu.createConctract(creator, token1, NFT2.class, Contract.ONE_BURST);
     
             emu.forgeBlock();
     
             new EmulatorWindow(NFT2.class);
         }
     }`,
     OddsGame:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * An 'odds and evens game' contract that pays double or nothing on a 50% chance.
      * 
      * From the amount sent to the contract the activation fee is subtracted and this resulting
      * amount is doubled if the sender wins. Let's say the activation fee was set as 10 BURST,
      * a winning bet of 100 BURST will receive back (100-10)*2 == 180 BURST. A winning bet
      * of 1000 BURST will receive back (1000-10)*2 = 1980 BURST.
      * 
      * Every transaction sent to this contract has an even or odd value attributed
      * according to the transaction number. A block in future is used to decide the winning
      * value (even or odd), chosen based on the block hash (random source).
      * 
      * Winners of previous bets are computed as new bets come in, so people need to keep
      * betting to keep the system working.
      * 
      * A value in the future is used as source for randomness to difficult tampering
      * from malicious miners. For the same reason, a high activation fee is also advisable
      * and a MAX_PAYMENT is set.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class OddsGame extends Contract {
     
         Timestamp lastTimestamp;
         Timestamp prevBlockTimestamp;
         Timestamp nextBetTimestamp;
         Transaction nextTX;
         long blockOdd, pay, amount;
         Address nextAddress, developer;
     
         public static final long MAX_PAYMENT = 2000*ONE_BURST;
         public static final String DEV_ADDRESS = "BURST-JJQS-MMA4-GHB4-4ZNZU";
     
         /**
          * This method is executed every time a transaction is received by the contract.
          */
         @Override
         public void txReceived() {
             // Previous block hash is the random value we use
             blockOdd = getPrevBlockHash().getValue1();
             prevBlockTimestamp = getPrevBlockTimestamp();
             blockOdd &= 0xffL; // bitwise AND to get the last part of the number (and avoid negative values)
             blockOdd %= 2; // MOD 2 to get just 1 or 0
     
             // We start with the transaction after the last one (from the previous round)
             nextTX = getTxAfterTimestamp(lastTimestamp);
     
             while (nextTX != null) {
                 nextBetTimestamp = nextTX.getTimestamp();
                 nextAddress = nextTX.getSenderAddress();
                 //if (nextBetTimestamp.ge(prevBlockTimestamp))
                 //	break; // only bets before previous block can run in this round
     
                 lastTimestamp = nextBetTimestamp;
     
                 // Check if this transaction won (if is equals to the block number)
                 pay = (lastTimestamp.getValue() % 2) - blockOdd;
     
                 if (pay == 0) {
                     // pay double (amount always has the activation fee subtracted)
                     amount = nextTX.getAmount() * 2;
                     if(amount > MAX_PAYMENT)
                         amount = MAX_PAYMENT;
                     sendAmount(amount, nextAddress);
                 }
                 else
                     sendMessage("Better luck next time!", nextAddress);
     
                 // Check the next transaction
                 nextTX = getTxAfterTimestamp(lastTimestamp);
             }
     
             if(getCurrentBalance() > MAX_PAYMENT*3){
                 // In the unlikely event we accumulate balance on this contract,
                 // tip the developer.
                 sendAmount(MAX_PAYMENT, parseAddress(DEV_ADDRESS));
             }
         }
     
         /**
          * Main function, for debbuging purposes only, not exported to bytecode.
          */
         public static void main(String[] args) throws Exception {
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
     
             Address creator = Emulator.getInstance().getAddress("CREATOR");
             Address bet1 = Emulator.getInstance().getAddress("BET1");
             Address bet2 = Emulator.getInstance().getAddress("BET2");
             emu.airDrop(creator, 1000 * ONE_BURST);
             emu.airDrop(bet1, 1000 * ONE_BURST);
             emu.airDrop(bet2, 1000 * ONE_BURST);
             Address odds = Emulator.getInstance().getAddress("ODDS");
             emu.createConctract(creator, odds, OddsGame.class, ONE_BURST);
     
             emu.forgeBlock();
     
             // 2 bets each
             emu.send(bet1, odds, 100*ONE_BURST);
             emu.send(bet1, odds, 100*ONE_BURST);
     
             emu.send(bet2, odds, 100*ONE_BURST);
             emu.send(bet2, odds, 100*ONE_BURST);
     
             emu.forgeBlock();
             emu.forgeBlock();
     
             // another transaction to trigger the sorting mechanism
             emu.send(bet1, odds, 10*ONE_BURST);
             emu.forgeBlock();
             emu.send(bet1, odds, 20*ONE_BURST);
             emu.forgeBlock();
             emu.send(bet1, odds, 30*ONE_BURST);
             emu.forgeBlock();
             emu.forgeBlock();
     
             new EmulatorWindow(OddsGame.class);
         }
     }`,
     PaymentChannel:`package bt.sample;

     import bt.Contract;
     import bt.ui.EmulatorWindow;
     import bt.Timestamp;
     import bt.Address;
     import bt.BT;
     
     /**
      * A unidirectional (micro) payment channel.
      * 
      * The creator is the payer and someone else is the payee. There is no way for
      * the payer to reduce the BURST amount in an open channel, only to increase it
      * by depositing more BURST on it.
      * 
      * So the payer should write "checks" ({@link #approveAmount(long, long)} signed
      * messages) and send them to the payee (off-chain). Neither the payer nor the
      * payee usually broadcast these messages, since that would cost a transaction
      * fee without additional benefit.
      * 
      * Whenever the payee finds suitable (but before the channel timeout) the
      * payee broadcast the payer mesage for the largest value approved and then
      * closes the channel {@link #closeChannel(long)} to receive the BURST amount.
      * 
      * By extending this contract, a bi-directional channel could be implemented.
      * Either that or simply open two different channels with payer and payee roles
      * inverted.
      * 
      * @author jjos
      */
     public class PaymentChannel extends Contract {
     
         Address payee;
         Timestamp timeout;
         long amountApproved;
         long nonce;
     
         /**
          * Open a new channel for the given payee and timeout.
          * 
          * Only the creator can open the channel and it must not be currently open.
          * 
          * @param payee
          * @param timeout
          */
         public void openChannel(Address payee, long timeout) {
             checkTimeout();
             // only creator can open a channel, and it must be currenctly closed (payee==null)
             if (getCurrentTxSender().equals(getCreator()) && this.payee == null) {
                 this.payee = payee;
                 this.timeout = getBlockTimestamp().addMinutes(timeout);
                 this.amountApproved = 0;
             }
         }
     
         /**
          * A message that approves the transfer of the given amount to the payee.
          * 
          * This message usually will be signed and sent from the payer to the payee
          * off-chain. The payee can check the message contents and signature off-chain
          * and then accept the payment **instantly**.
          * 
          * @param amount
          * @param nonce
          */
         public void approveAmount(long amount, long nonce) {
             checkTimeout();
     
             if (getCurrentTxSender().equals(getCreator()) && this.nonce == nonce) {
                 // Only creator can approve command must be valid:
                 // - before timeout
                 // - correct nonce (avoids double spend)
                 if (amount > amountApproved)
                     amountApproved = amount;
             }
         }
     
         /**
          * Closes the channel and pays the approved amount to the payee.
          * 
          * Only the payee can close the channel.
          * 
          * The given nonce must match the nonce stored on the contract. When the channel
          * is closed the nonce is incremented avoiding double spending on this contract
          * and allowing to reuse this contract by calling
          * {@link #openChannel(Address, long)} again.
          */
         public void closeChannel(long nonce) {
             checkTimeout();
             if (getCurrentTxSender().equals(payee) && this.nonce == nonce) {
                 // Only payee can close the channel:
                 // - before timeout
                 // - correct nonce (avoids double spend)
                 sendAmount(amountApproved, payee);
                 // increment the nonce, so any previous payment order becomes invalid
                 nonce++;
                 payee = null;
                 timeout = null;
             }
         }
     
         /**
          * Utility function to get the channel balance back.
          * 
          * Only the creator can call this function. It would be used to get back the
          * balance of a closed channel or when the channel timeout.
          */
         public void getBalance() {
             checkTimeout();
             // only creator can get the balance back, the channel must be currently
             // closed (payee==null or timedout)
             if (!getCurrentTxSender().equals(getCreator()))
                 return;
             if (payee == null)
                 sendBalance(getCreator());
         }
     
         /**
          * This contract only accepts the public method calls above.
          * 
          * If an unrecognized method was called we do nothing
          */
         public void txReceived() {
         }
     
         /**
          * Private method, not available from blockchain messages, for checking
          * if this channel timedout.
          */
         private void checkTimeout() {
             if (getBlockTimestamp().ge(timeout)) {
                 // expired
                 nonce++;
                 payee = null;
             }
         }
     
         /**
          * A main function for debugging purposes only.
          * 
          * This function is not compiled into bytecode and do not go to the blockchain.
          */
         public static void main(String[] args) throws Exception {
             BT.activateCIP20(true);
             new EmulatorWindow(PaymentChannel.class);
         }
     }`,
     ProofOfBurn:`package bt.sample;

     import bt.Contract;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that burns all BURST it receives.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class ProofOfBurn extends Contract {
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             sendAmount(getCurrentBalance(), getAddress(0L));
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(ProofOfBurn.class);
         }
     }
     `,
     Refund:`package bt.sample;

     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A contract that simply refunds any funds received (minus activation fee).
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Refund extends Contract {
     
         @Override
         public void txReceived() {
             sendAmount(getCurrentTx().getAmount(),
                     getCurrentTx().getSenderAddress());
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(Refund.class);
         }
     }`,
     Sha256_64:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that simply echoes the message received.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class Sha256_64 extends Contract {
     
         long sha256_64;
         
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             sha256_64 = this.performSHA256_64(1, 2);
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(Sha256_64.class);
         }
     }
     
     `,
     TXCounter:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that simply counts the number of received transactions
      * and processed blocks (with transactions).
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class TXCounter extends Contract {
     
         long ntx, nblocks;
         Address address;
         
         /**
          * Any new transaction received will be handled by this function.
          */
         @Override
         public void txReceived(){
             ntx++;
             address = getCurrentTx().getSenderAddress();
         }
     
         @Override
         protected void blockFinished() {
             nblocks++;
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(TXCounter.class);
         }
     }
     
     `,
     TXCounter2:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract that simply counts the number of received transactions
      * and processed blocks (with transactions).
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class TXCounter2 extends Contract {
     
         long ntx, nblocks, ncalls;
         Address address;
         
         /**
          * Any new transaction received will be handled by this function.
          */
         @Override
         public void txReceived(){
             ntx++;
             address = getCurrentTxSender();
         }
         
         public void methodCall() {
             ntx++;
             ncalls++;
         }
     
         @Override
         protected void blockFinished() {
             nblocks++;
             if(nblocks > 1) {
                 // causes the execution to be halted
                 sendBalance(getCreator());
             }
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(TXCounter2.class);
         }
     }
     
     `,
     
     TipThanks:`package bt.sample;

     import bt.Address;
     import bt.compiler.CompilerVersion;
     import bt.Contract;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A smart contract for accepting tips and return a tank you message.
      * 
      * For every transaction received (amount higher than the activation fee),
      * a "Thank you!" message is returned. Messages from smart contracts
      * currently come only as hexadecimal numbers. To actually read the
      * message contents convert from hexadecimal to string using, for instance,
      * https://codebeautify.org/hex-string-converter.
      * 
      * When the balance reaches a specified mininum amount, the balance
      * is transfered to the beneficiary.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class TipThanks extends Contract {
         
         Address beneficiary;
         public static final long MIN_AMOUNT = 1000*Contract.ONE_BURST;
         public static final String ADDRESS = "BURST-JJQS-MMA4-GHB4-4ZNZU";
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public TipThanks(){
             beneficiary = parseAddress(ADDRESS);
         }
         
         /**
          * Any new transaction received will be handled by this function.
          */
         public void txReceived(){
             sendMessage("Thank you!", getCurrentTx().getSenderAddress());
     
             if(getCurrentBalance() > MIN_AMOUNT)
                 sendBalance(beneficiary);
         }
     
         /**
          * Main function for debugging purposes only.
          * 
          * This function is not converted into bytecode.
          */
         public static void main(String[] args) {
             new EmulatorWindow(TipThanks.class);
         }
     }
     
     `,
     UniqueToken: `package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A unique (non-fungible) token smart contract.
      * 
      * This contract represents a non-fungible or unique token for Burst blockchain.
      * 
      * When created the contract is <i>owned</i> by the creator. After that the
      * owner can transfer the ownership to another address. Additionally, the owner
      * can put the token on sale with a given timeout.
      *
      * Although this was inspired by http://erc721.org/, the mechanics are very
      * different. For instance, there is one contract <i>instance</i> per token and
      * each token is already a decentralized exchange (DEX) with absolutely no
      * middle man.
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     public class UniqueToken extends Contract {
     
         Address owner;
         long salePrice;
         Timestamp saleTimeout;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public UniqueToken() {
             // Initially token is owned by the creator
             owner = getCreator();
         }
     
         /**
          * Transfers the ownership of this token.
          * 
          * Only the current owner can transfer the ownership.
          * 
          * @param newOwner
          */
         public void transfer(Address newOwner) {
             if (owner.equals(this.getCurrentTx().getSenderAddress())) {
                 // only current owner can do this
                 owner = newOwner;
                 salePrice = 0; // not for sale
                 saleTimeout = null;
             }
         }
     
         /**
          * Put this toke on sale for the given price.
          * 
          * @param priceNQT the price in NQT==1E-8 BURST (buyer need to transfer at least
          *                 this amount)
          * @param timeout  how many minutes the sale will be available
          */
         public void putOnSale(long priceNQT, long timeout) {
             if (owner.equals(this.getCurrentTx().getSenderAddress())) {
                 // only current owner can do this
                 this.salePrice = priceNQT;
                 this.saleTimeout = getBlockTimestamp().addMinutes(timeout);
             }
         }
     
         /**
          * Buy an on sale token.
          * 
          * Buyer needs to transfer the asked price along with the transaction. Recalling
          * that the amount sent should also cover for the activation fee.
          * 
          * If the token was not on sale or the amount is not enough, the order is
          * refunded (minus the contract activation fee).
          */
         public void buy() {
             if (salePrice > 0 && getBlockTimestamp().le(saleTimeout) && getCurrentTx().getAmount() >= salePrice) {
                 // Conditions match, let's execute the sale
                 sendAmount(salePrice, owner); // pay the current owner
                 owner = getCurrentTx().getSenderAddress(); // new owner
                 salePrice = 0; // not for sale
                 saleTimeout = null;
             } else {
                 // Invalid order
                 txReceived();
             }
         }
     
         /**
          * This contract only accepts the public method calls above.
          * 
          * If an unrecognized method was called or an invalid order was placed, this
          * function will refund the order (minus the activation fee).
          */
         public void txReceived() {
             // send back funds of an invalid order
             sendAmount(getCurrentTx().getAmount(), getCurrentTx().getSenderAddress());
         }
     
         /**
          * A main function for debugging purposes only.
          * 
          * This function is not compiled into bytecode and do not go to the blockchain.
          */
         public static void main(String[] args) throws Exception {
             // some initialization code to make things easier to debug
             Emulator emu = Emulator.getInstance();
             Address creator = Emulator.getInstance().getAddress("CREATOR");
             emu.airDrop(creator, 1000*Contract.ONE_BURST);
     
             Address token1 = Emulator.getInstance().getAddress("TOKEN1");
             Address token2 = Emulator.getInstance().getAddress("TOKEN2");
             emu.createConctract(creator, token1, UniqueToken.class, Contract.ONE_BURST);
             emu.createConctract(creator, token2, UniqueToken.class, Contract.ONE_BURST);
     
             emu.forgeBlock();
     
             new EmulatorWindow(UniqueToken.class);
         }
     }`,
     Will:`package bt.sample;

     import bt.*;
     import bt.compiler.CompilerVersion;
     import bt.compiler.TargetCompilerVersion;
     import bt.ui.EmulatorWindow;
     
     /**
      * A "will" contract that transfers its balance to beneficiary account 
      * if a given timeout is reached.
      *
      * Inspired by http://ciyam.org/at/at_dormant.html
      * 
      * @author jjos
      */
     @TargetCompilerVersion(CompilerVersion.v0_0_0)
     class Will extends Contract {
         Address beneficiary;
         Timestamp timeout;
         boolean finished;
     
         /**
          * Constructor, when in blockchain the constructor is called when the first TX
          * reaches the contract.
          */
         public Will(){
             beneficiary = parseAddress("BURST-TSLQ-QLR9-6HRD-HCY22");
             timeout = getBlockTimestamp().addMinutes(30000);
             finished = false;
         }
     
         /**
          * Sets a new timeout in minutes from now (if not expired)
          * 
          * @param minutes
          */
         public void setTimeout(int minutes){
             if(!getCurrentTx().getSenderAddress().equals(getCreator()))
                 // only creator is allowed
                 return;
             if(expired()){
                 txReceived();
                 return;
             }
             timeout = getBlockTimestamp().addMinutes(minutes);
         }
     
         /**
          * Private function for checking if the timeout expired
          * 
          * @return true if this contract expired
          */
         private boolean expired(){
             return finished || getBlockTimestamp().ge(timeout);
         }
     
         /**
          * Private function that pays this contract.
          */
         private void pay(){
             sendBalance(beneficiary);
             finished = true;
         }
     
         /**
          * Sets a new payout address (if not expired)
          * 
          * @param newPayout
          */
         public void setPayoutAddress(Address newPayout){
             if(!getCurrentTx().getSenderAddress().equals(this.getCreator()))
                 // only creator is allowed
                 return;
     
             if(expired()){
                 txReceived();
                 return;
             }
             beneficiary = newPayout;
         }
     
     
         /**
          * Any call not recognized will be handled by the this function
          */
         @Override
         public void txReceived(){
             if(finished && getCurrentTx().getAmount()>0){
                 // Send back funds or they will be lost
                 sendAmount(getCurrentTx().getAmount(), getCurrentTx().getSenderAddress());
             }
             else if(expired()){
                 pay();
             }
             // Otherwise do nothing, wait for the timeout
         }
     
         public static void main(String[] args) {
             new EmulatorWindow(Will.class);
         }
     }
     
     `,
     GamevoteContract: `#include APIFunctions

#program name GameVoteContract
#program description This contract serves as a consensus regulator (from a few to many voters) for target contracts
#program activationAmount .5

#pragma maxAuxVars 3
#pragma maxConstVars 3
#pragma optimizationLevel 3
#pragma version 2.2.1

// enumeration substitute
#define ONESIGNA 100000000
#define ONEHOUR 60
#define TWENTYFOURHOURS 1440

// contract methods
#define DEPOSITING 1
#define ACT 2
#define STOREPOLL 3
#define CHECKPOLL 4
#define WITHDRAWALING 5
#define VOTE_FOR_POLL 6

// gutes conversion tool: https://www.simonv.fr/TypesConvert/?integers
// #define DEPOSITING 0xc915c24f95f28d9d
// #define ACT 0x4b8e064b14d74d64
// #define WITHDRAWALING 0x64ff1046423d38df
// #define VOTE_FOR_POLL 0xddca044a939d3bb7


// map flags
#define REJECT 5
#define DEPOSIT 6
#define ACTION 7
#define VOTEPOINTS 8

long contractProvider = 0;
long pollContractID = 0; // set static before deploy contract
long maxGlobalVotePoints = 0; // 100%

long sendBuffer[8];

long providerIDs[100];

long currentFee = ONESIGNA;

struct TXINFO {
    long txId,
        timestamp,
        sender,
        amount,
        message[8];
} currentTX;

void getTxDetails(void) {
    currentTX.txId = Get_A1();
	currentTX.amount = getAmount(currentTX.txId);
	currentTX.timestamp = Get_Timestamp_For_Tx_In_A();
	currentTX.sender = getSender(currentTX.txId);
	readMessage(currentTX.txId, 0, currentTX.message);
    readMessage(currentTX.txId, 1, currentTX.message + 4);
}

void main(void) {
    do{
        A_To_Tx_After_Timestamp(currentTX.timestamp);
        if (Get_A1() == 0) 
		{
            break;
        }
        getTxDetails();
		
        switch (currentTX.message[0]) {
			case DEPOSITING:
				Depositing();
				break;
			case ACT:
				Act();
				break;
			case WITHDRAWALING:
				Withdrawaling();
				break;
			case VOTE_FOR_POLL:
				VoteForPoll();
				break;
			default:
				break;
        }
    } while (true);
}

// ### EXTERNAL METHODS ###

// this is for a registration into the contract (get vote entitlement)
void Depositing(void) {
	// check minimal depositAmount
	// get the last map entry index.
	long providerIndex = GetIndexOfProviderInMap(currentTX.sender);
	long lastIndex = GetLastIndexOfProvidersInMap();
	if((contractProvider == 0 || currentTX.amount <= 100_0000_0000) && IsIDOK(currentTX.sender) == 1 &&	providerIndex >= lastIndex) {
		
		// check if not already exist
		if(providerIndex >= lastIndex) {
			// set new entry as last entry
			// TODO: optimize 
			setMapValue(providerIndex, providerIndex, currentTX.sender);
		
		}
		setMapValue(currentTX.sender, DEPOSIT, currentTX.amount);
		providerIDs[contractProvider] = currentTX.sender;
		contractProvider++;
	} else {
		SendBack();
	}
	
}

// this serves to initiate an action
void Act(void) {
	
	// currentTX.sender = providerID (for reward)
	// currentTX.message[0] = method (ACT)
	// currentTX.message[1] = sub method (mining)
	// currentTX.message[2] = parameter (123)
	// currentTX.message[3] = actorContractID (to process sub method(parameter))
	// currentTX.message[4] = targetContractID (to process sub method(parameter))
	// currentTX.message[5] = free
	// currentTX.message[6] = free
	// currentTX.message[7] = free
	
	if(IsIDOK(currentTX.sender) == 0) {
		SendBack();
		return;
	}
	
	if(contractProvider <= 1) {
		// no voting necessary
		
		setMapValue(currentTX.sender, ACTION, 0);
		// send STOREPOLL as contract method, currentTX.message[1] as sub method, currentTX.message[2] as parameter, currentTX.message[3] as actorContractID, currentTX.message[4] as targetContractID, currentTX.sender as rewardRecipient and 1 as timeout for executing immediately
		
		SetSendBufferForTargetContract(STOREPOLL, currentTX.message[1], currentTX.message[2], currentTX.message[3], currentTX.message[4], currentTX.sender, 1, 0);
		SendBufferWithFee(pollContractID);
		
	} else {
		// check if there is no other poll active...
		if(getMapValue(currentTX.sender, ACTION) <= 0) {
			
			// recipientID = pollContractID (to process the pollresult)
			// message[0] = contract method (STOREPOLL)
			// message[1] = sub method (mining)
			// message[2] = parameter (123)
			// message[3] = actorContractID (to process sub method(parameter))
			// message[4] = targetContractID (to process sub method(parameter))
			// message[5] = providerID/pollsterID (for reward)
			// message[6] = timestamp (vote timeout in the future)
			// message[7] = free
			
			// save actorContractID in map for polling (his intend is voted on)
			setMapValue(currentTX.sender, ACTION, currentTX.message[3]);
			// send STOREPOLL as contract method, currentTX.message[1] as sub method, currentTX.message[2] as parameter, currentTX.message[3] as actorContractID, currentTX.message[4] as targetContractID, currentTX.sender as rewardRecipient and timeout time 
			SetSendBufferForTargetContract(STOREPOLL, currentTX.message[1], currentTX.message[2], currentTX.message[3], currentTX.message[4], currentTX.sender, SetTimeOut(ONEHOUR), 0);
			SendBufferWithFee(pollContractID);
			
		} else {
			SendBack();
		}
	}
}

// this is for a complete deregistration from the contract (no vote entitlement anymore)
void Withdrawaling(void) {
	
	if(IsIDOK(currentTX.sender) == 1 && GetIndexOfProviderInMap(currentTX.sender) < GetLastIndexOfProvidersInMap()) {
		
		long deposit = getMapValue(currentTX.sender, DEPOSIT);
		
		if(deposit >= ONESIGNA) {
			
			// set DEPOSIT and VOTEPOINTS to 0
			setMapValue(currentTX.sender, DEPOSIT, 0);
			setMapValue(currentTX.sender, VOTEPOINTS, 0);
			
			SetMaxVotePoints();
			contractProvider--;
			
			if(contractProvider == 0) {
				sendAmount(Get_Current_Balance(), currentTX.sender);
			} else {
				sendAmount(deposit, currentTX.sender);
			}
			
		} else {
			SendBack();
		}
		
	} else {
		SendBack();
	}
}

// this is about voting for a poll
// vote == 0 -> abstained from voting
// vote != pollingAmount -> vote rejected
// vote == pollingAmount -> vote accepted
void VoteForPoll(void) {
	
	// no vote needed
	if(contractProvider <= 1) {
		return;
	}
	
	long pollsterID = currentTX.message[1];
	
	// the pollsterID cannot vote for himself
	if(pollsterID == currentTX.sender || (IsIDOK(pollsterID) == 0 && IsIDOK(currentTX.sender) == 0)) {
		return;
	}
	
	long pollType = GetPollType(pollsterID);
	
	if(pollType == REJECT) {
		return;
	}
	
	long pollingActorContract = getMapValue(pollsterID, pollType);
	
	// if there is no will for ACTION then break
	if(pollingActorContract == 0) {
		SendBack();
		return;
	}
	
	// get pollsterID's DEPOSIT
	long pollingAmount = getMapValue(pollsterID, DEPOSIT);
	long vote = currentTX.amount;
	long votingEntitled = getMapValue(currentTX.sender, DEPOSIT);
	
	// check if entitled to vote
	if(pollingAmount > 0 && votingEntitled > 0) {
		
		// get TimeOut as Value from pollContractID as ContractID with PollsterID as Key1, pollingActorContract as Key2
		long isTimeUp = GetTimeIsUp(getExtMapValue(pollsterID, pollingActorContract, pollContractID));
		if(isTimeUp == 2) {
			SendBack();
			return;
		} else {
			if(isTimeUp == 1) {
				CheckThePoll(pollsterID, pollType, pollingAmount, 1);
				return;
			}
		}
		
		long votingResult = Voting(vote, pollingAmount);

		if(votingResult == 0) {
			// vote is out of acceptable range
			SendBack();
			return;
		}

		if(votingResult == 1) {
			// vote "reject" so increase the deposit
			setMapValue(currentTX.sender, DEPOSIT, votingEntitled + vote);
		}

		votingEntitled = getMapValue(currentTX.sender, pollsterID);
		// check if already voted
		if(votingEntitled == 0) {
			// check voteCost with currentTX.amount as vote
			if(votingResult == 2) {
				
				// set the vote: iteration for pollsterID, accepted(vote == pollingAmount) or rejected(vote != pollingAmount)
				setMapValue(GetNextZeroValue(pollsterID), pollsterID, vote);
				// prevent doublevoting by set key1 to the votersID, key2 to pollsterID and value to accepted(vote == pollingAmount) or rejected(vote != pollingAmount)
				setMapValue(currentTX.sender, pollsterID, vote);
				// get max vote points of voter
				long maxVotePoints = getMapValue(currentTX.sender, VOTEPOINTS);
				// check the max vote points of voter
				if(maxVotePoints > maxGlobalVotePoints) {
					// set global vote points to the max vote points of voter
					maxGlobalVotePoints = maxVotePoints;
				}
				// set vote points +1 for the voter
				setMapValue(currentTX.sender, VOTEPOINTS, maxVotePoints +1);
				// checking withdrawal
				CheckThePoll(pollsterID, pollType, pollingAmount, 0);
			} else {
				SendBack();
			}
			
		} else {
			SendBack();
		}
	} else {
		if(pollingAmount == 0) {
			// if there is no DEPOSIT of PollsterID then clean up maps
			ExecuteAndCleanUpMap(pollsterID, REJECT, pollingAmount);
		}
		SendBack();
	}
}

// ### INTERNAL METHODS AND FUNCTIONS ###

// counting the votes of the deregistration
// a vote of >50% is required for a successful deregistration (and withdrawaling)
void CheckThePoll(long pollsterID, long pollType, long pollingAmount, long timeOut) {
	
	if(contractProvider > 2) {
		
		long okVotes = 0;
		long notOKVotes = 0;
		for (long i = 0; i < contractProvider; i++) {
			long vote = getMapValue(i, pollsterID);

			// just count until value reaches zero...
			if(vote == 0) {
				break;
			}

			long historyVoteResult = Voting(vote, pollingAmount);
			if(historyVoteResult == 2) { 
				// vote accepted
				okVotes++;
			} else { 
				// vote rejected
				notOKVotes++;
			}
		}
		
		if(okVotes > contractProvider / 2) {
			// poll OK
			ExecuteAndCleanUpMap(pollsterID, pollType, pollingAmount);
		} else {
			if(notOKVotes > contractProvider / 2) {
				// poll is NOT OK and voting has ended because they cant reach a OK end anymore
				ExecuteAndCleanUpMap(pollsterID, REJECT, pollingAmount);
			} else {
				
				if(timeOut == 1) {
					ExecuteAndCleanUpMap(pollsterID, REJECT, pollingAmount);
				}
				
				// poll is still NOT OK, wait for more votes...
			}
		}
		
	} else if(contractProvider == 2) {
		long vote2 = currentTX.message[2];
		
		if(vote2 == pollingAmount){
			// poll OK
			ExecuteAndCleanUpMap(pollsterID, pollType, pollingAmount);
		} else {
			// poll is NOT OK and voting has ended because they cant reach a OK end anymore
			ExecuteAndCleanUpMap(pollsterID, REJECT, pollingAmount);
		}
		
	} else {
		// poll OK
		ExecuteAndCleanUpMap(pollsterID, pollType, pollingAmount);
	}
}

void ExecuteAndCleanUpMap(long pollsterID, long pollType, long pollingAmount) {
	// set all votes to 0 (abstained from voting)
	long lastZero = GetNextZeroValue(pollsterID);
	for(long i = 0 ; i < lastZero; i++)	{
		setMapValue(i, pollsterID, 0);
	}
	
	// set voters back to zero (its for preventing doublevoting).
	long providerID = 0;
	long j = 0;
	do {
		providerID = getMapValue(j, j);
		// providerID for pollsterID accepted(his withdrawal) or rejected(not his withdrawal) or abstained(0)
		setMapValue(providerID, pollsterID, 0);
		j++;
	} while(providerID != 0);
	
	switch (pollType) {
		case REJECT:
			// send pollingAmount to target contract
			if(pollingAmount > 0) {
				// TODO
			}
			break;
		case ACTION:
			// send providing reward
			sendAmount(pollingAmount, pollsterID);
			
			// send the execution action to target contract
			
			// get actorContractID from action poll
			long actorContractID = getMapValue(pollsterID, ACTION);
			
			// ### outgoing ###
			// recipient = pollContractID
			// message[0] = contract method (CHECKPOLL)
			// message[1] = pollsterID (poll initiator)
			// message[2] = actorContractID (action initiator)
			// message[3] = free
			// message[4] = free
			// message[5] = free
			// message[6] = free
			// message[7] = free
			
			// send CHECKPOLL as method, pollsterID as rewardRecipient, actorContractID as initiator to pollContractID
			SetSendBufferForTargetContract(CHECKPOLL, pollsterID, actorContractID, 0, 0, 0, 0, 0);
			SendBufferWithFee(pollContractID);
			
			break;
		
	}
	
	// set pollType to 0
	setMapValue(pollsterID, pollType, 0);
}

void SendBack(void) {sendAmount(currentTX.amount, currentTX.sender);}

// ### SUPPORT FUNCTIONS ###

long GetLastIndexOfProvidersInMap() {
	return GetIndexOfProviderInMap(0);
}

long GetIndexOfProviderInMap(long providerID) {
	long i = 0;
	long mapID = 0;
	do {
		mapID = getMapValue(i, i);
		i++;
	} while(mapID != 0 && mapID != providerID);
	return i -1;
}

long GetNextZeroValue(long pollsterID) {
	
	// get the last vote index for the pollsterID.
	for (long i = 0; i < contractProvider; i++) {
		long result = getMapValue(i, pollsterID);
		if(result == 0) {
			return i;
		}
	}
}

long IsIDOK(long id) {
	if(id != DEPOSIT && id != ACTION && id != VOTEPOINTS) {
		return 1;
	} else {
		return 0;
	}
}

long GetPollType(long pollsterID) {
	
	long tempValue = getMapValue(pollsterID, ACTION);
	if(tempValue > 0) {
		return ACTION;
	}
	
	return REJECT;
	
}

void SetSendBufferForTargetContract(long pollType, long subMethod, long parameter, long sender, long executeTime, long reserve1, long reserve2, long reserve3) {
	sendBuffer[0] = pollType;
	sendBuffer[1] = subMethod;
	sendBuffer[2] = parameter;
	sendBuffer[3] = sender;
	sendBuffer[4] = executeTime;
	sendBuffer[5] = reserve1;
	sendBuffer[6] = reserve2;
	sendBuffer[7] = reserve3;
}

void SendBufferWithFee(long recipient) {
	sendAmountAndMessage(currentFee, sendBuffer, recipient);
	sendMessage(sendBuffer + 4, recipient);
}

// 0 = voting error
// 1 = voting rejected
// 2 = voting accepted
long Voting(long vote, long pollingAmount) {
	long voteCost = pollingAmount / (contractProvider / 2);
	if(IsVoteValid(vote, voteCost, 10) == 1) {
		if(vote < voteCost) {
			return 1;
		} else {
			return 2;
		}
	} else {
		return 0;
	}
}

// calculate max deviation percent
long IsVoteValid(long vote, long target, long maxDeviationPercent) {
	
	if(vote < target - (target * maxDeviationPercent / 100) || vote > target + (target * maxDeviationPercent / 100)  ) {
		// vote not ok
		return 0;
	} else {
		// vote ok
		return 1;
	}

}

void SetMaxVotePoints() {
	maxGlobalVotePoints = 0;
	long i = 0;
	long mapID = 0;
	do {
		mapID = getMapValue(i, i);
		long tempVotePoints = getMapValue(mapID, VOTEPOINTS);
		if(tempVotePoints > maxGlobalVotePoints) {
			maxGlobalVotePoints = tempVotePoints;
		}
		i++;
	} while(mapID != 0);
}

long SetTimeOut(long time){return Get_Block_Timestamp() + ((time / 4) << 32);} //+(360 << 32); 15 * ~4min/block = 60min = 1 hour locktime
long GetTimeIsUp(long timeOut) {
	
	if(timeOut == 0) {
		return 2;
	}
	
	if(Get_Block_Timestamp() <= timeOut) {
		return 0;
	} else {
		return 1;
	}
	
}`,
PollContract: `#include APIFunctions

#program name PollContract
#program description This contract serves as a distributor contract for polls
#program activationAmount .5

#pragma maxAuxVars 3
#pragma maxConstVars 3
#pragma optimizationLevel 3
#pragma version 2.2.1

// enumeration substitute
#define ONESIGNA 100000000
#define ONEHOUR 60
#define TWENTYFOURHOURS 1440

// contract methods
#define STOREPOLL 3
#define CHECKPOLL 4

// sub methods
#define ACT 0
#define BUILD 1
#define DOCK 2
#define EQUIP 3
#define EXPLODE 4
#define MINING 5
#define REPAIR 6
#define SCAN 7
#define STORE 8
#define TREAT 9

// map flags
#define TIMESTAMP 0
#define HASH256 1
#define ACTOR 2
#define TARGET 3
#define SUBMETHOD 4
#define PARAMETER 5


struct TXINFO {
    long txId,
        timestamp,
        sender,
        amount,
        message[8];
} currentTX;

void getTxDetails(void) {
    currentTX.txId = Get_A1();
	currentTX.amount = getAmount(currentTX.txId);
	currentTX.timestamp = Get_Timestamp_For_Tx_In_A();
	currentTX.sender = getSender(currentTX.txId);
	readMessage(currentTX.txId, 0, currentTX.message);
    readMessage(currentTX.txId, 1, currentTX.message + 4);
}

void main(void) {
    do{
        A_To_Tx_After_Timestamp(currentTX.timestamp);
        if (Get_A1() == 0) 
		{
            break;
        }
        getTxDetails();
		
        switch (currentTX.message[0]) {
			case STOREPOLL:
				StorePollInMap();
				break;
			case CHECKPOLL:
				CheckPoll();
				break;
			default:
				break;
        }
    } while (true);
}

// main Methods
void StorePollInMap() {
	
	// ### incoming ###
	// currentTX.sender = gamevoteContract 
	// currentTX.message[0] = contract method (STOREPOLL)
	// currentTX.message[1] = sub method (mining)
	// currentTX.message[2] = parameter (123)
	// currentTX.message[3] = actorContractID (to process sub method(parameter))
	// currentTX.message[4] = targetContractID (to process sub method(parameter))
	// currentTX.message[5] = providerID/pollsterID (for reward)
	// currentTX.message[6] = timestamp (vote timeout in the future)
	// currentTX.message[7] = free
	
	setMapValue(currentTX.message[5], currentTX.message[3], currentTX.message[6]); // save timestamp into map
	
	long hashResult = GetB4FromHash256(currentTX.message[5], currentTX.message[3], currentTX.message[4], currentTX.message[6]);
	setMapValue(currentTX.message[5], 0, hashResult) // save hash256 into map
	setMapValue(hashResult, TIMESTAMP, currentTX.message[6]) // save timestamp into map
	setMapValue(hashResult, ACTOR, currentTX.message[3]); // save actorID into map
	setMapValue(hashResult, TARGET, currentTX.message[4]); // save targetID into map
	setMapValue(hashResult, SUBMETHOD, currentTX.message[1]); // save sub method into map
	setMapValue(hashResult, currentTX.message[1], currentTX.message[2]); // save parameter into map
	
}

void CheckPoll() {
	// ### incoming ###
	// currentTX.sender = gamevoteContract
	// currentTX.message[0] = contract method (CHECKPOLL)
	// currentTX.message[1] = pollsterID (poll initiator)
	// currentTX.message[2] = actorContractID (action initiator)
	// currentTX.message[3] = free
	// currentTX.message[4] = free
	// currentTX.message[5] = free
	// currentTX.message[6] = free
	// currentTX.message[7] = free
	
	
}


// sub methods
void ExecutePollInMap () {
	
}

void RejectPollInMap() {
	
}

// support methods
long GetB4FromHash256(long a1, long a2, long a3, long a4) {
	Set_A1_A2(a1, a2);
    Set_A3_A4(a3, a4);
	SHA256_A_To_B();
	return Get_B4();
}`,
SolarSystemContract: `#include APIFunctions

#program name SolarSystemContract
#program description This contract serves as a target contract and represent a solar system
#program activationAmount .5

#pragma maxAuxVars 3
#pragma maxConstVars 3
#pragma optimizationLevel 3
#pragma version 2.2.1

// enumeration substitute
#define ONESIGNA 100000000

// contract methods
#define DEPOSITING 1
#define ACT 2
#define WITHDRAWALING 3

// sub methods


// map flags
#define ACTION 5

// Metals(17)
#define IRON 26
#define ALUMINIUM 13
#define TITAN 22
#define COPPER 29
#define TIN 50
#define SILVER 47
#define GOLD 79
#define COBALT 27
#define LEAD 82
#define PLATINUM 78
#define CHROME 24
#define MERCURY 80
#define WOLFRAM 74
#define URANIUM 92
#define NEODYM 60
#define DYSPROSIUM 66
#define TANTALUM 73

// Semimetals(5)
#define SILICON 14
#define LITHIUM 3
#define CALCIUM 20
#define SODIUM 11
#define STRONTIUM 38

// Nonmetals(8)
#define HYDROGEN 1
#define HELIUM 2
#define OXYGEN 8
#define CARBON 6
#define NITROGEN 7
#define NEON 10
#define SULFUR 16
#define XENON 54

long metals[17];
long semimetals[5];
long nonmetals[8];

long quantities[30];
long gamevoteContract = 0;
long sendBuffer[8];
long currentFee = ONESIGNA;

struct TXINFO {
    long txId,
        timestamp,
        sender,
        amount,
        message[8];
} currentTX;

void getTxDetails(void) {
    currentTX.txId = Get_A1();
	currentTX.amount = getAmount(currentTX.txId);
	currentTX.timestamp = Get_Timestamp_For_Tx_In_A();
	currentTX.sender = getSender(currentTX.txId);
	readMessage(currentTX.txId, 0, currentTX.message);
    readMessage(currentTX.txId, 1, currentTX.message + 4);
}

void main(void) {
    do {
        A_To_Tx_After_Timestamp(currentTX.timestamp);
        if (Get_A1() == 0) {
            break;
        }
        getTxDetails();
		
        switch (currentTX.message[0]) {
			case DEPOSITING:
				GenerateElements();
				break;
			case ACT:
				Act();
				break;
			default:
				break;
        }
    } while (true);
}

void GenerateElements() {
	
	//metals
	metals[0] = IRON;
	metals[1] = ALUMINIUM;
	metals[2] = TITAN;
	metals[3] = COPPER;
	metals[4] = TIN;
	metals[5] = SILVER;
	metals[6] = GOLD;
	metals[7] = COBALT;
	metals[8] = LEAD;
	metals[9] = PLATINUM;
	metals[10] = CHROME;
	metals[11] = MERCURY;
	metals[12] = WOLFRAM;
	metals[13] = URANIUM;
	metals[14] = NEODYM;
	metals[15] = DYSPROSIUM;
	metals[16] = TANTALUM;
	
	//semimetals
	semimetals[0] = SILICON;
	semimetals[1] = LITHIUM;
	semimetals[2] = CALCIUM;
	semimetals[3] = SODIUM;
	semimetals[4] = STRONTIUM;
	
	//nonmetals
	nonmetals[0] = HYDROGEN;
	nonmetals[1] = HELIUM;
	nonmetals[2] = OXYGEN;
	nonmetals[3] = CARBON;
	nonmetals[4] = NITROGEN;
	nonmetals[5] = NEON;
	nonmetals[6] = SULFUR;
	nonmetals[7] = XENON;
	
	long matCount = metals.length + semimetals.length + nonmetals.length;

	long metPrevalence = CalculatePrevalence(metals.length);
	long semiPrevalence = CalculatePrevalence(semimetals.length);
	long nonPrevalence = CalculatePrevalence(nonmetals.length);

	long metCountdown = metPrevalence;
	long semiCountdown = semiPrevalence;
	long nonCountdown = nonPrevalence;

	long metIndex = 0;
	long semiIndex = 0;
	long nonIndex = 0;
	
	long selectionIndex = 0;
	long selectionList[30];
	
	long switcher = 2;

	while (metIndex < metals.length || semiIndex < semimetals.length || nonIndex < nonmetals.length) {
		
		switch(switcher) {
			case 0:
				if(metCountdown > 0)
				{
					if (metIndex < metals.length)
					{
						selectionList[selectionIndex] = metals[metIndex];
						selectionIndex++;
						metIndex++;
					}
					
					metCountdown--;
				}
				else
				{
					metCountdown = metPrevalence;
					switcher = 2;
				}
				break;
			case 1:
				if (semiCountdown > 0)
				{
					if (semiIndex < semimetals.length)
					{
						selectionList[selectionIndex] = semimetals[semiIndex];
						selectionIndex++;
						semiIndex++;
					}
					
					semiCountdown--;
				}
				else
				{
					semiCountdown = semiPrevalence;
					switcher = 0;
				}
				break;
			case 2:
				if (nonCountdown > 0)
				{
					if (nonIndex < nonmetals.length)
					{
						selectionList[selectionIndex] = nonmetals[nonIndex];
						selectionIndex++;
						nonIndex++;
					}
					
					nonCountdown--;
				}
				else
				{
					nonCountdown = nonPrevalence;
					switcher = 1;
				}
				break;
		}
	}

	CalculateElementQuantities(getCurrentBalance()); // currentTX.amount

	for (long i = 0; i < quantities.length; i++)
	{
		if (i >= selectionList.length) {
			break;
		}
		// 0 = Elements, ElementOrderNumber, amount
		setMapValue(0, selectionList[i], quantities[i]);
	}
	
}

void Act(void) {
	// ### income ###
	// currentTX.sender = gamevoteContract or creatorID
	// currentTX.message[0] = contract method (ACT)
	// currentTX.message[1] = sub method (mining)
	// currentTX.message[2] = parameter (123)
	// currentTX.message[3] = endTargetContractID (to process sub method(parameter))
	// currentTX.message[4] = providerID (for reward)
	// currentTX.message[5] = timestamp (vote timeout in the future)
	// currentTX.message[6] = free
	// currentTX.message[7] = free
	
	
	// ### outgoing ###
	// recipientID = endTargetContractID (to process sub method(parameter))
	// message[0] = contract method (ACT)
	// message[1] = sub method (store)
	// message[2] = parameter (IRON)
	// message[3] = parameter (123)
	// message[4] = free
	// message[5] = free
	// message[6] = free
	// message[7] = free
	
	setMapValue(0, currentTX.message[2], getMapValue(0, currentTX.message[2]) - currentTX.message[3]);
	SetSendBufferForTargetContract(ACT, currentTX.message[1], currentTX.message[2], currentTX.message[2], 0, 0, 0, 0);
	SendMessageSC(currentTX.message[1]);
	
	// send reward for contract providing
	sendAmount(100_0000_0000, currentTX.message[4]);
	
}

void CalculateElementQuantities(long signaAmount) {
	quantities[] = 0;
	long i = 0;
	while(signaAmount > 0)
	{
		quantities[i++] = signaAmount;
		signaAmount /= 3;
	}
	//return quantities;
}

long CalculatePrevalence(long toRound) {
	
	long tenth = toRound / 10;
	tenth = tenth * 10;

	long modth = toRound % 10;

	if (modth >= 5)	{
		tenth += 10;
	}

	if(tenth == 0) {
		tenth = 10;
	}

	return tenth / 10;
}

void SetSendBufferForTargetContract(long pollType, long subMethod, long parameter, long sender, long executeTime, long reserve1, long reserve2, long reserve3) {
	sendBuffer[0] = pollType;
	sendBuffer[1] = subMethod;
	sendBuffer[2] = parameter;
	sendBuffer[3] = sender;
	sendBuffer[4] = executeTime;
	sendBuffer[5] = reserve1;
	sendBuffer[6] = reserve2;
	sendBuffer[7] = reserve3;
}

void SendMessageSC(long recipient) {
	sendAmountAndMessage(currentFee, sendBuffer, recipient);
	sendMessage(sendBuffer + 4, recipient);
}`,
ZeptorlightContract : `#pragma maxAuxVars 3
#pragma maxConstVars 3
#pragma optimizationLevel 1
#pragma version 2.2.1

// enumeration substitute
#define ONESIGNA 100000000

// sub methods
#define ACT 0
#define BUILD 1
#define DOCK 2
#define EQUIP 3
#define EXPLODE 4
#define MINING 5
#define REPAIR 6
#define SCAN 7
#define STORE 8
#define TREAT 9

// map flags
#define ACTION 5

// index for slots array
#define WEAPON_SLOT_1 1
#define WEAPON_SLOT_2 2
#define ENGINE_SLOT 3
#define SHIELD_SLOT 4
#define CARGO_SLOT 5

// Systems required to build up the ship (1XX = Refined Material; 2XX = Common Material; 3XX = Advanced Material; 4XX = Component; 5XX = SYSTEM; 6XX = Article)
#define COCKPIT_INSTRUMENT 500 // 4 pieces required
#define COMPUTER 501 // 1 pieces required
#define MONITOR 502 // 1 pieces required
#define SMALL_ENERGY_GENERATOR 503 // 1 pieces required
#define SMALL_ENGINE 504 // 2 pieces required
#define SMALL_EXTERNAL_SLOT 505 // 2 pieces required
#define SMALL_SHIP_HULL 506 // 1 pieces required

// contract attributes
// basic contract 
long gamevoteContract = 0;
long currentFee = ONESIGNA;
long sendBuffer[8];

// advanced
long objectType = 603 // Article = ZeptorLight
long owner = 0;
long insurence = 0;
long location = 0;

// build
long shipBuildComponents[7];
long status = 0;

// specific
long defaultSpeed = 350;
long defaultStructure = 500;
long defaultArmor = 1000;
long defaultShield = 0;
long slots[5];

struct TXINFO {
    long txId,
        timestamp,
        sender,
        amount,
        message[8];
} currentTX;

void getTxDetails(void) {
	currentTX.txId = Get_A1();
	currentTX.amount = getAmount(currentTX.txId);
	currentTX.timestamp = get_Timestamp_For_Tx_In_A();
	currentTX.sender = getSender(currentTX.txId);
	readMessage(currentTX.txId, 0, currentTX.message);
	readMessage(currentTX.txId, 1, currentTX.message + 4);
}

void main(void) {
	do {
		A_To_Tx_After_Timestamp(currentTX.timestamp);
		if (Get_A1() == 0) {
			break;
		}
		getTxDetails();

		switch (currentTX.message[0]) {
			case ACT:
				Act();
				break;
			case BUILD:
				Build();
				break;
			case DOCK:
				Dock();
				break;	
			case EQUIP:
				
				break;
			case EXPLODE:
				
				break;
			case MINING:
				Mine();
				break;
			case REPAIR:
				
				break;
			case SCAN:
				
				break;
			case STORE:
				
				break;
			case TREAT:
				
				break;
			case WITHDRAWALING:
				// TODO: needed?
				break;
			default:
				break;
		}
    } while (true);
}


// main methods
void Act(void) {
	// TODO:
	
    // Define actions for the ship
	// currentTX.sender = gamevoteContractID or ownerID or creatorID
    // currentTX.message[0] = method (ACT)
    // currentTX.message[1] = command (build, equip, docking, mining, storing, scanning, repairing)
    // currentTX.message[2] = targetID
    // currentTX.message[3] = free
    // currentTX.message[4] = free
    // currentTX.message[5] = free
    // currentTX.message[6] = free
    // currentTX.message[7] = free
	
    // ### outgoing ###
    // message[0] = method (ACT)
    // message[1] = command (fire)
    // message[2] = parameter (weapon slot)
    // message[3] = damage
    // message[4] = free
    // message[5] = free
    // message[6] = free
    // message[7] = free
	
	/*
    setMapValue(0, slots[currentTX.message[2]], getMapValue(0, slots[currentTX.message[2]]) - 1);
    SetSendBufferForTargetContract(ACT, currentTX.message[1], currentTX.message[2], currentTX.message[3], 0, 0, 0, 0);
    SendMessageSC(currentTX.message[3]);

    sendAmount(100_0000_0000, currentTX.message[4]);
	*/
}

void Build() {
    // build the ship
    // currentTX.message[0] = method (BUILD)
    // currentTX.message[1] = parameter (System [Computer, Small Ship Hull, Small Engine, etc.])
    // currentTX.message[2] = parameter (Amount of System)
    // currentTX.message[3] = free
    // currentTX.message[4] = free
    // currentTX.message[5] = free
    // currentTX.message[6] = free
    // currentTX.message[7] = free
	
	
	
	// shipBuildComponents[0] = Amount of COCKPIT_INSTRUMENT
	// shipBuildComponents[1] = Amount of COMPUTER
	// shipBuildComponents[2] = Amount of MONITOR
	// shipBuildComponents[3] = Amount of SMALL_ENERGY_GENERATOR
	// shipBuildComponents[4] = Amount of SMALL_ENGINE
	// shipBuildComponents[5] = Amount of SMALL_EXTERNAL_SLOT
	// shipBuildComponents[6] = Amount of SMALL_SHIP_HULL
	
	long checkedComponent = CheckBuildComponent(currentTX.message[1])
	
	if(checkedComponent > 0) {
		shipBuildComponents[checkedComponent -1] = shipBuildComponents[checkedComponent -1] + currentTX.message[2];
		BuildUpShip();
	}
	
}

void Dock() {
	
}

void Equip() {

    // equip the ship
    // currentTX.message[0] = method (ACT)
    // currentTX.message[1] = command (EQUIP)
    // currentTX.message[2] = parameter (gattling20mm = ID)
    // currentTX.message[3] = parameter (slotindex = WEAPON_SLOT)
    // currentTX.message[4] = free
    // currentTX.message[5] = free
    // currentTX.message[6] = free
    // currentTX.message[7] = free	
	
	/* Key1 definition:
	 * 0 = Elements (IRON, HYDROGEN, etc.)
	 * 1 = Refined Materials (Iron Bar, Hydrogen Bottle, etc)
	 * 2 = Common Materials (Iron Gear, Fuel, Polymer, etc)
	 * 3 = Advanced Materials (Iron Case, Aluminium Frame, etc)
	 * 4 = Components (Ship Hull Part, Engine Part, Gun Part, etc.)
	 * 5 = Systems (Computer, Small Ship Hull, Small Engine, etc.)
	 * 6 = Equipment (Zeptor Light, Gattling20mm, etc.)
	 */
	
	/* Key2 definition:
	 * 0 = (Equipment)Slot (value = Internal or External)
	 */
	
	/* Value definition:
	 * 1,2,3,... = slotOfEquipment
	 */
	
	long fitSlot = GetSlotType(getExtMapValue(6, 0, currentTX.message[2]), currentTX.message[3]);
	if (fitSlot != 0) {
		slots[fitSlot] = currentTX.message[2]; // Equipment ID
	}
	
	
	
	
	
    // Set initial component quantities
    // long initialQuantities[5] = { 1, 1, 1, 1, 1 };

    // for (long i = 0; i < 5; i++) {
        // setMapValue(0, slots[i], initialQuantities[i]);
    // }
}

void Explode() {
	
}

void Mine() {
	
}

void Repair() {
	
}

void Scan() {
	
}

void Store() {
	
}

void Treat() {
	
}

// sub methods


// support methods
long GetSlotType(long slotOfEquipment, long desiredSlot) {
	
	switch(slotOfEquipment) {
		case WEAPON_SLOT_1:
		case WEAPON_SLOT_2:
			switch(desiredSlot) {
				case WEAPON_SLOT_1:
				case WEAPON_SLOT_2:
					return desiredSlot;
					break; // maybe not needed
			}
			
			break;
		case ENGINE_SLOT:
			if(desiredSlot == ENGINE_SLOT) {
				return desiredSlot;
			}
			break;
		case SHIELD_SLOT:
			if(desiredSlot == SHIELD_SLOT) {
				return desiredSlot;
			}
			break;
		case CARGO_SLOT:
			if(desiredSlot == CARGO_SLOT) {
				return desiredSlot;
			}
			break;
	}
	
	return 0;
	
}

long CheckBuildComponent(long component) {
	
	switch(component) {
		case COCKPIT_INSTRUMENT:
			return 1;
			break;
		case COMPUTER:
			return 2;
			break;
		case MONITOR:
			return 3;
			break;
		case SMALL_ENERGY_GENERATOR:
			return 4;
			break;
		case SMALL_ENGINE:
			return 5;
			break;
		case SMALL_EXTERNAL_SLOT:
			return 6;
			break;
		case SMALL_SHIP_HULL:
			return 7;
			break;
	}
	
	return 0;
	
}

void BuildUpShip() {
	
	if(shipBuildComponents[0] >= 4 && shipBuildComponents[1] >= 1 && shipBuildComponents[2] >= 1 && shipBuildComponents[3] >= 1 && shipBuildComponents[4] >= 2 && shipBuildComponents[5] >= 2 && shipBuildComponents[6] >= 1) {
		status = 1; // ship flightready
	}
	else {
		status = 0; // ship destroyed/not exist
	}
	
}


// contract methods
void SetSendBufferForTargetContract(long pollType, long command, long parameter, long sender, long executeTime, long reserve1, long reserve2, long reserve3) {
    sendBuffer[0] = pollType;
    sendBuffer[1] = command;
    sendBuffer[2] = parameter;
    sendBuffer[3] = sender;
    sendBuffer[4] = executeTime;
    sendBuffer[5] = reserve1;
    sendBuffer[6] = reserve2;
    sendBuffer[7] = reserve3;
}

void SendMessageSC(long recipient) {
    sendAmountAndMessage(currentFee, sendBuffer, recipient);
    sendMessage(sendBuffer + 4, recipient);
}`,
}