import React, { useEffect } from 'react';
import searchinvoices from '../Helpers/searchinvoices';
import { AiOutlineSearch, AiOutlineAudioMuted, AiOutlineAudio } from "react-icons/ai";

const InvoicesSearchBar = ({search,setSearch,invoices,setSearchedInvoice,isListening,setIsListening}) => {
  const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const speech = new SpeechRecognition();
  speech.continuous = false;

  useEffect(()=>{
    searchinvoices(search,invoices)
    if(search){
      setSearchedInvoice([...searchinvoices(search,invoices)]);
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
      <AiOutlineSearch size={30}/>
      <input 
        className='search__input' 
        type='text' 
        placeholder="Search by customer's name"
        value={search} 
        onChange={(event)=>{
          setSearch(event.target.value)
        }}
      />
      <div className='search__voice-icon'>
        {isListening ? <AiOutlineAudio size={25} onClick={handleVoiceCommand}/>: <AiOutlineAudioMuted size={25} onClick={handleVoiceCommand}/>}
        <svg height="50" width="50" className={isListening ? 'blinking' :'hidden'}>
          {isListening ? <circle cx="50%" cy="50%" r="5" fill="crimson" />: null}
        </svg>
      </div> 
    </div>
  )
}

export default InvoicesSearchBar;
