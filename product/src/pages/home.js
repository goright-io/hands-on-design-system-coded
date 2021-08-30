/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import {
  Button,
  Icon,
  Avatar,
  Title,
  Navigation,
  ProductNav,
  Grid,
  Card,
  Container,
} from "design-system";
 
import { Link } from "react-router-dom";

const data = require("../data/data.js");

const Home = () => {
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
      <Title>Store</Title>
      <ProductNav />

      <Grid>
        {Object.entries(data.products).map(([id, item]) => {
          return (
            <Card as={Link} key={id} to={`/details/${id}`} {...item} />
          );
        })}
      </Grid>
                  <Card/>

    </Container>
  );
};


export default Home;