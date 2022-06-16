import { useMemo } from "react";
import { Theme } from "@mui/material";
import { useTheme } from "@emotion/react";

export function useStyles<TStyles extends Record<string, unknown>, TProps>(
  styles: (theme: Theme, props: TProps) => TStyles,
  props: TProps
): TStyles & Record<string, string>;

export function useStyles<TStyles extends Record<string, unknown>>(
  styles: (theme: Theme) => TStyles
): TStyles & Record<string, string>;

export function useStyles<
  TStyles extends Record<string, unknown>,
  TProps = undefined
>(styles: (theme: Theme, props?: TProps) => TStyles, props?: TProps): TStyles {
  const theme = useTheme();

  return useMemo(() => styles(theme as Theme, props), [props, styles, theme]);
}
