'use client';

import { useSDK } from '@metamask/sdk-react';
import { formatAddress } from '@/lib/utils';

export default function WalletConnect() {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn('Failed to connect:', err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {connected ? (
        <div className="glass-card p-6 w-full max-w-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Connected Wallet</p>
              <p className="text-lg font-medium text-gray-200">
                {formatAddress(account)}
              </p>
            </div>
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
          </div>
          <button
            onClick={disconnect}
            className="modern-button w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          disabled={connecting}
          className="modern-button w-full"
        >
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
} 