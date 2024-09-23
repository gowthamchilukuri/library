import { Popover as HeadlessPopover } from '@headlessui/react';
declare function Popover({ children, className, ...props }: ExtractProps<typeof HeadlessPopover>): import("react/jsx-runtime").JSX.Element;
declare namespace Popover {
    var Button: <C extends React.ElementType = "div">({ as, children, className, ...props }: ExtractProps<typeof HeadlessPopover.Button> & {
        as?: C;
    } & React.ComponentPropsWithRef<C>) => import("react/jsx-runtime").JSX.Element;
    var Panel: ({ children, className, placement, ...props }: ExtractProps<typeof HeadlessPopover.Panel> & {
        placement?: "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-start" | "left" | "left-end";
    }) => import("react/jsx-runtime").JSX.Element;
}
export default Popover;
//# sourceMappingURL=index.d.ts.map