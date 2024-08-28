# Project Setup and Deployment Guide

This guide provides instructions to set up and deploy your Hardhat development environment and run the ChaiClient application.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instructions

### 1. Start Hardhat Node

To start a local Ethereum node, run:

```bash
npx hardhat node
```
### 2. Add Your Wallet PrivateKey

```bash
PRIVATE_KEY=your_wallet_private_key_here
```

### 3. Deploy Smart Contracts

```bash
npx hardhat run scripts/deploy.js --network localhost
```
###  4. Run FrontEnd
```bash
cd client/ChaiClient
npm run dev
```
