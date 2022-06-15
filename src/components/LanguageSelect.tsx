export const LanguageSelect = (props: {
  onChange: (language: string) => void;
}) => {
  const { onChange } = props;

  return (
    <select onChange={(e) => onChange(e.target.value || "en-US")}>
      <option value="en-US">En</option>
      <option value="ru-RU">Ru</option>
    </select>
  );
};
