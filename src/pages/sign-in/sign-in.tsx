import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLoginMutation } from '@/store/authentication/auth.api.ts';
import { useAppDispatch } from '@/hooks/store.tsx';
import { setUser } from '@/store/authentication/auth.slice.ts';
import { shame } from '@/services/yup-schema/shame.ts';

interface FormSchema {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: shame.email,
  password: shame.password,
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormSchema>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();
  const [login, { isLoading, isError }] = useLoginMutation();

  const onSubmit = async (d: FormSchema) => {
    const user = await login({ email: d.email, password: d.password }).unwrap();
    dispatch(setUser(user));
  };
  return (
    <>
      {isLoading && <div>...Loading</div>}
      {isError && <div>Error</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <input {...register('email')} type="email" />
          {errors.email?.message}
          <input {...register('password')} type="password" />
          <button type="submit" disabled={!isValid || !isDirty}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
