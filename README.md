This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## build docker image

```bash
docker build -t next-social .
```

## kubernetes

```bash
kubectl apply -f deployment.yaml
minikube ip
http://<minikube-ip>:30001
```
