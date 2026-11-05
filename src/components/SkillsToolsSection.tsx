import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { type SkillToolItem } from '../utils/portfolioLogic';

interface SkillsToolsSectionProps {
  skills: SkillToolItem[];
}

export const SkillsToolsSection: React.FC<SkillsToolsSectionProps> = ({
  skills,
}) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeSkill =
    skills.find((s) => s.id === selectedSkillId) ?? skills[0];

  const handleCopySnippet = async (skill: SkillToolItem) => {
    try {
      await navigator.clipboard.writeText(skill.codeSnippet);
      setCopiedId(skill.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(skill.id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-slate-800/80"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#F472B6] tracking-wide mb-2">
              03. SKILLS, TOOLS &amp; CODE SAMPLES
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Engines, Scripting &amp; Asset Pipeline
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-[48ch] leading-relaxed">
            Select any card below to inspect code samples in the live viewer—including
            Ren&apos;Py Screen Language, Python data classes, and RPG Maker MZ
            JavaScript plugins.
          </p>
        </div>

        {/* Live Code Inspector Bar at Top of Technical Section for Immediate Visibility */}
        <div className="rounded-2xl overflow-hidden rpg-window-surface mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 bg-[#0B0D19]/95 border-b border-slate-800">
            <div className="flex items-center gap-3 text-xs font-mono">
              <Code2
                className={`w-4 h-4 ${
                  activeSkill.accent === 'pink'
                    ? 'text-[#F472B6]'
                    : 'text-[#6EE7B7]'
                }`}
              />
              <span className="font-semibold text-slate-100">
                {activeSkill.name}
              </span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span className="text-slate-400">
                {activeSkill.codeSnippetTitle}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
                lang: {activeSkill.codeLanguage}
              </span>
              <button
                type="button"
                onClick={() => handleCopySnippet(activeSkill)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-200 bg-[#161B33] hover:bg-[#1F2647] border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedId === activeSkill.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#6EE7B7]" />
                    <span className="text-[#6EE7B7]">Copied Code</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <pre className="p-6 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed bg-[#080A14]">
            <code>{activeSkill.codeSnippet}</code>
          </pre>
        </div>

        {/* 6-Card Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const isSelected = skill.id === activeSkill.id;
            const isPink = skill.accent === 'pink';

            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => setSelectedSkillId(skill.id)}
                aria-pressed={isSelected}
                className={`text-left rounded-2xl p-6 transition-all duration-150 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? isPink
                      ? 'bg-[#171C36] border-[#F472B6]'
                      : 'bg-[#171C36] border-[#6EE7B7]'
                    : 'bg-[#12162A] border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono mb-3">
                    <span
                      className={
                        isPink ? 'text-[#F472B6]' : 'text-[#6EE7B7]'
                      }
                    >
                      {skill.category}
                    </span>
                    <span className="text-slate-400">
                      {skill.experienceYears}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-50 mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.summary}
                  </p>
                </div>

                <div className="w-full pt-3.5 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {skill.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className={
                            isPink ? 'text-[#F472B6]' : 'text-[#6EE7B7]'
                          }
                        >
                          ▸
                        </span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 truncate">
                      {skill.codeSnippetTitle}
                    </span>
                    <span
                      className={`font-semibold whitespace-nowrap shrink-0 ${
                        isSelected
                          ? isPink
                            ? 'text-[#F472B6]'
                            : 'text-[#6EE7B7]'
                          : 'text-slate-400'
                      }`}
                    >
                      {isSelected ? 'Active Snippet ▴' : 'Load Snippet ▸'}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
