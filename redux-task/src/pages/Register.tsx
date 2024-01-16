import { Button, Stack, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { EMAIL_PATTERN_INCORRECT, FIELD_REQUIRED, Form } from "../utils";

export interface Register {
    name: string;
    email: string;
    password: string;
}

export const RegisterPage = () => {
    const [form, setForm] = useState<Form<Register>>({ submitted: false, value: {name: '', email: '', password: ''} });
    const handleChange = (name: string , value: string): void => {
        setForm({
            ...form,
            [name]: value
        });
    }
    const isValid = useMemo(() => {
        return Object.values(form.value).every((v) => v.length > 0);
    }, [form]);

    const errors = useMemo<{[key: string]: string | null}>(() => {
        const { name, email, password } = form.value;
        const obj: {[key: string]: string | null} = {
            name: name?.length > 0 ? null : FIELD_REQUIRED,
            email: email?.length > 0 ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? null : EMAIL_PATTERN_INCORRECT : FIELD_REQUIRED,
            password: password?.length > 0 ? password?.length < 8 ? 'Password should be atleast 8 characters': null : FIELD_REQUIRED
        };
        return obj;
    }, [form]);

    return <div>
        <h1>Register</h1>
        <Stack style={{margin: '0 auto'}} maxWidth={350} direction={'column'} gap={2}>
            <div>
                <TextField fullWidth label="Name" variant="filled" onChange={(e) => handleChange('name', e?.target?.value)} />
                {form?.submitted && errors?.name && <Typography variant={'body2'}  textAlign={'left'} color="error">
                    {errors.name}
                </Typography>}
            </div>
            <div>
                <TextField fullWidth label="Email" variant="filled" onChange={(e) => handleChange('email', e?.target?.value)} />
                {form?.submitted && errors?.email && <Typography variant={'body2'}  textAlign={'left'} color="error">
                    {errors.email}
                </Typography>}
            </div>
            <div>
                <TextField fullWidth  label="Password" type="password" variant="filled" onChange={(e) => handleChange('password', e?.target?.value)} />
                {form?.submitted && errors?.password && <Typography variant={'body2'}  textAlign={'left'} color="error">
                    {errors.password}
                </Typography>}
            </div>
            <Button variant="contained" disabled={!isValid}>Create Account</Button>
        </Stack>
    </div>
}