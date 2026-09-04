# Expoxur® Stellar Verification

Public Stellar Testnet proof of concept for portable verification of Expoxur® City Impact Enterprises (CIEs) and their registered products.

> **Status:** Instawards proposal / pre-development  
> **Network:** Stellar Testnet  
> **Sprint:** 30 calendar days upon approval

## Overview

Expoxur® is designed to help vetted City Impact Enterprises (CIEs) make their businesses, products, and impact discoverable through verified profiles.

This project will build a portable verification layer that connects Expoxur® CIE and product verification records to Stellar Testnet and makes their current verification status accessible through QR-based Scan & Verify experiences.

## 30-Day Technical Scope

The Instawards sprint will deliver three focused technical components:

### 1. CIE Verification Registry

A minimal Soroban registry on Stellar Testnet that allows an authorized Expoxur® verifier to create and manage privacy-minimized CIE verification records and their current status.

### 2. CIE-to-Product Registry

A Stellar Testnet registry capability that allows one or more products to be associated with a verified CIE using privacy-safe identifiers and hashes.

### 3. QR Scan & Verify Experience

Durable Expoxur® QR verification links and a public verification experience where users can view the current status of a CIE or product and access the corresponding Stellar Testnet evidence.

## Why Stellar?

Expoxur® remains responsible for evaluating and vetting participating CIEs and products.

Stellar does not independently validate the underlying real-world business or impact claims.

Instead, Stellar provides a tamper-evident registry showing that an authorized Expoxur® verifier recorded a particular CIE verification status and CIE-to-product relationship.

This makes Expoxur® verification records portable and independently checkable beyond the Expoxur® platform.

## Privacy Model

Sensitive business, customer, verification, and impact information will remain off-chain.

The Stellar Testnet implementation will use only privacy-minimized data such as:

- opaque CIE identifiers
- opaque product identifiers
- cryptographic record hashes
- verification status
- relationship references
- timestamps

Names, contact details, verification documents, customer information, sensitive product information, and impact data will not be stored on-chain.

## Verification Lifecycle

The proof of concept will demonstrate defined verification states and status changes, including a positive verification case and at least one negative or changed-status case.

Example:

`VERIFIED → SUSPENDED → REVOKED`

## Explicitly Out of Scope

This 30-day sprint does not include:

- full Expoxur® marketplace development or redesign
- CIE acquisition or mass onboarding
- marketing, sales, or business development
- e-commerce checkout, payments, escrow, or settlement
- Mainnet deployment
- token or NFT issuance
- logistics, inventory, or supply-chain tracking
- mobile applications
- private or customer data stored on-chain
- third-party security audits
- production-grade compliance implementation

## Planned Public Evidence

This repository will be updated during the sprint with:

- Soroban source code
- contract and integration tests
- Stellar Testnet contract ID
- Testnet transaction references
- QR verification examples
- technical architecture documentation
- privacy and authorization documentation
- test results
- reproducible deployment instructions
- final 3–5 minute technical demonstration

## Repository Notice

This repository contains the public Stellar integration developed for the Expoxur® verification proof of concept.

The existing Expoxur® application, proprietary systems, private repositories, verification documents, customer information, and production data are not included in this repository.

## Existing Platform Context

Expoxur® is an existing application under private development. The current platform codebase already includes CIE/business profiles, product records, unique identifiers, discovery flows, and an existing verification-state concept.

This public repository is specifically for the new Stellar verification layer proposed under the 30-day Instawards sprint. It does not represent the complete Expoxur® application codebase.

For technical integration context, see [Existing Expoxur® Integration Context](docs/existing-expoxur-integration.md).

## License

MIT License
