import { Layout, Menu, Breadcrumb, Avatar ,Row} from "antd";
import React from "react";
import ModelsL from "../modelL";
import ModelsR from "../modelR";
import App from "../App";


const { Header } = Layout;

const header = () => (
  <Layout className="layout">
    <Header>

      <div style={{ display: "flex", flexDirection: "row" }}>
         <div style={{ color: "white", size: "49" }}>Header</div>
         <div style={{marginLeft :'85%',display: "flex", flexDirection: "row"  }}>
          <ModelsL />
          <div style={{marginLeft:20}}>
          <ModelsR />
          </div>
        </div>
      </div>
    </Header>
  </Layout>
);

export default header;
