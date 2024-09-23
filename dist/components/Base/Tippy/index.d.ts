import { PopperElement, Props } from 'tippy.js';
type TippyProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    getRef?: (el: PopperElement | null) => void;
    content: string;
    as?: C;
    options?: Partial<Props>;
}>;
declare const Tippy: <C extends React.ElementType = "span">(props: TippyProps<C>) => import("react/jsx-runtime").JSX.Element;
export default Tippy;
//# sourceMappingURL=index.d.ts.map