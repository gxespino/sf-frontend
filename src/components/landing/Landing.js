import React from 'react'

// Components
import TopNav from './TopNav'
import Header from './Header'
import Features from './Features'
import BottomNav from './BottomNav'
import Promo from './Promo'
import Footer from './Footer'

// Styles
import '../../css/webflow.css'
import '../../css/Landing.css'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
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
