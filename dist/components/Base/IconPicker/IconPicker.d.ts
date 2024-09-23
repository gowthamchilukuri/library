import { default as React } from 'react';
import { icons } from '../Lucide';
type IconPickerProps = {
    onChange: (icon: keyof typeof icons) => void;
    title: string;
};
declare const IconPicker: React.FC<IconPickerProps>;
export default IconPicker;
//# sourceMappingURL=IconPicker.d.ts.map