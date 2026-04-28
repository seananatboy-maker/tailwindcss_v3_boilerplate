/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  
  theme: {
    // ✅ IMPROVED: Tambah breakpoint xs untuk mobile optimization
    screens: {
      'xs': '320px',    // Extra small - Mobile
      'sm': '640px',    // Small (default Tailwind)
      'tablet': '960px',
      'lg': '1024px',   // Large (default Tailwind)
      'desktop': '1248px',
      'xl': '1280px',   // Extra Large (default Tailwind)
      '2xl': '1536px',  // 2XL (default Tailwind)
    },

    // ✅ IMPROVED: Tambah box-shadow lebih lengkap
    boxShadow: {
      'none': 'none',
      'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'sm': '0px 4px 10px 0px rgba(11,10,55,0.15)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0px 10px 22px 0px rgba(18,16,99,0.08)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },

    // ✅ CUSTOM: Font sizes dengan line-height & letter-spacing yang presisi
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.03em' }],       // 12px
      'sm': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '-0.03em' }],    // 14px
      'base': ['1rem', { lineHeight: '1.75rem', letterSpacing: '-0.03em' }],     // 16px (default)
      'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.03em' }],   // 18px
      'xl': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '-0.03em' }],     // 24px
      '2xl': ['2.25rem', { lineHeight: '3rem', letterSpacing: '-0.032em' }],     // 36px
      '3xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.032em' }],      // 48px
      '4xl': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.032em' }],      // 56px
      '5xl': ['5rem', { lineHeight: '5rem', letterSpacing: '-0.032em' }],        // 80px
    },

    // ✅ CUSTOM: Font family yang sudah didefinisikan
    fontFamily: {
      suse: ['SUSE', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },

    extend: {
      // ✅ CUSTOM: Colors dengan CSS variables support
      colors: {
        tangblue: 'var(--tang-blue)',
        social: {
          google: '#4285f4',
          'google-red': '#df4931',
          facebook: '#1877F2',
          twitter: '#1DA1F2',
          linkedin: '#0A66C2',
        }
      },

      // ✅ NEW: Custom spacing untuk layout yang lebih fleksibel
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },

      // ✅ NEW: Custom container untuk responsive design
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'xs': '0.5rem',
          'sm': '1rem',
          'md': '1.5rem',
          'lg': '2rem',
          'xl': '2.5rem',
          '2xl': '3rem',
        },
      },

      // ✅ NEW: Custom opacity untuk finer control
      opacity: {
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '80': '0.8',
        '90': '0.9',
      },

      // ✅ NEW: Custom border radius untuk design consistency
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },

      // ✅ NEW: Animation untuk micro-interactions
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },

      // ✅ NEW: Keyframes untuk custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },

      // ✅ NEW: Transition properties untuk smooth effects
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      // ✅ NEW: Z-index untuk stacking context management
      zIndex: {
        'hide': '-10',
        'auto': 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '999': '999',
        '9999': '9999',
      },
    },
  },

  // ✅ PLUGINS: Uncomment jika ingin menambahkan extended functionality
  plugins: [
    // require('@tailwindcss/forms'),      // Better form styling
    // require('@tailwindcss/typography'), // Rich text editing & content display
    // require('@tailwindcss/line-clamp'), // Line clamping (jika versi < 3.10)
  ],
}