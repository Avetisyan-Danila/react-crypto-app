import { Divider, Tag, Typography, Statistic } from "antd";
import CoinInfo from "./CoinInfo.jsx";

export function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSybmol />

      <Divider />

      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>

        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>

        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>

      {coin.price && (
        <Typography.Paragraph style={{ display: "flex" }}>
          <Typography.Text strong style={{ marginRight: 5 }}>
            Price:
          </Typography.Text>
          <Statistic
            value={coin.price}
            precision={2}
            valueStyle={{ fontSize: 14 }}
          />
          $
        </Typography.Paragraph>
      )}

      {coin.priceBtc && (
        <Typography.Paragraph style={{ display: "flex" }}>
          <Typography.Text strong style={{ marginRight: 5 }}>
            Price BTC:
          </Typography.Text>
          <Statistic
            value={coin.priceBtc}
            precision={2}
            valueStyle={{ fontSize: 14 }}
          />
        </Typography.Paragraph>
      )}

      {coin.marketCap && (
        <Typography.Paragraph style={{ display: "flex" }}>
          <Typography.Text strong style={{ marginRight: 5 }}>
            Market Cap:
          </Typography.Text>
          <Statistic
            value={coin.marketCap}
            precision={2}
            valueStyle={{ fontSize: 14 }}
          />
          $
        </Typography.Paragraph>
      )}

      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
    </>
  );
}
