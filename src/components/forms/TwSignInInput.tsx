import { useFormContext, RegisterOptions } from 'react-hook-form';
import { useState } from 'react';
import { EyeIcon } from '@heroicons/react/solid';
import { EyeOffIcon } from '@heroicons/react/solid';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export type InputProps = {
  label: string;
  id: string;
  showPassword?: boolean;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function TwSignInInput({
  label,
  placeholder = '',
  helperText,
  id,
  type = 'text',
  readOnly = false,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-full font-display text-black font-semibold mt-2'>
      <label
        htmlFor={id}
        className='block text-sm font-semibold text-neutral-700'
      >
        {label}
      </label>
      <div className='w-full relative mt-1'>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : type}
          name={id}
          id={id}
          readOnly={readOnly}
          className='block w-full shadow-sm placeholder-neutral-300 pl-2 text-sm border border-neutral-200 rounded-sm focus:ring-0 focus:ring-primary-500 focus:border-primary-500 py-2'
          placeholder={placeholder}
          aria-describedby={id}
        />
        {id === 'password' && (
          <div
            className={`absolute top-2.5 ${
              errors[id] ? 'right-10' : 'right-5'
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeIcon className='h-5 w-5 text-neutral-600' />
            ) : (
              <EyeOffIcon className='h-5 w-5 text-neutral-600' />
            )}
          </div>
        )}

        {errors[id] && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <ExclamationCircleIcon className='h-6 w-6 text-error' />
          </div>
        )}
      </div>
      <div className=''>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {errors[id] && (
          <span className='text-xs text-red-500'>{errors[id].message}</span>
        )}
      </div>
    </div>
  );
}
