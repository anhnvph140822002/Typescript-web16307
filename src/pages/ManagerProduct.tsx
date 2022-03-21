import React from 'react'
import { ProductType } from '../types/product'

type ManagerProductProps = {
    data: ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <table className="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>mô tả</th>
                    <th>giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {props.data && props.data.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td>
                    {/* <button onClick={() => removeItem(item._id)}>Remove</button> */}
                    </td>
                    </tr>
              })}
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct