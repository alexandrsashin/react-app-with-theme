import { Layout, Typography, Space, Card, Button, Table } from "antd";
import { useAppSelector } from "../../../app/providers";
import { selectEffectiveTheme } from "../../../entities/theme";

const { Content: AntdContent } = Layout;
const { Title, Text } = Typography;

const data = [
  { key: 1, name: "Alice", role: "Editor" },
  { key: 2, name: "Bob", role: "Viewer" },
];

export const Content = () => {
  const effectiveTheme = useAppSelector(selectEffectiveTheme);

  return (
    <AntdContent style={{ padding: 24 }}>
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
              Это обычный текст. Цвета/фоны/бордеры автоматически подстроены под
              тему через токены.
            </Text>
          </Space>
        </Card>
      </Space>
    </AntdContent>
  );
};
