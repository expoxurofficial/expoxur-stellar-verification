# Expoxur® Stellar Verification — Soroban Contract

This directory contains the Soroban smart contract implementation for the Expoxur® Stellar Verification proof of concept.

## Contract

The current contract is located at:

`contracts/expoxur-cie-verification/`

It provides the initial on-chain CIE verification registry for Expoxur®.

### Current Functions

- `register_cie` — registers a CIE verification record and its cryptographic record hash.
- `get_cie` — retrieves the stored verification record for a CIE.

### Verification Record

The current proof of concept stores:

- CIE identifier
- verification record hash
- verification status
- ledger timestamp

Sensitive business information and verification documents are not stored on-chain.

## Stellar Network

The current proof of concept has been deployed to Stellar Testnet.

Deployment evidence, including the Contract ID, deployment transaction, and WASM hash, is available at:

`contracts/expoxur-cie-verification/TESTNET_DEPLOYMENT.md`

## Project Structure

```text
.
|-- contracts/
|   `-- expoxur-cie-verification/
|       |-- src/
|       |   |-- lib.rs
|       |   `-- test.rs
|       |-- Cargo.toml
|       |-- Makefile
|       `-- TESTNET_DEPLOYMENT.md
|-- Cargo.toml
|-- Cargo.lock
`-- README.md