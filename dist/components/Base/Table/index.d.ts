interface TableProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'table'> {
    dark?: boolean;
    bordered?: boolean;
    hover?: boolean;
    striped?: boolean;
    sm?: boolean;
}
declare function Table({ className, dark, bordered, hover, striped, sm, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
declare namespace Table {
    var Thead: ({ className, ...props }: TheadProps) => import("react/jsx-runtime").JSX.Element;
    var Tbody: ({ className, ...props }: TbodyProps) => import("react/jsx-runtime").JSX.Element;
    var Tr: ({ className, ...props }: TrProps) => import("react/jsx-runtime").JSX.Element;
    var Th: ({ className, ...props }: ThProps) => import("react/jsx-runtime").JSX.Element;
    var Td: ({ className, ...props }: TdProps) => import("react/jsx-runtime").JSX.Element;
}
interface TheadProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'thead'> {
    variant?: 'default' | 'light' | 'dark';
}
type TbodyProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<'tbody'>>;
type TrProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'tr'>;
type ThProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'th'>;
type TdProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'td'>;
export default Table;
//# sourceMappingURL=index.d.ts.map