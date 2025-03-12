import { GridFillDirection, GridCell } from './types';
export declare const computeCellDimensions: ({ width, height, rows, columns, padding, square, }: {
    width: number;
    height: number;
    rows: number;
    columns: number;
    padding: number;
    square: boolean;
}) => number[];
/**
 * Generate a grid of cells.
 */
export declare const generateGrid: <C extends GridCell = GridCell>({ width, height, columns, rows, padding, fillDirection, square, extend, }: {
    width: number;
    height: number;
    columns: number;
    rows: number;
    padding?: number | undefined;
    fillDirection?: GridFillDirection | undefined;
    square?: boolean | undefined;
    extend?: ((cell: GridCell, origin: [number, number]) => C) | undefined;
}) => {
    x: number;
    y: number;
    cellWidth: number;
    cellHeight: number;
    cells: C[];
};
//# sourceMappingURL=grid.d.ts.map