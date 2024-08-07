import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Events from './components/Events'
import StoreMain from './components/StoreMain'
import TrainingMain from './components/TrainingMain'
import AboutUs from './components/AboutUs'
import LetsTalkScuba from './components/LetsTalkScuba'
import ContactUs from './components/ContactUs'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GalleryDivingMemories from './components/GalleryDivingMemories'
import StoreRentals from './components/StoreRentals'
import StoreRepairsMaintenance from './components/StoreRepairsMaintenance'
import WeRecommend from './components/WeRecommend'
import TrainingRefresher from './components/TrainingRefresher'
import TrainingAdvanced from './components/TrainingAdvanced'
import TrainingRescue from './components/TrainingRescue'
import TrainingSpecialty from './components/TrainingSpecialty'
import TrainingMaster from './components/TrainingMaster'
import TrainingTechnical from './components/TrainingTechnical'
import TrainingProfesional from './components/TrainingProfessional'

function App() {

  // const { toggleTheme } = useContext(ThemeContext)

  return (
    <>
    <div>
        <Link to="/" style={{padding: 5}}> 
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn"><a href='/events-travel-dives'>EVENTS, TRAVEL & DIVES ⇩</a></button>
          <div className="dropdown-content">
            <a href='/gallery-diving-memories'>Memories</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><a href='/aloha-store'>Store & Rentals ⇩</a></button>
          <div className="dropdown-content">
            <a href='/aloha-store/rentals'>Rentals</a>
            <a href='/aloha-store/repairs-maintenance'>Repairs & Maintenance</a>
            <a href='/we-recommend'>We Recommend</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><a href='/scuba-classes-basic-open-water-certification'>Training ⇩</a></button>
          <div className="dropdown-content">
            <a href='/scuba-classes-basic-open-water-certification/#basic'>Open Water Certificaion</a>
            <a href='/scuba-classes-basic-open-water-certification/refresher-course'>Refresher Course</a>
            <a href='/scuba-classes-basic-open-water-certification/advanced-open-water-certification'>Advanced Open Water Certification</a>
            <a href='/scuba-classes-basic-open-water-certification/rescue-diver-certification'>Rescue Diver Certification</a>
            <a href='/scuba-classes-basic-open-water-certification/specialty-diver-certification'>Specialty Diver Certification</a>
            <a href='/scuba-classes-basic-open-water-certification/master-diver-certification'>Master Diver Certification</a>
            <a href='/scuba-classes-basic-open-water-certification/technical-diver-certification'>Technical Diver Certification</a>
            <a href='/scuba-classes-basic-open-water-certification/professional-dive-leader-instructor-divemaster'>Do You Want To Be A Proffesional Dive Leader?</a>
          </div>
        </div>
        <Link to='/about-us' style={{padding: 5}}>
          About Us
        </Link>
        <Link to='/lets-talk-scuba' style={{padding: 5}}>
          Let's Talk Scuba
        </Link>
        <Link to='/contact-us' style={{padding: 5}}>
          Contact Us
        </Link>
        </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events-travel-dives' element={<Events />}/>
        <Route path='/gallery-diving-memories' element={<GalleryDivingMemories />}/>
        <Route path='/aloha-store' element={<StoreMain />}/>
        <Route path='/aloha-store/rentals' element={<StoreRentals />}/>
        <Route path='/aloha-store/repairs-maintenance' element={<StoreRepairsMaintenance />}/>
        <Route path='/we-recommend' element={<WeRecommend />}/>
        <Route path='/scuba-classes-basic-open-water-certification' element={<TrainingMain />}/>
        <Route path='/scuba-classes-basic-open-water-certification/refresher-course' element={<TrainingRefresher />}/>
        <Route path='/scuba-classes-basic-open-water-certification/advanced-open-water-certification' element={<TrainingAdvanced />}/>
        <Route path='/scuba-classes-basic-open-water-certification/rescue-diver-certification' element={<TrainingRescue />}/>
        <Route path='/scuba-classes-basic-open-water-certification/specialty-diver-certification' element={<TrainingSpecialty />}/>
        <Route path='/scuba-classes-basic-open-water-certification/master-diver-certification' element={<TrainingMaster />}/>
        <Route path='/scuba-classes-basic-open-water-certification/technical-diver-certification' element={<TrainingTechnical />}/>
        <Route path='/scuba-classes-basic-open-water-certification/professional-dive-leader-instructor-divemaster' element={<TrainingProfesional />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/lets-talk-scuba' element={<LetsTalkScuba />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </>
  )
}

export default App
