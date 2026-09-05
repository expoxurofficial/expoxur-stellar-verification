# Expoxur® Stellar Verification

Public Stellar Testnet proof of concept for portable verification of Expoxur® City Impact Enterprises (CIEs) and their registered products.

> **Status:** Initial Stellar Testnet proof of feasibility deployed  
> **Network:** Stellar Testnet  
> **Proposed InstaAwards Sprint:** 30 calendar days upon approval  
> **Live Platform:** https://expoxur.com

## What This Is

Expoxur® is a platform designed to make Filipino City Impact Enterprises (CIEs), their products, and their impact more discoverable.

This repository brings together the existing Expoxur® website frontend and the public Stellar/Soroban verification layer being developed for the proposed InstaAwards scope.

The goal is to make selected Expoxur® verification records portable and independently checkable on Stellar while keeping sensitive business, customer, and verification information off-chain.

## Repository Structure

### Expoxur® Website

The existing Expoxur® website frontend codebase is included under:

`website/`

It contains the React/TypeScript frontend, application pages, reusable components, public assets, and Expoxur® brand assets used by the existing platform.

Live platform:

https://expoxur.com

### Stellar Verification Layer

The Stellar/Soroban implementation is located under:

`expoxur-stellar/`

The current CIE verification contract is located at:

`expoxur-stellar/contracts/expoxur-cie-verification/`

Supporting architecture, privacy, authorization, and integration documentation is located under:

`docs/`

## Current Testnet Proof

An initial pre-sprint technical proof of feasibility has been completed.

A minimal Soroban CIE verification contract has been:

- implemented
- tested
- compiled to WASM
- uploaded to Stellar Testnet
- successfully deployed on Stellar Testnet

This deployment demonstrates the technical starting point for the proposed 30-day InstaAwards scope. It does not represent completion of the proposed sprint deliverables.

### Deployment

**Network:** Stellar Testnet

**Contract ID**

`CAXGRDSHHMNYZUHR7KYVKDSETPR3IBDQYYAUAKDPI4C3PCDKZ3EN4PBU`

**Deployment Transaction**

`f1151a08dae398c85c20aee7d69561fd97d22cfe00c4f89e70e29603d98e262a`

**WASM Hash**

`627937bb51dc315049b48f88bb566803cda72693cf5e5028aaf03afc283e728b`

**Deployment Evidence**

[TESTNET_DEPLOYMENT.md](expoxur-stellar/contracts/expoxur-cie-verification/TESTNET_DEPLOYMENT.md)

## Current Contract

The current proof of concept exposes:

- `register_cie`
- `get_cie`

The contract source and tests are located at:

`expoxur-stellar/contracts/expoxur-cie-verification/`

The contract package is named `expoxur-cie-verification` to reflect its project-specific purpose.

## Proposed 30-Day InstaAwards Build

The deployed contract is intentionally minimal. The proposed 30-day build will expand this technical foundation into three connected components:

### 1. CIE Verification Registry

An authorized registry supporting:

- unique CIE identifiers
- verification record hashes
- verification status
- timestamps
- authorized verification actions
- status changes

Target lifecycle:

`VERIFIED -> SUSPENDED -> REVOKED`

### 2. CIE-to-Product Registry

Associate registered products with verified CIEs using privacy-minimized identifiers and cryptographic hashes.

### 3. QR Scan & Verify

Connect Expoxur® CIE and product profiles to durable QR verification experiences showing the current verification state and corresponding Stellar Testnet evidence.

The final proof of concept is intended to demonstrate both a valid verification case and a changed-status or negative verification case.

## Why Stellar?

Expoxur® remains responsible for evaluating and vetting participating CIEs and products.

Stellar does not independently validate real-world business, product, or impact claims.

Instead, Stellar provides a public, tamper-evident record that an authorized Expoxur® verification action occurred.

Sensitive business, customer, and verification information will remain off-chain.

## Repository Documentation

Detailed technical documentation is available in:

- [Architecture](docs/architecture.md)
- [Authorization & Governance](docs/authorization-governance.md)
- [Privacy Model](docs/privacy-model.md)
- [Existing Expoxur® Integration Context](docs/existing-expoxur-integration.md)

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

- full Expoxur® marketplace redevelopment
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