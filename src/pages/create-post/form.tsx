import {useForm} from'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

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

const onCreatePost = (data:CreateFormData) =>{
          console.log(data)
}

    return  <div>
        <form onSubmit={handleSubmit(onCreatePost)}>
  <input type="text" placeholder='Titlle...'  {...register("title")} />
  <p>{errors.title?.message}</p>
  <textarea name="description" id="description" cols={30} rows={10} {...register(" description")}></textarea>    
  <p>{errors.description?.message}</p> 
    <input type="submit"  value="submit"/>    
        
        
        </form>

         </div>
   
    }