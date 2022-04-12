import React from 'react'
import { ProductType } from '../types/product'
import {Link} from 'react-router-dom'
// import {Table, Space} from 'antd';

type ManagerProductProps = {
    data: ProductType[],
    onRemove: (id: number) => void
  
}
const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <table className="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {props.data && props.data.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                      <button onClick={() => props.onRemove(item._id)}>Remove</button>
                    </td>
                    </tr>
              })}
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct