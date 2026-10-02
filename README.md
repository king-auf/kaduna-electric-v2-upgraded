# ⚡ Kaduna Electric Token Vending System v2.0

A full-stack utility token vending platform with a premium landing page, secure purchase flow, and a strict credit/loan system for customers.

## Features

- Premium animated homepage
- Token purchase flow
- Enforced customer credit rules:
  - max outstanding credit: ₦20,000
  - max single credit issue: ₦5,000
  - no new token purchase while a credit balance remains
- Separate credit admin and ledger tracking
- Database-ready credit isolation for loan records

## Stack

- Frontend: React + Vite + Framer Motion
- Backend: Node.js + Express + Mongoose
- Database: MongoDB Atlas or local MongoDB

## Quick start

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev -- --host 0.0.0.0
```

## Credit rule summary

- Customer outstanding balance max: ₦20,000
- Single credit issue max: ₦5,000
- New token purchase blocked until the credit is repaid
- Credit admin controls approval and repayment recording
