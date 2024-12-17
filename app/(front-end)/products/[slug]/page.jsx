import React from 'react'
import BreadCrumb from '../../../../components/frontend/BreadCrumb'

export default function productDetailPage({params:{slug}}) {
  return (
    <div>
      <h2>wellcome to detail page</h2>
      <BreadCrumb/>
        <p>{slug}</p>
    </div>
  )
}
