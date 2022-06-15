import { ThemeName } from "../styles/types/ThemeName";

export const StylesSelect = (props: {
  onChange: (theme: ThemeName) => void;
}) => {
  const { onChange } = props;

  return (
    <select
      onChange={(e) => onChange((e.target.value as ThemeName) || "light")}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};
