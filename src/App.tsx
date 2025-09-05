import {
  Layout,
  Typography,
  Space,
  Segmented,
  Button,
  Card,
  Table,
  theme,
} from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import {
  selectSelectedTheme,
  selectEffectiveTheme,
  setTheme,
  type Theme,
} from "./store/themeSlice";
import type { ReactNode } from "react";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

type ThemeOption = {
  label: string;
  value: Theme;
  icon?: ReactNode;
};

const data = [
  { key: 1, name: "Alice", role: "Editor" },
  { key: 2, name: "Bob", role: "Viewer" },
];

const themeOptions: ThemeOption[] = [
  { label: "Light", value: "light", icon: <SunFilled /> },
  { label: "Dark", value: "dark", icon: <MoonFilled /> },
  { label: "System", value: "system" },
];

export default function App() {
  const selectedTheme = useAppSelector(selectSelectedTheme);
  const effectiveTheme = useAppSelector(selectEffectiveTheme);
  const dispatch = useAppDispatch();
  const { token } = theme.useToken();

  const handleThemeChange = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 16,
          gap: 16,
          background: token.colorBgContainer,
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          AntD Theme Demo
        </Title>
        <Space>
          <Segmented
            value={selectedTheme}
            onChange={(item) => handleThemeChange(item)}
            options={themeOptions}
          />
        </Space>
      </Header>

      <Content style={{ padding: 24 }}>
        <Space direction="vertical" size="large" style={{ display: "flex" }}>
          <Card title={`Текущая тема: ${effectiveTheme}`}>
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button danger>Danger</Button>
            </Space>
          </Card>

          <Card title="Таблица">
            <Table
              pagination={false}
              dataSource={data}
              columns={[
                { title: "Name", dataIndex: "name" },
                { title: "Role", dataIndex: "role" },
              ]}
            />
          </Card>

          <Card title="Текстовые стили">
            <Space direction="vertical">
              <Title level={3} style={{ margin: 0 }}>
                Заголовок H3
              </Title>
              <Text>
                Это обычный текст. Цвета/фоны/бордеры автоматически подстроены
                под тему через токены.
              </Text>
            </Space>
          </Card>
        </Space>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design Theming · {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
