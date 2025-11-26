// Данные новостей
const newsData = {
    '1': {
        date: 'March 6, 2025',
        title: 'Seismic Raises $7M',
        text: `
            <p>Seismic will use the money to build a fully encrypted Layer-1 blockchain, where encryption lives at the base protocol level, not just at wallet or application level.

The goal: solve what the team calls “forced transparency” in existing blockchains such as Ethereum and Solana. In these networks, all smart contract data is public, which limits financial privacy products and institutional adoption.Purpose of the funding

Seismic will use the money to build a fully encrypted Layer-1 blockchain, where encryption lives at the base protocol level, not just at wallet or application level.

The goal: solve what the team calls “forced transparency” in existing blockchains such as Ethereum and Solana. In these networks, all smart contract data is public, which limits financial privacy products and institutional adoption.</p>
        `
    },
    '2': {
        date: 'March 27, 2025',
        title: 'Developer Testnet Launch',
        text: `
            <p>The testnet (devnet) is live and developers are already able to deploy and interact with encrypted smart contracts</p>
            
            <p>There is also a public testnet phase planned (or underway). In an AMA (April 25, 2025) the team said: “Testnet has 2 phases – the public and developers' testnet. We are working on the public testnet right now</p>
            
            <p>A block explorer for the devnet is available (e.g., “explorer-2.seismicdev.net”)</p>
            
            <p>So in short:

Seismic’s developer testnet is already live (as of March 27, 2025).

The project is advancing into a public testnet phase and preparing for mainnet launch.

Developers and early users can interact with it; it’s not just a promise, the network is accessible.</p>
        `
    },
    '3': {
        date: 'March 26, 2025',
        title: 'Mastering Seismic DevNet: A Complete Guide for Encrypted Smart Contract Deployment',
        text: `
            <p>Here we will describe commands on how to deploy a smart contract, Devnet Seismic. The commands will go in order, just paste them into the console. Also, for deployment, you will need at least 8 RAM on the server.
Also, to get started, visit the project's official faucet and get test ETH tokens on the Devnet Seismic network.
Link: https://faucet-2.seismicdev.net/</p>
            
            
        `
    },
    '4': {
        date: 'April 7, 2025',
        title: 'Seismic Testnet Faucet Goes Live',
        text: `
            <p>On April 7, 2025, Seismic opened a testnet faucet, allowing participants to claim free test tokens for its developer network. The faucet is a key part of Seismic’s community engagement strategy: by providing testnet ETH, the team encourages early users to experiment with deploying contracts, interacting with encrypted DeFi primitives, and generally getting hands-on with the protocol.

Users can claim tokens via the faucet (at https://faucet-2.seismicdev.net/) and then deploy smart contracts through Seismic’s contract portal (https://contracts.mintair.xyz/). According to reports, this faucet helps bootstrap activity on the devnet and is part of Seismic’s incentives for early contributors — including a potential airdrop down the line. 
testnet.blog
+2
Crypto Life
+2

The launch of the faucet not only lowers the barrier to entry for developers but also strengthens Seismic’s ecosystem by promoting regular interaction, testing, and feedback loops as the project matures.</p>
            
            
        `
    },
    '5': {
        date: 'February 18, 2025',
        title: 'Seismic Introduces Its Mission to Solve “Forced Transparency” in Layer-1 Blockchains',
        text: `
            <p>The network encrypts three core components:

1) Encrypted Global State

All global blockchain state can be kept private, enabling confidential DeFi applications, auctions, and tokenized operations.

2) Encrypted Memory Access

The blockchain safely stores and manipulates private data in memory, enabling secure logic for financial contracts, stablecoins, or business-critical applications.

3) Encrypted Data Flow

Seismic controls how encrypted and public data interact, making it possible to share information selectively between parties or apps.

🏗 Architecture Powered by Secure Hardware

Seismic’s design relies on secure hardware execution, which allows encrypted computation on-chain without revealing underlying data.

The system splits memory and state into:

transparent sections

encrypted sections

…while enforcing data-flow rules between them during every state replication.

This enables encrypted protocols, not just encrypted wallets.</p>
            
           
        `
    },
    '6': {
        date: 'November 12, 2025',
        title: 'Seismic Raises Additional $10M',
        text: `
            <p>On November 12, 2025, Seismic announced a second funding round of $10 million, once again led by a16z Crypto.</p>
            
            <p>Key participants in this round included Polychain Capital, dao5, Amber Group, TrueBridge Capital, and LayerZero Labs. This brings Seismic’s total funding to $17 million, when combined with its earlier seed round.</p>
            
            <p>According to Seismic’s statement, the newly raised capital will be used to deepen their privacy-infrastructure efforts. The team plans to expand the blockchain to serve fintech companies that require confidential transaction processing, enabling them to handle client data without exposing it publicly.</p>
            
            <p>Looking ahead, Seismic expects to begin monetizing in early 2026 through transaction fees, while also working to build fiat on-ramps and payment cards — paving the way for real-world, privacy-first financial use cases.</p>
        `
    },
    '7': {
        date: 'November 14, 2025',
        title: 'Seismic aims to “break the privacy barrier” that prevents fintech companies from using public blockchains for sensitive services — such as private lending and cash accounts.',
        text: `
            <p>According to the founder Lyron Co Ting Keh, public blockchains are “too transparent”: user data (balances, transactions) can be exposed, creating a major obstacle for businesses that require confidentiality.</p>
            
            
        `
    },
    
};

// Анимация при скролле
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Наблюдаем за статьями
document.querySelectorAll('.article-item').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Модальное окно
const modal = document.getElementById('newsModal');
const modalDate = document.getElementById('modalDate');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Открытие модального окна
document.querySelectorAll('.article-item').forEach(item => {
    item.addEventListener('click', () => {
        const newsId = item.getAttribute('data-news');
        const news = newsData[newsId];
        
        modalDate.textContent = news.date;
        modalTitle.textContent = news.title;
        modalText.innerHTML = news.text;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Закрытие модального окна
const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
