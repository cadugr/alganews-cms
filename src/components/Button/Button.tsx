import * as B from './Button.styles'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant: 'danger' | 'text' | 'primary'
    label: string
}

export default function Button ({ label, variant, ref, ...props }: ButtonProps) {
    return <B.Wrapper 
        variant={variant} 
        {...props}
        >
        { label }
    </B.Wrapper>
}