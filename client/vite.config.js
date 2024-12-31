import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// .env থেকে ভেরিয়েবলটি নিয়ে আসুন
const api = 'https://bloodback-m8iw.onrender.com/'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': {
        target: api, // এখানে api ভেরিয়েবলটি ব্যবহার করা হয়েছে
        changeOrigin: true,
        secure: false, // ডেভেলপমেন্টে SSL ভেরিফিকেশন বন্ধ করা
        rejectUnauthorized: false,
      }
    }
  }
})
