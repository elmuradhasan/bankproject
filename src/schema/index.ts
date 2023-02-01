import * as yup from 'yup'
export const schema = yup.object().shape({
    username: yup.string().min(3).required('Required'),
    password: yup.string()
    .required('No password provided.') 
    .min(4, 'Password is too short - should be 4 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})


export const RegisterSchema = yup.object().shape({
    username: yup.string().min(3).required('Required'),
    password: yup.string()
    .required('No password provided.') 
    .min(4, 'Password is too short - should be 4 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: yup.string().email("Please enter a valid email").required('Required'),
});
