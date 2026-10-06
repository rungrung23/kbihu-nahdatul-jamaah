const whatsappUrl =
  "https://wa.me/628111313022?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendapatkan%20informasi%20program%20Umroh%20KBIHU%20Nahdatul%20Jamaah.";

const programs = [
  {
    number: "01",
    icon: "🕌",
    title: "Umroh Reguler",
    description:
      "Pilihan perjalanan Umroh dengan pelayanan nyaman dan pendampingan yang terarah.",
    features: ["Bimbingan manasik", "Pendampingan jamaah", "Informasi perjalanan lengkap"],
    popular: false
  },
  {
    number: "02",
    icon: "🌙",
    title: "Umroh Plus Madinah",
    description:
      "Perjalanan spiritual yang lebih lengkap dengan pengalaman beribadah di Madinah.",
    features: ["Bimbingan manasik", "Pendampingan jamaah", "Kunjungan Madinah"],
    popular: true
  },
  {
    number: "03",
    icon: "✨",
    title: "Umroh VIP",
    description:
      "Pengalaman perjalanan dengan fasilitas dan pelayanan yang lebih eksklusif.",
    features: ["Bimbingan manasik", "Pendampingan khusus", "Pelayanan lebih eksklusif"],
    popular: false
  }
];

const advantages = [
  {
    number: "01",
    title: "Bimbingan",
    text: "Membantu jamaah mempersiapkan perjalanan dan memahami rangkaian ibadah dengan lebih baik."
  },
  {
    number: "02",
    title: "Pendampingan",
    text: "Jamaah mendapatkan pendampingan agar perjalanan terasa lebih terarah dan nyaman."
  },
  {
    number: "03",
    title: "Pelayanan",
    text: "Mengutamakan kebutuhan jamaah dengan pelayanan yang profesional dan bersahabat."
  },
  {
    number: "04",
    title: "Amanah",
    text: "Menjaga kepercayaan jamaah sebagai bagian penting dari perjalanan menuju Tanah Suci."
  }
];

const testimonials = [
  {
    name: "Bapak Ahmad",
    role: "Jamaah Umroh",
    text: "Alhamdulillah, selama perjalanan kami merasa sangat terbantu. Bimbingannya jelas dan pendampingannya membuat kami lebih tenang.",
    dark: false
  },
  {
    name: "Ibu Siti",
    role: "Jamaah Umroh",
    text: "Pelayanan yang diberikan sangat baik. Kami merasa didampingi dari persiapan sampai perjalanan ibadah.",
    dark: true
  },
  {
    name: "Bapak Ridwan",
    role: "Jamaah Umroh",
    text: "Sangat bersyukur bisa menjalankan ibadah dengan pendampingan yang baik dan suasana yang nyaman.",
    dark: false
  }
];

