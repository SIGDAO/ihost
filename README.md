<p align="center">
    <a href='https://app.sigdao.io/' rel='nofollow'>
        <img src='./public/assets/logo.png' alt='NFTHost Logo' width='125px'/>
    </a>
</p>

<h1 align="center">iHost</h1>

<p align="center">
    <img src='https://github.com/sigdao/ihost/actions/workflows/docker-deployment.yml/badge.svg' alt='Docker Deployment'>
    <a href="https://discord.gg/BMZZXZMnmv" rel="nofollow">
        <img src='https://img.shields.io/discord/925910496354381854.svg?color=7289da&label=discord&logo=discord&style=flat' alt='NFTHost Discord' />
    </a>
</p>

<p align="center">
    Create and Host your Web3 dApp in under a minute!. This repository is iHost's frontend.
</p>

## Services

<ul>
    <li><a href='https://www.sigdao.io/dashboard/generator' rel="nofollow">NFT Collection Generator</a></li>
    <li><a href='https://www.sigdao.io/dashboard/website' rel="nofollow">NFT Mint Website Hosting</a></li>
</ul>

## Setup

<ul>
    <li><a href='https://hub.docker.com/repository/docker/sigdao/ihost' rel="nofollow">DockerHub: Frontend</a></li>
    <li><a href='https://hub.docker.com/repository/docker/sigdao/ihost-backend' rel="nofollow">DockerHub: Backend</a></li>
</ul>

Running with Docker Hub:

```
Client:
docker pull sigdao/ihost:main
docker container run --name client -p 3000:3000 sigdao/ihost:main

Server:
docker pull sigdao/ihost-backend:main
docker container run --name server -p 8080:8080 sigdao/ihost-backend:main
```

Running with Terminal:

```
npm run dev
```

## Technologies

![Technologies](https://skillicons.dev/icons?i=nodejs,express,nextjs,vercel,mongodb,docker,sass,git&theme=light)

Other: [Chakra UI](https://chakra-ui.com/), [Stripe](https://stripe.com/en-ca), [PostHog](https://posthog.com/), [GrapesJS](https://grapesjs.com/), [Web3](https://web3js.readthedocs.io/en/v1.7.5/), [Chart.js](https://www.chartjs.org/), [Ethers](https://docs.ethers.io/v5/), [JSZip](https://stuk.github.io/jszip/)

## Support

If you need help with anything please contact us on [Discord]()

Want to donate? []()

## License

[MIT](https://github.com/sigdao/ihost/blob/main/LICENSE)
