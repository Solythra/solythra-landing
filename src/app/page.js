export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
      <img src="/solythra-logo.png" alt="Solythra Logo" className="w-40 h-auto mt-6" />
      <h1 className="text-4xl md:text-6xl font-bold">🚀 Solythra Has Awakened</h1>
      <p className="mt-4 text-lg md:text-xl opacity-80">
        The AI-Powered DeFi & NFT Ecosystem
      </p>
      <a 
        href="https://manifold.gallery/solythra"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
      >
        Mint Your Solythra NFT
      </a>
      
      <div className="mt-6 flex space-x-4">
        <a href="https://twitter.com/Solythra" className="text-blue-400 hover:underline">Twitter</a>
        <a href="https://discord.gg/solythra" className="text-blue-400 hover:underline">Discord</a>
        <a href="https://github.com/Solythra" className="text-blue-400 hover:underline">GitHub</a>
      </div>

      <footer className="absolute bottom-4 text-sm opacity-60">
        &copy; {new Date().getFullYear()} Solythra. All Rights Reserved.
      </footer>
    </div>
  );
}
