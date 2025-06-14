'use client';

import { MetaMaskProvider } from '@metamask/sdk-react';
import WalletConnect from '@/components/WalletConnect';

export default function Home() {
  const host = typeof window !== 'undefined' ? window.location.host : 'defaultHost';

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: 'Web3 Wallet Connect',
      url: host,
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="glass-card p-8 max-w-2xl w-full space-y-8 animate-float">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold gradient-text">
            Web3 Wallet Connection
          </h1>
          <p className="text-gray-400 text-lg">
            Connect your wallet to get started with the future of web3
          </p>
        </div>
        
        <div className="flex justify-center">
          <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <WalletConnect />
          </MetaMaskProvider>
        </div>
      </div>
    </main>
  );
}
