import React from 'react'

const Slides = (props) => {

  const {indx,handleTransitionEnd,transition,translate,slides}=props
  let multiple=1

  if(indx===0){
    multiple=2.1
  }

  return (
    <div style={{transition:transition?"0.5s ease-out":"none",transform:`translateX(-${multiple*translate*50}%)`}} onTransitionEnd={handleTransitionEnd} >slider {slides[indx]}</div>
  )
}

export default Slides