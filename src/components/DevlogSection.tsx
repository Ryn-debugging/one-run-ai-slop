import React, { useState } from 'react';
import { BookOpen, Terminal } from 'lucide-react';
import { type DevlogPost } from '../utils/portfolioLogic';

interface DevlogSectionProps {
  posts: DevlogPost[];
}

export const DevlogSection: React.FC<DevlogSectionProps> = ({ posts }) => {
  const [activePostId, setActivePostId] = useState<string>(posts[0]?.id ?? '');

  const activePost = posts.find((p) => p.id === activePostId) ?? posts[0];

  if (!activePost) return null;

  return (
    <section
      id="devlog"
      className="py-16 md:py-24 border-b border-slate-800/80 astral-ambient-glow"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#6EE7B7] tracking-wide mb-2">
              04. TECHNICAL NOTES · IMPLEMENTATION LOGS
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Development Notes &amp; Implementation Guides
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-[46ch] leading-relaxed">
            Practical notes on structuring Ren&apos;Py Screen Language UI, writing
            conflict-free RPG Maker MZ plugin aliases, and optimizing 2D assets.
          </p>
        </div>

        {/* 12-Column Split: Left 5 Cols Devlog Selector List, Right 7 Cols Active Article Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Article Cards */}
          <div className="lg:col-span-5 space-y-4">
            {posts.map((post) => {
              const isSelected = post.id === activePost.id;
              const isPink = post.accent === 'pink';
              return (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActivePostId(post.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-150 border cursor-pointer block ${
                    isSelected
                      ? isPink
                        ? 'bg-[#171C36] border-[#F472B6]'
                        : 'bg-[#171C36] border-[#6EE7B7]'
                      : 'bg-[#12162A] border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                    <span
                      className={
                        isPink
                          ? 'text-[#F472B6] font-semibold'
                          : 'text-[#6EE7B7] font-semibold'
                      }
                    >
                      {post.engineTag}
                    </span>
                    <span className="text-slate-400 tabular-nums">
                      {post.date} · {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-100 mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {post.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Devlog Reader */}
          <article className="lg:col-span-7 rounded-2xl p-6 sm:p-8 vn-textbox-surface">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 pb-4 mb-5 border-b border-slate-800">
              <span className="flex items-center gap-2 text-[#F472B6]">
                <BookOpen className="w-4 h-4" />
                <span>{activePost.engineTag}</span>
              </span>
              <span>
                {activePost.date} · {activePost.readTime}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-50 mb-4 leading-tight">
              {activePost.title}
            </h3>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              {activePost.articleBody.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Key Engineering Takeaways */}
            <div className="p-4 rounded-xl bg-[#0B0D19]/85 border border-slate-800 mb-6">
              <div className="text-xs font-mono text-[#6EE7B7] uppercase tracking-wider mb-2.5">
                Implementation Checklist
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activePost.keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#6EE7B7] font-mono">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Excerpt */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080A14]">
              <div className="px-4 py-2 bg-[#101426] border-b border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-[#6EE7B7]" />
                <span>Code Example</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{activePost.codeSnippet}</code>
              </pre>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
