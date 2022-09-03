import React,{useState} from 'react'
import Header from '../components/Header'
import SideNavigation from '../components/SideNavigation'
import display from '../Helpers/display'

const Home = () => {

  const [state,setState] = useState(['Dashboard']);

  return (
    <div>
      <Header/>
      <div className='main'>
        <SideNavigation state={state} setState={setState}/>
        {display(state[0])}
      </div>
    </div>
  )
}

export default Home;


