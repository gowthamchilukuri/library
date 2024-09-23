import { TomSettings, RecursivePartial, TomInput } from 'tom-select/src/types/index';
import { default as TomSelectPlugin } from 'tom-select';
export interface TomSelectElement extends HTMLSelectElement, Omit<TomInput, keyof HTMLSelectElement | 'tomselect'> {
    TomSelect: TomSelectPlugin;
}
export interface TomSelectProps<T extends string | string[]> extends React.PropsWithChildren, Omit<React.ComponentPropsWithoutRef<'select'>, 'onChange'> {
    value: T;
    onOptionAdd?: (value: string) => void;
    onChange: (e: {
        target: {
            value: T;
        };
    }) => void;
    options?: RecursivePartial<TomSettings>;
    getRef?: (el: TomSelectElement) => void;
}
export interface TomSelectProps<T extends string | string[] = string | string[]> extends React.PropsWithChildren, Omit<React.ComponentPropsWithoutRef<'select'>, 'onChange'> {
    value: T;
    onOptionAdd?: (value: string) => void;
    onChange: (e: {
        target: {
            value: T;
        };
    }) => void;
    options?: RecursivePartial<TomSettings>;
    getRef?: (el: TomSelectElement) => void;
}
declare function TomSelect<T extends string | string[]>({ className, options, value, onOptionAdd, onChange, getRef, children, ...computedProps }: TomSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export default TomSelect;
//# sourceMappingURL=index.d.ts.map