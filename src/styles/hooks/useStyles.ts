import { useMemo } from "react";
import { useTheme } from "@emotion/react";
import { Theme } from "../types/Theme";

export function useStyles<TStyles extends Record<string, unknown>, TProps>(
  styles: (theme: Theme, props: TProps) => TStyles,
  props: TProps
): TStyles & Record<string, string>;

export function useStyles<TStyles extends Record<string, unknown>>(
  styles: (theme: Theme) => TStyles
): TStyles & Record<string, string>;

/**
 * A hook that applies the theme from the ThemeProvider to the style object
 * for CSS in JS code. It optionally passes in props if desired.
 * @param styles The styles CSS in JS style object.
 * @param props Optionally pass in props from the components to the styles object.
 * @returns the styles object with an injected theme.
 */
export function useStyles<
  TStyles extends Record<string, unknown>,
  TProps = undefined
>(styles: (theme: Theme, props?: TProps) => TStyles, props?: TProps): TStyles {
  const theme = useTheme();

  return useMemo(() => styles(theme, props), [props, styles, theme]);
}
