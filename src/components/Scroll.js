import React from 'react'

export default function Scroll(props) {
  return (
    <div style={{ overflowY: "scroll", height: "95vh" }}>
      {props.children}
    </div>
  )
}
