import Clock from "./Modules/Clock.tsx";
import HttpResponse from "./Modules/HttpResponse.tsx";
import { config } from "./config.ts";

export default function Modules() {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      {config.modules.map((m) => {
        switch (m.moduleType) {
          case "clock":
            return <Clock key={m.name} className={m.className} />;
          case "httpResponse":
            return (
              <HttpResponse
                key={m.name}
                url={m.url}
                refreshInterval={m.refreshInterval}
                className={m.className}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
