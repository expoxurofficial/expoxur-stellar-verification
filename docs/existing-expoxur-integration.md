# Existing Expoxur® Integration Context

## Current Platform

Expoxur® already has an existing application codebase under active private development.

The current MVP includes:

- CIE / enterprise profiles
- unique enterprise identifiers
- product records with unique product identifiers
- city-based discovery
- business profile routes
- an existing verification-state concept
- registration and dashboard flows

The private production/MVP repository is intentionally not made public because it contains proprietary application code, business data, and platform assets.

## Stellar Integration Boundary

The public `expoxur-stellar-verification` repository contains only the open-source Stellar integration developed for the verification proof of concept.

The proposed integration uses the existing Expoxur® application model as its off-chain source of truth.

Conceptually:

Existing Expoxur® CIE record
        ↓
privacy-minimized identifier + record hash
        ↓
Soroban Verification Registry
        ↓
Stellar Testnet verification status

Existing Expoxur® product record
        ↓
privacy-minimized product identifier + hash
        ↓
CIE-to-Product Registry
        ↓
Stellar Testnet relationship evidence

## Existing Data Model Alignment

The current Expoxur® MVP already distinguishes:

- enterprise/CIE identifiers
- product identifiers
- enterprise profile information
- product records
- verification state

The Stellar proof of concept does not replace this application model.

Instead, it adds a portable, independently checkable registry layer for selected verification state and CIE-to-product relationships.

## Public vs Private Repositories

### Private Expoxur® Application

Contains:

- existing application source code
- UI and business profile implementation
- platform data models
- merchant/CIE data
- proprietary application components

### Public Stellar Verification Repository

Will contain:

- Soroban smart contract source code
- Stellar integration code
- contract and integration tests
- privacy and authorization documentation
- Testnet deployment evidence
- QR Scan & Verify implementation
- reproducible technical instructions

This separation keeps sensitive and proprietary Expoxur® application data private while making the Stellar integration openly reviewable.

## Development Status

The Expoxur® application predates this Instawards proposal.

The Stellar verification layer is new technical work proposed for the 30-day Instawards sprint.
