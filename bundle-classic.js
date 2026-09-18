
        const apiKey = "";

        document.addEventListener('DOMContentLoaded', () => {

            // === i18n engine ===
            const T = {
                id: {
                    'app.title': 'AI Influencer Studio',
                    'login.subtitle': 'Masuk dengan email pembelianmu',
                    'login.email-ph': 'email@kamu.com',
                    'login.btn': 'Masuk',
                    'login.checking': 'Memeriksa...',
                    'login.no-license': 'Belum punya lisensi?',
                    'login.buy': 'Beli di Lynk.id',
                    'nav.buat-influencer': 'Buat AI Influencer',
                    'nav.section-foto': 'Sesi Foto',
                    'nav.lifestyle': 'Lifestyle Harian',
                    'nav.podcast': 'Podcast / Studio',
                    'nav.religi': 'Religi / Ibadah',
                    'nav.ootd': 'OOTD / Fashion',
                    'nav.sport': 'Olahraga',
                    'nav.logout': 'Keluar',
                    'ci.title': 'Buat AI Influencer',
                    'ci.step1': 'Identitas',
                    'ci.name': 'Nama karakter',
                    'ci.name-ph': 'Aisyah, Kirana, ...',
                    'ci.gender': 'Jenis kelamin',
                    'ci.age': 'Rentang umur',
                    'ci.region': 'Tampilan regional',
                    'ci.step2': 'Penampilan',
                    'ci.hair': 'Gaya rambut',
                    'ci.hair-ph': 'hijab modern / rambut panjang hitam',
                    'ci.style': 'Gaya pakaian dasar',
                    'ci.style-ph': 'kasual modern / hijab syari',
                    'ci.vibe': 'Vibe',
                    'ci.step3': 'Niche Konten',
                    'ci.niche-ph': 'Atau ketik niche sendiri...',
                    'ci.gen-master': 'Generate Foto Master',
                    'ci.master-title': 'Foto Master',
                    'ci.master-empty': 'Isi form lalu klik Generate Foto Master',
                    'ci.regen': 'Ulangi',
                    'ci.lock': 'Kunci Karakter & Buat 5 Angle',
                    'ci.angles-title': '5 Foto Angle',
                    'ci.save': 'Simpan Karakter',
                    'ci.list-title': 'Karakter Tersimpan',
                    'ci.list-empty': 'Belum ada karakter tersimpan.',
                    'ci.tips-title': 'Tips',
                    'ci.tip1': 'Deskripsi rambut & pakaian yang spesifik bikin wajah lebih konsisten.',
                    'ci.tip2': 'Kalau foto master kurang cocok, klik Ulangi sebelum dikunci.',
                    'ci.tip3': 'Karakter tersimpan otomatis di cloud — login di HP lain, karakter ikut.',
                    'ci.del-confirm': 'Hapus karakter ini? Foto di cloud ikut terhapus.',
                    'ci.saved': 'Karakter tersimpan! Sekarang buka tab sesi foto untuk mulai generate.',
                    'btn.cancel': 'Batal',
                    'btn.delete': 'Hapus',
                    'btn.close': 'Tutup',
                    'btn.copy': 'Salin',
                    'err.login.invalid-email': 'Format email tidak valid.',
                    'err.login.failed': 'Login gagal. Coba lagi.',
                    'warn.session-ended': 'Sesi berakhir. Akun login di perangkat lain.',
                    'err.gen-failed': 'Generate gagal. Coba lagi — kalau berulang, akun Google ini mungkin capai batas, ganti akun.',
                    'err.angle-partial': 'Sebagian angle gagal dibuat. Klik "Kunci Karakter" lagi untuk melengkapi yang kosong.',
                    'err.no-name': 'Kasih nama karakter dulu ya.',
                    'err.no-niche': 'Pilih atau ketik niche dulu ya.',
                    'err.angle-incomplete': '5 foto angle belum lengkap.',
                    'err.char-limit': 'Maksimal 2 karakter. Hapus salah satu dulu.',
                    'err.del-failed': 'Gagal menghapus di cloud. Coba lagi.',
                    'pt.char-active': 'Karakter aktif',
                    'pt.no-char': 'Belum ada karakter. Buat dulu di menu Buat AI Influencer.',
                    'pt.step-scene': 'Pilih Scene',
                    'pt.step-cam': 'Gaya Foto',
                    'pt.step-set': 'Set Studio',
                    'pt.program-label': 'Nama Program di Backdrop (Opsional)',
                    'pt.program-ph': 'contoh: Ruang Bertumbuh',
                    'pt.step-ratio': 'Rasio Foto',
                    'pt.step-count': 'Jumlah Foto',
                    'pt.generate': 'Generate Foto',
                    'pt.results': 'Hasil Generate',
                    'pt.dl-all': 'Download Semua',
                    'pt.empty': 'Hasil akan muncul di sini',
                    'pt.tip1': 'Scene "Acak" bikin feed terlihat hidup dan tidak monoton.',
                    'pt.tip2': 'Rasio 9:16 paling pas untuk Reels, TikTok, dan Story.',
                    'pt.tip3': 'Kalau wajah kurang mirip, klik Regenerate di kartu foto itu.',
                    'pt.outfit-label': 'Outfit (Opsional)',
                    'pt.outfit-ph': 'contoh: gamis hitam elegan / kaos putih + jeans',
                    'err.outfit-empty': 'Ketik outfit dulu sebelum disimpan.',
                    'err.outfit-limit': 'Maksimal 10 outfit tersimpan. Hapus salah satu dulu (klik tanda silang).',
                    'pt.outfit-dup': 'Outfit ini sudah tersimpan.',
                    'pt.oimg-sub': 'Foto produk (sepatu, baju, tas...) — klik untuk pilih, maksimal 5 per generate. Cocok untuk konten affiliate.',
                    'err.oimg-limit': 'Maksimal 10 foto produk tersimpan. Hapus salah satu dulu.',
                    'err.oimg-sel': 'Maksimal 5 foto produk dipilih per generate.',
                    'err.oimg-read': 'Gagal membaca foto. Coba file lain.',
                    'vp.title': 'Prompt Video',
                    'vp.mode-natural': 'Natural',
                    'vp.mode-niche': 'Konten Niche',
                    'vp.mode-natural-desc': 'Gerakan halus saja: gerak bibir dikit, kedip, senyum tipis — tanpa bicara.',
                    'vp.mode-niche-desc': 'Influencer bicara sesuai niche + script kalimat yang diucapkan.',
                    'vp.niche-label': 'Niche',
                    'vp.lang-label': 'Bahasa script',
                    'vp.generate': 'Buat Prompt',
                    'vp.copied': 'Prompt tersalin!',
                    'vp.hint': 'Paste prompt ini ke tool image-to-video (Veo, Kling, dll) bersama fotonya.',
                    'err.vp-failed': 'Gagal membuat prompt. Coba lagi.',
                    'wn.title': 'Yang Baru',
                    'wn.empty': 'Belum ada catatan rilis.'
                },
                en: {
                    'app.title': 'AI Influencer Studio',
                    'login.subtitle': 'Sign in with your purchase email',
                    'login.email-ph': 'your@email.com',
                    'login.btn': 'Sign In',
                    'login.checking': 'Checking...',
                    'login.no-license': "Don't have a license yet?",
                    'login.buy': 'Buy on Lynk.id',
                    'nav.buat-influencer': 'Create AI Influencer',
                    'nav.section-foto': 'Photo Sessions',
                    'nav.lifestyle': 'Daily Lifestyle',
                    'nav.podcast': 'Podcast / Studio',
                    'nav.religi': 'Faith / Worship',
                    'nav.ootd': 'OOTD / Fashion',
                    'nav.sport': 'Sports',
                    'nav.logout': 'Sign Out',
                    'ci.title': 'Create AI Influencer',
                    'ci.step1': 'Identity',
                    'ci.name': 'Character name',
                    'ci.name-ph': 'Aisha, Kirana, ...',
                    'ci.gender': 'Gender',
                    'ci.age': 'Age range',
                    'ci.region': 'Regional look',
                    'ci.step2': 'Appearance',
                    'ci.hair': 'Hair style',
                    'ci.hair-ph': 'modern hijab / long black hair',
                    'ci.style': 'Base clothing style',
                    'ci.style-ph': 'modern casual / modest wear',
                    'ci.vibe': 'Vibe',
                    'ci.step3': 'Content Niche',
                    'ci.niche-ph': 'Or type your own niche...',
                    'ci.gen-master': 'Generate Master Photo',
                    'ci.master-title': 'Master Photo',
                    'ci.master-empty': 'Fill the form then click Generate Master Photo',
                    'ci.regen': 'Retry',
                    'ci.lock': 'Lock Character & Create 5 Angles',
                    'ci.angles-title': '5 Angle Photos',
                    'ci.save': 'Save Character',
                    'ci.list-title': 'Saved Characters',
                    'ci.list-empty': 'No saved characters yet.',
                    'ci.tips-title': 'Tips',
                    'ci.tip1': 'Specific hair & clothing descriptions make the face more consistent.',
                    'ci.tip2': 'If the master photo is not right, click Retry before locking.',
                    'ci.tip3': 'Characters are saved to the cloud — sign in on another device and they follow.',
                    'ci.del-confirm': 'Delete this character? Cloud photos will also be removed.',
                    'ci.saved': 'Character saved! Now open a photo session tab to start generating.',
                    'btn.cancel': 'Cancel',
                    'btn.delete': 'Delete',
                    'btn.close': 'Close',
                    'btn.copy': 'Copy',
                    'err.login.invalid-email': 'Invalid email format.',
                    'err.login.failed': 'Sign in failed. Please try again.',
                    'warn.session-ended': 'Session ended. Account signed in on another device.',
                    'err.gen-failed': 'Generation failed. Try again — if it keeps failing, this Google account may have hit its limit; switch accounts.',
                    'err.angle-partial': 'Some angles failed. Click "Lock Character" again to fill in the missing ones.',
                    'err.no-name': 'Please give the character a name first.',
                    'err.no-niche': 'Please pick or type a niche first.',
                    'err.angle-incomplete': 'The 5 angle photos are not complete yet.',
                    'err.char-limit': 'Maximum 2 characters. Delete one first.',
                    'err.del-failed': 'Failed to delete from cloud. Try again.',
                    'pt.char-active': 'Active character',
                    'pt.no-char': 'No character yet. Create one in the Create AI Influencer menu.',
                    'pt.step-scene': 'Choose a Scene',
                    'pt.step-cam': 'Photo Style',
                    'pt.step-set': 'Studio Set',
                    'pt.program-label': 'Show Name on Backdrop (Optional)',
                    'pt.program-ph': 'e.g. Growth Room',
                    'pt.step-ratio': 'Photo Ratio',
                    'pt.step-count': 'Number of Photos',
                    'pt.generate': 'Generate Photos',
                    'pt.results': 'Results',
                    'pt.dl-all': 'Download All',
                    'pt.empty': 'Results will appear here',
                    'pt.tip1': 'The "Random" scene keeps your feed varied and alive.',
                    'pt.tip2': 'The 9:16 ratio fits Reels, TikTok, and Stories best.',
                    'pt.tip3': 'If the face looks off, click Regenerate on that photo card.',
                    'pt.outfit-label': 'Outfit (Optional)',
                    'pt.outfit-ph': 'e.g. elegant black dress / white tee + jeans',
                    'err.outfit-empty': 'Type an outfit first before saving.',
                    'err.outfit-limit': 'Maximum 10 saved outfits. Delete one first (click the cross).',
                    'pt.outfit-dup': 'This outfit is already saved.',
                    'pt.oimg-sub': 'Product photos (shoes, clothes, bags...) — click to select, max 5 per generate. Great for affiliate content.',
                    'err.oimg-limit': 'Maximum 10 saved product photos. Delete one first.',
                    'err.oimg-sel': 'Maximum 5 product photos selected per generate.',
                    'err.oimg-read': 'Failed to read the photo. Try another file.',
                    'vp.title': 'Video Prompt',
                    'vp.mode-natural': 'Natural',
                    'vp.mode-niche': 'Niche Content',
                    'vp.mode-natural-desc': 'Subtle motion only: slight lip movement, blinking, soft smile — no talking.',
                    'vp.mode-niche-desc': 'The influencer speaks to match the niche + includes the spoken script.',
                    'vp.niche-label': 'Niche',
                    'vp.lang-label': 'Script language',
                    'vp.generate': 'Create Prompt',
                    'vp.copied': 'Prompt copied!',
                    'vp.hint': 'Paste this prompt into an image-to-video tool (Veo, Kling, etc.) along with the photo.',
                    'err.vp-failed': 'Failed to create the prompt. Try again.',
                    'wn.title': "What's New",
                    'wn.empty': 'No release notes yet.'
                },
                ms: {
                    'app.title': 'AI Influencer Studio',
                    'login.subtitle': 'Log masuk dengan e-mel pembelian anda',
                    'login.email-ph': 'emel@anda.com',
                    'login.btn': 'Log Masuk',
                    'login.checking': 'Menyemak...',
                    'login.no-license': 'Belum ada lesen?',
                    'login.buy': 'Beli di Lynk.id',
                    'nav.buat-influencer': 'Cipta AI Influencer',
                    'nav.section-foto': 'Sesi Foto',
                    'nav.lifestyle': 'Gaya Hidup Harian',
                    'nav.podcast': 'Podcast / Studio',
                    'nav.religi': 'Agama / Ibadah',
                    'nav.ootd': 'OOTD / Fesyen',
                    'nav.sport': 'Sukan',
                    'nav.logout': 'Log Keluar',
                    'ci.title': 'Cipta AI Influencer',
                    'ci.step1': 'Identiti',
                    'ci.name': 'Nama watak',
                    'ci.name-ph': 'Aisyah, Kirana, ...',
                    'ci.gender': 'Jantina',
                    'ci.age': 'Julat umur',
                    'ci.region': 'Rupa serantau',
                    'ci.step2': 'Penampilan',
                    'ci.hair': 'Gaya rambut',
                    'ci.hair-ph': 'hijab moden / rambut panjang hitam',
                    'ci.style': 'Gaya pakaian asas',
                    'ci.style-ph': 'kasual moden / pakaian sopan',
                    'ci.vibe': 'Vibe',
                    'ci.step3': 'Niche Kandungan',
                    'ci.niche-ph': 'Atau taip niche sendiri...',
                    'ci.gen-master': 'Jana Foto Master',
                    'ci.master-title': 'Foto Master',
                    'ci.master-empty': 'Isi borang lalu klik Jana Foto Master',
                    'ci.regen': 'Cuba Lagi',
                    'ci.lock': 'Kunci Watak & Cipta 5 Sudut',
                    'ci.angles-title': '5 Foto Sudut',
                    'ci.save': 'Simpan Watak',
                    'ci.list-title': 'Watak Tersimpan',
                    'ci.list-empty': 'Belum ada watak tersimpan.',
                    'ci.tips-title': 'Tip',
                    'ci.tip1': 'Deskripsi rambut & pakaian yang spesifik menjadikan wajah lebih konsisten.',
                    'ci.tip2': 'Jika foto master kurang sesuai, klik Cuba Lagi sebelum dikunci.',
                    'ci.tip3': 'Watak disimpan automatik di cloud — log masuk di peranti lain, watak ikut.',
                    'ci.del-confirm': 'Padam watak ini? Foto di cloud turut dipadam.',
                    'ci.saved': 'Watak disimpan! Sekarang buka tab sesi foto untuk mula menjana.',
                    'btn.cancel': 'Batal',
                    'btn.delete': 'Padam',
                    'btn.close': 'Tutup',
                    'btn.copy': 'Salin',
                    'err.login.invalid-email': 'Format e-mel tidak sah.',
                    'err.login.failed': 'Log masuk gagal. Sila cuba lagi.',
                    'warn.session-ended': 'Sesi tamat. Akaun log masuk di peranti lain.',
                    'err.gen-failed': 'Penjanaan gagal. Cuba lagi — jika berterusan, akaun Google ini mungkin capai had; tukar akaun.',
                    'err.angle-partial': 'Sebahagian sudut gagal. Klik "Kunci Watak" sekali lagi untuk melengkapkan yang kosong.',
                    'err.no-name': 'Sila beri nama watak dahulu.',
                    'err.no-niche': 'Sila pilih atau taip niche dahulu.',
                    'err.angle-incomplete': '5 foto sudut belum lengkap.',
                    'err.char-limit': 'Maksimum 2 watak. Padam satu dahulu.',
                    'err.del-failed': 'Gagal memadam di cloud. Cuba lagi.',
                    'pt.char-active': 'Watak aktif',
                    'pt.no-char': 'Belum ada watak. Cipta dahulu di menu Cipta AI Influencer.',
                    'pt.step-scene': 'Pilih Scene',
                    'pt.step-cam': 'Gaya Foto',
                    'pt.step-set': 'Set Studio',
                    'pt.program-label': 'Nama Program di Backdrop (Pilihan)',
                    'pt.program-ph': 'cth: Ruang Bertumbuh',
                    'pt.step-ratio': 'Nisbah Foto',
                    'pt.step-count': 'Bilangan Foto',
                    'pt.generate': 'Jana Foto',
                    'pt.results': 'Hasil Janaan',
                    'pt.dl-all': 'Muat Turun Semua',
                    'pt.empty': 'Hasil akan muncul di sini',
                    'pt.tip1': 'Scene "Rawak" menjadikan feed nampak hidup dan tidak monoton.',
                    'pt.tip2': 'Nisbah 9:16 paling sesuai untuk Reels, TikTok dan Story.',
                    'pt.tip3': 'Jika wajah kurang mirip, klik Regenerate pada kad foto itu.',
                    'pt.outfit-label': 'Outfit (Pilihan)',
                    'pt.outfit-ph': 'cth: jubah hitam elegan / t-shirt putih + jeans',
                    'err.outfit-empty': 'Taip outfit dahulu sebelum disimpan.',
                    'err.outfit-limit': 'Maksimum 10 outfit tersimpan. Padam satu dahulu (klik tanda pangkah).',
                    'pt.outfit-dup': 'Outfit ini sudah tersimpan.',
                    'pt.oimg-sub': 'Foto produk (kasut, baju, beg...) — klik untuk pilih, maksimum 5 setiap janaan. Sesuai untuk kandungan affiliate.',
                    'err.oimg-limit': 'Maksimum 10 foto produk tersimpan. Padam satu dahulu.',
                    'err.oimg-sel': 'Maksimum 5 foto produk dipilih setiap janaan.',
                    'err.oimg-read': 'Gagal membaca foto. Cuba fail lain.',
                    'vp.title': 'Prompt Video',
                    'vp.mode-natural': 'Natural',
                    'vp.mode-niche': 'Kandungan Niche',
                    'vp.mode-natural-desc': 'Gerakan halus sahaja: bibir bergerak sedikit, kelipan, senyuman nipis — tanpa bercakap.',
                    'vp.mode-niche-desc': 'Influencer bercakap mengikut niche + skrip ayat yang diucapkan.',
                    'vp.niche-label': 'Niche',
                    'vp.lang-label': 'Bahasa skrip',
                    'vp.generate': 'Cipta Prompt',
                    'vp.copied': 'Prompt disalin!',
                    'vp.hint': 'Tampal prompt ini ke tool image-to-video (Veo, Kling, dll) bersama fotonya.',
                    'err.vp-failed': 'Gagal mencipta prompt. Cuba lagi.',
                    'wn.title': 'Apa Yang Baru',
                    'wn.empty': 'Belum ada nota keluaran.'
                }
            };

            function detectLang() {
                const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
                for (const raw of list) {
                    const p = String(raw).toLowerCase().split('-')[0];
                    if (p === 'ms') return 'ms';
                    if (p === 'id' || p === 'in') return 'id';
                    if (p === 'en') return 'en';
                }
                return 'en';
            }
            function getLang() { return localStorage.getItem('app_language') || detectLang(); }
            function tr(lang, key) {
                const d = T[lang] || T.id;
                if (d[key] != null) return d[key];
                if (T.id[key] != null) return T.id[key];
                return null;
            }
            function t(key) { const v = tr(getLang(), key); return v != null ? v : key; }
            window.t = t;
            window.getLang = getLang;

            // Label chip: nilai kanonik (data-val/data-niche/data-scene) DIKUNCI —
            // hanya text node label yang di-swap per bahasa.
            window.CHIP_LABELS = {
                id: {},
                en: {
                    'Wanita': 'Woman', 'Pria': 'Man',
                    'Asia Tenggara': 'Southeast Asian', 'Asia Timur': 'East Asian', 'Timur Tengah': 'Middle Eastern', 'Barat': 'Western',
                    'Ceria': 'Cheerful', 'Kalem': 'Calm', 'Profesional': 'Professional', 'Religius': 'Religious',
                    'Kata Bijak': 'Wisdom Quotes', 'Motivasi': 'Motivation', 'Kuliner': 'Food & Culinary', 'Edukasi': 'Education',
                    'Acak': 'Random',
                    'Selfie di Mobil': 'Car Selfie', 'Makan di Kafe': 'Eating at a Cafe', 'Nongkrong Ngopi': 'Coffee Hangout',
                    'Masak di Dapur': 'Cooking at Home', 'Santai di Rumah': 'Relaxing at Home', 'Belanja di Supermarket': 'Grocery Shopping',
                    'Naik Ojek Online': 'Riding an Ojek', 'Naik Motor': 'Riding a Scooter', 'Nyetir Mobil': 'Driving a Car',
                    'Naik Kereta': 'On the Train', 'Jajan Street Food': 'Street Food Run', 'Hujan-hujanan': 'Rainy Day Walk',
                    'Di Minimarket': 'At the Minimart', 'Rebahan Main HP': 'Scrolling in Bed',
                    'Selfie Sendiri': 'Selfie (Self-Shot)', 'Difotoin Orang': 'Taken by Someone',
                    'Bicara ke Kamera': 'Talking to Camera', 'Senyum ke Kamera': 'Smiling at Camera', 'Gestur Tangan': 'Hand Gestures',
                    'Ketawa Natural': 'Natural Laugh', 'Pakai Headphone': 'Wearing Headphones', 'Wawancara Tamu': 'Interviewing a Guest', 'Angle Samping': 'Side Angle',
                    'Gelap Elegan': 'Dark Elegant', 'Hangat Cozy': 'Warm Cozy', 'Minimalis Terang': 'Bright Minimalist', 'Broadcast Neon': 'Neon Broadcast',
                    'Panggung Seminar': 'Seminar Stage', 'Berdiri Pegang Mic': 'Standing with Mic', 'Gestur ke Penonton': 'Gesturing to Audience',
                    'Baca Quran di Kamar': 'Reading Quran on Bed', 'Baca Quran Dekat Jendela': 'Quran by the Window',
                    'Berdoa Setelah Sholat': 'Dua After Prayer', 'Dzikir dengan Tasbih': 'Dhikr with Prayer Beads',
                    'Duduk di Sajadah': 'On the Prayer Mat', 'Peluk Quran': 'Holding the Quran',
                    'Mirror Selfie Outfit': 'Outfit Mirror Selfie', 'Detail Outfit': 'Outfit Details', 'Selfie di Lift': 'Elevator Selfie', 'Outfit di Kafe Estetik': 'Cafe Outfit Shot',
                    'Latihan di Gym': 'Gym Workout', 'Lari Pagi': 'Morning Run', 'Yoga di Rumah': 'Yoga at Home', 'Naik Gunung': 'Hiking',
                    'Stretching di Taman': 'Stretching at the Park', 'Selfie Habis Workout': 'Post-Workout Selfie'
                },
                ms: {
                    'Pria': 'Lelaki',
                    'Timur Tengah': 'Timur Tengah',
                    'Kalem': 'Tenang', 'Religius': 'Warak',
                    'Kata Bijak': 'Kata Hikmah', 'Kuliner': 'Kulinari', 'Edukasi': 'Pendidikan',
                    'Acak': 'Rawak',
                    'Selfie di Mobil': 'Selfie di Kereta', 'Nongkrong Ngopi': 'Lepak Kopi', 'Masak di Dapur': 'Memasak di Dapur',
                    'Belanja di Supermarket': 'Beli-belah di Pasar Raya',
                    'Naik Motor': 'Naik Motosikal', 'Nyetir Mobil': 'Memandu Kereta', 'Naik Kereta': 'Naik Keretapi',
                    'Jajan Street Food': 'Beli Makanan Jalanan', 'Hujan-hujanan': 'Jalan Ketika Hujan', 'Rebahan Main HP': 'Baring Main Telefon',
                    'Difotoin Orang': 'Difotokan Orang',
                    'Bicara ke Kamera': 'Bercakap ke Kamera', 'Gestur Tangan': 'Gerak Tangan', 'Ketawa Natural': 'Ketawa Semula Jadi',
                    'Pakai Headphone': 'Pakai Fon Kepala', 'Wawancara Tamu': 'Menemu Bual Tetamu', 'Angle Samping': 'Sudut Sisi',
                    'Minimalis Terang': 'Minimalis Cerah',
                    'Baca Quran di Kamar': 'Baca Quran di Bilik', 'Baca Quran Dekat Jendela': 'Baca Quran Tepi Tingkap',
                    'Berdoa Setelah Sholat': 'Berdoa Selepas Solat', 'Dzikir dengan Tasbih': 'Zikir dengan Tasbih',
                    'Duduk di Sajadah': 'Duduk di Sejadah',
                    'Gestur ke Penonton': 'Gerak ke Penonton',
                    'Detail Outfit': 'Detail Pakaian', 'Selfie di Lift': 'Selfie di Lif',
                    'Latihan di Gym': 'Bersenam di Gym', 'Naik Gunung': 'Mendaki', 'Stretching di Taman': 'Regangan di Taman', 'Selfie Habis Workout': 'Selfie Selepas Bersenam'
                }
            };
            window.DYN_LABELS = { id: {}, en: {}, ms: {} };

            function swapLastTextNode(elm, label) {
                let node = null;
                for (const n of elm.childNodes) if (n.nodeType === 3 && n.textContent.trim()) node = n;
                if (node) node.textContent = label;
                else elm.appendChild(document.createTextNode(label));
            }
            function applyChipLabels(lang) {
                // Chip outfit (data-outfit-idx) = teks buatan user — JANGAN diterjemahkan/disentuh
                document.querySelectorAll('.option-btn:not([data-outfit-idx])').forEach(btn => {
                    if (!btn.dataset.i18nId) {
                        const txt = (btn.textContent || '').trim();
                        if (!txt) return;
                        btn.dataset.i18nId = txt;
                    }
                    const idLabel = btn.dataset.i18nId;
                    const map = window.CHIP_LABELS[lang] || {};
                    const label = (lang === 'id') ? idLabel : (map[idLabel] != null ? map[idLabel] : idLabel);
                    swapLastTextNode(btn, label);
                });
            }
            function applyDynLabels(lang) {
                document.querySelectorAll('[data-i18n-dyn]').forEach(elm => {
                    if (!elm.dataset.i18nId) {
                        const txt = (elm.textContent || '').trim();
                        if (!txt) return;
                        elm.dataset.i18nId = txt;
                    }
                    const idLabel = elm.dataset.i18nId;
                    const map = window.DYN_LABELS[lang] || {};
                    const label = (lang === 'id') ? idLabel : (map[idLabel] != null ? map[idLabel] : idLabel);
                    elm.textContent = label;
                });
            }

            function applyLanguage() {
                const lang = getLang();
                document.querySelectorAll('[data-i18n]').forEach(elm => {
                    const v = tr(lang, elm.getAttribute('data-i18n'));
                    if (v != null) elm.textContent = v;
                });
                document.querySelectorAll('[data-i18n-placeholder]').forEach(elm => {
                    const v = tr(lang, elm.getAttribute('data-i18n-placeholder'));
                    if (v != null) elm.setAttribute('placeholder', v);
                });
                applyChipLabels(lang);
                applyDynLabels(lang);
            }
            window._i18nApplyNow = applyLanguage;

            function syncLangButtons() {
                const lang = getLang();
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            }
            window.setAppLanguage = function (lang) {
                localStorage.setItem('app_language', lang);
                document.documentElement.lang = lang;
                applyLanguage();
                syncLangButtons();
                document.dispatchEvent(new CustomEvent('app-lang-changed'));
            };
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.addEventListener('click', () => window.setAppLanguage(b.dataset.lang));
            });

            document.documentElement.lang = getLang();
            applyLanguage();
            syncLangButtons();
            // === end i18n engine ===

            // ==================== UNIVERSAL MODAL ====================
            const universalModal = document.getElementById('universal-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            const closeModalBtn = document.getElementById('close-modal-btn');
            window.universalModal = universalModal;

            function showUniversalModal(title, content) {
                modalTitle.innerText = title;
                modalBody.innerHTML = content;
                universalModal.classList.add('visible');
                if (window._i18nApplyNow) window._i18nApplyNow();
            }
            window.showUniversalModal = showUniversalModal;
            closeModalBtn.addEventListener('click', () => universalModal.classList.remove('visible'));
            universalModal.addEventListener('click', (e) => { if (e.target === universalModal) universalModal.classList.remove('visible'); });

            // ==================== DIALOG HELPERS (pengganti alert/confirm — diblokir sandbox Canvas) ====================
            function buildUiDialog(pesan, buttonsHtml) {
                const modal = document.createElement('div');
                modal.className = 'image-preview-modal';
                modal.innerHTML = `<div class="bg-white rounded-xl p-6 max-w-sm w-full" onclick="event.stopPropagation()">
                  <p class="text-sm text-gray-700 mb-5 leading-relaxed" data-msg></p>
                  <div class="flex gap-2 justify-end" data-btns></div>
                </div>`;
                modal.querySelector('[data-msg]').textContent = pesan;
                modal.querySelector('[data-btns]').innerHTML = buttonsHtml;
                document.body.appendChild(modal);
                setTimeout(() => modal.classList.add('show'), 10);
                const close = () => { modal.classList.remove('show'); setTimeout(() => modal.remove(), 200); };
                return { modal, close };
            }
            window.uiNotify = function (pesan) {
                return new Promise((res) => {
                    const { modal, close } = buildUiDialog(pesan,
                        '<button type="button" data-ok class="btn-primary font-semibold py-2 px-5 rounded-lg text-sm">OK</button>');
                    const done = () => { close(); res(); };
                    modal.querySelector('[data-ok]').addEventListener('click', done);
                    modal.addEventListener('click', (e) => { if (e.target === modal) done(); });
                });
            };
            window.uiConfirm = function (pesan, labelYa) {
                const tt = (k, fb) => (window.t ? window.t(k) : fb) || fb;
                return new Promise((res) => {
                    const { modal, close } = buildUiDialog(pesan,
                        '<button type="button" data-no class="btn-secondary font-semibold py-2 px-5 rounded-lg text-sm">' + tt('btn.cancel', 'Batal') + '</button>' +
                        `<button type="button" data-yes class="font-semibold py-2 px-5 rounded-lg text-sm" style="background:#dc2626;color:#fff;">${labelYa || tt('btn.delete', 'Hapus')}</button>`);
                    const done = (v) => { close(); res(v); };
                    modal.querySelector('[data-yes]').addEventListener('click', () => done(true));
                    modal.querySelector('[data-no]').addEventListener('click', () => done(false));
                    modal.addEventListener('click', (e) => { if (e.target === modal) done(false); });
                });
            };

            // ==================== iOS DOWNLOAD HELPERS ====================
            // iOS Safari mengabaikan atribut `download` untuk blob/data URL — browser malah
            // navigate ke blob URL (iframe Canvas ke-reset, sesi hilang). Solusi: Web Share API.
            window.__isIOS = function () {
                var ua = navigator.userAgent || '';
                if (/iPad|iPhone|iPod/.test(ua)) return true;
                if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return true;
                return false;
            };

            window.__iosShareOrSaveImage = async function (blob, filename) {
                var mimeType = blob.type || 'image/png';
                var file = null;
                try {
                    file = new File([blob], filename, { type: mimeType });
                } catch (e) {
                    file = null;
                }
                if (file && navigator.canShare) {
                    try {
                        if (navigator.canShare({ files: [file] })) {
                            await navigator.share({ files: [file], title: filename });
                            return;
                        }
                    } catch (err) {
                        if (err && err.name === 'AbortError') return;
                    }
                }
                var url = URL.createObjectURL(blob);
                var lang = localStorage.getItem('app_language') || 'id';
                var isID = lang === 'id';
                var title = isID ? 'Simpan Gambar' : 'Save Image';
                var instruction = isID
                    ? 'Tekan dan <b>tahan</b> gambar di bawah, lalu pilih <b>"Simpan ke Foto"</b>.'
                    : 'Press and <b>hold</b> the image below, then choose <b>"Save to Photos"</b>.';
                var html =
                    '<p class="mb-4 text-gray-700 text-sm sm:text-base">' + instruction + '</p>' +
                    '<div class="bg-gray-100 p-3 rounded-lg">' +
                        '<img src="' + url + '" alt="' + filename + '" class="w-full rounded-lg" style="-webkit-touch-callout: default; pointer-events: auto;">' +
                    '</div>' +
                    '<p class="mt-3 text-xs text-gray-500 break-all">' + filename + '</p>';
                if (window.showUniversalModal) {
                    window.showUniversalModal(title, html);
                }
            };

            async function downloadImage(imageUrl, filename) {
                try {
                    if (window.__isIOS && window.__isIOS()) {
                        const iosResp = await fetch(imageUrl);
                        if (!iosResp.ok) throw new Error('Network response was not ok');
                        const iosBlob = await iosResp.blob();
                        await window.__iosShareOrSaveImage(iosBlob, filename);
                        return;
                    }
                    if (imageUrl.startsWith('data:')) {
                        const a = document.createElement('a');
                        a.href = imageUrl;
                        a.download = filename;
                        a.style.display = 'none';
                        document.body.appendChild(a);
                        setTimeout(() => {
                            a.click();
                            setTimeout(() => { document.body.removeChild(a); }, 100);
                        }, 10);
                        return;
                    }
                    const response = await fetch(imageUrl);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const blob = await response.blob();
                    if (typeof saveAs !== 'undefined') {
                        saveAs(blob, filename);
                        return;
                    }
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    setTimeout(() => {
                        a.click();
                        setTimeout(() => {
                            window.URL.revokeObjectURL(url);
                            document.body.removeChild(a);
                        }, 100);
                    }, 10);
                } catch (error) {
                    console.error('Error downloading image:', error);
                    // JANGAN window.open di iOS (keluar dari Canvas) — fallback modal long-press
                    showUniversalModal('Download', `
                        <p class="mb-4 text-gray-700 text-sm">Tekan dan tahan gambar di bawah, lalu pilih "Simpan Gambar".</p>
                        <div class="bg-gray-100 p-3 rounded-lg">
                            <img src="${imageUrl}" class="w-full rounded-lg" alt="${filename}" style="-webkit-touch-callout: default;">
                        </div>
                        <p class="mt-3 text-xs text-gray-500 break-all">${filename}</p>
                    `);
                }
            }
            window.downloadImage = downloadImage;
            window.downloadDataURINew = downloadImage;

            // ==================== KOMPRES GAMBAR (sebelum kirim ke API / upload cloud) ====================
            window.compressImage = function (source, maxSide = 1024, quality = 0.85) {
                // source: Blob | dataURL string → Promise<{ b64, blob }>  (b64 tanpa prefix data:)
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.round(img.width * scale);
                        canvas.height = Math.round(img.height * scale);
                        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                        canvas.toBlob((blob) => {
                            if (!blob) { reject(new Error('Compress failed')); return; }
                            const reader = new FileReader();
                            reader.onload = () => resolve({ b64: String(reader.result).split(',')[1], blob });
                            reader.readAsDataURL(blob);
                        }, 'image/jpeg', quality);
                    };
                    img.onerror = () => reject(new Error('Image load failed'));
                    if (typeof source === 'string') {
                        img.src = source;
                    } else {
                        img.src = URL.createObjectURL(source);
                    }
                });
            };
            window.blobToB64 = (blob) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(String(reader.result).split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            window.b64ToBlob = function (b64, mime) {
                const bytes = atob(b64);
                const arr = new Uint8Array(bytes.length);
                for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
                return new Blob([arr], { type: mime || 'image/jpeg' });
            };

            // ==================== SIDEBAR + TAB SWITCHING ====================
            const sidebar = document.getElementById('sidebar');
            const sidebarBackdrop = document.getElementById('sidebar-backdrop');
            const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');

            function closeSidebar() {
                sidebar.classList.remove('open');
                sidebarBackdrop.classList.remove('show');
            }
            toggleSidebarBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                sidebarBackdrop.classList.toggle('show', sidebar.classList.contains('open'));
            });
            sidebarBackdrop.addEventListener('click', closeSidebar);

            const mainTabButtons = document.querySelectorAll('.main-tab-btn');
            const mainContentPanels = document.querySelectorAll('.main-content-panel');

            function switchTab(tabName) {
                mainTabButtons.forEach(btn => btn.classList.remove('active'));
                const sidebarBtn = document.querySelector(`.main-tab-btn[data-tab="${tabName}"]`);
                if (sidebarBtn) sidebarBtn.classList.add('active');
                mainContentPanels.forEach(panel => {
                    panel.classList.toggle('hidden', panel.id !== `content-${tabName}`);
                });
                closeSidebar();
                if (window._i18nApplyNow) window._i18nApplyNow();
            }
            window.switchTab = switchTab;

            mainTabButtons.forEach(button => {
                button.addEventListener('click', () => switchTab(button.dataset.tab));
            });

            // Navigasi via data-goto (hub pill / CTA antar tab)
            document.addEventListener('click', function (e) {
                const pill = e.target.closest('[data-goto]');
                if (!pill) return;
                switchTab(pill.dataset.goto);
            });

            // === LOGIN SYSTEM + CLOUD STORAGE KARAKTER (lisensi via GAS + Sheet) ===
            const LOGIN_CFG = {
                SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwwwy5yvNt0ZNYW8UYhac348LlxkUKH8oM32NXPDUNhbU8vujlupKvH36X9YjvZqFJc/exec",
                APP_SECRET: "SIA7KpQ2vXm9RtL4wNs8ZbYc3FdH",
                PRODUCT_ID: "ai-influencer-studio",
                BUY_LYNK_URL: "YOUR-LYNK-URL"
            };
            (function () {
                const overlay = document.getElementById('login-overlay');
                const mainApp = document.getElementById('main-app');
                const emailInput = document.getElementById('login-email');
                const loginBtn = document.getElementById('login-btn');
                const errEl = document.getElementById('login-error');
                const loadingEl = document.getElementById('login-loading');
                let sesInterval = null;
                const tf = (k, fb) => { const v = window.t ? window.t(k) : null; return (v && v !== k) ? v : fb; };

                let deviceToken = localStorage.getItem('sia_device');
                if (!deviceToken) {
                    deviceToken = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
                    localStorage.setItem('sia_device', deviceToken);
                }

                const api = (action, email) => fetch(
                    `${LOGIN_CFG.SCRIPT_URL}?action=${action}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(deviceToken)}&app_secret=${encodeURIComponent(LOGIN_CFG.APP_SECRET)}&product=${LOGIN_CFG.PRODUCT_ID}`
                ).then(r => r.json());

                // ---- IndexedDB cache lokal karakter ----
                // record: { id, name, niche, cfg, blobs: [Blob x5], createdAt, cloud }
                window.charDB = (function () {
                    const DB = 'sia_chars', STORE = 'chars';
                    function open() {
                        return new Promise((resolve, reject) => {
                            const req = indexedDB.open(DB, 1);
                            req.onupgradeneeded = () => {
                                if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE, { keyPath: 'id' });
                            };
                            req.onsuccess = () => resolve(req.result);
                            req.onerror = () => reject(req.error);
                        });
                    }
                    async function tx(mode, fn) {
                        const db = await open();
                        return new Promise((resolve, reject) => {
                            const t = db.transaction(STORE, mode);
                            const store = t.objectStore(STORE);
                            const out = fn(store);
                            t.oncomplete = () => { db.close(); resolve(out.result !== undefined ? out.result : out.value); };
                            t.onerror = () => { db.close(); reject(t.error); };
                        });
                    }
                    return {
                        list() { return tx('readonly', s => s.getAll()).then(r => r || []); },
                        get(id) { return tx('readonly', s => s.get(id)); },
                        put(rec) { return tx('readwrite', s => s.put(rec)); },
                        remove(id) { return tx('readwrite', s => s.delete(id)); }
                    };
                })();

                // ---- Client cloud (GAS) ----
                window.charCloud = {
                    _q(action, extra) {
                        const email = localStorage.getItem('sia_email') || '';
                        return `${LOGIN_CFG.SCRIPT_URL}?action=${action}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(deviceToken)}&app_secret=${encodeURIComponent(LOGIN_CFG.APP_SECRET)}${extra || ''}`;
                    },
                    async list() {
                        const d = await fetch(this._q('char_list')).then(r => r.json());
                        return d.status === 'SUKSES' ? (d.chars || []) : null;
                    },
                    async get(id, angle) {
                        const d = await fetch(this._q('char_get', `&id=${encodeURIComponent(id)}&angle=${angle}`)).then(r => r.json());
                        return d.status === 'SUKSES' ? d.base64 : null;
                    },
                    async getAll(id) {
                        // 5 angle dalam 1 round-trip (latensi GAS dominan, bukan bandwidth)
                        const d = await fetch(this._q('char_get_all', `&id=${encodeURIComponent(id)}`)).then(r => r.json());
                        return (d.status === 'SUKSES' && Array.isArray(d.angles) && d.angles.length === 5) ? d.angles : null;
                    },
                    async del(id) {
                        try {
                            const d = await fetch(this._q('char_del', `&id=${encodeURIComponent(id)}`)).then(r => r.json());
                            return d.status === 'SUKSES';
                        } catch (e) { return false; }
                    },
                    async upload(rec) {
                        // POST tanpa header custom → default text/plain, hindari preflight CORS yang bikin GAS gagal
                        const body = JSON.stringify({
                            sia_action: 'char_upload',
                            app_secret: LOGIN_CFG.APP_SECRET,
                            email: localStorage.getItem('sia_email') || '',
                            token: deviceToken,
                            id: rec.id, name: rec.name, niche: rec.niche, cfg: rec.cfg, angles: rec.angles
                        });
                        const d = await fetch(LOGIN_CFG.SCRIPT_URL, { method: 'POST', body }).then(r => r.json());
                        return d;
                    }
                };

                // ---- Sync cloud <-> lokal ----
                // Aturan emas: JANGAN pernah hapus lokal item cloud:false (pending upload).
                // Anti dobel-jalan: dipanggil dari halaman login (preload) DAN openApp.
                window.__syncingChars = false;
                window.syncChars = async function () {
                    if (!localStorage.getItem('sia_email')) return;
                    if (window.__syncingChars) return;
                    window.__syncingChars = true;
                    try {
                        const server = await window.charCloud.list();
                        if (!server) return;
                        const serverIds = new Set(server.map(c => String(c.id)));
                        let local = await window.charDB.list();
                        // SELF-HEALING: server kosong total tapi lokal masih punya data cloud
                        // = kemungkinan sheet terhapus/dibersihkan manual. JANGAN hapus lokal —
                        // tandai ulang cloud:false supaya ter-upload balik ke server.
                        if (server.length === 0 && local.some(c => c.cloud === true)) {
                            for (const c of local) {
                                if (c.cloud === true) await window.charDB.put(Object.assign({}, c, { cloud: false }));
                            }
                            local = await window.charDB.list();
                        }
                        const localIds = new Set(local.map(c => String(c.id)));
                        for (const c of local) {
                            if (c.cloud === true && !serverIds.has(String(c.id))) { await window.charDB.remove(c.id); continue; }
                            if (c.cloud === false) {
                                try {
                                    const angles = [];
                                    for (const bl of c.blobs) angles.push(await window.blobToB64(bl));
                                    const d = await window.charCloud.upload({ id: c.id, name: c.name, niche: c.niche, cfg: c.cfg, angles });
                                    if (d && d.status === 'SUKSES') await window.charDB.put(Object.assign({}, c, { cloud: true }));
                                } catch (e) {}
                            }
                        }
                        // Download karakter yang belum ada lokal — SEMUA angle dalam 1 request (char_get_all),
                        // fallback ke per-angle paralel kalau backend lama
                        await Promise.all(server.filter(s => !localIds.has(String(s.id))).map(async (s) => {
                            try {
                                let b64s = await window.charCloud.getAll(s.id);
                                if (!b64s) b64s = await Promise.all([0, 1, 2, 3, 4].map(a => window.charCloud.get(s.id, a)));
                                if (b64s.every(Boolean)) {
                                    await window.charDB.put({
                                        id: String(s.id), name: s.name, niche: s.niche, cfg: s.cfg || {},
                                        blobs: b64s.map(b => window.b64ToBlob(b, 'image/jpeg')),
                                        createdAt: s.createdAt, cloud: true
                                    });
                                    document.dispatchEvent(new CustomEvent('sia-chars-changed'));
                                }
                            } catch (e) {}
                        }));
                    } catch (e) { console.error('syncChars:', e); }
                    window.__syncingChars = false;
                    document.dispatchEvent(new CustomEvent('sia-chars-changed'));
                };

                // ---- Client cloud foto outfit (pola sama dengan charCloud) ----
                window.oimgCloud = {
                    _q(action, extra) {
                        const email = localStorage.getItem('sia_email') || '';
                        return `${LOGIN_CFG.SCRIPT_URL}?action=${action}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(deviceToken)}&app_secret=${encodeURIComponent(LOGIN_CFG.APP_SECRET)}${extra || ''}`;
                    },
                    async listIds() {
                        const d = await fetch(this._q('oimg_list')).then(r => r.json());
                        return d.status === 'SUKSES' ? (d.ids || []) : null;
                    },
                    async getAll() {
                        const d = await fetch(this._q('oimg_get_all')).then(r => r.json());
                        return d.status === 'SUKSES' ? (d.items || []) : null;
                    },
                    async del(id) {
                        try {
                            const d = await fetch(this._q('oimg_del', `&id=${encodeURIComponent(id)}`)).then(r => r.json());
                            return d.status === 'SUKSES';
                        } catch (e) { return false; }
                    },
                    async upload(rec) {
                        const body = JSON.stringify({
                            sia_action: 'oimg_upload',
                            app_secret: LOGIN_CFG.APP_SECRET,
                            email: localStorage.getItem('sia_email') || '',
                            token: deviceToken,
                            id: rec.id, base64: rec.base64
                        });
                        const d = await fetch(LOGIN_CFG.SCRIPT_URL, { method: 'POST', body }).then(r => r.json());
                        return d;
                    }
                };
                // Aturan emas sama: JANGAN hapus lokal item cloud:false (pending upload)
                window.__syncingOimg = false;
                window.syncOutfitImgs = async function () {
                    if (!localStorage.getItem('sia_email') || !window.outfitImgDB) return;
                    if (window.__syncingOimg) return;
                    window.__syncingOimg = true;
                    try {
                        const server = await window.oimgCloud.listIds();
                        if (!server) return;
                        const serverIds = new Set(server.map(String));
                        let local = await window.outfitImgDB.list();
                        // SELF-HEALING: sama seperti karakter — server kosong + lokal ber-cloud = upload balik
                        if (server.length === 0 && local.some(i => i.cloud === true)) {
                            for (const it of local) {
                                if (it.cloud === true) await window.outfitImgDB.put(Object.assign({}, it, { cloud: false }));
                            }
                            local = await window.outfitImgDB.list();
                        }
                        const localIds = new Set(local.map(i => String(i.id)));
                        for (const it of local) {
                            if (it.cloud === true && !serverIds.has(String(it.id))) { await window.outfitImgDB.remove(it.id); continue; }
                            if (it.cloud !== true) {
                                try {
                                    const b64 = await window.blobToB64(it.blob);
                                    const d = await window.oimgCloud.upload({ id: it.id, base64: b64 });
                                    if (d && d.status === 'SUKSES') await window.outfitImgDB.put(Object.assign({}, it, { cloud: true }));
                                } catch (e) {}
                            }
                        }
                        const missing = server.filter(id => !localIds.has(String(id)));
                        if (missing.length) {
                            const items = await window.oimgCloud.getAll();
                            if (items) {
                                for (const s of items) {
                                    if (!localIds.has(String(s.id))) {
                                        await window.outfitImgDB.put({ id: String(s.id), blob: window.b64ToBlob(s.base64, 'image/jpeg'), cloud: true });
                                    }
                                }
                            }
                        }
                    } catch (e) { console.error('syncOutfitImgs:', e); }
                    window.__syncingOimg = false;
                    document.dispatchEvent(new CustomEvent('sia-oimg-changed'));
                };

                function showError(msg) {
                    errEl.textContent = msg;
                    errEl.classList.remove('hidden');
                }
                function setLoading(on) {
                    loadingEl.classList.toggle('hidden', !on);
                    loginBtn.disabled = on;
                }
                function clearSession() {
                    localStorage.removeItem('sia_email');
                    localStorage.removeItem('sia_name');
                }
                function openApp(nama) {
                    overlay.classList.add('hidden');
                    mainApp.classList.remove('hidden');
                    document.getElementById('user-name').textContent = nama;
                    if (!sesInterval) sesInterval = setInterval(jagaSesi, 10000);
                    if (window.syncChars) window.syncChars();
                    if (window.syncOutfitImgs) setTimeout(() => window.syncOutfitImgs(), 0);
                }
                async function jagaSesi() {
                    const email = localStorage.getItem('sia_email');
                    if (!email) return;
                    try {
                        const d = await api('cek', email);
                        if (d.status === 'INVALID') {
                            clearInterval(sesInterval);
                            await window.uiNotify(tf('warn.session-ended', 'Sesi berakhir. Akun login di perangkat lain.'));
                            clearSession();
                            location.reload();
                        }
                    } catch (e) {}
                }

                loginBtn.addEventListener('click', async () => {
                    errEl.classList.add('hidden');
                    const email = emailInput.value.trim().toLowerCase();
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(tf('err.login.invalid-email', 'Format email tidak valid.')); return; }
                    setLoading(true);
                    try {
                        const d = await api('login', email);
                        if (d.status === 'SUKSES') {
                            localStorage.setItem('sia_email', email);
                            localStorage.setItem('sia_name', d.nama || email);
                            openApp(d.nama || email);
                        } else {
                            showError(d.message || tf('err.login.failed', 'Login gagal. Coba lagi.'));
                        }
                    } catch (e) {
                        showError(tf('err.login.failed', 'Login gagal. Coba lagi.'));
                    }
                    setLoading(false);
                });
                emailInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') loginBtn.click(); });

                document.getElementById('logout-btn').addEventListener('click', async () => {
                    const email = localStorage.getItem('sia_email');
                    clearInterval(sesInterval);
                    if (email) { try { await api('logout', email); } catch (e) {} }
                    clearSession();
                    location.reload();
                });

                const buyLink = document.getElementById('buy-link');
                if (LOGIN_CFG.BUY_LYNK_URL.indexOf('YOUR-') === -1) {
                    buyLink.href = LOGIN_CFG.BUY_LYNK_URL;
                } else {
                    buyLink.parentElement.classList.add('hidden');
                }

                const savedEmail = localStorage.getItem('sia_email');
                const savedName = localStorage.getItem('sia_name');
                if (savedEmail && savedName) {
                    setLoading(true);
                    if (window.syncChars) window.syncChars();   // preload karakter SAMBIL cek sesi — tanpa await
                    if (window.syncOutfitImgs) setTimeout(() => window.syncOutfitImgs(), 0);   // preload foto outfit juga
                    api('cek', savedEmail)
                        .then(d => {
                            setLoading(false);
                            if (d.status === 'VALID') openApp(savedName);
                            else { clearSession(); }
                        })
                        .catch(() => { setLoading(false); openApp(savedName); });
                }
            })();

            // === TAB: BUAT INFLUENCER ===
            (function () {
                const IMG_MODEL = 'gemini-2.5-flash-image-preview';
                const API_URL = m => `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`;
                const SAFETY = [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ];
                window.SIA_GEN = { IMG_MODEL, API_URL, SAFETY };
                const tf = (k, fb) => { const v = window.t ? window.t(k) : null; return (v && v !== k) ? v : fb; };

                let masterB64 = null;
                let angleImages = [];
                let busy = false;

                const el = id => document.getElementById(id);
                const masterEmpty = el('ci-master-empty');
                const masterLoading = el('ci-master-loading');
                const masterWrap = el('ci-master-wrap');
                const masterImg = el('ci-master-img');
                const anglesCard = el('ci-angles-card');
                const anglesGrid = el('ci-angles-grid');
                const saveBtn = el('ci-save-btn');
                const charList = el('ci-char-list');
                const charCount = el('ci-char-count');

                const ANGLE_LABELS = ['Depan', '3/4 Kiri', '3/4 Kanan', 'Samping', 'Full Body'];
                const ANGLE_PROMPTS = [
                    'exact same front-facing angle, head and shoulders',
                    'three-quarter view facing left, head and shoulders',
                    'three-quarter view facing right, head and shoulders',
                    'full side profile view, head and shoulders',
                    'full body shot, standing, casual relaxed pose'
                ];

                // Chip single-select untuk semua grup di tab ini
                ['ci-gender', 'ci-age', 'ci-region', 'ci-vibe', 'ci-niche'].forEach(gid => {
                    el(gid).addEventListener('click', (e) => {
                        const btn = e.target.closest('button.option-btn');
                        if (!btn) return;
                        el(gid).querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                    });
                });

                function chipVal(gid, attr) {
                    const sel = el(gid).querySelector('.option-btn.selected');
                    return sel ? sel.getAttribute(attr) : '';
                }
                function collectForm() {
                    const custom = el('ci-niche-custom').value.trim();
                    return {
                        name: el('ci-name').value.trim(),
                        gender: chipVal('ci-gender', 'data-val'),
                        age: chipVal('ci-age', 'data-val'),
                        region: chipVal('ci-region', 'data-val'),
                        hair: el('ci-hair').value.trim() || 'natural neat hair',
                        style: el('ci-style').value.trim() || 'modern casual clothing',
                        vibe: chipVal('ci-vibe', 'data-val'),
                        niche: custom || chipVal('ci-niche', 'data-niche')
                    };
                }

                function buildMasterPrompt(f) {
                    return `Ultra realistic photo of a ${f.age} year old ${f.gender === 'woman' ? 'woman' : 'man'} social media influencer, ${f.region} appearance. ` +
                        `Hair: ${f.hair}. Clothing style: ${f.style}. Vibe: ${f.vibe}. ` +
                        `Front-facing head-and-shoulders portrait, natural daylight, realistic skin texture with visible pores, ` +
                        `amateur phone camera look, plain neutral background. No text, no watermark.`;
                }
                function buildAnglePrompt(i) {
                    return `Keep the person EXACTLY as in the provided photo - same face, same hair, same skin tone, same clothing, ` +
                        `do NOT alter the person's identity. Generate: ${ANGLE_PROMPTS[i]}. ` +
                        `Same neutral background and natural lighting as the reference. Ultra realistic, no text, no watermark.`;
                }

                async function generateOne(promptText, refB64) {
                    const parts = [{ text: promptText }];
                    if (refB64) parts.push({ inlineData: { mimeType: 'image/jpeg', data: refB64 } });
                    const response = await fetch(API_URL(IMG_MODEL), {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts }], safetySettings: SAFETY })
                    });
                    const result = await response.json();
                    const imageData = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
                    if (!imageData) throw new Error('No image data received');
                    return imageData;
                }
                window.SIA_GEN.generateOne = generateOne;

                async function generateMaster() {
                    if (busy) return;
                    busy = true;
                    masterEmpty.classList.add('hidden');
                    masterWrap.classList.add('hidden');
                    masterLoading.classList.remove('hidden');
                    anglesCard.classList.add('hidden');
                    saveBtn.classList.add('hidden');
                    angleImages = [];
                    try {
                        masterB64 = await generateOne(buildMasterPrompt(collectForm()), null);
                        masterImg.src = 'data:image/png;base64,' + masterB64;
                        masterWrap.classList.remove('hidden');
                    } catch (e) {
                        if (window.logDebug) window.logDebug('ci-master', String(e));
                        masterEmpty.classList.remove('hidden');
                        await window.uiNotify(tf('err.gen-failed', 'Generate gagal. Coba lagi — kalau berulang, akun Google ini mungkin capai batas, ganti akun.'));
                    }
                    masterLoading.classList.add('hidden');
                    busy = false;
                }
                el('ci-generate-master').addEventListener('click', generateMaster);
                el('ci-regen-master').addEventListener('click', generateMaster);

                function angleCardHtml(i) {
                    return `<div id="ci-angle-card-${i}" class="result-card">
                        <span class="image-counter">${ANGLE_LABELS[i]}</span>
                        <div class="aspect-[3/4] flex items-center justify-center text-violet-400"><i class="fas fa-circle-notch fa-spin text-2xl"></i></div>
                    </div>`;
                }

                el('ci-lock-btn').addEventListener('click', async () => {
                    if (busy || !masterB64) return;
                    busy = true;
                    anglesCard.classList.remove('hidden');
                    saveBtn.classList.add('hidden');
                    anglesGrid.innerHTML = Array.from({ length: 5 }, (_, i) => angleImages[i]
                        ? `<div id="ci-angle-card-${i}" class="result-card"><span class="image-counter">${ANGLE_LABELS[i]}</span><img src="data:image/png;base64,${angleImages[i]}" alt="${ANGLE_LABELS[i]}"></div>`
                        : angleCardHtml(i)).join('');
                    let attempt = 0;
                    while (attempt < 3) {
                        attempt++;
                        const missing = [];
                        for (let i = 0; i < 5; i++) if (!angleImages[i]) missing.push(i);
                        if (!missing.length) break;
                        await Promise.allSettled(missing.map(i =>
                            generateOne(buildAnglePrompt(i), masterB64).then(b64 => {
                                angleImages[i] = b64;
                                el(`ci-angle-card-${i}`).innerHTML =
                                    `<span class="image-counter">${ANGLE_LABELS[i]}</span><img src="data:image/png;base64,${b64}" alt="${ANGLE_LABELS[i]}">`;
                            }).catch(err => { if (window.logDebug) window.logDebug('ci-angle-' + i, String(err)); })
                        ));
                    }
                    const done = angleImages.filter(Boolean).length;
                    if (done === 5) {
                        saveBtn.classList.remove('hidden');
                    } else {
                        await window.uiNotify(tf('err.angle-partial', 'Sebagian angle gagal dibuat. Klik "Kunci Karakter" lagi untuk melengkapi yang kosong.'));
                    }
                    busy = false;
                });

                saveBtn.addEventListener('click', async () => {
                    if (busy) return;
                    const f = collectForm();
                    if (!f.name) { await window.uiNotify(tf('err.no-name', 'Kasih nama karakter dulu ya.')); return; }
                    if (!f.niche) { await window.uiNotify(tf('err.no-niche', 'Pilih atau ketik niche dulu ya.')); return; }
                    if (angleImages.filter(Boolean).length !== 5) { await window.uiNotify(tf('err.angle-incomplete', '5 foto angle belum lengkap.')); return; }
                    const existing = await window.charDB.list();
                    if (existing.length >= 2) { await window.uiNotify(tf('err.char-limit', 'Maksimal 2 karakter. Hapus salah satu dulu.')); return; }
                    busy = true;
                    saveBtn.disabled = true;
                    // Kompres tiap angle (PNG mentah Gemini bisa 2+ MB) → JPEG 1024px ±10x lebih kecil.
                    // Efek: upload cepat, sync antar perangkat cepat, referensi generate tetap tajam.
                    const compressed = [];
                    for (const raw of angleImages) {
                        try {
                            const c = await window.compressImage('data:image/png;base64,' + raw, 1024, 0.85);
                            compressed.push(c.b64);
                        } catch (e) { compressed.push(raw); }
                    }
                    const rec = {
                        id: 'c' + Date.now(),
                        name: f.name,
                        niche: f.niche,
                        cfg: f,
                        blobs: compressed.map(b64 => window.b64ToBlob(b64, 'image/jpeg')),
                        createdAt: new Date().toISOString(),
                        cloud: false
                    };
                    try {
                        const d = await window.charCloud.upload({ id: rec.id, name: rec.name, niche: rec.niche, cfg: rec.cfg, angles: compressed.slice(0, 5) });
                        if (d && d.status === 'SUKSES') {
                            rec.cloud = true;
                        } else if (d && d.code === 'LIMIT') {
                            await window.uiNotify(d.message || tf('err.char-limit', 'Maksimal 2 karakter. Hapus salah satu dulu.'));
                            busy = false; saveBtn.disabled = false;
                            return;
                        }
                    } catch (e) { /* offline / backend belum siap → simpan lokal cloud:false */ }
                    await window.charDB.put(rec);
                    localStorage.setItem('sia_active_char', rec.id);
                    document.dispatchEvent(new CustomEvent('sia-chars-changed'));
                    saveBtn.classList.add('hidden');
                    saveBtn.disabled = false;
                    busy = false;
                    await window.uiNotify(tf('ci.saved', 'Karakter tersimpan! Sekarang buka tab sesi foto untuk mulai generate.'));
                });

                // ---- Daftar karakter + selector aktif ----
                window.getActiveChar = async function () {
                    const list = await window.charDB.list();
                    if (!list.length) return null;
                    const id = localStorage.getItem('sia_active_char');
                    return list.find(c => String(c.id) === String(id)) || list[0];
                };

                async function renderChars() {
                    const list = await window.charDB.list();
                    charCount.textContent = `${list.length}/2`;
                    const activeId = localStorage.getItem('sia_active_char');
                    const activeChar = list.find(c => String(c.id) === String(activeId)) || list[0];
                    charList.querySelectorAll('.ci-char-card').forEach(n => n.remove());
                    el('ci-char-empty').classList.toggle('hidden', list.length > 0);
                    list.forEach(c => {
                        const div = document.createElement('div');
                        div.className = 'ci-char-card result-card p-3 flex items-center gap-3' + (activeChar && c.id === activeChar.id ? ' ring-2 ring-violet-500' : '');
                        const url = URL.createObjectURL(c.blobs[0]);
                        div.innerHTML = `
                            <img src="${url}" class="w-14 h-14 rounded-full object-cover flex-shrink-0" style="width:3.5rem;height:3.5rem;object-fit:cover;" alt="">
                            <div class="min-w-0 flex-1">
                                <p class="font-semibold text-sm text-gray-800 truncate"></p>
                                <p class="text-xs text-gray-400 truncate"></p>
                                <p class="text-[10px] mt-0.5 ${c.cloud ? 'text-emerald-500' : 'text-amber-500'}">
                                    <i class="fas ${c.cloud ? 'fa-cloud' : 'fa-clock'} mr-0.5"></i>${c.cloud ? 'Cloud' : 'Pending'}
                                </p>
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <button class="icon-btn" style="background:#7c3aed;width:36px;height:36px;" data-action="select" data-id="${c.id}" title="Jadikan aktif" aria-label="Jadikan aktif"><i class="fas fa-check"></i></button>
                                <button class="icon-btn" style="background:#dc2626;width:36px;height:36px;" data-action="delete" data-id="${c.id}" title="Hapus" aria-label="Hapus"><i class="fas fa-trash"></i></button>
                            </div>`;
                        div.querySelector('p.font-semibold').textContent = c.name;
                        div.querySelector('p.text-xs').textContent = c.niche;
                        charList.appendChild(div);
                    });
                }

                charList.addEventListener('click', async (e) => {
                    const btn = e.target.closest('button[data-action]');
                    if (!btn) return;
                    const id = btn.dataset.id;
                    if (btn.dataset.action === 'select') {
                        localStorage.setItem('sia_active_char', id);
                        document.dispatchEvent(new CustomEvent('sia-chars-changed'));
                    }
                    if (btn.dataset.action === 'delete') {
                        const list = await window.charDB.list();
                        const c = list.find(x => String(x.id) === String(id));
                        if (!c) return;
                        if (!(await window.uiConfirm(tf('ci.del-confirm', 'Hapus karakter ini? Foto di cloud ikut terhapus.')))) return;
                        if (c.cloud === true) {
                            const ok = await window.charCloud.del(id);
                            if (!ok) { await window.uiNotify(tf('err.del-failed', 'Gagal menghapus di cloud. Coba lagi.')); return; }
                        }
                        await window.charDB.remove(id);
                        if (localStorage.getItem('sia_active_char') === String(id)) localStorage.removeItem('sia_active_char');
                        document.dispatchEvent(new CustomEvent('sia-chars-changed'));
                    }
                });

                document.addEventListener('sia-chars-changed', renderChars);
                renderChars();
            })();
            // === END TAB: BUAT INFLUENCER ===

            // === FACTORY: TAB FOTO ===
            window.showImagePreview = function (src) {
                const m = document.createElement('div');
                m.className = 'image-preview-modal';
                m.innerHTML = `<img src="${src}" style="max-height:85vh;max-width:92vw;border-radius:0.75rem;" alt="">`;
                m.addEventListener('click', () => { m.classList.remove('show'); setTimeout(() => m.remove(), 200); });
                document.body.appendChild(m);
                setTimeout(() => m.classList.add('show'), 10);
            };

            const RATIO_TEXT = {
                '9:16': 'vertical 9:16 portrait orientation',
                '1:1': 'square 1:1 format',
                '3:4': 'portrait 3:4 format',
                '16:9': 'wide 16:9 landscape orientation'
            };
            // Set studio TERKUNCI (deskripsi identik tiap generate = feed konsisten seperti akun podcast profesional)
            const STUDIO_SETS = {
                'dark-luxury': 'an aesthetic dark podcast studio: deep charcoal wall panels, warm amber practical lamps glowing softly, a dark wooden desk, a professional broadcast microphone on a boom arm in front of the person, subtle green plants and a softly lit bookshelf in the background, moody premium cinematic atmosphere',
                'warm-cozy': 'a warm aesthetic podcast studio: vertical wood slat wall panels with warm amber LED light strips glowing between them, lush green plants, a floating wooden shelf with books, decor and a small warm lamp, a dark wooden desk, a professional broadcast microphone on a boom arm beside the person, warm golden cozy glow',
                'minimal-bright': 'a clean minimalist podcast studio: soft white and beige walls, gentle diffused daylight, a light wooden desk with a professional broadcast microphone on a boom arm in front of the person, airy premium editorial look',
                'broadcast-neon': 'a modern broadcast studio: dark walls with subtle warm neon accent lighting strips, a sleek desk with a professional broadcast microphone on a boom arm in front of the person, premium late-night show atmosphere',
                'stage-seminar': 'a professional seminar stage: warm spotlights from above, an elegant dark stage backdrop with soft golden bokeh lights, blurred audience silhouettes in the dark foreground, premium live talkshow event atmosphere'
            };
            const STUDIO_SET_LABELS = {
                'dark-luxury': 'Gelap Elegan',
                'warm-cozy': 'Hangat Cozy',
                'minimal-bright': 'Minimalis Terang',
                'broadcast-neon': 'Broadcast Neon',
                'stage-seminar': 'Panggung Seminar'
            };

            function clothingText(outfit, productCount, styleStr) {
                if (productCount > 0) {
                    return `The FIRST TWO reference images show the person. The remaining ${productCount} reference image(s) are PRODUCT references ` +
                        `(clothing, shoes, bags, accessories). The person MUST wear or use these exact products - keep each product's design, ` +
                        `colors, materials, logos and details EXACTLY as shown in the product references, combined into one natural complete outfit.` +
                        (outfit ? ` Additional outfit notes: ${outfit}.` : '');
                }
                if (outfit) {
                    return `Wearing: ${outfit} (outfit may differ from the reference photos - only face and identity must stay the same).`;
                }
                return `Clothing style consistent with: ${styleStr}.`;
            }

            function buildStudioPrompt(scene, ratio, char, outfit, productCount, setKey, program) {
                const f = (char && char.cfg) || {};
                const sign = program
                    ? `An elegant physical sign with the text "${program}" in EXACT correct spelling is part of the backdrop set behind the person, softly lit (printed or neon signage built into the set - never a digital text overlay). `
                    : '';
                return `Keep the person EXACTLY as in the first two reference photos - same face, same hair, same skin tone, ` +
                    `do NOT alter the person's identity. ` +
                    `Professional aesthetic podcast content photo, looking like a frame from a high-end podcast video: ` +
                    `the person ${scene}, in ${STUDIO_SETS[setKey] || STUDIO_SETS['dark-luxury']}. ` +
                    sign +
                    clothingText(outfit, productCount, f.style || 'elegant modest clothing') + ' ' +
                    `Shot on a professional cinema camera, shallow depth of field, soft warm key light on the face, ` +
                    `cinematic color grade, consistent premium set design and framing across the whole feed. ` +
                    `${RATIO_TEXT[ratio] || RATIO_TEXT['9:16']}, ${program ? 'no watermark' : 'no text, no watermark'}.`;
            }

            const CAM_TEXT = {
                selfie: 'Shot as a real SELFIE taken by the person themselves with their phone front camera: ' +
                    'one arm extended toward the camera holding the phone (arm and hand partially visible at the edge of the frame), ' +
                    'face fairly close to the lens, looking into the camera, slight high angle, ' +
                    'natural selfie framing with mild wide-angle front-camera distortion',
                candid: 'Candid photo taken by another person from a few steps away, natural unposed moment'
            };
            function buildPhotoPrompt(scene, ratio, char, outfit, productCount, cam, opts) {
                const o = opts || {};
                const f = (char && char.cfg) || {};
                // defaultOutfit tab (mis. mukena) menang atas gaya pakaian dasar karakter
                const styleStr = o.defaultOutfit || f.style || 'modern casual clothing';
                const clothing = clothingText(outfit, productCount, styleStr);
                const quality = o.qualityText ||
                    'Realistic lighting, amateur smartphone photo look, slight natural imperfection, no studio pose';
                return `Keep the person EXACTLY as in the first two reference photos - same face, same hair, same skin tone, ` +
                    `do NOT alter the person's identity. Only change the scene: ${scene}. ` +
                    clothing + ` ` +
                    `${CAM_TEXT[cam] || CAM_TEXT.selfie}. ` +
                    `${quality}, ${RATIO_TEXT[ratio] || RATIO_TEXT['9:16']}, no text, no watermark.`;
            }

            // Pustaka outfit tersimpan (per perangkat, max 10) — dipakai bersama semua tab foto
            const OUTFIT_MAX = 10;
            window.escHtml = window.escHtml || function (s) {
                return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
            };
            window.getOutfits = function () {
                try {
                    const a = JSON.parse(localStorage.getItem('sia_outfits') || '[]');
                    return Array.isArray(a) ? a : [];
                } catch (e) { return []; }
            };
            function setOutfits(list) {
                localStorage.setItem('sia_outfits', JSON.stringify(list.slice(0, OUTFIT_MAX)));
                document.dispatchEvent(new CustomEvent('sia-outfits-changed'));
            }

            // Pustaka FOTO produk/outfit (IndexedDB, per perangkat, max 10 tersimpan) —
            // dipilih max 5 per generate sebagai referensi produk (konten affiliate)
            const OIMG_MAX = 10;
            const OIMG_SEL_MAX = 5;
            window.outfitImgDB = (function () {
                const DB = 'sia_outfit_imgs', STORE = 'items';
                function open() {
                    return new Promise((resolve, reject) => {
                        const req = indexedDB.open(DB, 1);
                        req.onupgradeneeded = () => {
                            if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE, { keyPath: 'id' });
                        };
                        req.onsuccess = () => resolve(req.result);
                        req.onerror = () => reject(req.error);
                    });
                }
                async function tx(mode, fn) {
                    const db = await open();
                    return new Promise((resolve, reject) => {
                        const t = db.transaction(STORE, mode);
                        const out = fn(t.objectStore(STORE));
                        t.oncomplete = () => { db.close(); resolve(out.result !== undefined ? out.result : out.value); };
                        t.onerror = () => { db.close(); reject(t.error); };
                    });
                }
                return {
                    list() { return tx('readonly', s => s.getAll()).then(r => r || []); },
                    put(rec) { return tx('readwrite', s => s.put(rec)); },
                    remove(id) { return tx('readwrite', s => s.delete(id)); }
                };
            })();

            async function genImageWithRefs(promptText, refs) {
                const g = window.SIA_GEN;
                const parts = [{ text: promptText }];
                refs.forEach(r => parts.push({ inlineData: { mimeType: 'image/jpeg', data: r } }));
                const response = await fetch(g.API_URL(g.IMG_MODEL), {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts }], safetySettings: g.SAFETY })
                });
                const result = await response.json();
                const imageData = result?.candidates?.[0]?.content?.parts?.find(pp => pp.inlineData)?.inlineData?.data;
                if (!imageData) throw new Error('No image data received');
                return imageData;
            }

            function createPhotoTab(cfg) {
                const p = cfg.tab;
                const host = document.getElementById('content-' + p);

                host.innerHTML = `
                    <h2 class="text-lg font-bold text-gray-800 mb-4" data-i18n="nav.${p}"></h2>
                    <div id="${p}-char-strip" class="mb-4"></div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        <div class="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">1</span><h3 class="font-semibold text-gray-800" data-i18n="pt.step-scene"></h3></div>
                                <div class="grid grid-cols-2 gap-2" data-scene-group>
                                    <button type="button" class="option-btn selected" data-scene="__random">Acak</button>
                                    ${cfg.scenes.map(s => `<button type="button" class="option-btn" data-scene="${s.val}">${s.label}</button>`).join('')}
                                </div>
                            </div>
                            ${cfg.studio ? `
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">2</span><h3 class="font-semibold text-gray-800" data-i18n="pt.step-set"></h3></div>
                                <div class="grid grid-cols-2 gap-2" data-set-group>
                                    ${Object.keys(STUDIO_SETS).map((k, i) => `<button type="button" class="option-btn${i === 0 ? ' selected' : ''}" data-set="${k}">${STUDIO_SET_LABELS[k]}</button>`).join('')}
                                </div>
                                <label class="text-xs font-medium text-gray-500 block mt-4 mb-1" data-i18n="pt.program-label"></label>
                                <input id="${p}-program" type="text" maxlength="40" class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" data-i18n-placeholder="pt.program-ph" placeholder="contoh: Ruang Bertumbuh">
                            </div>` : `
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">2</span><h3 class="font-semibold text-gray-800" data-i18n="pt.step-cam"></h3></div>
                                <div class="grid grid-cols-2 gap-2" data-cam-group>
                                    <button type="button" class="option-btn${(cfg.defaultCam || 'selfie') === 'selfie' ? ' selected' : ''}" data-cam="selfie">Selfie Sendiri</button>
                                    <button type="button" class="option-btn${cfg.defaultCam === 'candid' ? ' selected' : ''}" data-cam="candid">Difotoin Orang</button>
                                </div>
                            </div>`}
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">3</span><h3 class="font-semibold text-gray-800" data-i18n="pt.outfit-label"></h3></div>
                                <div class="flex gap-2">
                                    <input id="${p}-outfit" type="text" maxlength="120" class="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2.5 text-sm" data-i18n-placeholder="pt.outfit-ph" placeholder="contoh: gamis hitam elegan / kaos putih + jeans">
                                    <button type="button" id="${p}-outfit-save" class="btn-secondary rounded-lg px-3 flex-shrink-0" style="min-width:44px;" title="Simpan outfit" aria-label="Simpan outfit"><i class="fas fa-bookmark"></i></button>
                                </div>
                                <div id="${p}-outfit-chips" class="flex flex-wrap gap-2 mt-3"></div>
                                <p class="text-xs text-gray-500 mt-4 mb-2" data-i18n="pt.oimg-sub"></p>
                                <div id="${p}-oimg-grid" class="flex flex-wrap gap-3"></div>
                                <input type="file" id="${p}-oimg-file" accept="image/*" multiple class="hidden">
                            </div>
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">4</span><h3 class="font-semibold text-gray-800" data-i18n="pt.step-ratio"></h3></div>
                                <div class="grid grid-cols-4 gap-2" data-ratio-group>
                                    <button type="button" class="option-btn selected" data-ratio="9:16">9:16</button>
                                    <button type="button" class="option-btn" data-ratio="1:1">1:1</button>
                                    <button type="button" class="option-btn" data-ratio="3:4">3:4</button>
                                    <button type="button" class="option-btn" data-ratio="16:9">16:9</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="flex items-center gap-3 mb-4"><span class="step-num">5</span><h3 class="font-semibold text-gray-800" data-i18n="pt.step-count"></h3></div>
                                <div class="grid grid-cols-5 gap-2" data-count-group>
                                    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<button type="button" class="option-btn${n === 4 ? ' selected' : ''}" data-count="${n}">${n}</button>`).join('')}
                                </div>
                            </div>
                            <button id="${p}-generate" class="btn-primary w-full rounded-lg py-3 font-semibold text-sm"><i class="fas fa-bolt mr-2"></i><span data-i18n="pt.generate"></span></button>
                        </div>
                        <div class="lg:col-span-2 space-y-6">
                            <div class="card">
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="font-semibold text-gray-800" data-i18n="pt.results"></h3>
                                    <button id="${p}-dl-all" class="btn-secondary rounded-lg px-3 py-2 text-xs font-semibold hidden"><i class="fas fa-download mr-1"></i><span data-i18n="pt.dl-all"></span></button>
                                </div>
                                <div id="${p}-empty-state" class="text-center py-12 text-gray-400">
                                    <i class="fas fa-images text-4xl mb-3"></i>
                                    <p class="text-sm" data-i18n="pt.empty"></p>
                                </div>
                                <div id="${p}-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
                            </div>
                            <div class="tips-box">
                                <p class="font-semibold mb-1"><i class="fas fa-lightbulb mr-1"></i><span data-i18n="ci.tips-title"></span></p>
                                <ul class="list-disc list-inside space-y-0.5">
                                    <li data-i18n="pt.tip1"></li>
                                    <li data-i18n="pt.tip2"></li>
                                    <li data-i18n="pt.tip3"></li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

                let selectedCount = 4;
                let selectedRatio = '9:16';
                let selectedCam = cfg.defaultCam || 'selfie';
                let selectedSet = 'dark-luxury';
                let results = [];
                let busy = false;

                const grid = document.getElementById(`${p}-grid`);
                const emptyState = document.getElementById(`${p}-empty-state`);
                const dlAll = document.getElementById(`${p}-dl-all`);
                const strip = document.getElementById(`${p}-char-strip`);

                // Chip single-select per grup
                [['data-scene-group', 'data-scene'], ['data-cam-group', 'data-cam'], ['data-set-group', 'data-set'], ['data-ratio-group', 'data-ratio'], ['data-count-group', 'data-count']].forEach(([group, attr]) => {
                    const groupEl = host.querySelector(`[${group}]`);
                    if (!groupEl) return; // grup opsional (cam vs set) tergantung jenis tab
                    groupEl.addEventListener('click', (e) => {
                        const btn = e.target.closest(`button[${attr}]`);
                        if (!btn) return;
                        host.querySelectorAll(`[${group}] .option-btn`).forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        if (attr === 'data-cam') selectedCam = btn.dataset.cam;
                        if (attr === 'data-set') selectedSet = btn.dataset.set;
                        if (attr === 'data-ratio') selectedRatio = btn.dataset.ratio;
                        if (attr === 'data-count') selectedCount = Number(btn.dataset.count);
                    });
                });

                // ---- Chip outfit tersimpan ----
                const outfitInput = document.getElementById(`${p}-outfit`);
                const outfitChips = document.getElementById(`${p}-outfit-chips`);
                function renderOutfits() {
                    const esc = window.escHtml;
                    outfitChips.innerHTML = window.getOutfits().map((o, i) =>
                        `<button type="button" class="option-btn" data-outfit-idx="${i}" style="display:inline-flex;align-items:center;gap:0.4rem;min-height:40px;">` +
                        `${esc(o)}<span data-outfit-del="${i}" class="text-gray-400 hover:text-red-500 px-1" role="button" aria-label="Hapus outfit">×</span></button>`
                    ).join('');
                }
                document.addEventListener('sia-outfits-changed', renderOutfits);
                renderOutfits();
                outfitChips.addEventListener('click', (e) => {
                    const del = e.target.closest('[data-outfit-del]');
                    if (del) {
                        const list = window.getOutfits();
                        list.splice(Number(del.dataset.outfitDel), 1);
                        setOutfits(list);
                        return;
                    }
                    const chip = e.target.closest('[data-outfit-idx]');
                    if (!chip) return;
                    outfitInput.value = window.getOutfits()[Number(chip.dataset.outfitIdx)] || '';
                    outfitChips.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    chip.classList.add('selected');
                });
                outfitInput.addEventListener('input', () => {
                    outfitChips.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                });
                document.getElementById(`${p}-outfit-save`).addEventListener('click', async () => {
                    const v = outfitInput.value.trim();
                    if (!v) { await window.uiNotify(window.t('err.outfit-empty')); return; }
                    const list = window.getOutfits();
                    if (list.some(o => o.toLowerCase() === v.toLowerCase())) { await window.uiNotify(window.t('pt.outfit-dup')); return; }
                    if (list.length >= OUTFIT_MAX) { await window.uiNotify(window.t('err.outfit-limit')); return; }
                    list.push(v.slice(0, 120));
                    setOutfits(list);
                });

                // ---- Foto produk/outfit (pustaka bersama antar tab, pilih max 5) ----
                const oimgGrid = document.getElementById(`${p}-oimg-grid`);
                const oimgFile = document.getElementById(`${p}-oimg-file`);
                const oimgSel = new Set();
                async function renderOimg() {
                    const items = await window.outfitImgDB.list();
                    for (const id of [...oimgSel]) if (!items.some(it => String(it.id) === id)) oimgSel.delete(id);
                    oimgGrid.innerHTML = items.map(it => {
                        const url = URL.createObjectURL(it.blob);
                        const on = oimgSel.has(String(it.id));
                        return `<div class="relative" style="width:4rem;height:4rem;">
                            <button type="button" data-oimg="${it.id}" class="block rounded-lg overflow-hidden" style="width:4rem;height:4rem;border:3px solid ${on ? '#7c3aed' : '#e2e8f0'};">
                                <img src="${url}" style="width:100%;height:100%;object-fit:cover;" alt="">
                            </button>
                            ${on ? '<span class="absolute bottom-0.5 left-0.5 w-4 h-4 rounded-full text-white text-[9px] flex items-center justify-center" style="background:#7c3aed;"><i class="fas fa-check"></i></span>' : ''}
                            <button type="button" data-oimg-del="${it.id}" class="absolute rounded-full bg-red-500 text-white flex items-center justify-center" style="top:-0.4rem;right:-0.4rem;width:1.4rem;height:1.4rem;font-size:0.7rem;" aria-label="Hapus foto">×</button>
                        </div>`;
                    }).join('') +
                    `<button type="button" id="${p}-oimg-add" class="rounded-lg text-gray-400 hover:text-violet-500" style="width:4rem;height:4rem;border:2px dashed #cbd5e1;" aria-label="Upload foto produk"><i class="fas fa-plus"></i></button>`;
                }
                document.addEventListener('sia-oimg-changed', renderOimg);
                renderOimg();
                oimgGrid.addEventListener('click', async (e) => {
                    const addBtn = e.target.closest(`#${p}-oimg-add`);
                    if (addBtn) { oimgFile.click(); return; }
                    const del = e.target.closest('[data-oimg-del]');
                    if (del) {
                        const delId = String(del.dataset.oimgDel);
                        const all = await window.outfitImgDB.list();
                        const item = all.find(x => String(x.id) === delId);
                        if (item && item.cloud === true && window.oimgCloud) {
                            const ok = await window.oimgCloud.del(delId);
                            if (!ok) { await window.uiNotify(window.t('err.del-failed')); return; }
                        }
                        await window.outfitImgDB.remove(delId);
                        oimgSel.delete(delId);
                        document.dispatchEvent(new CustomEvent('sia-oimg-changed'));
                        return;
                    }
                    const thumb = e.target.closest('[data-oimg]');
                    if (!thumb) return;
                    const id = String(thumb.dataset.oimg);
                    if (oimgSel.has(id)) oimgSel.delete(id);
                    else {
                        if (oimgSel.size >= OIMG_SEL_MAX) { await window.uiNotify(window.t('err.oimg-sel')); return; }
                        oimgSel.add(id);
                    }
                    renderOimg();
                });
                oimgFile.addEventListener('change', async () => {
                    const files = Array.from(oimgFile.files || []);
                    oimgFile.value = '';
                    if (!files.length) return;
                    let items = await window.outfitImgDB.list();
                    for (const file of files) {
                        if (items.length >= OIMG_MAX) { await window.uiNotify(window.t('err.oimg-limit')); break; }
                        try {
                            let src = file;
                            if (file.type === 'image/heic' || /\.heic$/i.test(file.name || '')) {
                                src = await heic2any({ blob: file, toType: 'image/jpeg' });
                            }
                            const { blob, b64 } = await window.compressImage(src, 768, 0.85);
                            const newId = 'o' + Date.now() + Math.floor(Math.random() * 1000);
                            const rec = { id: newId, blob, cloud: false };
                            try {
                                const d = window.oimgCloud ? await window.oimgCloud.upload({ id: newId, base64: b64 }) : null;
                                if (d && d.status === 'SUKSES') rec.cloud = true;
                                else if (d && d.code === 'LIMIT') { await window.uiNotify(d.message || window.t('err.oimg-limit')); continue; }
                            } catch (e2) { /* offline → tetap simpan lokal cloud:false, sync menyusul */ }
                            await window.outfitImgDB.put(rec);
                            items = await window.outfitImgDB.list();
                        } catch (err) {
                            if (window.logDebug) window.logDebug(p + '-oimg', String(err));
                            await window.uiNotify(window.t('err.oimg-read'));
                        }
                    }
                    document.dispatchEvent(new CustomEvent('sia-oimg-changed'));
                });
                async function selectedProductB64s(ids) {
                    const items = await window.outfitImgDB.list();
                    const out = [];
                    for (const it of items) {
                        if (ids.includes(String(it.id)) && out.length < OIMG_SEL_MAX) out.push(await window.blobToB64(it.blob));
                    }
                    return out;
                }

                async function renderStrip() {
                    const c = await window.getActiveChar();
                    if (!c) {
                        strip.innerHTML = `<div class="card" style="border-color:#fcd34d;background:#fffbeb;">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-triangle-exclamation text-amber-500"></i>
                                <p class="text-sm text-amber-700 flex-1" data-i18n="pt.no-char"></p>
                                <button class="btn-primary rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap" data-goto="buat-influencer"><span data-i18n="nav.buat-influencer"></span></button>
                            </div>
                        </div>`;
                    } else {
                        const url = URL.createObjectURL(c.blobs[0]);
                        strip.innerHTML = `<div class="card">
                            <div class="flex items-center gap-3">
                                <img src="${url}" style="width:2.75rem;height:2.75rem;object-fit:cover;border-radius:9999px;" alt="">
                                <div class="min-w-0 flex-1">
                                    <p class="text-[10px] uppercase tracking-wide text-gray-400" data-i18n="pt.char-active"></p>
                                    <p class="font-semibold text-sm text-gray-800 truncate">${String(c.name).replace(/[<>&"]/g, '')}</p>
                                </div>
                                <button class="btn-secondary rounded-lg px-3 py-2 text-xs font-semibold" data-goto="buat-influencer"><i class="fas fa-repeat"></i></button>
                            </div>
                        </div>`;
                    }
                    if (window._i18nApplyNow) window._i18nApplyNow();
                }
                document.addEventListener('sia-chars-changed', renderStrip);
                renderStrip();

                const spinnerCard = (index) => `<div id="${p}-card-${index}" class="result-card"><span class="image-counter">#${index}</span><div class="aspect-[3/4] flex items-center justify-center text-violet-400"><i class="fas fa-circle-notch fa-spin text-2xl"></i></div></div>`;
                const cardInner = (index, b64) => `
                    <span class="image-counter">#${index}</span>
                    <img src="data:image/png;base64,${b64}" alt="#${index}">
                    <div class="result-card-actions">
                        <button class="icon-btn" style="background:#3b82f6;" data-action="preview" data-index="${index - 1}" title="Preview" aria-label="Preview"><i class="fas fa-eye"></i></button>
                        <button class="icon-btn" style="background:#22c55e;" data-action="regen" data-index="${index - 1}" title="Regenerate" aria-label="Regenerate"><i class="fas fa-rotate"></i></button>
                        <button class="icon-btn" style="background:#0891b2;" data-action="download" data-index="${index - 1}" title="Download" aria-label="Download"><i class="fas fa-download"></i></button>
                        <button class="icon-btn" style="background:#d946ef;" data-action="video" data-index="${index - 1}" title="Prompt Video" aria-label="Prompt Video"><i class="fas fa-video"></i></button>
                    </div>`;

                function renderSuccessful() {
                    results = results.filter(Boolean);
                    grid.innerHTML = results.map((r, i) => `<div id="${p}-card-${i + 1}" class="result-card">${cardInner(i + 1, r.b64)}</div>`).join('');
                    dlAll.classList.toggle('hidden', results.length === 0);
                }

                document.getElementById(`${p}-generate`).addEventListener('click', async () => {
                    if (busy) return;
                    const char = await window.getActiveChar();
                    if (!char) { await window.uiNotify(window.t('pt.no-char')); return; }
                    busy = true;
                    const selScene = host.querySelector('[data-scene-group] .option-btn.selected');
                    const sceneVal = selScene ? selScene.dataset.scene : '__random';
                    const count = selectedCount;
                    let picks = [];
                    if (sceneVal === '__random') {
                        const pool = cfg.scenes.map(s => s.val);
                        for (let i = pool.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [pool[i], pool[j]] = [pool[j], pool[i]];
                        }
                        while (picks.length < count) picks = picks.concat(pool);
                        picks = picks.slice(0, count);
                    } else {
                        picks = Array(count).fill(sceneVal);
                    }
                    let refFront, refBody;
                    try {
                        refFront = await window.blobToB64(char.blobs[0]);
                        refBody = await window.blobToB64(char.blobs[4]);
                    } catch (e) {
                        if (window.logDebug) window.logDebug(p + '-refs', String(e));
                        await window.uiNotify(window.t('err.gen-failed'));
                        busy = false;
                        return;
                    }
                    const outfit = document.getElementById(`${p}-outfit`).value.trim();
                    const oimgIds = [...oimgSel];
                    const prodB64s = await selectedProductB64s(oimgIds);
                    results = [];
                    emptyState.classList.add('hidden');
                    dlAll.classList.add('hidden');
                    grid.innerHTML = picks.map((_, i) => spinnerCard(i + 1)).join('');

                    const programVal = cfg.studio ? (document.getElementById(`${p}-program`).value.trim()) : '';
                    async function genOne(index) {
                        const promptText = cfg.studio
                            ? buildStudioPrompt(picks[index - 1], selectedRatio, char, outfit, prodB64s.length, selectedSet, programVal)
                            : buildPhotoPrompt(picks[index - 1], selectedRatio, char, outfit, prodB64s.length, selectedCam, cfg.promptOpts);
                        const b64 = await genImageWithRefs(promptText, [refFront, refBody, ...prodB64s]);
                        results[index - 1] = { b64, scene: picks[index - 1], outfit, oimgIds, cam: selectedCam, set: selectedSet, program: programVal, filename: `${p}-${index}.png` };
                        const card = document.getElementById(`${p}-card-${index}`);
                        if (card) card.innerHTML = cardInner(index, b64);
                    }
                    let attempt = 0;
                    while (attempt < 3) {
                        attempt++;
                        await Promise.allSettled(picks.map((_, i) => results[i]
                            ? Promise.resolve()
                            : genOne(i + 1).catch(err => {
                                const card = document.getElementById(`${p}-card-${i + 1}`);
                                if (card) card.innerHTML = '';
                                if (window.logDebug) window.logDebug(p + '-gen', String(err));
                            })
                        ));
                        if (results.filter(Boolean).length > 0) break;
                    }
                    renderSuccessful();
                    if (results.length === 0) {
                        emptyState.classList.remove('hidden');
                        await window.uiNotify(window.t('err.gen-failed'));
                    }
                    busy = false;
                });

                grid.addEventListener('click', async (e) => {
                    const btn = e.target.closest('button[data-action]');
                    if (!btn) return;
                    const action = btn.dataset.action;
                    const idx = Number(btn.dataset.index);
                    const r = results[idx];
                    if (!r) return;
                    if (action === 'preview') {
                        window.showImagePreview('data:image/png;base64,' + r.b64);
                    }
                    if (action === 'download') {
                        await window.downloadImage('data:image/png;base64,' + r.b64, r.filename);
                    }
                    if (action === 'video') {
                        const char = await window.getActiveChar();
                        if (window.showVideoPromptModal) {
                            window.showVideoPromptModal({ scene: r.scene, char, card: btn.closest('.result-card') });
                        }
                    }
                    if (action === 'regen') {
                        if (busy) return;
                        busy = true;
                        const card = document.getElementById(`${p}-card-${idx + 1}`);
                        card.innerHTML = `<span class="image-counter">#${idx + 1}</span><div class="aspect-[3/4] flex items-center justify-center text-violet-400"><i class="fas fa-circle-notch fa-spin text-2xl"></i></div>`;
                        for (const k of Object.keys(card.dataset)) if (k.indexOf('vpCache') === 0) delete card.dataset[k];
                        try {
                            const char2 = await window.getActiveChar();
                            const rf = await window.blobToB64(char2.blobs[0]);
                            const rb = await window.blobToB64(char2.blobs[4]);
                            const prodRegen = await selectedProductB64s(r.oimgIds || []);
                            const rPrompt = cfg.studio
                                ? buildStudioPrompt(r.scene, selectedRatio, char2, r.outfit || '', prodRegen.length, r.set || selectedSet, r.program || '')
                                : buildPhotoPrompt(r.scene, selectedRatio, char2, r.outfit || '', prodRegen.length, r.cam || selectedCam, cfg.promptOpts);
                            const b64 = await genImageWithRefs(rPrompt, [rf, rb, ...prodRegen]);
                            results[idx] = { b64, scene: r.scene, outfit: r.outfit, oimgIds: r.oimgIds, cam: r.cam, set: r.set, program: r.program, filename: r.filename };
                            card.innerHTML = cardInner(idx + 1, b64);
                        } catch (err) {
                            if (window.logDebug) window.logDebug(p + '-regen', String(err));
                            card.innerHTML = cardInner(idx + 1, r.b64);
                            await window.uiNotify(window.t('err.gen-failed'));
                        }
                        busy = false;
                    }
                });

                dlAll.addEventListener('click', async () => {
                    for (let i = 0; i < results.length; i++) {
                        if (!results[i]) continue;
                        await window.downloadImage('data:image/png;base64,' + results[i].b64, results[i].filename);
                        await new Promise(res => setTimeout(res, 400));
                    }
                });
            }

            createPhotoTab({
                tab: 'lifestyle',
                scenes: [
                    { val: 'taking a selfie inside a car', label: 'Selfie di Mobil' },
                    { val: 'eating at a cozy cafe', label: 'Makan di Kafe' },
                    { val: 'hanging out with a drink at a coffee shop', label: 'Nongkrong Ngopi' },
                    { val: 'cooking at a home kitchen', label: 'Masak di Dapur' },
                    { val: 'relaxing lazy day on a sofa at home', label: 'Santai di Rumah' },
                    { val: 'grocery shopping at a supermarket', label: 'Belanja di Supermarket' },
                    { val: 'riding on the back of an online motorcycle taxi (ojek), wearing a helmet, candid city traffic background', label: 'Naik Ojek Online' },
                    { val: 'riding a scooter in city traffic wearing a helmet', label: 'Naik Motor' },
                    { val: 'driving a car, candid shot from the passenger seat', label: 'Nyetir Mobil' },
                    { val: 'commuting on a crowded city train, holding the handrail', label: 'Naik Kereta' },
                    { val: 'buying street food from a roadside vendor', label: 'Jajan Street Food' },
                    { val: 'walking under an umbrella in light rain on a city sidewalk', label: 'Hujan-hujanan' },
                    { val: 'shopping casually at a small convenience store', label: 'Di Minimarket' },
                    { val: 'lying on the bed casually scrolling the phone in a cozy bedroom', label: 'Rebahan Main HP' }
                ]
            });
            createPhotoTab({
                tab: 'podcast',
                studio: true,
                scenes: [
                    { val: 'sitting at the studio desk facing the camera, speaking warmly into the microphone', label: 'Bicara ke Kamera' },
                    { val: 'sitting at the studio desk facing the camera, smiling warmly with relaxed posture', label: 'Senyum ke Kamera' },
                    { val: 'talking expressively with natural hand gestures, facing the camera', label: 'Gestur Tangan' },
                    { val: 'laughing naturally mid-conversation at the studio desk, facing the camera', label: 'Ketawa Natural' },
                    { val: 'wearing studio headphones, listening thoughtfully, facing the camera', label: 'Pakai Headphone' },
                    { val: 'interviewing a guest across the table, seen from a flattering three-quarter angle', label: 'Wawancara Tamu' },
                    { val: 'speaking into the microphone seen from a cinematic three-quarter side angle', label: 'Angle Samping' },
                    { val: 'standing on stage holding a wireless handheld microphone, speaking confidently', label: 'Berdiri Pegang Mic' },
                    { val: 'standing on stage holding a handheld microphone, smiling and gesturing warmly', label: 'Gestur ke Penonton' }
                ]
            });
            createPhotoTab({
                tab: 'religi',
                defaultCam: 'candid',
                promptOpts: {
                    defaultOutfit: 'an elegant mukena (Indonesian prayer garment) with delicate floral embroidery and lace details in a soft pastel color, worn modestly and neatly',
                    qualityText: 'Soft aesthetic cinematic look: gentle window daylight, warm pastel tones, dreamy softly blurred background, serene peaceful mood, like a frame from a premium Islamic lifestyle video'
                },
                scenes: [
                    { val: 'sitting on a bed with soft floral bedding, reading the Quran attentively', label: 'Baca Quran di Kamar' },
                    { val: 'reading the Quran near a window with soft morning light', label: 'Baca Quran Dekat Jendela' },
                    { val: 'raising both hands in heartfelt dua after prayer, eyes gently closed', label: 'Berdoa Setelah Sholat' },
                    { val: 'holding prayer beads, doing dzikir with a peaceful expression', label: 'Dzikir dengan Tasbih' },
                    { val: 'sitting calmly on a prayer mat after prayer with a serene smile', label: 'Duduk di Sajadah' },
                    { val: 'holding the Quran close to the chest with a warm gentle smile', label: 'Peluk Quran' }
                ]
            });
            createPhotoTab({
                tab: 'ootd',
                scenes: [
                    { val: 'mirror selfie showing full outfit', label: 'Mirror Selfie Outfit' },
                    { val: 'street style candid walking shot', label: 'Street Style' },
                    { val: 'close-up outfit detail shot', label: 'Detail Outfit' },
                    { val: 'elevator mirror selfie with phone', label: 'Selfie di Lift' },
                    { val: 'full outfit shot at an aesthetic cafe', label: 'Outfit di Kafe Estetik' }
                ]
            });
            createPhotoTab({
                tab: 'sport',
                scenes: [
                    { val: 'working out at the gym', label: 'Latihan di Gym' },
                    { val: 'morning run in a park', label: 'Lari Pagi' },
                    { val: 'doing a yoga pose at home', label: 'Yoga di Rumah' },
                    { val: 'hiking on a mountain trail', label: 'Naik Gunung' },
                    { val: 'stretching at a park', label: 'Stretching di Taman' },
                    { val: 'post-workout mirror selfie at the gym', label: 'Selfie Habis Workout' }
                ]
            });
            // === END FACTORY ===

            // === PROMPT VIDEO (teks siap copy ke Veo/Kling — bukan API video) ===
            (function () {
                const TXT_MODEL = 'gemini-2.0-flash';
                const NICHE_OPTIONS = ['parenting', 'islamic content', 'wisdom quotes', 'motivation', 'food and culinary', 'fashion', 'education', 'travel'];
                const LANG_NAMES = { id: 'Indonesian', en: 'English', ms: 'Malay' };

                function buildVideoPromptRequest(mode, scene, nicheVal, scriptLang) {
                    if (mode === 'natural') {
                        return `You are a prompt writer for image-to-video AI tools (Veo, Kling). ` +
                            `Based on this photo description: "${scene}". Write ONE image-to-video prompt in English ` +
                            `describing ONLY subtle natural micro-movements: slight lip movement (not talking), ` +
                            `natural blinking, gentle smile, small head tilt, handheld camera sway, ambient motion in the background. ` +
                            `The person must NOT speak. Keep identity, outfit and background exactly as the source image. ` +
                            `Output only the prompt text, no explanation.`;
                    }
                    const langName = LANG_NAMES[scriptLang] || 'Indonesian';
                    return `You are a prompt writer for image-to-video AI tools (Veo, Kling). ` +
                        `Based on this photo description: "${scene}". The person is a social media influencer ` +
                        `with the niche "${nicheVal}". Write an image-to-video prompt in English where the person ` +
                        `speaks to the camera like a relaxed everyday conversation with a close friend: ` +
                        `slow, calm, unhurried pace; natural pauses between phrases; soft warm tone; ` +
                        `occasionally looks away briefly and smiles like in real conversation; subtle relaxed gestures. ` +
                        `Explicitly state in the prompt: "the person speaks slowly and calmly, never rushed, ` +
                        `with natural breathing pauses between sentences". ` +
                        `Keep identity, outfit and background exactly as the source image. ` +
                        `Then write the exact short spoken script in ${langName}, matching the "${nicheVal}" niche: ` +
                        `maximum 2 short sentences (about 15-20 words total) so the delivery fits comfortably without rushing. ` +
                        `Use simple everyday conversational words that are easy to say aloud - NOT formal or poetic written language. ` +
                        `Add "..." between phrases to mark natural pauses. ` +
                        `Format:\nPROMPT:\n<prompt>\nSCRIPT:\n<script>\nOutput nothing else.`;
                }

                async function genText(promptText) {
                    const g = window.SIA_GEN;
                    const response = await fetch(g.API_URL(TXT_MODEL), {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
                    });
                    const result = await response.json();
                    const txt = result?.candidates?.[0]?.content?.parts?.map(pp => pp.text || '').join('');
                    if (!txt) throw new Error('No text received');
                    return txt;
                }

                window.showVideoPromptModal = function ({ scene, char, card }) {
                    const uiLang = window.getLang();
                    const charNiche = (char && char.niche) || 'wisdom quotes';
                    const nicheOpts = [charNiche].concat(NICHE_OPTIONS.filter(n => n !== charNiche));
                    const optHtml = nicheOpts.map(n => `<option value="${window.escHtml(n)}">${window.escHtml(n)}</option>`).join('');
                    const langOpt = ['id', 'en', 'ms'].map(l => `<option value="${l}"${l === uiLang ? ' selected' : ''}>${l.toUpperCase()}</option>`).join('');
                    const body = `
                        <div class="grid grid-cols-2 gap-2 mb-2">
                            <button type="button" class="option-btn selected" data-vmode="natural"><span data-i18n="vp.mode-natural"></span></button>
                            <button type="button" class="option-btn" data-vmode="niche"><span data-i18n="vp.mode-niche"></span></button>
                        </div>
                        <p id="vp-mode-desc" class="text-xs text-gray-400 mb-3" data-i18n="vp.mode-natural-desc"></p>
                        <div id="vp-niche-wrap" class="hidden mb-3">
                            <label class="text-xs font-medium text-gray-500 block mb-1" data-i18n="vp.niche-label"></label>
                            <select id="vp-niche-select" class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm mb-2">${optHtml}</select>
                            <label class="text-xs font-medium text-gray-500 block mb-1" data-i18n="vp.lang-label"></label>
                            <select id="vp-lang-select" class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm">${langOpt}</select>
                        </div>
                        <button id="vp-generate" class="btn-primary w-full rounded-lg py-2.5 text-sm font-semibold mb-3"><i class="fas fa-wand-magic-sparkles mr-1"></i><span data-i18n="vp.generate"></span></button>
                        <div id="vp-loading" class="hidden text-center py-4 text-violet-500"><i class="fas fa-circle-notch fa-spin text-xl"></i></div>
                        <div id="vp-result-wrap" class="hidden">
                            <pre id="vp-result" class="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs whitespace-pre-wrap max-h-64 overflow-y-auto"></pre>
                            <button id="vp-copy" class="btn-secondary w-full rounded-lg py-2.5 text-sm font-semibold mt-2"><i class="fas fa-copy mr-1"></i><span data-i18n="btn.copy"></span></button>
                            <p class="text-[11px] text-gray-400 mt-2" data-i18n="vp.hint"></p>
                        </div>`;
                    window.showUniversalModal(window.t('vp.title'), body);

                    let mode = 'natural';
                    const mb = document.getElementById('modal-body');
                    const nicheSel = () => document.getElementById('vp-niche-select');
                    const langSel = () => document.getElementById('vp-lang-select');
                    const resultEl = () => document.getElementById('vp-result');
                    const resultWrap = () => document.getElementById('vp-result-wrap');

                    function cacheKey() {
                        if (mode === 'natural') return 'vpCacheNatural';
                        const n = String(nicheSel().value).replace(/[^a-z]/gi, '');
                        return 'vpCacheNiche' + n + String(langSel().value).toUpperCase();
                    }
                    function showCached() {
                        const cached = card && card.dataset ? card.dataset[cacheKey()] : null;
                        if (cached) { resultEl().textContent = cached; resultWrap().classList.remove('hidden'); }
                        else { resultWrap().classList.add('hidden'); }
                    }

                    mb.querySelectorAll('[data-vmode]').forEach(b => b.addEventListener('click', () => {
                        mb.querySelectorAll('[data-vmode]').forEach(x => x.classList.remove('selected'));
                        b.classList.add('selected');
                        mode = b.dataset.vmode;
                        document.getElementById('vp-niche-wrap').classList.toggle('hidden', mode !== 'niche');
                        document.getElementById('vp-mode-desc').setAttribute('data-i18n', mode === 'niche' ? 'vp.mode-niche-desc' : 'vp.mode-natural-desc');
                        if (window._i18nApplyNow) window._i18nApplyNow();
                        showCached();
                    }));
                    nicheSel().addEventListener('change', showCached);
                    langSel().addEventListener('change', showCached);

                    document.getElementById('vp-generate').addEventListener('click', async () => {
                        const loading = document.getElementById('vp-loading');
                        loading.classList.remove('hidden');
                        resultWrap().classList.add('hidden');
                        try {
                            const txt = await genText(buildVideoPromptRequest(mode, scene, nicheSel().value, langSel().value));
                            if (card && card.dataset) card.dataset[cacheKey()] = txt;
                            resultEl().textContent = txt;
                            resultWrap().classList.remove('hidden');
                        } catch (err) {
                            if (window.logDebug) window.logDebug('vp', String(err));
                            await window.uiNotify(window.t('err.vp-failed'));
                        }
                        loading.classList.add('hidden');
                    });

                    document.getElementById('vp-copy').addEventListener('click', async () => {
                        const txt = resultEl().textContent;
                        try {
                            await navigator.clipboard.writeText(txt);
                        } catch (e) {
                            const ta = document.createElement('textarea');
                            ta.value = txt;
                            document.body.appendChild(ta);
                            ta.select();
                            try { document.execCommand('copy'); } catch (e2) {}
                            ta.remove();
                        }
                        const span = document.querySelector('#vp-copy span');
                        if (span) { span.textContent = window.t('vp.copied'); setTimeout(() => { span.textContent = window.t('btn.copy'); }, 1500); }
                    });

                    showCached();
                };
            })();
            // === END PROMPT VIDEO ===

            // === VERSI + WHAT'S NEW + DEBUG PANEL ===
            window.escHtml = function (s) {
                return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
            };
            window.APP_VERSION = '2.3';
            window.CHANGELOG = [
                { version: '2.3', date: '18 Sep 2026', changes: [
                    { id: 'Set baru "Panggung Seminar" + 2 scene berdiri pegang mic (bicara ke penonton) di tab Podcast/Studio',
                      en: 'New "Seminar Stage" set + 2 standing-with-mic scenes (speaking to the audience) in the Podcast/Studio tab',
                      ms: 'Set baharu "Panggung Seminar" + 2 scene berdiri pegang mic (bercakap kepada penonton) dalam tab Podcast/Studio' },
                ] },
                { version: '2.2', date: '18 Sep 2026', changes: [
                    { id: 'Set studio "Hangat Cozy" dipertajam: panel kayu vertikal + strip lampu amber + tanaman & rak pajangan (gaya studio podcast Indonesia yang paling populer)',
                      en: 'The "Warm Cozy" studio set is sharpened: vertical wood slats + amber light strips + plants & decor shelf (the most popular Indonesian podcast studio look)',
                      ms: 'Set studio "Hangat Cozy" diperhalus: panel kayu menegak + jalur lampu amber + tumbuhan & rak hiasan (gaya studio podcast Indonesia paling popular)' },
                ] },
                { version: '2.1', date: '18 Sep 2026', changes: [
                    { id: 'Tab baru Religi / Ibadah: konten mukena estetik (baca Quran, doa, dzikir) dengan nuansa kamar pastel lembut - outfit mukena bisa diganti atau pakai foto produk',
                      en: 'New Faith / Worship tab: aesthetic mukena content (Quran reading, dua, dhikr) with soft pastel room mood - the mukena outfit can be changed or use product photos',
                      ms: 'Tab baharu Agama / Ibadah: kandungan mukena estetik (baca Quran, doa, zikir) dengan suasana bilik pastel lembut - outfit mukena boleh ditukar atau guna foto produk' },
                ] },
                { version: '2.0', date: '18 Sep 2026', changes: [
                    { id: 'Tab Podcast jadi Studio Estetik: 4 pilihan set studio terkunci (konsisten antar post), nama program di backdrop, komposisi menghadap kamera, lighting & kamera sinematik profesional',
                      en: 'Podcast tab is now an Aesthetic Studio: 4 locked studio sets (consistent across posts), show name on the backdrop, camera-facing composition, professional cinematic lighting & camera',
                      ms: 'Tab Podcast kini Studio Estetik: 4 set studio terkunci (konsisten antara post), nama program pada backdrop, komposisi menghadap kamera, pencahayaan & kamera sinematik profesional' },
                ] },
                { version: '1.9', date: '18 Sep 2026', changes: [
                    { id: 'Pengaman data: kalau database server kosong tak wajar, karakter & foto outfit di perangkat otomatis di-upload balik (bukan ikut terhapus)',
                      en: 'Data safeguard: if the server database is unexpectedly empty, characters & outfit photos on your device are re-uploaded automatically (not deleted)',
                      ms: 'Pelindung data: jika pangkalan data pelayan kosong secara luar biasa, watak & foto outfit pada peranti dimuat naik semula secara automatik (bukan dipadam)' },
                ] },
                { version: '1.8', date: '18 Sep 2026', changes: [
                    { id: 'Pilihan Gaya Foto di semua sesi: Selfie Sendiri (default, lebih natural) atau Difotoin Orang',
                      en: 'Photo Style option in every session: Self-Shot Selfie (default, more natural) or Taken by Someone',
                      ms: 'Pilihan Gaya Foto dalam setiap sesi: Selfie Sendiri (lalai, lebih natural) atau Difotokan Orang' },
                ] },
                { version: '1.7', date: '18 Sep 2026', changes: [
                    { id: 'Foto outfit/produk sekarang ikut akun (cloud) - login di perangkat lain, pustaka foto produk otomatis muncul',
                      en: 'Outfit/product photos now follow your account (cloud) - sign in on another device and your product library appears automatically',
                      ms: 'Foto outfit/produk kini mengikut akaun (cloud) - log masuk di peranti lain, pustaka foto produk muncul secara automatik' },
                ] },
                { version: '1.6', date: '18 Sep 2026', changes: [
                    { id: '8 scene natural baru di Lifestyle: naik ojek online, naik motor, nyetir mobil, naik kereta, jajan street food, hujan-hujanan, minimarket, rebahan main HP',
                      en: '8 new natural scenes in Lifestyle: riding an ojek, riding a scooter, driving, on the train, street food run, rainy day walk, minimart, scrolling in bed',
                      ms: '8 scene natural baharu dalam Lifestyle: naik ojek, naik motosikal, memandu, naik keretapi, beli makanan jalanan, jalan ketika hujan, minimarket, baring main telefon' },
                ] },
                { version: '1.5', date: '18 Sep 2026', changes: [
                    { id: 'Foto referensi produk: upload foto sepatu/baju/tas (tersimpan, max 10), pilih sampai 5 per generate - influencer memakai produk persis seperti fotonya. Cocok untuk konten affiliate',
                      en: 'Product reference photos: upload shoes/clothes/bags (saved, max 10), select up to 5 per generate - the influencer wears the exact products. Great for affiliate content',
                      ms: 'Foto rujukan produk: muat naik kasut/baju/beg (tersimpan, maks 10), pilih hingga 5 setiap janaan - influencer memakai produk sama persis. Sesuai untuk kandungan affiliate' },
                ] },
                { version: '1.4', date: '18 Sep 2026', changes: [
                    { id: 'Muat karakter jauh lebih cepat: foto angle dikompres (10x lebih kecil) dan download 5 angle jadi 1 request',
                      en: 'Characters load much faster: angle photos are compressed (10x smaller) and all 5 angles download in a single request',
                      ms: 'Watak dimuat jauh lebih pantas: foto sudut dimampatkan (10x lebih kecil) dan 5 sudut dimuat turun dalam 1 permintaan' },
                    { id: 'Perbaikan keamanan pada webhook pembelian dan tampilan niche',
                      en: 'Security fixes on the purchase webhook and niche display',
                      ms: 'Pembaikan keselamatan pada webhook pembelian dan paparan niche' },
                ] },
                { version: '1.3', date: '17 Sep 2026', changes: [
                    { id: 'Karakter dimuat lebih cepat: sync dimulai sejak halaman login dan download 5 angle berjalan paralel - masuk app data langsung siap',
                      en: 'Characters load faster: sync starts from the login screen and the 5 angles download in parallel - data is ready when you enter',
                      ms: 'Watak dimuat lebih pantas: penyegerakan bermula dari skrin log masuk dan 5 sudut dimuat turun selari - data terus sedia' },
                ] },
                { version: '1.2', date: '17 Sep 2026', changes: [
                    { id: 'Outfit bisa disimpan (maksimal 10) - muncul sebagai pilihan cepat di semua sesi foto, klik tanda silang untuk menghapus',
                      en: 'Outfits can now be saved (up to 10) - they appear as quick picks in every photo session; click the cross to delete',
                      ms: 'Outfit kini boleh disimpan (maksimum 10) - muncul sebagai pilihan pantas dalam setiap sesi foto; klik tanda pangkah untuk memadam' },
                ] },
                { version: '1.1', date: '17 Sep 2026', changes: [
                    { id: 'Outfit custom (opsional) di setiap sesi foto - outfit bisa disesuaikan tanpa mengubah wajah karakter',
                      en: 'Custom outfit (optional) in every photo session - adjust the outfit without changing the character\'s face',
                      ms: 'Outfit tersuai (pilihan) dalam setiap sesi foto - outfit boleh diubah tanpa mengubah wajah watak' },
                    { id: 'Prompt video mode bicara dibuat lebih natural: pelan, tidak terburu-buru, jeda napas alami, script pendek gaya obrolan',
                      en: 'Talking video prompts are now more natural: slow, unhurried, natural breathing pauses, short conversational script',
                      ms: 'Prompt video mod bercakap kini lebih natural: perlahan, tidak tergesa-gesa, jeda nafas semula jadi, skrip pendek gaya perbualan' },
                ] },
                { version: '1.0', date: '17 Sep 2026', changes: [
                    { id: 'Rilis pertama: pembuat AI influencer (2 karakter x 5 angle, tersimpan cloud), 4 sesi foto natural, dan prompt image-to-video 2 mode',
                      en: 'First release: AI influencer creator (2 characters x 5 angles, cloud-saved), 4 natural photo sessions, and 2-mode image-to-video prompts',
                      ms: 'Keluaran pertama: pencipta AI influencer (2 watak x 5 sudut, disimpan di cloud), 4 sesi foto natural, dan prompt image-to-video 2 mod' },
                ] },
            ];

            // Debug panel ringan — pengganti Sentry (tidak praktis di GAS/Canvas)
            window.__debugLog = [];
            window.logDebug = function (tag, msg) {
                try {
                    window.__debugLog.push({ t: new Date().toISOString(), tag, msg: String(msg).slice(0, 500) });
                    if (window.__debugLog.length > 100) window.__debugLog.shift();
                    console.warn('[SIA]', tag, msg);
                } catch (e) {}
            };
            function showDebugPanel() {
                const rows = window.__debugLog.slice().reverse().map(l =>
                    `<div class="border-b border-gray-100 py-1.5"><span class="text-[10px] text-gray-400">${window.escHtml(l.t)}</span> <span class="text-xs font-semibold text-violet-600">${window.escHtml(l.tag)}</span><br><span class="text-xs text-gray-600 break-all">${window.escHtml(l.msg)}</span></div>`
                ).join('') || '<p class="text-sm text-gray-400">Log kosong.</p>';
                window.showUniversalModal('Debug Log', `<div class="max-h-72 overflow-y-auto">${rows}</div>`);
            }

            function showWhatsNew() {
                const lang = window.getLang();
                const body = (window.CHANGELOG || []).map(rel => {
                    const lines = (rel.changes || []).map(c =>
                        `<li class="flex gap-2 text-sm text-gray-600 mb-1.5"><i class="fas fa-check text-violet-500 mt-1" style="font-size:.7rem;"></i><span>${window.escHtml(c[lang] || c.id)}</span></li>`
                    ).join('');
                    return `<div class="mb-4"><div class="flex items-center gap-2 mb-2"><span class="text-sm font-bold text-white px-2 py-0.5 rounded-full brand-gradient">v${window.escHtml(rel.version)}</span><span class="text-xs text-gray-400">${window.escHtml(rel.date)}</span></div><ul>${lines}</ul></div>`;
                }).join('') || `<p class="text-sm text-gray-500">${window.escHtml(window.t('wn.empty'))}</p>`;
                window.showUniversalModal(window.t('wn.title'), body);
            }

            (function initVersionBadge() {
                const badge = document.getElementById('version-badge');
                const label = document.getElementById('version-badge-label');
                const dot = document.getElementById('version-badge-dot');
                if (!badge || !label) return;
                label.textContent = 'v' + window.APP_VERSION;
                if (dot) dot.classList.toggle('hidden', localStorage.getItem('sia_seen_version') === window.APP_VERSION);
                let clicks = 0, timer = null;
                badge.addEventListener('click', () => {
                    clicks++;
                    clearTimeout(timer);
                    timer = setTimeout(() => { clicks = 0; }, 2000);
                    if (clicks >= 5) { clicks = 0; showDebugPanel(); return; }
                    showWhatsNew();
                    localStorage.setItem('sia_seen_version', window.APP_VERSION);
                    if (dot) dot.classList.add('hidden');
                });
            })();
            // === END VERSI ===
        });
    