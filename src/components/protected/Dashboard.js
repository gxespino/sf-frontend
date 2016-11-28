import React from 'react'

// Components
import TopNav    from '../shared/TopNav'
import Header    from '../landing/Header'
import Features  from '../landing/Features'
import BottomNav from '../landing/BottomNav'
import Promo     from '../landing/Promo'
import Footer    from '../shared/Footer'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
        <TopNav linkText='Login' linkAddr='/login' />
        <Header />
        <Features />
        <BottomNav />
        <Promo />
        <Footer />
      </div>
    )
  }
}

export default Dashboard;
