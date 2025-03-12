/// <reference types="react" />
import { Margin } from '@nivo/core';
import { Cell, Datum, CellComponent, WaffleHtmlProps } from './types';
interface WaffleCellsHtmlProps<D extends Datum> {
    cells: Cell<D>[];
    cellComponent: CellComponent<D>;
    padding: number;
    margin: Margin;
    borderRadius: number;
    borderWidth: number;
    motionStagger: number;
    testIdPrefix: WaffleHtmlProps<D>['testIdPrefix'];
}
export declare const WaffleCellsHtml: <D extends Datum>({ cells, cellComponent, padding, borderRadius, borderWidth, motionStagger, testIdPrefix, margin, }: WaffleCellsHtmlProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleCellsHtml.d.ts.map