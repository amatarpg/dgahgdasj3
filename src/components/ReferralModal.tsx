import React from 'react';
import { Copy, X } from 'lucide-react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const referralCode = "CIGAR-42069-VEGA"; // This would come from your actual referral system

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400 mb-4">
            Broadcast Invitation Signal
          </h3>
          
          <p className="text-sm font-mono text-gray-400 mb-6">
            Share your quantum signature to expand the collective consciousness. Each successful assimilation strengthens the network.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-900/30">
              <div className="text-xs font-mono text-gray-400 mb-2">YOUR REFERRAL CODE</div>
              <div className="flex items-center justify-between gap-3">
                <code className="text-lg font-mono text-cyan-400">{referralCode}</code>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:text-cyan-400 transition-colors"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono">
              <div className="bg-gray-800/30 rounded-lg p-3 border border-purple-900/30">
                <div className="text-gray-400 mb-1">REWARDS EARNED</div>
                <div className="text-lg font-orbitron text-purple-400">300</div>
                <div className="text-gray-500">$CIGAR</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-3 border border-purple-900/30">
                <div className="text-gray-400 mb-1">ALLIES RECRUITED</div>
                <div className="text-lg font-orbitron text-cyan-400">2</div>
                <div className="text-gray-500">OPERATIVES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;