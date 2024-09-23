import { FormCheckProps, LabelProps } from '../FormCheck';
declare function FormSwitch(props: FormCheckProps): import("react/jsx-runtime").JSX.Element;
declare namespace FormSwitch {
    var Label: (props: LabelProps) => import("react/jsx-runtime").JSX.Element;
    var Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
}
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    type: 'checkbox';
}
export default FormSwitch;
//# sourceMappingURL=index.d.ts.map