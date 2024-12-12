import React from 'react'
import { BtnType } from '../../type'

export default function GrayBtn(props: BtnType) {
  const { action, text } = props

  return (
    <button className="calendar_gray_btn" onClick={() => action()}>
      {text}
    </button>
  )
}
