declare module "*.json" {
  interface GlobJsonFile {
    [lang: string]: {
      [key: string]: string;
    };
  }
  const content: GlobJsonFile;
  export default content;
}
