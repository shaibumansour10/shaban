import FormHeader from "@/components/backoffice/FormHeader"
import NewCategoryForm from "@/components/backoffice/forms/NewCategoryForm"
import { getData } from "@/lib/getData"
export default async function updateCategory({params:{id}}) {
const category =await getData(`categories/${id}`)

  return (
    <div>
      <FormHeader title="Update Category" />
     <NewCategoryForm updateData={category}/>
    </div>
  )
}
