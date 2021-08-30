import React from "react";
import { Button, Icon, Navigation, Card, Container } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    item && (
      <div>
        <Container>
          <Navigation
            firstAction={
              <Button as={Link} to="/" isOutline>
                <Icon name="arrowBack" />
              </Button>
            }
            title={item.name}
          />
          <Card size="big" {...item} />

          <Button as={Link} to={`/cart/${id}`} isStretched>
            Add to Cart
          </Button>
        </Container>
      </div>
    )
  );
};

export default Details;