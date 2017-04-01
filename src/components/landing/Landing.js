import React from 'react'

// Components
import { TopNav }    from '../shared/TopNav'
import { Header }    from './Header'
import { Features }  from './Features'
import { BottomNav } from './BottomNav'
import { Promo }     from './Promo'
import { Footer }    from '../shared/Footer'

export const Landing = () => {
  return (
    <div>
      <Header />
      <Features />
      <BottomNav />
      <Promo />
    </div>
  )
}
