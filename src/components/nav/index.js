import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import { publicTabData, privateTabData } from "../../constants/tabs";
import { useNavigate } from "react-router-dom";
import MernLogo from "../../images/MERN-Logo.png";

const NavBar = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, setCurrentTab, currentTab } = props;

  const handleChange = (_, newVal) => {
    if (newVal === "/") {
      localStorage.clear();
    }
    setCurrentTab(newVal);
    navigate(newVal);
  };

  return (
    <div style={{ padding: "10px 20px" }}>
      <AppBar>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ padding: "6px", marginTop: "13px" }}>LEARN</span>
            <img
              src={MernLogo}
              alt="logo"
              style={{
                marginLeft: "10px",
                borderRadius: "50%",
                width: "68px",
                height: "56px",
              }}
            />
          </div>
          <Tabs value={currentTab} onChange={handleChange}>
            {(isAuthenticated ? privateTabData : publicTabData).map(
              (tab, index) => (
                <Tab key={index} label={tab.label} value={tab.path} />
              )
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
