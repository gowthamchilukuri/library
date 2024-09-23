import { Disclosure as HeadlessDisclosure } from '@headlessui/react';
type Variant = 'default' | 'boxed';
declare function Disclosure({ children, className, key, ...props }: ExtractProps<typeof HeadlessDisclosure> & {
    key?: number;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Disclosure {
    var Group: <C extends React.ElementType = "div">({ children, className, as, selectedIndex, variant, ...props }: {
        as?: C;
        selectedIndex?: number;
        variant?: Variant;
    } & React.PropsWithChildren & React.ComponentPropsWithoutRef<C>) => import("react/jsx-runtime").JSX.Element;
    var Button: ({ children, className, ...props }: ExtractProps<typeof HeadlessDisclosure.Button>) => import("react/jsx-runtime").JSX.Element;
    var Panel: ({ children, className, ...props }: ExtractProps<typeof HeadlessDisclosure.Panel>) => import("react/jsx-runtime").JSX.Element;
}
export default Disclosure;
//# sourceMappingURL=index.d.ts.map