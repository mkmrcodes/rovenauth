type ButtonProps = {
  children: React.ReactChild | string;
  className?: string;
  variant?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function TwSubmitBtn({
  children,
  className = '',
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className='btn btn-primary'>
      {children}
    </button>
  );
}
