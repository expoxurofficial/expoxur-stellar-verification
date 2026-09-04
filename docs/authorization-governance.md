# Authorization & Governance Model

## Expoxur® Stellar Verification

**Status:** Pre-development / Instawards Proposal  
**Network:** Stellar Testnet

## Purpose

This document defines the planned authorization and governance model for the Expoxur® Stellar Verification proof of concept.

The objective is to ensure that verification records cannot be created or modified by arbitrary users.

## Verification Authority

Expoxur® remains responsible for the underlying vetting process for participating City Impact Enterprises (CIEs) and products.

For the proof of concept, an authorized Expoxur® verifier or account will control registry actions that change verification state.

## Planned Authorized Actions

An authorized Expoxur® verifier is expected to be able to:

### CIE Records

- create a CIE verification record
- retrieve a CIE verification record
- update the current verification status
- suspend a verification
- revoke a verification

### Product Records

An authorized Expoxur® account is expected to be able to:

- register a product under a verified CIE
- establish the CIE-to-product relationship
- retrieve the relationship
- manage the relevant association/status as defined by the final contract

## Unauthorized Users

Public users will not be permitted to create, modify, suspend, or revoke verification records.

Public access is intended to be read-only through the Scan & Verify experience and/or corresponding Stellar Testnet evidence.

## Verification Lifecycle

The proof of concept will demonstrate defined verification states.

Planned states include:

`VERIFIED`

The CIE currently holds an active Expoxur® verification status in the proof-of-concept registry.

`SUSPENDED`

The verification is temporarily inactive or under review.

`REVOKED`

The verification is no longer active and has been revoked by an authorized Expoxur® verifier.

The final contract implementation may use equivalent machine-readable representations while preserving these meanings.

## Status Transitions

The proof of concept will demonstrate at least one status transition.

Example:

VERIFIED
    ↓
SUSPENDED
    ↓
REVOKED

The final implementation will document which transitions are permitted and which authorized account can initiate them.

## CIE-to-Product Relationship

A product registry record must be associated with a CIE according to the authorization rules implemented by the contract.

The proof of concept is intended to demonstrate:

CIE
→ Registered Product
→ Current Relationship/Status
→ Stellar Testnet Evidence

The existence of a Stellar registry entry proves that the authorized registry recorded the relationship.

It does not independently prove claims made by the CIE about the product.

## Public Verification

Anyone may inspect the public verification result.

Public verification is intended to answer:

- What CIE or product is being referenced?
- What is its current verification status?
- Who registered the record?
- When was the status last updated?
- What Stellar Testnet evidence corresponds to the record?

Public users do not require permission to inspect verification results.

## Governance Boundary

This proof of concept does not attempt to create decentralized governance for Expoxur®.

Expoxur® remains the authority responsible for its CIE vetting standards and verification decisions.

Stellar provides the tamper-evident technical registry and independently checkable evidence of the actions recorded by the authorized verifier.

## Future Considerations

Production governance, multi-party authorization, key rotation, recovery procedures, administrative controls, and Mainnet deployment are outside the current Instawards scope and may be evaluated separately after the proof of concept.

## Development Status

The authorization rules described here represent the planned governance model.

Exact contract-level authorization mechanisms will be finalized, implemented, tested, and documented during the approved 30-day technical sprint.
