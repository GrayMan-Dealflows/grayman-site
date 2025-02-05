import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Head>
        <title>GrayMan Dealflows</title>
      </Head>
      <img 
        src="https://drive.google.com/uc?export=view&id=1Fp38ruCmk0QpHBrFUKlcbopERTE5Vo4C" 
        alt="GrayMan Logo"
        className="w-40 mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">GrayMan Dealflows</h1>
      <p className="text-lg mb-6">Helping Builders Become Founders & Founders Stay Founders</p>
      <div className="flex gap-4">
        <a href="#projects" className="px-4 py-2 bg-gray-700 rounded">Projects</a>
        <a href="#investors" className="px-4 py-2 bg-gray-700 rounded">VCs (Investors)</a>
        <a href="#launchpads" className="px-4 py-2 bg-gray-700 rounded">Launchpads</a>
      </div>
      <footer className="mt-10 text-sm text-gray-400">
        <p>Contact: <a href="mailto:admin@graymandealflows.org">admin@graymandealflows.org</a></p>
      </footer>
    </div>
  );
}
