# AGU Token ($AGU)

**AGU** is an upgradeable, secure ERC20 token designed for the Base blockchain ecosystem.  
Built with OpenZeppelin's upgradeable contracts, AGU integrates minting controls, governance voting, flash mint capabilities, and owner-managed tokenomics to power innovative DeFi applications.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tokenomics](#tokenomics)  
- [Contract Architecture](#contract-architecture)  
- [Deployment](#deployment)  
- [Testing](#testing)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [Security](#security)  
- [Community & Support](#community--support)  
- [License](#license)  

---

## Project Overview

AGU is designed to be a foundational token within the Base ecosystem. Its upgradeable architecture allows seamless improvements and feature expansions without compromising security or user assets. This token supports decentralized governance, burnable supply, and flash mint functionality to enable diverse DeFi use cases.

---

## Features

- **Upgradeable Proxy Pattern** via OpenZeppelin Upgradeable contracts  
- **Mint Cap & Owner-only Minting** for controlled inflation  
- **Governance Voting** through `ERC20VotesUpgradeable`  
- **Token Burning** functionality for deflationary mechanisms  
- **Flash Mint** support for advanced DeFi operations  
- **Permit-based Approvals** for gasless transactions (EIP-2612)  
- **Secure Ownership Management** with `OwnableUpgradeable`  
- **Comprehensive Unit Testing** with Hardhat & Mocha  

---

## Tokenomics

| Parameter           | Value                  |
|---------------------|------------------------|
| Token Name          | AGU                    |
| Symbol              | $AGU                   |
| Initial Supply      | 10,000,000 $AGU        |
| Minting Cap         | Configurable (set in contract) |
| Decimals            | 18                     |
| Owner-controlled minting | Enabled            |

---

## Contract Architecture

- `AGUToken.sol`: Implements upgradeable ERC20 with extensions:
  - `ERC20BurnableUpgradeable`
  - `OwnableUpgradeable`
  - `ERC20PermitUpgradeable`
  - `ERC20VotesUpgradeable`
  - `ERC20FlashMintUpgradeable`

---

## Deployment

Deployment scripts are included in the `scripts/` directory, utilizing Hardhat for Base mainnet deployment.

### Prerequisites

- Node.js v16+
- Yarn or npm
- Hardhat installed globally or locally

### Deploy

```bash
npx hardhat run scripts/deploy.js --network base

Testing

Comprehensive tests are located in the test/ directory. Run tests with:

npx hardhat test

Usage

Interacting with the Contract
	•	Connect via Web3 or Ethers.js with ABI and contract address
	•	Minting restricted to owner
	•	Transfer, burn, and flash mint functionalities available

⸻

Contributing

Contributions, issues, and feature requests are welcome. Please follow Boomchainlab’s contribution guidelines.

⸻

Security

For security inquiries, contact: admin@boomchainlab.com or via Twitter @Agunnaya001.

Community & Support

Join our community channels for updates and support:
	•	Twitter: @Agunnaya001
	•	Telegram: t.me/BoomchainlabOfficial

⸻

License

This project is licensed under the MIT License. See the LICENSE file for details.

