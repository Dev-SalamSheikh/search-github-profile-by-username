import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const WrapperMade = styled.div`
  margin: 2rem auto;
  max-width: 75rem;
  width: 80%;
  text-align: center;
`;

const Homebutton = styled.button`
  padding: 10px 20px;
  outline: none;
  border: 1px solid transparent;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const Repo = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const list = data.map((item, i) => (
    <div key={i}>
      <Card border="danger" text="white" bg="dark" style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title style={{ textTransform: "uppercase", color: "red" }}>
            {item.name}
          </Card.Title>
          <Card.Text>
            {item.description
              ? item.description
              : "Description is not avaiable in this Repository"}
          </Card.Text>
          <Card.Text>
            Repository Link <a href={item.clone_url}>{item.clone_url}</a>
          </Card.Text>
          <Card.Text style={{ color: "red" }}>
            Default Branch: {item.default_branch}
          </Card.Text>
          <Card.Text style={{ color: "lightblue" }}>
            Most Used Language: {item.language}
          </Card.Text>
          <Card.Text>Repo Froks: {item.forks_count}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <WrapperMade>
      <h1>Here is All Repository 💯</h1>
      <Link to="/">
        <Homebutton>Search Again</Homebutton>
      </Link>
      <div className="mt-5 d-flex flex-row flex-wrap align-items-center justify-content-center text-center gap-5">
        {list}
      </div>
    </WrapperMade>
  );
};

export default Repo;
