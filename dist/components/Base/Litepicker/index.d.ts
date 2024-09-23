import { default as LitepickerJs } from 'litepicker';
import { ILPConfiguration } from 'litepicker/dist/types/interfaces';
export interface LitepickerElement extends HTMLInputElement {
    litePickerInstance: LitepickerJs;
}
type LitepickerConfig = Partial<ILPConfiguration>;
export interface LitepickerProps extends React.PropsWithChildren, Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
    options: {
        format?: string | undefined;
    } & LitepickerConfig;
    onChange: (e: {
        target: {
            value: string;
        };
    }) => void;
    value?: string;
    getRef?: (el: LitepickerElement) => void;
}
declare function Litepicker({ options, value, onChange, getRef, ...computedProps }: LitepickerProps): import("react/jsx-runtime").JSX.Element;
export default Litepicker;
//# sourceMappingURL=index.d.ts.map