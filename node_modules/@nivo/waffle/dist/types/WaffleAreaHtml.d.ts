/// <reference types="react" />
import { Line } from 'd3-shape';
import { Vertex } from '@nivo/grid';
import { ComputedDatum, Datum, WaffleHtmlProps } from './types';
interface WaffleAreaHtmlProps<D extends Datum> {
    data: ComputedDatum<D>;
    pathGenerator: Line<Vertex>;
    isInteractive: Exclude<WaffleHtmlProps<D>['isInteractive'], undefined>;
    onMouseEnter: WaffleHtmlProps<D>['onMouseEnter'];
    onMouseMove: WaffleHtmlProps<D>['onMouseMove'];
    onMouseLeave: WaffleHtmlProps<D>['onMouseLeave'];
    onClick: WaffleHtmlProps<D>['onClick'];
    tooltip: Exclude<WaffleHtmlProps<D>['tooltip'], undefined>;
    testIdPrefix: WaffleHtmlProps<D>['testIdPrefix'];
}
export declare const WaffleAreaHtml: <D extends Datum>({ data, pathGenerator, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, testIdPrefix, }: WaffleAreaHtmlProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleAreaHtml.d.ts.map