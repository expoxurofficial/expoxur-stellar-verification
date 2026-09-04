#![cfg(test)]

use super::*;
use soroban_sdk::{BytesN, Env, String};

#[test]
fn test_register_and_get_cie() {
    let env = Env::default();

    let contract_id = env.register(ExpoxurVerification, ());
    let client = ExpoxurVerificationClient::new(&env, &contract_id);

    let cie_id = String::from_str(&env, "CIE-001");
    let record_hash = BytesN::from_array(&env, &[1u8; 32]);

    let registered = client.register_cie(&cie_id, &record_hash);

    assert_eq!(registered.cie_id, cie_id);
    assert_eq!(registered.record_hash, record_hash);
    assert_eq!(registered.status, String::from_str(&env, "VERIFIED"));

    let retrieved = client.get_cie(&cie_id).unwrap();

    assert_eq!(retrieved.cie_id, cie_id);
    assert_eq!(retrieved.record_hash, record_hash);
    assert_eq!(retrieved.status, String::from_str(&env, "VERIFIED"));
}