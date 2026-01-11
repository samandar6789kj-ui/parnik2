import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    /* Asosiy fon: Iliq qaymoqrang (#fdfaf1) */
    <div class="min-h-screen bg-[#fdfaf1] text-[#3a3d2e] font-sans antialiased selection:bg-[#f3e9c8]">
      
      {/* 1. NAVIGATSIYA (NAVBAR) */}
      <nav class="fixed top-0 w-full z-[100] bg-[#fdfaf1]/80 backdrop-blur-xl border-b border-[#eee3c1] px-6 py-3">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 bg-[#d4a017] rounded-sm flex items-center justify-center shadow-sm">
              <span class="text-[10px] text-white font-bold">G</span>
            </div>
            <span class="text-[11px] font-black uppercase tracking-[3px] text-[#4a4d3a]">Issiqxona.uz</span>
          </div>
          
          <ul class="hidden md:flex gap-10 text-[9px] uppercase tracking-[2px] font-bold text-[#8a8d7a]">
            <li><a href="#hero" class="hover:text-[#d4a017] transition-all">Asosiy</a></li>
            <li><a href="#about" class="hover:text-[#d4a017] transition-all">Biz haqimizda</a></li>
            <li><a href="#features" class="hover:text-[#d4a017] transition-all">Xizmatlar</a></li>
            <li><a href="#projects" class="hover:text-[#d4a017] transition-all">Loyihalar</a></li>
          </ul>

          <button class="bg-[#2d3321] text-[#fdfaf1] px-5 py-1.5 rounded-full text-[9px] uppercase tracking-tighter hover:bg-[#d4a017] transition-all shadow-md">
            Bog'lanish
          </button>
        </div>
      </nav>

      {/* 2. ASOSIY QISM (HERO) */}
      <section id="hero" class="relative pt-40 pb-20 px-6 overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-[#f3e9c8]/40 blur-[120px] -z-10 rounded-full"></div>
        
        <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
          <span class="text-[8px] bg-[#f3e9c8] text-[#967b2c] font-bold uppercase tracking-[5px] px-3 py-1 rounded-full mb-8 border border-[#e5d8ac]">Yuqori Sifat Standarti</span>
          <h1 class="text-4xl md:text-6xl font-light text-[#2d3321] leading-[1.1] mb-8">
            Quyosh nuri va <br/> <span class="font-serif italic text-[#d4a017]">aqlli texnologiya</span> uyg'unligi.
          </h1>
          <p class="text-[11px] md:text-[13px] text-[#6b6e58] max-w-lg leading-relaxed mb-10 uppercase tracking-widest">
            Biz o'simliklaringiz uchun ideal mikroiqlim yaratamiz. 
            Avtomatlashtirilgan tizimlar va maksimal hosildorlik kafolati.
          </p>
          <div class="flex gap-4">
            <button class="bg-[#d4a017] text-white px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#b88a15] transition-all shadow-lg shadow-[#d4a017]/20">Katalog</button>
            <button class="bg-white border border-[#eee3c1] text-[#d4a017] px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#fdfaf1] transition-all">Galereya</button>
          </div>
        </div>
      </section>

      {/* 3. BIZ HAQIMIZDA (ABOUT) */}
      <section id="about" class="py-24 px-6 bg-white border-y border-[#eee3c1]">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div class="relative">
            <div class="aspect-[4/5] bg-[#fdfaf1] rounded-2xl border border-[#eee3c1] flex items-center justify-center italic text-[10px] text-[#c9c2ab] shadow-inner">
              [Issiqxona ichki ko'rinishi rasm joyi]
            </div>
            <div class="absolute -bottom-6 -right-6 bg-[#2d3321] p-6 rounded-xl shadow-2xl">
              <div class="text-3xl font-light text-[#d4a017]">15+</div>
              <div class="text-[8px] uppercase tracking-widest text-[#fdfaf1]/60">Yillik Tajriba</div>
            </div>
          </div>
          <div>
            <h2 class="text-[10px] font-black text-[#d4a017] uppercase tracking-[4px] mb-6">Discovery</h2>
            <h3 class="text-2xl text-[#2d3321] font-medium mb-6">Har bir o'simlik uchun individual iqlim nazorati.</h3>
            <p class="text-[11px] text-[#6b6e58] leading-loose mb-8">
              "GreenHouse" kompaniyasi O'zbekiston bo'ylab zamonaviy issiqxonalarni loyihalashtirish va qurish bilan shug'ullanadi. 
              Bizning konstruksiyalarimiz mustahkam po'lat va yuqori texnologiyali qoplamalardan tayyorlanadi.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-[#fdfaf1] p-4 rounded-lg border border-[#eee3c1]">
                <p class="text-[10px] font-bold text-[#2d3321] uppercase">Sifat Kafolati</p>
                <p class="text-[9px] text-[#8a8d7a] mt-1">Har bir detal qattiq nazoratdan o'tadi.</p>
              </div>
              <div class="bg-[#fdfaf1] p-4 rounded-lg border border-[#eee3c1]">
                <p class="text-[10px] font-bold text-[#2d3321] uppercase">Ekologik</p>
                <p class="text-[9px] text-[#8a8d7a] mt-1">Faqat xavfsiz va sertifikatlangan materiallar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AFZALLIKLAR (FEATURES) */}
      <section id="features" class="py-24 px-6">
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: 'Quyosh Samaradorligi', d: 'Tabiiy yorug\'likdan maksimal foydalanish texnologiyasi.' },
            { t: 'Aqlli Sug\'orish', d: 'Suv sarfini 70% gacha tejaydigan avtomatik tizimlar.' },
            { t: 'Chidamlilik', d: 'Zangga qarshi galvanizatsiyalangan mustahkam metall qotishmalari.' }
          ].map((f, i) => (
            <div key={i} class="p-10 rounded-2xl bg-white border border-[#eee3c1] hover:shadow-xl transition-all group text-center md:text-left">
              <div class="w-10 h-10 bg-[#fdfaf1] rounded-lg flex items-center justify-center text-[#d4a017] mb-6 border border-[#eee3c1] mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-width="2" />
                </svg>
              </div>
              <h4 class="text-[11px] font-black text-[#2d3321] uppercase tracking-widest mb-4">{f.t}</h4>
              <p class="text-[10px] text-[#8a8d7a] leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOYIHALAR (PROJECTS) */}
      <section id="projects" class="py-24 px-6 bg-white border-t border-[#eee3c1]">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div class="text-left">
            <h2 class="text-[10px] text-[#d4a017] font-bold uppercase tracking-[5px] mb-2">Portfolio</h2>
            <p class="text-xl text-[#2d3321]">Bizning so'nggi ishlarimiz</p>
          </div>
          <button class="text-[9px] uppercase tracking-widest text-[#8a8d7a] hover:text-[#d4a017] border-b border-[#eee3c1] pb-1 transition-all">Barchasini ko'rish</button>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          {[1, 2].map(p => (
            <div key={p} class="group relative aspect-[16/9] bg-[#fdfaf1] rounded-3xl border border-[#eee3c1] overflow-hidden">
              <div class="absolute inset-0 bg-[#d4a017]/5 group-hover:bg-transparent transition-colors"></div>
              <div class="absolute bottom-10 left-10">
                <span class="text-[8px] bg-white px-2 py-1 rounded text-[#967b2c] uppercase font-bold tracking-widest shadow-sm">O'zbekiston 2026</span>
                <h5 class="text-sm font-bold text-[#2d3321] uppercase mt-4">Sanoat Tizimidagi Issiqxona</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer class="py-16 px-6 border-t border-[#eee3c1] bg-[#fdfaf1]">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="text-[10px] font-black tracking-[4px] uppercase text-[#2d3321]">Issiqxona.uz</div>
          <div class="flex gap-10 text-[9px] uppercase tracking-widest font-bold text-[#8a8d7a]">
             <a href="#" class="hover:text-[#d4a017] transition">Instagram</a>
             <a href="#" class="hover:text-[#d4a017] transition">Telegram</a>
             <a href="#" class="hover:text-[#d4a017] transition">YouTube</a>
          </div>
          <p class="text-[9px] text-[#b4b7a0] uppercase tracking-widest">© 2026 Barcha huquqlar himoyalangan</p>
        </div>
      </footer>
      
    </div>
  );
});