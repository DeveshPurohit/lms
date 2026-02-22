import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscriptions = () => {
  return (
    <main>
      <PricingTable
        appearance={{
          variables: {
            colorPrimary: "#8259cd",
          },
        }}
      />
    </main>
  );
}

export default Subscriptions