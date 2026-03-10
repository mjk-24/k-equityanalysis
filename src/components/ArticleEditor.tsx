import React, { useState } from 'react';
import { PenLine, Image as ImageIcon, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ArticleEditor: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [ticker, setTicker] = useState('');
  const [content, setContent] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <PenLine size={18} className="text-indigo-600" />
                <h2 className="font-bold text-zinc-900">New Analysis Article</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X size={20} className="text-zinc-400" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Article Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Samsung Electronics Q1 Outlook"
                    className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Ticker Symbol</label>
                  <input 
                    type="text" 
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    placeholder="e.g. KRX:005930"
                    className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Analysis Content</label>
                <textarea 
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your detailed equity analysis here..."
                  className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                  <ImageIcon size={18} />
                  Add Cover Image
                </button>
                <div className="flex gap-3">
                  <button onClick={onClose} className="px-6 py-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
                    Cancel
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 bg-zinc-900 text-white text-sm font-bold rounded-xl hover:bg-zinc-800 transition-colors">
                    <Send size={16} />
                    Publish Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
