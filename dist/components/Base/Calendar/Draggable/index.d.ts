import { Draggable as FullCalendarDraggable } from '@fullcalendar/interaction';
export interface DraggableProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'div'> {
    options: FullCalendarDraggable['settings'];
}
declare function Draggable({ children, options }: DraggableProps): import("react/jsx-runtime").JSX.Element;
export default Draggable;
//# sourceMappingURL=index.d.ts.map