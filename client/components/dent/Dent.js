import React from 'react'
import { get_img_dent } from '../../../collections/ressources/imgDentHelper'

const Dent = ({num, face}) => {
  const imgPath = get_img_dent(num, face)

  return <img src={imgPath} alt={num} className={`${face}${num}`} />
}

export default Dent