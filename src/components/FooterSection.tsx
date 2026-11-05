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
              className="rounded-2xl p-6 sm:p-7 vn-textbox-surface space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-slate-100">
                  Send a Collaboration or Demo Inquiry
                </h3>
                <span className="text-xs font-mono text-[#F472B6]">
                  DIRECT MESSAGE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2 text-sm bg-[#0B0D19] border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#6EE7B7]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@studio.dev"
                    className="w-full px-3.5 py-2 text-sm bg-[#0B0D19] border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#6EE7B7]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-genre"
                  className="block text-xs font-mono text-slate-300 mb-1.5"
                >
                  Collaboration Focus
                </label>
                <select
                  id="contact-genre"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0B0D19] border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-[#6EE7B7]"
                >
                  <option value="Ren'Py Visual Novel">
                    Ren&apos;Py Visual Novel Scripting / UI
                  </option>
                  <option value="RPG Maker Custom Plugin">
                    RPG Maker MZ / MV Custom Plugin (JS)
                  </option>
                  <option value="Narrative Design & Writing">
                    Narrative Design &amp; Branching Story Writing
                  </option>
                  <option value="Pixel Art & Sprites">
                    Pixel Art Tilesets &amp; Character Sprites
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-slate-300 mb-1.5"
                >
                  Project Brief or Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your visual novel or retro RPG project..."
                  className="w-full px-3.5 py-2 text-sm bg-[#0B0D19] border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#6EE7B7]"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-mono text-rose-400">
                  {formError}
                </p>
              )}

              {submittedNotice && (
                <p
                  role="status"
                  className="text-xs font-mono text-[#6EE7B7] bg-[#0B0D19]/90 p-3 rounded-lg border border-[#6EE7B7]/40"
                >
                  {submittedNotice}
                </p>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B0D19] bg-[#6EE7B7] hover:bg-[#A7F3D0] rounded-lg transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
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
