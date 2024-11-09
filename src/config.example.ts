interface ModuleProps {
  name: string;
  moduleType: "clock" | "httpResponse";
  url?: string;
  refreshInterval?: number;
}

// The name is used as a key in React, so it must be unique
export const config = {
  modules: [
    {
      name: "Clock",
      moduleType: "clock",
    },
    {
      name: "RoomInfo",
      moduleType: "httpResponse",
      url: "http://localhost:3000/roomInfo",
      refreshInterval: 1000, // in milliseconds
    },
  ] as ModuleProps[],
};
