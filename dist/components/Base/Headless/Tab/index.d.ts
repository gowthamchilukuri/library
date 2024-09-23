import { Tab as HeadlessTab } from '@headlessui/react';
type Variant = 'tabs' | 'pills' | 'boxed-tabs' | 'link-tabs';
declare function Tab({ children, className, fullWidth, ...props }: Omit<ExtractProps<typeof HeadlessTab> & {
    fullWidth?: boolean;
}, 'ref'>): import("react/jsx-runtime").JSX.Element;
declare namespace Tab {
    var Button: <C extends React.ElementType = "a">({ children, className, as, ...props }: {
        as?: C;
    } & React.PropsWithChildren & React.ComponentPropsWithoutRef<C>) => import("react/jsx-runtime").JSX.Element;
    var Group: ({ children, ...props }: ExtractProps<typeof HeadlessTab.Group>) => import("react/jsx-runtime").JSX.Element;
    var List: ({ children, className, variant, ...props }: ExtractProps<typeof HeadlessTab.List> & {
        variant?: Variant;
    }) => import("react/jsx-runtime").JSX.Element;
    var Panels: ({ children, className, ...props }: ExtractProps<typeof HeadlessTab.Panels>) => import("react/jsx-runtime").JSX.Element;
    var Panel: ({ children, className, ...props }: ExtractProps<typeof HeadlessTab.Panel>) => import("react/jsx-runtime").JSX.Element;
}
export default Tab;
//# sourceMappingURL=index.d.ts.map