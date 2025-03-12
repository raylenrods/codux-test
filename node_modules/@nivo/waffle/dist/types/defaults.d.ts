/// <reference types="react" />
import { CommonProps, Datum, WaffleHtmlLayer, WaffleSvgLayer } from './types';
export declare const commonDefaultProps: Omit<CommonProps<Datum>, 'valueFormat' | 'margin' | 'theme' | 'labelFormat' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick' | 'forwardLegendData' | 'renderWrapper' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy'>;
export declare const svgDefaultProps: {
    layers: WaffleSvgLayer<Datum>[];
    cellComponent: <D extends Datum>({ cell, animatedProps, borderRadius, borderWidth, testIdPrefix, }: import("./types").CellComponentProps<D>) => JSX.Element;
    defs: never[];
    fill: never[];
    legends: never[];
    motionStagger: number;
    animate?: boolean | undefined;
    motionConfig?: string | Partial<import("@react-spring/core").AnimationConfig> | undefined;
    hiddenIds: string[];
    fillDirection: import("@nivo/grid").GridFillDirection;
    padding: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Datum>;
    emptyColor: string;
    emptyOpacity: number;
    borderRadius: number;
    borderWidth: number;
    borderColor: import("@nivo/colors").InheritedColorConfig<{
        color: string;
    } | import("./types").ComputedDatum<Datum>>;
    isInteractive: boolean;
    tooltip: import("./types").TooltipComponent<Datum>;
    role: string;
};
export declare const htmlDefaultProps: {
    layers: WaffleHtmlLayer<Datum>[];
    cellComponent: <D extends Datum>({ cell, animatedProps, borderRadius, borderWidth, testIdPrefix, }: import("./types").CellComponentProps<D>) => JSX.Element;
    defs: never[];
    fill: never[];
    legends: never[];
    motionStagger: number;
    animate?: boolean | undefined;
    motionConfig?: string | Partial<import("@react-spring/core").AnimationConfig> | undefined;
    hiddenIds: string[];
    fillDirection: import("@nivo/grid").GridFillDirection;
    padding: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Datum>;
    emptyColor: string;
    emptyOpacity: number;
    borderRadius: number;
    borderWidth: number;
    borderColor: import("@nivo/colors").InheritedColorConfig<{
        color: string;
    } | import("./types").ComputedDatum<Datum>>;
    isInteractive: boolean;
    tooltip: import("./types").TooltipComponent<Datum>;
    role: string;
};
export declare const canvasDefaultProps: {
    legends: never[];
    pixelRatio: number;
    animate?: boolean | undefined;
    motionConfig?: string | Partial<import("@react-spring/core").AnimationConfig> | undefined;
    hiddenIds: string[];
    fillDirection: import("@nivo/grid").GridFillDirection;
    padding: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Datum>;
    emptyColor: string;
    emptyOpacity: number;
    borderRadius: number;
    borderWidth: number;
    borderColor: import("@nivo/colors").InheritedColorConfig<{
        color: string;
    } | import("./types").ComputedDatum<Datum>>;
    isInteractive: boolean;
    tooltip: import("./types").TooltipComponent<Datum>;
    role: string;
};
//# sourceMappingURL=defaults.d.ts.map