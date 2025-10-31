import {z} from 'zod';

export const menuFormSchema = z.object({
    name:z.string().nonempty({message: "Restaurant name is required"}),
    description:z.string().nonempty({message:"description is required"}),
    price:z.number().min(0, {message:'Price cannot be negative'}),
    imageFile:z.instanceof(File).optional().refine((file) => file?.size != 0, {message:"Image file is required"})

});

//To set type of variable's
export type MenuFromSchema = z.infer<typeof menuFormSchema>