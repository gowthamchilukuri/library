import * as lucideIcons from 'lucide-react';
export declare const icons: typeof lucideIcons.icons;
interface LucideProps extends React.ComponentPropsWithoutRef<'svg'> {
    icon: keyof typeof icons;
    title?: string;
}
declare function Lucide(props: LucideProps): import("react/jsx-runtime").JSX.Element;
export default Lucide;
//# sourceMappingURL=index.d.ts.map