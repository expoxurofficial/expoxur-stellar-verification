# Expoxur® Stellar Verification

Public Stellar Testnet proof of concept for portable verification of Expoxur® City Impact Enterprises (CIEs) and their registered products.

> **Status:** Pre-submission technical validation / Testnet POC in progress  
> **Network:** Stellar Testnet  
> **Proposed InstaAwards Sprint:** 30 calendar days upon approval  
> **Live Platform:** https://expoxur.com

## Live Platform

Expoxur® is publicly accessible at:

**https://expoxur.com**

The existing Expoxur® platform provides the current application experience for discovering City Impact Enterprises (CIEs), their profiles, products, and ecosystem activity.

This public repository is separate from the main Expoxur® application codebase and focuses specifically on the Stellar Testnet verification layer being developed and proposed for the InstaAwards build.

## Overview

Expoxur® is designed to help vetted City Impact Enterprises (CIEs) make their businesses, products, and impact more discoverable through persistent digital profiles.

The Stellar Verification project adds a portable verification layer connecting Expoxur® CIE and product verification records to Stellar Testnet.

The goal is to allow a verification record created by an authorized Expoxur® verifier to be independently checked through Stellar, while keeping sensitive business and customer information off-chain.

The proposed verification experience will eventually allow users to scan an Expoxur® QR code and view the current verification status of a CIE or registered product together with corresponding Stellar Testnet evidence.

## Current Development Stage

Expoxur® already exists as a publicly accessible web platform at:

**https://expoxur.com**

The Stellar integration is currently in pre-submission technical development.

This repository will contain the public source code and technical evidence for the Stellar Testnet implementation.

The immediate technical milestone is to establish and document a working Soroban proof of concept deployed on Stellar Testnet before proceeding with the full proposed InstaAwards scope.

## Proposed 30-Day Technical Scope

The proposed InstaAwards sprint will deliver three focused technical components.

### 1. CIE Verification Registry

A Soroban registry deployed on Stellar Testnet that allows an authorized Expoxur® verifier to create and manage privacy-minimized CIE verification records.

The registry is intended to support:

- unique CIE identifiers
- verification record hashes
- verification status
- record timestamps
- authorized verification actions
- verification status changes

Example lifecycle:

`VERIFIED → SUSPENDED → REVOKED`

### 2. CIE-to-Product Registry

A Stellar Testnet registry capability allowing one or more products to be associated with a verified CIE.

The implementation will use privacy-safe identifiers and hashes while keeping sensitive business and product information off-chain.

### 3. QR Scan & Verify Experience

Expoxur® will provide durable QR verification links for participating CIEs and products.

The public verification experience is intended to show:

- CIE or product reference
- current verification status
- verification authority
- latest status update
- corresponding Stellar Testnet evidence

The proof of concept will demonstrate both a valid verification case and at least one changed-status or negative verification case.

## Why Stellar?

Expoxur® remains responsible for evaluating and vetting participating CIEs and their products.

Stellar does not independently validate the underlying real-world business, product, or impact claims.

Instead, Stellar provides a tamper-evident public registry showing that an authorized Expoxur® verifier recorded a particular verification state and CIE-to-product relationship.

This allows Expoxur® verification records to become more portable and independently checkable beyond the Expoxur® platform itself.

## Privacy Model

Sensitive business, customer, verification, and impact information will remain off-chain.

The Stellar Testnet implementation will use only privacy-minimized data such as:

- opaque CIE identifiers
- opaque product identifiers
- cryptographic record hashes
- verification status
- relationship references
- timestamps

The following information will not be stored directly on-chain:

- personal names and contact details
- customer information
- verification documents
- sensitive business information
- sensitive product information
- detailed impact documentation
- authentication credentials or private keys

## Existing Platform Context

Expoxur® is an existing web application that is publicly accessible at:

**https://expoxur.com**

The existing platform supports application-level concepts including CIE/business profiles, product records, unique identifiers, discovery flows, and verification-related states.

The main Expoxur® application codebase remains under private development.

This repository exists specifically for the public Stellar verification integration and does not represent the complete Expoxur® platform codebase.

For additional technical context, see:

[Existing Expoxur® Integration Context](docs/existing-expoxur-integration.md)

## Planned Public Technical Evidence

As development progresses, this repository will contain verifiable technical evidence including:

- Soroban smart contract source code
- contract tests
- integration tests
- Stellar Testnet deployment
- deployed Testnet contract ID
- Testnet transaction references
- sample verification records
- QR verification examples
- technical architecture documentation
- privacy model documentation
- authorization model documentation
- reproducible setup and deployment instructions
- test results
- final technical demonstration

Any Testnet contract IDs and transaction references will only be added after successful deployment and verification.

## Repository Structure

The repository is expected to evolve toward a structure similar to:

```text
expoxur-stellar-verification/
├── README.md
├── LICENSE
├── docs/
│   ├── architecture.md
│   ├── privacy-model.md
│   ├── authorization-model.md
│   └── existing-expoxur-integration.md
├── contracts/
│   └── expoxur-verification/
├── tests/
└── examples/
```

Directories for contract source code, tests, and examples will be added as the technical implementation progresses.

## Explicitly Out of Scope

The proposed 30-day sprint does not include:

- full Expoxur® marketplace development or redesign
- mass CIE acquisition or onboarding
- marketing, sales, or business development
- e-commerce checkout
- payment processing
- escrow or settlement
- Stellar Mainnet deployment
- token issuance
- NFT issuance
- logistics or inventory management
- supply-chain tracking
- mobile applications
- private or customer data stored on-chain
- third-party security audits
- production-grade key management
- production compliance implementation

## Security Notice

No wallet secret keys, recovery phrases, private keys, API secrets, production credentials, customer information, or sensitive verification documents should ever be committed to this repository.

Only public Stellar addresses, Testnet contract identifiers, transaction references, and privacy-safe test data will be published.

## Repository Notice

This repository contains the public Stellar integration for the Expoxur® verification proof of concept.

The existing Expoxur® proprietary application code, private repositories, customer information, verification documents, credentials, and production data are not included.

## License

MIT License
