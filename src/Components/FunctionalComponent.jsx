import React, { useState } from 'react'

function FunctionalComponent({nama}) {
  const [umur, setUmur] = useState(18)
  const tambahUmur = () => {
    setUmur(umur + 1)
  }
  const kurangiUmur = () => {
    if (umur > 18) {
      setUmur(umur - 1)
    }
  }
  return (
    <div>
      <h3>{nama}</h3>
      <h3>Umur : 
        <button onClick={tambahUmur}>+</button>
        <span> {umur} </span>
        <button onClick={kurangiUmur}>-</button>
      </h3>
    </div>
  )
}

export default FunctionalComponent
