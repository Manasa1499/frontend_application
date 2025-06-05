import { useState, useEffect } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import { tabsData } from "../../constants/tabs";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const [data, setData] = useState(null);
  const [currentTab, setCurrentTab] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Make the API call when the component mounts
    // fetch('http://localhost:5000/api/data')
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (_, newVal) => {
    setCurrentTab(newVal);
    navigate(tabsData[newVal].path);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Tabs value={currentTab} onChange={handleChange}>
            {tabsData.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
