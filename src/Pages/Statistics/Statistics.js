import React from 'react'
import { Chartt } from "../../Components/Chart/Charts"
import "./Statistics.css"

export function Brands() {
  return (
    <div id='chart-main-container'>
      <div id='chart-main-inside-container'>
        <Chartt />
      </div>
    </div>
  )
}
