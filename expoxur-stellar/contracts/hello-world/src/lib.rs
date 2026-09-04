#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracttype, BytesN, Env, String,
};

#[contracttype]
#[derive(Clone)]
pub struct VerificationRecord {
    pub cie_id: String,
    pub record_hash: BytesN<32>,
    pub status: String,
    pub updated_at: u64,
}

#[contract]
pub struct ExpoxurVerification;

#[contractimpl]
impl ExpoxurVerification {
    pub fn register_cie(
        env: Env,
        cie_id: String,
        record_hash: BytesN<32>,
    ) -> VerificationRecord {
        let record = VerificationRecord {
            cie_id: cie_id.clone(),
            record_hash,
            status: String::from_str(&env, "VERIFIED"),
            updated_at: env.ledger().timestamp(),
        };

        env.storage().persistent().set(&cie_id, &record);

        record
    }

    pub fn get_cie(
        env: Env,
        cie_id: String,
    ) -> Option<VerificationRecord> {
        env.storage().persistent().get(&cie_id)
    }
}

mod test;