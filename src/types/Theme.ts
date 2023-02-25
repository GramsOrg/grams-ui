export interface Theme {
    mode: Mode;
    dir: string;
}

export enum Mode {
    Light,
    Dark
}

export const DefaultTheme: Theme = {
    mode: Mode.Light,
    dir: "ltr"
}
