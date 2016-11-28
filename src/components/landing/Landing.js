import React from 'react'

// Components
import TopNav    from '../shared/TopNav'
import Header    from './Header'
import Features  from './Features'
import BottomNav from './BottomNav'
import Promo     from './Promo'
import Footer    from '../shared/Footer'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <BottomNav />
        <Promo />
        <Footer />
      </div>
    )
  }
}

export default Landing;
