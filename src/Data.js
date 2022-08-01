import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WrapperMade = styled.div`
  margin: 2rem auto;
  max-width: 75rem;
  width: 80%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  flex-wrap: wrap;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 30px;
`;

const InputBox = styled.div`
  display: flex;

  input {
    padding: 10px;
    border: none;
    outline: none;
    background-color: white;
    color: #000;
    border-radius: 5px;
  }

  button {
    margin-left: 20px;
    padding: 10px 20px;
    outline: none;
    border: 1px solid transparent;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const DataDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 5rem;
`;

const Text = styled.h1`
  font-size: 70px;
  text-align: center;
  color: #fff;
  margin-top: 15rem;
`;

const Repobutton = styled.button`
  padding: 10px 20px;
  outline: none;
  border: 1px solid transparent;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const Data = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  const handleRepo = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&type=owner`)
      .then((res) => res.json())
      .then((repo) => {
        navigate("/repo", { state: repo });
      });
  };

  return (
    <>
      <WrapperMade id="w-wrapper">
        <Header id="header-top">
          <Heading>Search Github Profile 🔍</Heading>
          <InputBox>
            <input
              onChange={onChangeHandler}
              value={user}
              type="text"
              placeholder="Username"
            />
            <button type="submit" onClick={handleSubmit}>
              Search
            </button>
          </InputBox>
        </Header>
        {data ? (
          <>
            <DataDiv id="datadiv">
              <div
                className="image-div"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <img
                  src={data.avatar_url}
                  alt=""
                  style={{ width: "20rem", borderRadius: "50%" }}
                  className="avatar"
                />
                <div>
                  <Repobutton
                    onClick={handleRepo}
                    style={{
                      width: "max-content",
                      marginTop: "20px",
                    }}
                  >
                    See {data.name}'s all repository?
                  </Repobutton>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <h1 className="content-h1">
                  Are you searching for
                  <span style={{ color: "red" }}> {data.name}'s</span> Profile?
                </h1>
                {/* Api Data Start */}
                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Name :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.name}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Username :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.login}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>ID :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.id}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Bio :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.bio}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Followers :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.followers}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ flex: "1", display: "flex", flexWrap: "wrap" }}
                    className="left"
                  >
                    <h4 style={{ color: "mintcream" }}>See All Followers :</h4>
                  </div>
                  <div
                    style={{ flex: "1", display: "flex", flexWrap: "wrap" }}
                    className="right"
                  >
                    {data.followers_url}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Following :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.following}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ flex: "1", display: "flex", flexWrap: "wrap" }}
                    className="left"
                  >
                    <h4 style={{ color: "mintcream" }}>Total Gists :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.public_gists}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Location :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.location}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Profile URL :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.html_url}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Blog :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.blog}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Twitter :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    @{data.twitter_username}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ flex: "1", display: "flex", flexWrap: "wrap" }}
                    className="left"
                  >
                    <h4 style={{ color: "mintcream" }}>Organization Url :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.organizations_url}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>
                      Total Public Repository :
                    </h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.public_repos}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>See All Repository :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.repos_url}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Account Type :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.type}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Account Created at :</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.created_at}
                  </div>
                </div>

                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    textAlign: "start",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: "1" }} className="left">
                    <h4 style={{ color: "mintcream" }}>Last Update on:</h4>
                  </div>
                  <div style={{ flex: "1" }} className="right">
                    {data.updated_at}
                  </div>
                </div>
              </div>
            </DataDiv>
            <p style={{ textAlign: "center", paddingTop: "30px" }}>
              Developed with ❤️ By{" "}
              <span style={{ color: "red" }}>Salam Sheikh</span>
            </p>
          </>
        ) : (
          <div className="text">
            <Text>No User Found! Search by Username First 😒</Text>
          </div>
        )}
      </WrapperMade>
    </>
  );
};

export default Data;
