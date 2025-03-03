import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="mt-20">
        <h1 className="hero-title">Solythra</h1>
        <p className="hero-subtitle">Awakening the Future.</p>
        <p className="hero-description">
          Solythra is an immersive AI-powered blockchain ecosystem built for governance, DeFi, and storytelling.
        </p>
      </div>

      {/* Roadmap (Lower Left) */}
      <div className="roadmap">
        <h2 className="text-xl font-bold">📜 Solythra Roadmap</h2>
        <p>🔥 Phase 1: Genesis NFT Sale – Now Live</p>
        <p>⚡ Phase 2: NFT Marketplace Expansion</p>
        <p>🚀 Phase 3: AI, DeFi, and Governance Evolution</p>
      </div>

      {/* Mint Section (Lower Right) */}
      <div className="mint-section">
        <Link href="https://manifold.gallery/solythra" className="mint-button">
          Mint Your Solythra NFT
        </Link>
        <div className="mt-4">
          <Link href="https://twitter.com/Solythra" className="text-blue-400 hover:underline mx-2">
            Twitter
          </Link>
          <Link href="https://discord.gg/Solythra" className="text-blue-400 hover:underline mx-2">
            Discord
          </Link>
          <Link href="https://github.com/Solythra" className="text-blue-400 hover:underline mx-2">
            GitHub
          </Link>
        </div>
      </div>

      {/* Footer (Bottom-Centered) */}
      <div className="footer">
        © 2025 Solythra. All Rights Reserved.
      </div>
    </div>
  );
}
