import React from 'react'
import FormHeader from "@/components/backoffice/FormHeader"
import BannerForms from '@/components/backoffice/forms/BannerForms'
import { getData } from "@/lib/getData"
export default async function UpdateBanner({params:{id}}) {
  const banner = await getData(`banners/${id}`)
  return (
    <div>
     <FormHeader title="Update Banner" />
     <BannerForms updateData={banner}/>
    </div>
  )
}
