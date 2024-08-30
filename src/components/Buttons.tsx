import React from 'react'

interface Props {
    children : string; 
    color? :'primary'|'secondary'|'danger';
    onClick : () => void;
}
const Buttons = ({children,color="danger",onClick}: Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
  )
}

export default Buttons