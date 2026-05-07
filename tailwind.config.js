/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Warna Background
        dark: {
          DEFAULT: 'rgb(32, 33, 36)',      // sebelumnya #202124
          footer: 'rgb(22, 22, 24)',       // sebelumnya #161618
        },
        // Warna Tema / Aksen Utama
        accent: {
          DEFAULT: 'rgb(var(--theme-init) / <alpha-value> )',    // theme init dari head
          light: 'rgb(var(--theme-light) / <alpha-value> )',     // theme light dari head
        },
        // Warna untuk Teks dan Konten
        content: {
          title: 'rgb(255, 255, 255)',     // sebelumnya #FFFFFF
          DEFAULT: 'rgb(188, 188, 188)',   // sebelumnya #BCBCBC
          muted: 'rgb(88, 88, 91)',        // sebelumnya #58585B
        },
        // Warna spesifik untuk elemen CTA (Call to Action)
        brand: {
          whatsapp: 'rgb(37, 211, 102)',   // sebelumnya #25D366
        }
      },
      fontFamily: {
        // Open Sans menjadi font default untuk 'sans'
        sans: ['"Open Sans"', 'sans-serif'],
        // Poppins ditambahkan sebagai utilitas baru, misal: class="font-poppins"
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // Gradasi biru yang ada di section "Siap Membangun Bersama Kami?"
        'cta-gradient': 'linear-gradient(to right, rgb(15, 23, 42), rgb(30, 58, 138))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}