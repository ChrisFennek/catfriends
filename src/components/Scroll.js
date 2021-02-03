import React from 'react'

export default function Scroll(props) {
  return (
    <div style={{ overflowY: "scroll", height: "85vh" }}>
      {props.children}
    </div>
  )
}
