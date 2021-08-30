import React from "react";
import {
  Button,
  Icon,
  Avatar,
  Container,
  SummaryTable,
  Navigation,
  Separator,
  Title,
  Card,
} from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Cart = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    <Container>
      <Navigation
        firstAction={<Avatar src={data.user.avatar} />}
        lastAction={
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        }
      />
      <Title>Shopping Cart</Title>
      <Card size="small" {...item} />
      <Separator className="margin-top-3xl margin-bottom-3xl" />
      <SummaryTable
        items={[
          { name: "Subtotal", price: item.price },
          { name: "Estimated Delivery & Handling", price: "€0.00" },
        ]}
        total={item.price}
      />
      <Button as={Link} to="/checkout" isStretched className="margin-top-3xl">
        Checkout
      </Button>
    </Container>
  );
};

export default Cart;
