import { Layout, Typography, theme } from "antd";
import { ThemeSwitcher } from "../../../features/theme-switcher";

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

export const Header = () => {
  const { token } = theme.useToken();

  return (
    <AntdHeader
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
      <ThemeSwitcher />
    </AntdHeader>
  );
};
