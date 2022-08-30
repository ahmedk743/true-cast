import React from "react";
import { InputPicker, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

import Card from "../../../../common/Card/Card";
import { globalStyles } from "../../../../utils/globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@mantine/core";
import { HEADLINES } from "../../../../constants/dummyData";
import axios, { AxiosResponse } from "axios";
import { showNotification } from "@mantine/notifications";
import { useAuth } from "../../../../contexts";

import moment from "moment";

function SearchSection({
  onSearchClick,
  news,
  onChangeNews,
  title,
  subtitle,
}: any) {
  const [headlines, setHeadlines] = React.useState<any>();
  // user from auth context
  const { user } = useAuth();

  const fetchHeadlines = async () => {
    axios.defaults.withCredentials = true;
    axios
      .get(`http://localhost:4000/api/getHeadlines`)
      .then((res: AxiosResponse) => {
        console.log(res.data);
        if (res.data !== "error") {
          const history = res.data;
          let newHeadlines: any = [];
          history.forEach((item: any) => {
            newHeadlines.push({ label: item.headline, value: item.headline });
          });
          setHeadlines(newHeadlines);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    onChangeNews("");
  };

  React.useEffect(() => {
    if (user) {
      fetchHeadlines();
    } else {
      setHeadlines(HEADLINES);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 40,
          fontSize: 12,
          color: "#777",
        }}
      >
        {moment().format("dddd, MMMM DD YYYY")}
      </div>
      <div className="title">
        {user ? (
          <span style={{ textTransform: "capitalize" }}>
            Welcome back, {user.username}
          </span>
        ) : (
          title
        )}
      </div>
      <p className="subtitle mt-1" style={{ color: "gray" }}>
        {subtitle}
      </p>

      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <a
          href={news !== "" ? "#results" : "#"}
          style={{
            backgroundColor: "#ddd",
            padding: "7px 10px",
            borderRadius: "0px 5px 5px 0px",
            position: "absolute",
            right: -1,
            zIndex: 99,
            cursor: "pointer",
          }}
          onClick={onSearchClick}
        >
          <FontAwesomeIcon
            icon={faSearch}
            color="gray"
            style={{ width: 22, height: 18 }}
          />
        </a>
        <InputPicker
          appearance="default"
          creatable
          style={{
            width: "100%",
          }}
          placeholder="Start typing news or paste a sentence here"
          data={headlines}
          renderMenuItem={(label, item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginRight: user ? 0 : -40,
                }}
              >
                <div>{label}</div>
                {user && (
                  <div
                    onClick={() => {
                      console.log("delete");
                      // deleteHeadline
                      axios.defaults.withCredentials = true;
                      axios
                        .post("http://localhost:4000/api/deleteHeadline", {
                          headline: label,
                        })
                        .then(
                          (res: AxiosResponse) => {
                            fetchHeadlines();
                          },
                          (err) => {
                            showNotification({
                              color: "red",
                              message: `Error: Cannot delete headline!`,
                              icon: <FontAwesomeIcon icon={faTimes} />,
                              autoClose: 2000,
                            });
                          }
                        );
                      onChangeNews("");
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                )}
              </div>
            );
          }}
          onCreate={(value: any) => {
            setHeadlines((prevState: any) => [
              ...prevState,
              { label: value, value: value },
            ]);
            // saveHeadline
            const options = {
              headers: { "content-type": "application/json" },
            };
            axios.defaults.withCredentials = true;
            axios
              .post(
                "http://localhost:4000/api/saveHeadline",
                {
                  headline: value,
                },
                options
              )
              .then(
                (res: AxiosResponse) => {},
                (err) => {
                  showNotification({
                    color: "red",
                    message: `Error: Cannot save headline. User not LoggedIn!`,
                    icon: <FontAwesomeIcon icon={faTimes} />,
                    autoClose: 2000,
                  });
                }
              );
          }}
          onSelect={(value: any) => {
            onChangeNews(value);
          }}
          onChange={(value: any) => {
            onChangeNews(value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchSection;
