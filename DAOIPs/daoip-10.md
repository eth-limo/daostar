---
daoip: 10
title: Tax Reporting
description: 
author: Joni Pirovich (<joni@ccocounsel.com>), Joshua Tan (@thelastjosh), Dion Seymour (<dion.seymour@uk.andersen.com>)
discussions-to: https://github.com/metagov/daostar/discussions/272
status: Draft
type: 
category: 
created: 2024-11-29
---
## Simple summary
A data standard for the presentation of DAO tax information to the public and protocol users.
## Motivation
The goal of this specification is to define a data standard that DAOs can adopt to collate on-chain information and make it publicly available in a form that assists tax administrations in assessing the tax risks associated with DAOs and that assists users to manage their tax obligations from DAO and protocol interactions.

Tax administrations around the world care about assessing tax risk, whereas users need to calculate their taxes. Users therefore need more detailed data than tax administrations do. This standard thus makes a distinction between the data fields presented for tax administrations versus users. 

The specification has been modelled from the crypto “transfer types” used by the OECD in their Crypto-Asset Reporting Framework XML schema with some modifications for the idiosyncrasies around DAOs. For reference the transfer types specified in the OECD CARF XML schema are: staking, crypto loan, wrapping, collateral, airdrop, staking income, mining income, transfer from another reporting crypto asset service provider, sale of goods or services, other and unknown.

Filling out the data in this specification is roughly equivalent to the content of a report produced by a crypto-asset service provider under the OECD’s CARF, or a dividend statement from a company, or a distribution statement from a trust that sets out the raw information necessary for tax compliance by an investor.
## Specification
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

To comply with this specification you MUST publish a daoURI or entityURI following the EIP-4824 / DAOIP-2 DAO JSON LD Schema and add a field called “taxURI”. This URI MAY point anywhere, e.g. to a markdown file with information, an excel file or webpage.

```json
{
    "@context": "https://www.daostar.org/schemas",
    "type": "DAO",
    "name": "<name of the DAO>",
    "description": "<description>",
    "taxURI": "<URI>"
}
```

This standard requires DAOs to present tax information via their taxURI in a standardized form. The structure of data to be presented at the taxURI is intended to be roughly equivalent to the structure of a report produced by a reporting crypto-asset service provider under the OECD’s CARF, or a dividend statement from a company, or a distribution statement from a trust that sets out the raw information necessary for tax compliance by an investor.

You MAY point taxURI back to the daoURI address, which would indicate that all data published through daoURI constitutes DAO-approved communication in respect of this standard.

Third parties MAY present tax information in respect of a DAO or DAOs using this standard but if the information is not presented by a DAO through a DAO’s taxURI or daoURI then the information does not constitute a DAO-approved communication. 

The tax data should include the fields as set out below in a flatfile.
### Presentation header
- PresentingDAOIN: A field that identifies the daoURI which is the identification number of the DAO presenting the tax data about crypto transfers in and out of the DAO and the protocol/s it governs
- Warning: A field that allows input of specific cautionary instructions about the use of data presented
- Contact: A field allowing input of specific contact information relating to the DAO, or third party engaged or in receipt of grant funding by the DAO, to prepare and present the data
- PresentationID: A field for a unique identifier created by the DAO that identifies the particular data presented
- PresentationType: A field that specifies the type of data presented, i.e. whether new data (Type 1), or if corrected data (Type 2), or if deleted data (Type 3)
- PresentationPeriod: A field that identifies the last day of the presentation period (e.g. a tax year or other period) to which the data presented relates in yyyy-MM-DD format
- Timestamp: A field that identifies the date and time when the data was compiled in yyy-MM-DD’T’hh:mm:ss.nnn format.

