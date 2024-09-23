import { Menu as HeadlessMenu } from '@headlessui/react';
declare function Menu({ children, className, ...props }: ExtractProps<typeof HeadlessMenu>): import("react/jsx-runtime").JSX.Element;
declare namespace Menu {
    var Button: <C extends React.ElementType = "div">({ as, children, className, onClick, ...props }: ExtractProps<typeof HeadlessMenu.Button> & {
        as?: C;
    } & React.ComponentPropsWithRef<C>) => import("react/jsx-runtime").JSX.Element;
    var Items: ({ children, className, placement, ...props }: ExtractProps<typeof HeadlessMenu.Items> & {
        placement?: "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-start" | "left" | "left-end";
    }) => import("react/jsx-runtime").JSX.Element;
    var Item: ({ children, className, ...props }: ExtractProps<typeof HeadlessMenu.Item>) => import("react/jsx-runtime").JSX.Element;
    var Divider: (props: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
    var Header: (props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
    var Footer: (props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
}
export default Menu;
//# sourceMappingURL=index.d.ts.map