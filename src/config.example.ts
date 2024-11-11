interface ModuleProps {
  // The name is used as a key in React, so it must be unique
  name: string;
  moduleType: "clock" | "httpResponse";
  className?: string;
  url?: string;
  refreshInterval?: number;
}

export const config = {
  shader: {
    images: {
      // Place the files under /public/shader_assets/
      // You can load it with `uniform sampler2D u_example;`
      example: 'example.jpg',
    },
  },
  modules: [
    {
      name: "Clock",
      moduleType: "clock",
      className: "absolute bottom-5 left-5",
    },
    {
      name: "RoomInfo",
      moduleType: "httpResponse",
      url: "http://localhost:3000/roomInfo",
      refreshInterval: 1000, // in milliseconds
      className: "absolute top-5 right-5",
    },
  ] as ModuleProps[],
};
