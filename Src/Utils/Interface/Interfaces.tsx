import { ViewProps } from "react-native";

export interface container extends ViewProps{
    style?:object;
    children?:any;
    isBalckTheme?:Boolean,
    bottomSafeareColor?:any;
}