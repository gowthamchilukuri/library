type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'pending' | 'danger' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-pending' | 'outline-danger' | 'outline-dark' | 'soft-primary' | 'soft-secondary' | 'soft-success' | 'soft-warning' | 'soft-pending' | 'soft-danger' | 'soft-dark' | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'shadow';
type Elevated = boolean;
type Size = 'sm' | 'lg';
type Rounded = boolean;
type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    as?: C extends string ? 'button' | 'a' : C;
    variant?: Variant;
    elevated?: Elevated;
    size?: Size;
    rounded?: Rounded;
}>;
type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactElement | null | React.ReactNode;
declare const Button: ButtonComponent;
export default Button;
//# sourceMappingURL=index.d.ts.map