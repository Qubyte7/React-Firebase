import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore'
interface CreateFormData {
    title: string
    description:string
}




export const CreateForm = () =>{
const Schema = yup.object().shape({
    title: yup.string().required("You Must add a title."),
    description:yup.string().required("You must add a description. "),

});
const  {register,handleSubmit, formState:{errors}} = useForm<CreateFormData>({
    resolver: yupResolver(Schema)
})
const postsRef = collection

const onCreatePost = (data:CreateFormData) =>{
          console.log(data);
}

    return  <div>

<form onSubmit={handleSubmit(onCreatePost)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
  <input
    type="text"
    placeholder="Title..."
    {...register("title")}
    style={{
      width: '300px',
      padding: '10px',
      marginBottom: '10px',
      border: errors.title ? '2px solid red' : '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
    }}
  />
  {errors.title && <p style={{ color: 'red', marginBottom: '10px' }}>{errors.title.message}</p>}
  <textarea
    id="description"
    cols={30}
    rows={10}
    {...register("description")}
    style={{
      width: '300px',
      height: '200px',
      padding: '10px',
      marginBottom: '10px',
      border: errors.description ? '2px solid red' : '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
    }}
  ></textarea>
  {errors.description && <p style={{ color: 'red', marginBottom: '10px' }}>{errors.description.message}</p>}
  <input
    type="submit"
    value="Submit"
    style={{
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  />
</form>


         </div>
   
    }