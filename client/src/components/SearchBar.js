import React, { useEffect } from 'react';
import searchcustomers from '../Helpers/searchcustomers';
const SearchBar = ({search,setSearch,customers,setSearchedCustomer,isListening,setIsListening}) => {
  const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const speech = new SpeechRecognition();
  speech.continuous = false;

  useEffect(()=>{
    searchcustomers(search,customers)
    if(search){
      setSearchedCustomer([...searchcustomers(search,customers)]);
    }
  },[search])

  const handleVoiceCommand = () => {
    !isListening ? setIsListening(true) : setIsListening(false)
  }
  useEffect(() => {
    if(isListening){
      speech.start();
      speech.onresult = event => {
        setSearch(event.results[event.results.length - 1][0].transcript)
      };
    } else{
      speech.stop();
    }
    speech.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      setIsListening(false);
    }
   },[isListening]);
  return (
    <div className='search'>
      <img src='./loupe.png' alt='search-icon' width='25' height='25'/>
      <input 
        className='search__input' 
        type='text' 
        placeholder="Search customer's name"
        value={search} 
        onChange={(event)=>{
          setSearch(event.target.value)
        }}
      />
      <div className='search__voice-icon'>
        <img src={isListening ?'./google-voice.png': './microphone-off.png'}alt='search-icon' width='25' height='25' onClick={handleVoiceCommand}/>
        <svg height="40" width="40" className={isListening ? 'blinking' :'hidden'}>
          {isListening ? <circle cx="50%" cy="50%" r="5" fill="crimson" />: null}
        </svg>
      </div> 
    </div>
  )
}

export default SearchBar;
