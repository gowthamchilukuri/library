import { default as React } from 'react';
interface Props {
    notifications: never[];
    Outlet: () => React.ReactElement;
    NotificationsPanel: React.FC<{
        notificationsPanel: boolean;
        setNotificationsPanel: React.Dispatch<React.SetStateAction<boolean>>;
    }>;
}
declare function Layout({ notifications, Outlet, NotificationsPanel }: Props): import("react/jsx-runtime").JSX.Element;
export default Layout;
//# sourceMappingURL=Layout.d.ts.map