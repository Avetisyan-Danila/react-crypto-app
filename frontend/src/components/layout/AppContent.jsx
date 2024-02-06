import { Layout, Statistic, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context.jsx";
import PortfolioChart from "../PortfolioChart.jsx";
import AssetsTable from "../AssetsTable.jsx";

const contentStyle = {
  minHeight: "calc(100vh - 60px)",
  backgroundColor: "#001529",
  padding: "1rem",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  const cryptoPriceMap = crypto.reduce((acc, c) => {
    acc[c.id] = c.price;
    return acc;
  }, {});

  const portfolio = assets
    .map((asset) => asset.amount * cryptoPriceMap[asset.id])
    .reduce((acc, v) => (acc += v), 0);

  return (
    <Layout.Content style={contentStyle}>
      <Statistic
        value={portfolio}
        precision={2}
        valueRender={(value) => {
          return (
            <Typography.Title level={3} style={{ color: "#ffffff" }}>
              Portfolio: {value}$
            </Typography.Title>
          );
        }}
      />

      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
