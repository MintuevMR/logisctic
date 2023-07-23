import "./App.css";
import { useState } from "react";
import {  MapContainer,  TileLayer} from "react-leaflet";

import { Table } from "antd";
import RoutingControl from "./RoutingControl";

function App() {

  const initialDataSource = [
    {
      key: "1",
      name: "Маршрут N1",
      destinationA: [55.7422, 37.5719],
      destinationB: [53.7422, 37.5719],
    },
    {
      key: "2",
      name: "Маршрут N2",
      destinationA: [59.7422, 37.5719],
      destinationB: [55.7422, 37.5719],
    }
  ];

  const [start, setStart] = useState([46.7422, 37.5719]);
  const [end, setEnd] = useState([53.7422, 37.5719]);
  const defaultCenter = [55.7422, 37.5719];
  const defaultZoom = 8;
  const [dataSource, setDataSource] = useState(initialDataSource);

  const columns = [
    { title: "Маршрут", dataIndex: "name", key: "name" },
    { title: "Точка 1", dataIndex: "destinationA", key: "A" },
    { title: "Точка 2", dataIndex: "destinationB", key: "B" },
  ];
  
  const handleCellClick = (record, rowIndex, columnIndex) => { // тут  обновляем start/end
    setStart(record.destinationA);
    setEnd(record.destinationB); 
  };

  return (
    <div className="main">
      <div className="route">
        <Table
          dataSource={dataSource}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) =>
                handleCellClick(record, rowIndex, event.target.cellIndex),
            };
          }}
        />
      </div>
      <MapContainer center={defaultCenter} zoom={defaultZoom}>
        <RoutingControl
          position={"topright"}
          start={start}
          end={end}
          color={"#757d"}
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default App;
