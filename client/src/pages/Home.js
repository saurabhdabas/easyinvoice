import React,{useState} from 'react'
import Header from '../components/Header'
import SideNavigation from '../components/SideNavigation'
import display from '../Helpers/display'

const Home = () => {

  const [state,setState] = useState(['Dashboard']);

  return (
    <div>
      <Header/>
      <SideNavigation state={state} setState={setState}/>
      {display(state[0])}
    </div>
  )
}

export default Home;


