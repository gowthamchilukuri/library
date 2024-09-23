export type FormCheckProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'div'>;
declare function FormCheck(props: FormCheckProps): import("react/jsx-runtime").JSX.Element;
declare namespace FormCheck {
    var Label: (props: LabelProps) => import("react/jsx-runtime").JSX.Element;
    var Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
}
export type LabelProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'label'>;
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    type: 'radio' | 'checkbox';
}
export default FormCheck;
//# sourceMappingURL=index.d.ts.map