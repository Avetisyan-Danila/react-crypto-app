import AppHeader from "./AppHeader.jsx";
import { Layout, Spin } from "antd";
import AppSider from "./AppSider.jsx";
import AppContent from "./AppContent.jsx";
import { useCrypto } from "../../context/crypto-context.jsx";

export default function AppLayout() {
  const { isLoading } = useCrypto();

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
