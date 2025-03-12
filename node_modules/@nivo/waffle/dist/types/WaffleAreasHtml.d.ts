/// <reference types="react" />
import { Margin } from '@nivo/core';
import { ComputedDatum, Datum, WaffleHtmlProps } from './types';
interface WaffleAreasHtmlProps<D extends Datum> {
    data: ComputedDatum<D>[];
    margin: Margin;
    isInteractive: Exclude<WaffleHtmlProps<D>['isInteractive'], undefined>;
    onMouseEnter: WaffleHtmlProps<D>['onMouseEnter'];
    onMouseMove: WaffleHtmlProps<D>['onMouseMove'];
    onMouseLeave: WaffleHtmlProps<D>['onMouseLeave'];
    onClick: WaffleHtmlProps<D>['onClick'];
    tooltip: Exclude<WaffleHtmlProps<D>['tooltip'], undefined>;
    testIdPrefix: WaffleHtmlProps<D>['testIdPrefix'];
}
export declare const WaffleAreasHtml: <D extends Datum>({ data, margin, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, testIdPrefix, }: WaffleAreasHtmlProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleAreasHtml.d.ts.map