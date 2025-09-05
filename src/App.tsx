import { Layout } from "antd";
import { Header } from "./widgets/header";
import { Content } from "./widgets/content";

const { Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content />
      <Footer style={{ textAlign: "center" }}>
        Ant Design Theming · {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
