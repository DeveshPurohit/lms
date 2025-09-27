import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Lets Go Boy! Devesh OP</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Three musketers"
          topic="2 grils gang that attacked the villains"
          subject="Arcade"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="123"
          name="Three musketers"
          topic="2 grils gang that attacked the villains"
          subject="Arcade"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="123"
          name="Three musketers"
          topic="2 grils gang that attacked the villains"
          subject="Arcade"
          duration={45}
          color="#ffda6e"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
}

export default Page