const faqs = [
  {
    question: "Bagaimana cara mendaftar program Umroh?",
    answer:
      "Silakan hubungi tim KBIHU Nahdatul Jamaah melalui WhatsApp untuk mendapatkan informasi program dan proses pendaftaran."
  },
  {
    question: "Apakah tersedia bimbingan manasik?",
    answer:
      "Ya. Informasi mengenai jadwal dan teknis bimbingan manasik dapat dikonsultasikan langsung dengan tim kami."
  },
  {
    question: "Bagaimana mendapatkan informasi harga paket?",
    answer:
      "Harga dan detail paket dapat berubah sesuai program dan periode keberangkatan. Silakan hubungi kami untuk informasi terbaru."
  },
  {
    question: "Apakah bisa konsultasi melalui WhatsApp?",
    answer:
      "Tentu. Klik tombol WhatsApp yang tersedia di website untuk langsung terhubung dengan tim kami."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6ef] text-[#17352c]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0d3b2e]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#beranda" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d6b45c] font-bold text-[#0d3b2e]">NJ</div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">KBIHU NAHDATUL</div>
              <div className="text-xs tracking-[0.25em] text-[#d6b45c]">JAMAAH</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#beranda" className="text-sm text-white transition hover:text-[#d6b45c]">Beranda</a>
            <a href="#tentang" className="text-sm text-white transition hover:text-[#d6b45c]">Tentang Kami</a>
            <a href="#program" className="text-sm text-white transition hover:text-[#d6b45c]">Program Umroh</a>
            <a href="#keunggulan" className="text-sm text-white transition hover:text-[#d6b45c]">Keunggulan</a>
            <a href="#faq" className="text-sm text-white transition hover:text-[#d6b45c]">FAQ</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d6b45c] px-5 py-2.5 text-sm font-semibold text-[#17352c] transition hover:bg-[#e5c875]">Hubungi Kami</a>
          </nav>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-[#d6b45c] text-xl font-bold text-[#17352c]">☰</summary>
            <div className="absolute right-0 top-14 w-64 rounded-2xl border border-white/10 bg-[#0d3b2e] p-4 shadow-2xl">
              <nav className="flex flex-col gap-1">
                <a href="#beranda" className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">Beranda</a>
                <a href="#tentang" className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">Tentang Kami</a>
                <a href="#program" className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">Program Umroh</a>
                <a href="#keunggulan" className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">Keunggulan</a>
                <a href="#faq" className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">FAQ</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-xl bg-[#d6b45c] px-4 py-3 text-center text-sm font-semibold text-[#17352c]">Hubungi Kami</a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden bg-[#0d3b2e]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2200&q=90')" }} />
        <div className="absolute inset-0 bg-[#062a20]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062a20] via-[#0d3b2e]/85 to-[#0d3b2e]/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#d6b45c]/40 bg-white/5 px-4 py-2 text-sm text-[#e5ca7b] backdrop-blur">
              ✦ Perjalanan Ibadah yang Penuh Makna
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Wujudkan Impian
              <span className="block text-[#d6b45c]">Beribadah ke Tanah Suci</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Bersama KBIHU Nahdatul Jamaah, kami mendampingi perjalanan ibadah Umroh Anda dengan pelayanan yang amanah, nyaman, dan penuh bimbingan.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d6b45c] px-7 py-4 text-center font-semibold text-[#17352c] transition hover:bg-[#e5c875]">
                Konsultasi Umroh via WhatsApp →
              </a>
              <a href="#program" className="rounded-full border border-white/30 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10">
                Lihat Program
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f6ef] to-transparent" />
      </section>

      <section className="relative z-20 -mt-8 px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-3">
          <div className="border-b border-gray-100 p-7 text-center sm:border-b-0 sm:border-r">
            <div className="text-3xl font-bold text-[#0d3b2e]">Amanah</div>
            <p className="mt-2 text-sm text-gray-500">Pendampingan Ibadah</p>
          </div>
          <div className="border-b border-gray-100 p-7 text-center sm:border-b-0 sm:border-r">
            <div className="text-3xl font-bold text-[#0d3b2e]">Nyaman</div>
            <p className="mt-2 text-sm text-gray-500">Pelayanan Profesional</p>
          </div>
          <div className="p-7 text-center">
            <div className="text-3xl font-bold text-[#0d3b2e]">Terarah</div>
            <p className="mt-2 text-sm text-gray-500">Bimbingan Manasik</p>
          </div>
        </div>
      </section>

      <section id="tentang" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b28d32]">Tentang Kami</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#17352c] sm:text-5xl">Mendampingi perjalanan ibadah Anda dengan sepenuh hati.</h2>
            <p className="mt-6 leading-8 text-gray-600">KBIHU Nahdatul Jamaah hadir untuk memberikan pendampingan kepada jamaah dalam mempersiapkan dan menjalankan ibadah Umroh secara lebih terarah, nyaman, dan sesuai tuntunan.</p>
            <p className="mt-4 leading-8 text-gray-600">Kami percaya perjalanan ke Tanah Suci bukan sekadar perjalanan biasa, tetapi sebuah perjalanan spiritual yang memiliki makna mendalam bagi setiap jamaah.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full border border-[#0d3b2e] px-6 py-3 font-semibold text-[#0d3b2e] transition hover:bg-[#0d3b2e] hover:text-white">Konsultasi dengan Kami →</a>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img src="https://images.unsplash.com/photo-1542816417-0983670d3e17?auto=format&fit=crop&w=1200&q=85" alt="Masjid" className="h-[500px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#d6b45c] p-6 shadow-xl">
              <div className="text-3xl font-bold text-[#17352c]">100%</div>
              <div className="text-sm font-medium text-[#17352c]/80">Fokus pada<br />Kenyamanan Jamaah</div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#0d3b2e] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b45c]">Program Umroh</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Pilih perjalanan yang sesuai<span className="block text-[#d6b45c]">dengan kebutuhan Anda.</span></h2>
            <p className="mt-5 leading-7 text-white/60">Konsultasikan kebutuhan perjalanan ibadah Anda bersama tim KBIHU Nahdatul Jamaah.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div key={program.number} className={program.popular ? "relative rounded-3xl border border-[#d6b45c] bg-[#d6b45c] p-8 text-[#17352c] shadow-2xl shadow-black/20" : "group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"}>
                {program.popular && <div className="absolute right-6 top-6 rounded-full bg-[#0d3b2e] px-3 py-1 text-xs font-bold text-[#d6b45c]">POPULER</div>}
                <div className={program.popular ? "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17352c]/10 text-3xl" : "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6b45c]/10 text-3xl"}>{program.icon}</div>
                <p className={program.popular ? "text-sm font-bold text-[#17352c]/60" : "text-sm font-medium text-[#d6b45c]"}>PROGRAM {program.number}</p>
                <h3 className={program.popular ? "mt-2 text-2xl font-semibold" : "mt-2 text-2xl font-semibold text-white"}>{program.title}</h3>
                <p className={program.popular ? "mt-4 leading-7 text-[#17352c]/70" : "mt-4 leading-7 text-white/60"}>{program.description}</p>
                <div className={program.popular ? "my-7 h-px bg-[#17352c]/10" : "my-7 h-px bg-white/10"} />
                <ul className={program.popular ? "space-y-3 text-sm text-[#17352c]/70" : "space-y-3 text-sm text-white/70"}>
                  {program.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={program.popular ? "mt-8 block rounded-full bg-[#17352c] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0d3b2e]" : "mt-8 block rounded-full border border-[#d6b45c]/50 px-5 py-3 text-center text-sm font-semibold text-[#d6b45c] transition hover:bg-[#d6b45c] hover:text-[#17352c]"}>Tanya Program →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="keunggulan" className="bg-[#f8f6ef] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b28d32]">Mengapa Kami</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#17352c] sm:text-5xl">Lebih dari sekadar perjalanan.</h2>
            <p className="mt-5 leading-7 text-gray-600">Kami ingin setiap jamaah dapat menjalankan perjalanan ibadah dengan lebih tenang, nyaman, dan penuh persiapan.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.number} className="rounded-3xl border border-[#17352c]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d3b2e] text-sm font-bold text-[#d6b45c]">{item.number}</div>
                <h3 className="mt-7 text-xl font-semibold text-[#17352c]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b28d32]">Testimoni Jamaah</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#17352c] sm:text-5xl">Cerita dari perjalanan mereka.</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={testimonial.dark ? "rounded-3xl bg-[#0d3b2e] p-8" : "rounded-3xl bg-[#f8f6ef] p-8"}>
                <div className="text-xl text-[#d6b45c]">★★★★★</div>
                <p className={testimonial.dark ? "mt-6 leading-7 text-white/70" : "mt-6 leading-7 text-gray-600"}>“{testimonial.text}”</p>
                <div className="mt-7">
                  <div className={testimonial.dark ? "font-semibold text-white" : "font-semibold text-[#17352c]"}>{testimonial.name}</div>
                  <div className={testimonial.dark ? "text-sm text-white/50" : "text-sm text-gray-500"}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f8f6ef] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b28d32]">FAQ</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#17352c] sm:text-5xl">Pertanyaan yang sering ditanyakan.</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-[#17352c]">
                  {faq.question}
                  <span className="float-right text-xl text-[#b28d32] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#17352c]">
          <div className="px-8 py-16 text-center sm:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b45c]">Siap Berangkat?</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Mari persiapkan perjalanan ibadah Anda bersama kami.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">Hubungi kami untuk mendapatkan informasi program, jadwal, dan kebutuhan perjalanan Umroh Anda.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-[#d6b45c] px-8 py-4 font-semibold text-[#17352c] transition hover:bg-[#e5c875]">Konsultasi via WhatsApp →</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#17352c]/10 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="font-bold text-[#17352c]">KBIHU Nahdatul Jamaah</div>
            <div className="mt-1 text-sm text-gray-500">Mendampingi perjalanan ibadah menuju Tanah Suci.</div>
          </div>
          <div className="text-sm text-gray-500">© 2026 KBIHU Nahdatul Jamaah</div>
        </div>
      </footer>
    </main>
  );
}
