# Technical Architecture

## Expoxur® Stellar Verification

**Status:** Pre-development / Instawards Proposal  
**Network:** Stellar Testnet  
**Scope:** 30-day proof of concept upon approval

## Purpose

The Expoxur® Stellar Verification proof of concept will create a portable verification layer for vetted City Impact Enterprises (CIEs) and their registered products.

Expoxur® remains responsible for the underlying real-world vetting process and detailed CIE and product information.

Stellar Testnet will provide a tamper-evident registry showing that an authorized Expoxur® verifier recorded a particular verification status and CIE-to-product relationship.

## High-Level Architecture

The planned verification flow is:

Expoxur® Off-Chain Records
        ↓
Authorized Expoxur® Verifier
        ↓
Soroban Verification Registry
(Stellar Testnet)
        ↓
CIE / Product Registry Record
        ↓
Durable Expoxur® Verification URL
        ↓
Unique QR Code
        ↓
Public Scan & Verify Page

## Components

### 1. Expoxur® Off-Chain Records

Detailed CIE and product information remains within Expoxur® and is not stored directly on Stellar.

This may include:

- business names
- profile information
- contact information
- verification documents
- detailed product information
- impact information
- customer information

### 2. Authorized Verification Layer

Only an authorized Expoxur® verifier or account will be permitted to create or manage verification records in the proof of concept.

The authorization model will be implemented and documented during the 30-day technical sprint.

### 3. Soroban Verification Registry

A minimal Soroban smart contract will be deployed on Stellar Testnet.

The registry is planned to support:

- creation of a CIE verification record
- retrieval of current CIE verification status
- verification status changes
- registration of products under a verified CIE
- retrieval of CIE-to-product relationships
- retrieval of current product association/status

The contract will intentionally remain minimal and will not implement marketplace, payment, token, NFT, escrow, or settlement functionality.

### 4. Verification Resolver

Expoxur® will provide a stable verification resolver that maps a durable verification URL to the corresponding verification record.

Example conceptual flow:

QR Code
→ Expoxur® Verification URL
→ Verification Resolver
→ Stellar Testnet Registry
→ Public Verification Result

Final URL structure and implementation details will be determined during development.

### 5. Public Scan & Verify Experience

Scanning a generated QR code will open a simple public verification page.

The page is intended to show:

- relevant CIE or product
- current verification status
- who registered the record
- when the status was last updated
- corresponding Stellar Testnet evidence

The user should not need a Stellar wallet or blockchain knowledge to use the verification experience.

## Trust Boundary

Expoxur® performs the underlying real-world evaluation and vetting of participating CIEs and products.

Stellar does not independently determine whether a CIE or product satisfies Expoxur® verification requirements.

Instead, Stellar provides independently checkable evidence that an authorized Expoxur® verifier recorded a particular status or relationship in the registry.

## Network

The Instawards proof of concept will operate exclusively on:

**Stellar Testnet**

Mainnet deployment is outside the scope of this 30-day project.

## Development Status

This document describes the planned architecture for the Instawards proof of concept.

Implementation details may evolve during the approved 30-day technical sprint while remaining within the agreed Statement of Work.
