interface ModuleProps {
  name: string;
  moduleType: string;
}

export const config = {
  modules: [
    {
      name: "Clock",
      moduleType: "clock",
    },
  ] as ModuleProps[],
};
