# ExpoxurÂ® Stellar Verification

Public Stellar Testnet proof of concept for portable verification of ExpoxurÂ® City Impact Enterprises (CIEs) and their registered products.

> **Status:** Working Stellar Testnet proof of concept deployed
> **Network:** Stellar Testnet  
> **Proposed InstaAwards Sprint:** 30 calendar days upon approval  
> **Live Platform:** https://expoxur.com

## What This Is

ExpoxurÂ® is a platform designed to make Filipino City Impact Enterprises (CIEs), their products, and their impact more discoverable.

This repository contains the public Stellar/Soroban verification layer for ExpoxurÂ®.

The goal is to make selected ExpoxurÂ® verification records portable and independently checkable on Stellar while keeping sensitive business and customer information off-chain.

## Current Testnet Proof

The first technical milestone is complete.

A minimal Soroban CIE verification contract has been:

- implemented
- tested
- compiled to WASM
- uploaded to Stellar Testnet
- successfully deployed on Stellar Testnet

### Deployment

**Network:** Stellar Testnet

**Contract ID**

`CAXGRDSHHMNYZUHR7KYVKDSETPR3IBDQYYAUAKDPI4C3PCDKZ3EN4PBU`

**Deployment Transaction**

`f1151a08dae398c85c20aee7d69561fd97d22cfe00c4f89e70e29603d98e262a`

**WASM Hash**

`627937bb51dc315049b48f88bb566803cda72693cf5e5028aaf03afc283e728b`

**Deployment Evidence**

[TESTNET_DEPLOYMENT.md](expoxur-stellar/contracts/hello-world/TESTNET_DEPLOYMENT.md)

## Current Contract

The current proof of concept exposes:

- `register_cie`
- `get_cie`

The contract source and tests are located at:

`expoxur-stellar/contracts/hello-world/`

The `hello-world` directory name comes from the original Stellar contract scaffold; the implementation has been replaced with the ExpoxurÂ® CIE verification proof of concept.

## Proposed 30-Day InstaAwards Build

The deployed contract is intentionally minimal. The proposed 30-day build will expand the proof of concept into three connected components:

### 1. CIE Verification Registry

An authorized registry supporting:

- unique CIE identifiers
- verification record hashes
- verification status
- timestamps
- authorized verification actions
- status changes

Target lifecycle:

`VERIFIED â†’ SUSPENDED â†’ REVOKED`

### 2. CIE-to-Product Registry

Associate registered products with verified CIEs using privacy-minimized identifiers and cryptographic hashes.

### 3. QR Scan & Verify

Connect ExpoxurÂ® CIE and product profiles to durable QR verification experiences showing the current verification state and corresponding Stellar Testnet evidence.

The final proof of concept is intended to demonstrate both a valid verification case and a changed-status or negative verification case.

## Why Stellar?

ExpoxurÂ® remains responsible for evaluating and vetting participating CIEs and products.

Stellar does not independently validate real-world business, product, or impact claims.

Instead, Stellar provides a public, tamper-evident record that an authorized ExpoxurÂ® verification action occurred.

Sensitive business, customer, and verification information will remain off-chain.

## Repository Documentation

Detailed technical documentation is available in:

- [Architecture](docs/architecture.md)
- [Authorization & Governance](docs/authorization-governance.md)
- [Privacy Model](docs/privacy-model.md)
- [Existing ExpoxurÂ® Integration Context](docs/existing-expoxur-integration.md)

## Security

Never commit:

- wallet secret keys
- recovery phrases
- private keys
- API secrets
- production credentials
- customer information
- sensitive verification documents

Only public Testnet addresses, contract identifiers, transaction references, and privacy-safe test data should be published.

## Scope

The proposed 30-day InstaAwards build focuses on the Stellar verification layer.

It does **not** include:

- full ExpoxurÂ® marketplace redevelopment
- mass CIE acquisition
- marketing or sales operations
- payment processing or escrow
- Stellar Mainnet deployment
- token or NFT issuance
- logistics or inventory management
- mobile application development
- sensitive data stored on-chain
- production security audits or production key management

## License

MIT License
