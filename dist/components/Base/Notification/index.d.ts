import { default as Toastify, Options } from 'toastify-js';
export interface NotificationElement extends HTMLDivElement {
    toastify: ReturnType<typeof Toastify>;
    showToast: () => void;
    hideToast: () => void;
}
export interface NotificationProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'div'> {
    options?: Options;
    getRef?: (el: NotificationElement) => void;
}
declare function Notification({ className, options, getRef, children, ...computedProps }: NotificationProps): import("react/jsx-runtime").JSX.Element;
export default Notification;
//# sourceMappingURL=index.d.ts.map