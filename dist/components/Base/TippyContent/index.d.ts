import { Props } from 'tippy.js';
interface MainProps {
    to: string;
    getRef?: (el: HTMLElement | null) => HTMLElement;
    options?: Props;
}
type TippyContentProps = React.PropsWithChildren<MainProps> & Omit<React.ComponentPropsWithoutRef<'div'>, keyof MainProps>;
declare function TippyContent(props: TippyContentProps): import("react/jsx-runtime").JSX.Element;
export default TippyContent;
//# sourceMappingURL=index.d.ts.map