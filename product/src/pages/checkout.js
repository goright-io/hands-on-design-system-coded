/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import {
  Button,
  Icon,
  Carousel,
  Select,
  Navigation,
  Separator,
  Container,
  Title,
  MultilineInput,
} from "design-system";
import { Link } from "react-router-dom";
const data = require("../data/data.js");

const imagesPath = `${process.env.PUBLIC_URL}/images`;

const card = `${imagesPath}/card.svg`;
const cardBlue = `${imagesPath}/cardBlue.svg`;
const cardPink = `${imagesPath}/cardPink.svg`;


const Checkout = () => {
  return (
    <>
      <Container background="primary100">
        <Navigation
          firstAction={
            <Button as={Link} to="/cart" isIcon color="white">
              <Icon name="arrowBack" />
            </Button>
          }
          lastAction={
            <Button isIcon color="white">
              <Icon name="settings" />
            </Button>
          }
          title="Card"
        />
        <Title size="small">Payment Method</Title>
        <Carousel
          images={[
            { source: card },
            { source: cardBlue },
            { source: cardPink },
          ]}
        />
      </Container>
      <Container>
        <MultilineInput label="Address" text={data.user.address} />
        <Separator className="margin-bottom-3xl margin-top-sm" />
        <Title size="small">Delivery</Title>
        <p>Tarja A Grönholm</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Select className="margin-top-3xl" options={data.deliveryOptions} />
          <p>€00.00</p>
        </div>
        <Separator className="margin-bottom-3xl" />
        <Title className="margin-bottom-3xl" size="small">
          <span>Total</span>
          <span>€95.00</span>
        </Title>
        <Button to="/" as={Link} isStretched>
          Place Order
        </Button>
      </Container>
    </>
  );
};

export default Checkout;
