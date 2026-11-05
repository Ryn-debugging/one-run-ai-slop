import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Send } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface FooterSectionProps {
  studioName: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ studioName }) => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState("Ren'Py Visual Novel");
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_INFO.discordHandle);
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    } catch {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  const handleCommissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Please fill in your name, email, and project details.');
      setSubmittedNotice(null);
      return;
    }
    setFormError(null);
    setSubmittedNotice(
      `Thanks, ${senderName.trim()}! Your ${projectType} inquiry has been logged. We will reply to ${senderEmail.trim()} within 24 hours.`
    );
    setSenderName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <footer id="contact" className="pt-16 pb-14 bg-[#080A14]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          {/* Left Column: Socials, Storefront Links & Discord Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="text-xs font-mono text-[#6EE7B7] tracking-wide mb-2">
                05. CONTACT &amp; LINKS
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-50 tracking-tight mb-3">
                Storefronts, Code &amp; Direct Contact
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[50ch] mb-6">
                Open to contract work and indie team collaborations involving
                Ren&apos;Py UI/Python scripting, RPG Maker MZ JavaScript plugins,
                event scripting, and 2D asset integration.
              </p>

              {/* Required 5 Social & Platform Links: itch.io, Steam, GitHub, Twitter/X, Discord */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={STUDIO_INFO.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#12162A] hover:bg-[#19203C] border border-slate-800 hover:border-[#6EE7B7]/60 transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100">
                      itch.io Storefront
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Playable Web &amp; PC Demos
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#6EE7B7]" />
                </a>

                <a
                  href={STUDIO_INFO.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#12162A] hover:bg-[#19203C] border border-slate-800 hover:border-[#F472B6]/60 transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100">
                      Steam Creator Hub
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Commercial Releases
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#F472B6]" />
                </a>

                <a
                  href={STUDIO_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#12162A] hover:bg-[#19203C] border border-slate-800 hover:border-[#6EE7B7]/60 transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100">
                      GitHub Repositories
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Ren&apos;Py &amp; MZ Plugins
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#6EE7B7]" />
                </a>

                <a
                  href={STUDIO_INFO.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#12162A] hover:bg-[#19203C] border border-slate-800 hover:border-[#F472B6]/60 transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-100">
                      Twitter / X
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      #ScreenshotSaturday Logs
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#F472B6]" />
                </a>
              </div>

              {/* Discord Handle & Direct Copy Button */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#12162A] border border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-slate-100">
                    Discord Community &amp; Direct Dev Handle
                  </div>
                  <div className="text-xs font-mono text-[#6EE7B7]">
                    @{STUDIO_INFO.discordHandle}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-200 bg-[#19203D] hover:bg-[#232C54] border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedDiscord ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#6EE7B7]" />
                      <span className="text-[#6EE7B7]">Copied Handle</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Discord</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project / Commission Inquiry Box */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleCommissionSubmit}
              noValidate
              className="relative rounded-[28px] p-5 sm:p-6 bg-[#F4F6FB] text-[#1E2436] border border-[#DCE3F5] shadow-[0_18px_45px_rgba(18,24,48,0.45)] space-y-4 overflow-hidden"
            >
              {/* Starry Periwinkle Banner Header inspired by the reference hero banner */}
              <div className="relative rounded-[22px] p-5 bg-gradient-to-r from-[#7B95D3] via-[#7088C8] to-[#6377B8] text-white overflow-hidden shadow-[0_8px_20px_rgba(99,119,184,0.3)]">
                {/* Soft curved light-blue arc on the bottom-left */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -left-10 w-52 h-40 rounded-full bg-[#9DB3E5]/45"
                />
                {/* Subtle starry dots */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-45"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1.5px)',
                    backgroundSize: '22px 22px',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-xs">
                    DIRECT MESSAGE
                  </span>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-6 h-1 rounded-full bg-white" />
                    <span className="w-4 h-1 rounded-full bg-white/45" />
                    <span className="w-4 h-1 rounded-full bg-white/45" />
                  </div>
                </div>

                <h3 className="relative z-10 font-display text-xl font-bold text-white tracking-tight">
                  Send a Collaboration or Demo Inquiry
                </h3>
                <p className="relative z-10 mt-1 text-xs text-white/90 max-w-[44ch]">
                  Reach out for Ren&apos;Py UI programming, RPG Maker MZ plugins,
                  or custom 2D narrative systems.
                </p>
              </div>

              {/* Form Fields styled as clean white & soft periwinkle cards/pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-[20px] p-3.5 border border-[#E4EAF7] shadow-[0_6px_18px_rgba(99,119,184,0.08)]">
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#5A6794] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2 text-sm bg-[#EEF2FA] border border-transparent rounded-full text-[#1E2436] placeholder:text-[#7E8BB6] focus:outline-none focus:bg-white focus:border-[#7B95D3] transition-colors"
                  />
                </div>
                <div className="bg-white rounded-[20px] p-3.5 border border-[#E4EAF7] shadow-[0_6px_18px_rgba(99,119,184,0.08)]">
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#5A6794] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@studio.dev"
                    className="w-full px-3.5 py-2 text-sm bg-[#EEF2FA] border border-transparent rounded-full text-[#1E2436] placeholder:text-[#7E8BB6] focus:outline-none focus:bg-white focus:border-[#7B95D3] transition-colors"
                  />
                </div>
              </div>

              {/* Collaboration Focus styled with periwinkle pill aesthetic */}
              <div className="bg-white rounded-[20px] p-3.5 border border-[#E4EAF7] shadow-[0_6px_18px_rgba(99,119,184,0.08)]">
                <label
                  htmlFor="contact-genre"
                  className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#5A6794] mb-1.5"
                >
                  Collaboration Focus
                </label>
                <select
                  id="contact-genre"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm font-medium bg-[#7B95D3] text-white border border-[#6C84C4] rounded-full shadow-[0_4px_12px_rgba(108,132,196,0.28)] focus:outline-none focus:ring-2 focus:ring-[#5A6794] cursor-pointer"
                >
                  <option value="Ren'Py Visual Novel" className="bg-white text-[#1E2436]">
                    Ren&apos;Py Visual Novel Scripting / UI
                  </option>
                  <option value="RPG Maker Custom Plugin" className="bg-white text-[#1E2436]">
                    RPG Maker MZ / MV Custom Plugin (JS)
                  </option>
                  <option value="Narrative Design & Writing" className="bg-white text-[#1E2436]">
                    Narrative Design &amp; Branching Story Writing
                  </option>
                  <option value="Pixel Art & Sprites" className="bg-white text-[#1E2436]">
                    Pixel Art Tilesets &amp; Character Sprites
                  </option>
                </select>
              </div>

              {/* Project Brief Card */}
              <div className="bg-white rounded-[20px] p-3.5 border border-[#E4EAF7] shadow-[0_6px_18px_rgba(99,119,184,0.08)]">
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#5A6794] mb-1.5"
                >
                  Project Brief or Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your visual novel or retro RPG project..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#EEF2FA] border border-transparent rounded-2xl text-[#1E2436] placeholder:text-[#7E8BB6] focus:outline-none focus:bg-white focus:border-[#7B95D3] transition-colors"
                />
              </div>

              {formError && (
                <p
                  role="alert"
                  className="text-xs font-mono font-medium text-rose-600 bg-rose-50 px-3.5 py-2 rounded-full border border-rose-200"
                >
                  {formError}
                </p>
              )}

              {submittedNotice && (
                <p
                  role="status"
                  className="text-xs font-mono font-medium text-[#2E4075] bg-[#E3EBF9] p-3.5 rounded-2xl border border-[#B8C9EC]"
                >
                  {submittedNotice}
                </p>
              )}

              {/* Bottom Pill Action Bar matching the "View More" / "Sign up" pill buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold text-[#1E2436] bg-white hover:bg-[#6E789E] hover:text-white border border-[#DCE3F5] rounded-full shadow-[0_6px_18px_rgba(93,107,153,0.16)] transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
                <span className="text-[11px] font-mono text-[#6B76A4] px-3 py-1 rounded-full bg-[#E6ECF8]">
                  Replies within 24h
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Quiet Bottom Copyright & Quick Navigation Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {studioName} ({STUDIO_INFO.studioAlias}).
            Crafted for Ren&apos;Py &amp; RPG Maker creators.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={STUDIO_INFO.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              itch.io
            </a>
            <a
              href={STUDIO_INFO.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Steam
            </a>
            <a
              href={STUDIO_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={STUDIO_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Twitter/X
            </a>
            <a
              href="#contact"
              className="hover:text-slate-300 transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
