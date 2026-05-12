import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon, BookOpenIcon } from './Icons';

const AuthScreen: React.FC = () => {
  const [accessKey, setAccessKey] = useState('');
  const { login, error: authError, loading } = useAuth();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!accessKey) {
      setFormError('Please enter your Redeem Code.');
      return;
    }
    await login(accessKey);
  };

  return (
    <div className="flex min-h-[100dvh] min-h-screen flex-col items-center justify-center px-5 py-8 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mk-glass-panel w-full max-w-md space-y-6 rounded-[1.75rem] p-8 shadow-mk-float ring-1 ring-white/60">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-gradient-to-br from-white/80 to-slate-100/60 p-4 shadow-mk-float ring-1 ring-white/70">
            <LogoIcon className="h-11 w-11 text-slate-700" />
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Learn with MK
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-800 sm:text-[1.65rem]">
            鉄骨製作管理技術者 試験対策
          </h1>
          <p className="mt-2 text-sm text-slate-500">Enter your Redeem Code to continue</p>
        </div>

        <div className="rounded-2xl bg-white/35 p-4 text-center ring-1 ring-white/40 shadow-inner">
          <BookOpenIcon className="mx-auto mb-3 h-8 w-8 text-indigo-500/90" />
          <p className="text-sm leading-relaxed text-slate-600">
            ဤ App သည် ဂျပန်နိုင်ငံ၏ 鉄骨製作管理技術者 (Steel Frame Production Management Engineer)
            စာမေးပွဲအတွက် လေ့လာနေသူများအတွက် ရည်ရွယ်ပါသည်။ စာမေးပွဲမေးခွန်းဟောင်းများနှင့်
            ၎င်းတို့၏ ရှင်းလင်းချက်များ၊ သက်ဆိုင်ရာ ဝေါဟာရများကို စုစည်းပေးထားပါသည်။
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="redeem-code" className="sr-only">
              Redeem Code
            </label>
            <input
              id="redeem-code"
              name="redeem-code"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              required
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              className="mk-touch-btn block w-full appearance-none rounded-2xl border-2 border-transparent bg-white/50 px-4 py-4 text-base text-slate-800 shadow-neumorphic-inset placeholder:text-slate-400 focus:bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              placeholder="Insert Redeem Code"
            />
          </div>

          {(formError || authError) && (
            <p className="text-center text-sm text-red-500">{formError || authError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mk-touch-btn flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-4 text-base font-semibold text-white shadow-mk-float transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Verifying…' : 'Unlock'}
          </button>
        </form>

        <div className="border-t border-white/40 pt-6 text-center text-sm">
          <p className="font-semibold text-slate-700">MYO KO KO OO</p>
          <a
            href="https://www.facebook.com/share/1EiUt29WW2/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block min-h-[44px] min-w-[44px] py-2 font-medium text-indigo-600 hover:text-indigo-800"
          >
            ဆက်သွယ်ရန် Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
