import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const CreateRoutineMachineLayer = ({ position, start, end, color }) => { // тут надо реализовать отрисовку при изменении start/end из пропса
  const instance = L.Routing.control({
    position,
    waypoints: [start, end],
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  });
  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
