import { TomSelectProps, TomSelectElement } from './index';
import { TomSettings, RecursivePartial } from 'tom-select/src/types/index';
declare const setValue: <T extends string | string[]>(el: TomSelectElement, props: TomSelectProps<T>) => void;
declare const init: <T extends string | string[]>(originalEl: TomSelectElement, clonedEl: TomSelectElement, props: TomSelectProps<T>, computedOptions: RecursivePartial<TomSettings>) => void;
declare const updateValue: <T extends string | string[]>(originalEl: TomSelectElement, clonedEl: TomSelectElement, value: string | string[], props: TomSelectProps<T>, computedOptions: RecursivePartial<TomSettings>) => void;
export { setValue, init, updateValue };
//# sourceMappingURL=tom-select.d.ts.map