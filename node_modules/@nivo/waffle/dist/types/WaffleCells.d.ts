/// <reference types="react" />
import { Cell, Datum, WaffleSvgProps, CellComponent } from './types';
interface WaffleCellsProps<D extends Datum> {
    cells: Cell<D>[];
    cellComponent: CellComponent<D>;
    padding: number;
    borderRadius: number;
    borderWidth: number;
    motionStagger: number;
    testIdPrefix: WaffleSvgProps<D>['testIdPrefix'];
}
export declare const WaffleCells: <D extends Datum>({ cells, cellComponent, padding, borderRadius, borderWidth, motionStagger, testIdPrefix, }: WaffleCellsProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=WaffleCells.d.ts.map