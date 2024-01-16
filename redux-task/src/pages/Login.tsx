import { Button, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import { EMAIL_PATTERN_INCORRECT, FIELD_REQUIRED, Form } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { State } from "../redux/reducer";
import { Navigate, useNavigate } from "react-router-dom";

export interface Login {
    email: string;
    password: string;
}

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: State) => state.user);

    useEffect(() => {
        console.log(':: user', user);
        if(user) {
            navigate('/');
        }
    }, [user]);

    const [form, setForm] = useState<Form<Login>>({ submitted: false, value: { email: '', password: ''}});

    const handleChange = (name: string, value: string ) => {
        setForm({
            ...form,
            value: {
                ...form.value,
                [name]: value
            }
        });
    }

    const errors = useMemo(() => {
        const { email, password } = form?.value;
        let errMap: { [key: string]: string | null } = {
            email: email?.length > 0 ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? null : EMAIL_PATTERN_INCORRECT: FIELD_REQUIRED,
            password: password?.length > 0 ? password?.length < 8 ? 'Password should be atleast 8 characters': null : FIELD_REQUIRED
        }
        return errMap;
    }, [form]);

    const isValid = useMemo(() => {
        return Object.values(form.value).every((v) => v?.length > 0);
    }, [errors]);

    const handleSubmit = () => {
        setForm({ ...form, submitted: true });
        const { email, password } = form?.value;
        dispatch(login(email, password));
    }

    return <>
        <h1>Login</h1>
        <Stack style={{margin: '0 auto'}} maxWidth={350} direction={'column'} gap={2}>
            <div>
                <TextField fullWidth label="Email" variant="filled" error={form?.submitted && !!errors?.email} onChange={(e) => handleChange('email', e?.target?.value)} />
                {form?.submitted && errors?.email && <Typography variant={'body2'}  textAlign={'left'} color="error">
                    {errors.email}
                </Typography>}
            </div>
            <div>
                <TextField fullWidth  label="Password" type="password" variant="filled" error={form?.submitted && !!errors?.password} onChange={(e) => handleChange('password', e?.target?.value)} />
                {form?.submitted && errors?.email && <Typography variant={'body2'}  textAlign={'left'} color="error">
                    {errors.password}
                </Typography>}
            </div>
            <Button variant="contained" disabled={!isValid} onClick={handleSubmit}>Login</Button>
            <p>Email: email@email.com Password: 12345678</p>
        </Stack>
    </>
}