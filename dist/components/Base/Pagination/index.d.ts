type PaginationProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'nav'>;
declare function Pagination({ className, children }: PaginationProps): import("react/jsx-runtime").JSX.Element;
declare namespace Pagination {
    var Link: ({ className, active, onClick, disabled, children }: LinkProps) => import("react/jsx-runtime").JSX.Element;
}
interface LinkProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'li'> {
    active?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}
export default Pagination;
//# sourceMappingURL=index.d.ts.map