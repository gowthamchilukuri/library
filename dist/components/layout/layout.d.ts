import { default as React } from 'react';
type Props = {
    notifications: any[];
    Outlet: React.FC;
    NotificationsPanel: React.FC<{
        notificationsPanel: boolean;
        setNotificationsPanel: React.Dispatch<React.SetStateAction<boolean>>;
    }>;
};
declare function Layout({ notifications, Outlet, NotificationsPanel }: Props): import("react/jsx-runtime").JSX.Element;
export default Layout;
//# sourceMappingURL=layout.d.ts.map