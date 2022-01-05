import {RewardType,TransactionStatus} from './Enums'

export interface BlockData {
  slotNumber: number;
  blockHeight: number;
  blockHash: string;
  parentSlot: number;
  previousBlockHash: string;
  rewards: Reward[]
}

export interface Reward{
    commission: number,
    lamports: number,
    postbalance: number,
    pubkey: string,
    rewardType: RewardType 
}

export interface transaction{
    status: TransactionStatus
    errorMessages: string[]
    fee: number,
    logMessages: string[],
    signers: string
}