### Data for tax administrations
- CountryNumber: A field that specifies the number of countries from which on-chain activity with the DAO or any protocol/s it governs originates
- CountryList: A field allowing input of all countries identified from which on-chain activity with the DAO or any protocol/s it governs originates using the 2-character alphabetic country code and country name list based on the ISO 3166-1 Alpha 2 standard
- TypeofSupply: A field allowing input of the type of supply of crypto-tokens native to the DAO
- DAOTotalSupply(crypto-tokens): A field that specifies the total supply of crypto-tokens native to the DAO, circulating and non-circulating at the end of the presentation period
- DAOCirculatingSupply(crypto-tokens): A field that specifies the total circulating supply of crypto-tokens native to the DAO at the end of the presentation period
- DAOStakingTransfersIn(crypto-tokens): A field that specifies the number of crypto-token units transferred into the protocol/s governed by the DAO in the format NN-TICKER (e.g. 100-ETH)
- DAOStakingTransfersOut(crypto-tokens): A field that specifies the number of crypto-token units transferred out of the protocol/s governed by the DAO in the format NN-TICKER (e.g. 100-ETH)
- DAOStakingRewardsPaid(crypto-tokens): A field that specifies the number of crypto-token units transferred as rewards to persons that have staked crypto-tokens in the format NN-TICKER (e.g. 10-ETH)
- DAOStakingRewardsUnpaid(crypto-tokens): A field that specifies the number of crypto-token units reserved for transfer as staking rewards but yet unpaid in the format NN-TICKER (e.g. 1-ETH)
- DAOCryptoLoanOut(crypto-tokens): A field that specifies the number of crypto-token units transferred from the protocol to borrowers in the format NN-TICKER (e.g. 100-DAI)
- DAOCryptoLoanIn(crypto-tokens): A field that specifies the number of crypto-token units transferred as repayments to the protocol from borrowers in the format NN-TICKER (e.g. 100-DAI)
- DAOCryptoLoanInterest(crypto-tokens): A field that specifies the number of crypto-token units transferred as interest or interest-like payments to the protocol from borrowers in the format NN-TICKER (e.g. 10-DAI)
- DAOWrappingIn(crypto-tokens): A field that specifies the number of crypto-token units transferred to a wrapping protocol used in a DAO-governed protocol in the format NN-TICKER (e.g. 100-ETH)
- DAOWrappingOut(crypto-tokens): A field that specifies the number of crypto-token units transferred from a wrapping protocol used in a DAO-governed protocol in the format NN-TICKER (e.g. 100-ETH)
- DAOCryptoLoanCollateralIn(crypto-tokens): A field that specifies the number of crypto-token units transferred as collateral to a protocol in the format NN-TICKER (e.g. 300-WETH)
- DAOCryptoLoanCollateralOut(crypto-tokens): A field that specifies the number of crypto-token units that were held by a protocol as collateral and that are transferred from the protocol to the users in the format NN-TICKER (e.g. 300-WETH)
- DAOAirdropPaid(crypto-tokens): A field that specifies the number of crypto-token units transferred as a free distribution to persons that may or may not have interacted with the DAO or its protocol/s, in the format NN-TICKER (e.g. 1,000-UNI)
- DAOTransfertoFiat(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury for the purpose of conversion to fiat currency
- DAOTransferfromFiat(crypto-tokens): A field that specifies the number of crypto-token units transferred into a DAO’s on-chain treasury in the format NN-TICKER (e.g. 100-ETH)
- DAOReceipts(crypto-tokens): A field that specifies the number of crypto-tokens transferred into a DAO’s on-chain treasury or the protocols it governs as other receipts in the format NN-TICKER (e.g. 100-ETH)
- DAOSpend(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury or the protocols it governs to third party suppliers in the format NN-TICKER (e.g. 100-ETH)
- DAOGrantPayment(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury to a third party grant recipient in the format NN-TICKER (e.g. 100-ETH)
- DAORevenueIn(crypto-tokens): A field that specifies the number of crypto-token units received by a DAO’s on-chain treasury or the protocol/s it governs as revenue in the format NN-TICKER (e.g. 100-ETH)
- DAORevenueOut(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury or the protocol/s it governs as revenue distributions in the format NN-TICKER (e.g. 100-ETH)

### Data for users
Each data field should be populated per on-chain address. 

- UserStakingTransfersIn(crypto-tokens): A field that specifies the number of crypto-token units transferred into the staking protocol governed by the DAO in the format NN-TICKER (e.g. 1-ETH)
- UserStakingTransfersOut(crypto-tokens): A field that specifies the number of crypto-token units transferred out of the staking protocol governed by the DAO in the format NN-TICKER (e.g. 1-ETH)
- UserStakingRewardsPaid(crypto-tokens): A field that specifies the number of crypto-token units transferred as rewards to the user that has staked crypto-tokens in the format NN-TICKER (e.g. 1-ETH)
- UserStakingRewardsUnpaid(crypto-tokens): A field that specifies the number of crypto-token units accrued as staking rewards but yet unpaid to the user in the format NN-TICKER (e.g. 1-ETH)
- UserCryptoLoanOut(crypto-tokens): A field that specifies the number of crypto-token units transferred from the protocol to the borrower in the format NN-TICKER (e.g. 100-DAI)
- UserCryptoLoanIn(crypto-tokens): A field that specifies the number of crypto-token units transferred as repayments to the protocol from a borrower in the format NN-TICKER (e.g. 100-DAI)
- UserCryptoLoanInterest(crypto-tokens): A field that specifies the number of crypto-token units transferred as interest or interest-like payments to the protocol from a borrower in the format NN-TICKER (e.g. 10-DAI)
- UserWrappingIn(crypto-tokens): A field that specifies the number of crypto-token units transferred from a user to a wrapping protocol used in a DAO-governed protocol in the format NN-TICKER (e.g. 100-ETH)
- UserWrappingOut(crypto-tokens): A field that specifies the number of crypto-token units transferred from a wrapping protocol used in a DAO-governed protocol to the user in the format NN-TICKER (e.g. 100-ETH)
- UserCryptoLoanCollateralIn(crypto-tokens): A field that specifies the number of crypto-token units transferred as collateral by a user to a protocol in the format NN-TICKER (e.g. 300-WETH)
- UserCryptoLoanCollateralOut(crypto-tokens): A field that specifies the number of crypto-token units that were held by a protocol as collateral and that are transferred from the protocol to the user in the format NN-TICKER (e.g. 300-WETH)
- UserAirdropPaid(crypto-tokens): A field that specifies the number of crypto-token units transferred to a person as a free distribution, in the format NN-TICKER (e.g. 1,000-UNI)
- UserGrantPayment(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury to a third party grant recipient user
- UserDAORevenueOut(crypto-tokens): A field that specifies the number of crypto-token units transferred out of a DAO’s on-chain treasury or the protocol/s it governs as revenue distributions to a user

Note 1: DAO’s that actively manage their Treasury should consider additional data fields particular to the treasury management activities. 

Note 2: It is assumed that DAOs have not adopted a tax position as to interest, dividend or other applicable withholding taxes. The absence of data fields in this standard for withholding tax or other taxes is not to be relied upon as advice or any indication that withholding or other taxes are not required to be collected and paid by the DAO or its participants. Each DAO and person involved in a DAO is responsible for seeking their own independent legal and tax advice, and may include additional such fields or other fields as necessary and appropriate. 

Note 3: DAOs and persons involved in DAOs are responsible for determining the relevant data required to be collected, the relevant tax administrations to report and pay taxes to, and the relevant format and times at which to provide relevant data to users and participants. 

Note 4: Guidance and commentary regarding each of the data fields, and further or different data fields, is intended to be developed through the feedback process.

## Rationale
OECD member countries have started implementing CARF into their domestic legal frameworks, with most becoming effective from 2026. DAOs have been consumed with regulatory questions, but as these questions begin to be resolved through court cases, tax issues are returning to the fore.

There continues to be a question for interpretation about whether a DAO is a reporting crypto-asset service provider. However, in preparation for CARF switching on in various jurisdictions, every DAO should understand whether CARF applies to them, in what jurisdictions, whether it aligns with what the DAO can present, and what alternatives may be better suited for a DAO and its community to ensure tax reporting and tax compliance.

Eventually, block explorers such as Etherscan and platforms such as Dune Analytics may be able to present this information automatically from on-chain transactions. Given the fact that most tax-relevant data for DAOs is or could be on-chain, we hope that either a future version of this specification or a follow-up to it will address ways of standardizing on-chain transactions.
## Copyright
Copyright and related rights waived via [CCO](https://eips.ethereum.org/LICENSE).
