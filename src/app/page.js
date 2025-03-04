import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="mt-20">
        <h1 className="hero-title">Solythra</h1>
        <p className="hero-subtitle">The Forgotten Awakens.</p>
        <p className="hero-description">
          Will you awaken Solythra, or be left behind?
        </p>
      </div>

      {/* Mint Section (Lower Right) */}
      <div className="mint-section">
        <Link href="https://manifold.gallery/solythra" className="mint-button">
          Mint Your Solythra NFT
        </Link>
        <div className="mt-4">
          <Link href="https://x.com/Solythra" className="text-blue-400 hover:underline mx-2">
            X 
          </Link>
          <Link href="https://discord.gg/99TtTHyFeT" className="text-blue-400 hover:underline mx-2">
            Discord 
          </Link>
          <Link href="https://t.me/Solythra" className="text-blue-400 hover:underline mx-2">
            Telegram 
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
