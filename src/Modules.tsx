import Clock from "./Modules/Clock.tsx";
import { config } from "./config.ts";

export default function Modules() {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      {config.modules.map((m) => {
        switch (m.moduleType) {
          case "clock":
            return <Clock key={m.name} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
