/// <reference types="react" />
import { ComputedDatum, Datum, WaffleSvgProps } from './types';
interface WaffleAreasProps<D extends Datum> {
    data: ComputedDatum<D>[];
    isInteractive: Exclude<WaffleSvgProps<D>['isInteractive'], undefined>;
    onMouseEnter: WaffleSvgProps<D>['onMouseEnter'];
    onMouseMove: WaffleSvgProps<D>['onMouseMove'];
    onMouseLeave: WaffleSvgProps<D>['onMouseLeave'];
    onClick: WaffleSvgProps<D>['onClick'];
    tooltip: Exclude<WaffleSvgProps<D>['tooltip'], undefined>;
    testIdPrefix?: string;
}
export declare const WaffleAreas: <D extends Datum>({ data, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, testIdPrefix, }: WaffleAreasProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleAreas.d.ts.map