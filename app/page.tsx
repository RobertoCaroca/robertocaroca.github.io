import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import AISection from '@/components/AISection'
import AIChallenge from '@/components/AIChallenge'
import AITools from '@/components/AITools'
import AIToolsList from '@/components/AIToolsList'
import AITips from '@/components/AITips'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutMe />
      <AISection />
      <AIChallenge />
      <AITips />
      <AITools />
      <AIToolsList />
    </main>
  )
}
