# Privacy Model

## Expoxur® Stellar Verification

**Status:** Pre-development / Instawards Proposal  
**Network:** Stellar Testnet

## Principle

The Expoxur® Stellar Verification proof of concept follows a privacy-minimized approach.

Only the minimum information necessary to establish and verify registry status and relationships is intended to be recorded on Stellar Testnet.

Detailed CIE, product, customer, verification, and impact information will remain off-chain.

## Planned On-Chain Data

The proof of concept may use privacy-minimized information such as:

- opaque CIE identifiers
- opaque product identifiers
- cryptographic record hashes
- verification status
- CIE-to-product relationship references
- timestamps
- authorization-related references required by the contract

Exact contract fields will be finalized during implementation.

## Data That Must Remain Off-Chain

The following information is not intended to be stored directly on-chain:

- CIE or business names
- personal names
- email addresses
- phone numbers
- physical addresses
- verification documents
- government-issued identifiers
- customer information
- private merchant information
- sensitive product information
- detailed impact data
- payment information
- credentials
- private keys
- seed phrases
- authentication secrets

## Record Hashes

Cryptographic hashes may be used to create tamper-evident references to off-chain records.

A hash does not replace Expoxur®'s underlying verification process.

Its purpose is to help demonstrate whether a referenced record corresponds to the record represented when the registry entry was created or updated.

The implementation will avoid hashing sensitive information in a way that could make low-entropy or predictable private data discoverable through guessing attacks.

## Public Verification

The public Scan & Verify experience will expose only the information required to communicate verification status and corresponding Stellar Testnet evidence.

The detailed underlying verification documents will not be made public merely because a verification record exists on Stellar.

## Test Data

Development and testing should use synthetic, non-sensitive, or explicitly approved test information wherever possible.

Real customer information and confidential verification documents should not be committed to this public repository.

## Repository Security

The following must never be committed to this repository:

- private keys
- secret keys
- seed phrases
- `.env` files containing secrets
- production credentials
- private customer data
- confidential CIE verification documents

If credentials or secrets are accidentally exposed, they should be treated as compromised and rotated immediately.

## Scope

This privacy model applies to the 30-day Stellar Testnet proof of concept.

Production privacy, regulatory, compliance, and security requirements would require additional assessment beyond the scope of this Instaward.
