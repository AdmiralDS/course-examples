import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, DateField, InputField } from '@admiral-ds/react-ui';
import styled from 'styled-components';


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 50%;
`;

export const InputsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
      <InputField
        displayInline
        label={'Имя'}
        data-field-attr1={'name-field'}
        data-container-attr1={'name-container-id'}
        {...register('firstName')}
      />
      <InputField
        required
        label={'Login'}
        status={errors.login && 'error'}
        extraText={errors.login ? 'Поле обязательное для заполнения' : undefined}
        {...register('login', { required: true })}
      />
      <DateField
        required
        label={'Дата рождения'}
        {...register('birthday', {
          validate: (value: string) => {
            const date = new Date(value);
            return date instanceof Date && !isNaN(date) && date.getFullYear() < 1990;
          },
        })} />
      <Button type='submit' disabled={!isValid}>Зарегистрироваться</Button>
    </StyledForm>
  );
};
