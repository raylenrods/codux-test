/// <reference types="react" />
import { Line } from 'd3-shape';
import { ComputedDatum, Datum, WaffleSvgProps } from './types';
import { Vertex } from '@nivo/grid';
interface WaffleAreaProps<D extends Datum> {
    data: ComputedDatum<D>;
    pathGenerator: Line<Vertex>;
    isInteractive: Exclude<WaffleSvgProps<D>['isInteractive'], undefined>;
    onMouseEnter: WaffleSvgProps<D>['onMouseEnter'];
    onMouseMove: WaffleSvgProps<D>['onMouseMove'];
    onMouseLeave: WaffleSvgProps<D>['onMouseLeave'];
    onClick: WaffleSvgProps<D>['onClick'];
    tooltip: Exclude<WaffleSvgProps<D>['tooltip'], undefined>;
    testIdPrefix: WaffleSvgProps<D>['testIdPrefix'];
}
export declare const WaffleArea: <D extends Datum>({ data, pathGenerator, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, testIdPrefix, }: WaffleAreaProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleArea.d.ts.map