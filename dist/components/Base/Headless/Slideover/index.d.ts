import { Dialog as HeadlessDialog } from '@headlessui/react';
type Size = 'sm' | 'md' | 'lg' | 'xl';
declare function Slideover({ children, className, as, open, onClose, staticBackdrop, size, ...props }: ExtractProps<typeof HeadlessDialog> & {
    size?: Size;
    staticBackdrop?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Slideover {
    var Panel: ({ children, className, as, ...props }: ExtractProps<typeof HeadlessDialog.Panel> & {
        size?: Size;
    }) => import("react/jsx-runtime").JSX.Element;
    var Title: ({ children, className, as, ...props }: ExtractProps<typeof HeadlessDialog.Title>) => import("react/jsx-runtime").JSX.Element;
    var Description: ({ children, className, as, ...props }: ExtractProps<typeof HeadlessDialog.Description>) => import("react/jsx-runtime").JSX.Element;
    var Footer: <C extends React.ElementType = "div">({ children, className, as, ...props }: {
        as?: C;
    } & React.PropsWithChildren & React.ComponentPropsWithoutRef<C>) => import("react/jsx-runtime").JSX.Element;
}
export default Slideover;
//# sourceMappingURL=index.d.ts.map