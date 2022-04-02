import React from 'react'
import type { ProductType } from '../types/product'

type ShowInfoProps  = {
  name: string,
  children:JSX.Element
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
      chào mày...{props.children}
    </div>
  )
}

export default ShowInfo