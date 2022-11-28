import { useForm } from "react-hook-form"
import { Input } from "../../components/Input";
import { 
    Column, 
    Container, 
    LoginContainer, 
    Spacing, 
    Title 
} from "./style"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
    email: yup.string().email('E-mail Inválido').required('Campo Obrigatório'),
    password: yup.string().min(6, "Mínimo de 6 caracteres, são execenciais").required('Campo Obrigatório'),
}).required()

const Login = () => {

    const {control, formState:{errors, isValid}} = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
    });

    console.log(errors);

    return(<Container>
        <LoginContainer>
            <Column>
                <Title>Login</Title>
                <Spacing/>
                <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message}/>
                <Spacing/>
                <Input type="password" name="password" placeholder="Senha" control={control} errorMessage={errors?.password?.message}/>
                <Spacing/>
            </Column>
        </LoginContainer>
    </Container>)
}

export default Login