export default function App() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100dvh',
        padding: '2rem max(1.25rem, env(safe-area-inset-right)) calc(2rem + env(safe-area-inset-bottom)) max(1.25rem, env(safe-area-inset-left))',
        paddingTop: 'calc(2rem + env(safe-area-inset-top))',
        textAlign: 'center',
        gap: '0.75rem',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#94a3b8',
          fontWeight: 600,
        }}
      >
        Learn with MK
      </p>
      <h1 style={{ margin: 0, fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 700 }}>鉄骨試験 · စတင်‌နေရာသစ်</h1>
      <p style={{ margin: '0 auto', maxWidth: '24rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
        ယခုတူ branch မှာ အခြေပြုရေးနေပါတယ်။ ယခင့်နောက်ပါတယ် ပြန်ပါတယ် app ကို ဤထဲ ပြန်ပါတယ် build လိုက်ပါမယ့်အဆင့်ပါစေ။
      </p>
      <code style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#a5b4fc' }}>npm install && npm run dev</code>
    </main>
  );
}
