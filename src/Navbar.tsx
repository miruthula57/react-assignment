import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import IconButtonComponent from "./components/IconButtonComponent";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = location.state || "";

  const handleLogOut = () => {
    navigate("/LoginModal");
  };
  
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1e2446", color: "white", p: 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            IndiaDataHub
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              maxWidth: 500,
              ml: 5,
            }}
          >
            <TextField
              placeholder="Search for data and analytics"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <IconButtonComponent
                    icon={<SearchIcon sx={{ padding: 0 }} color="inherit" />}
                    id={"SearchIcon"}
                  />
                ),
              }}
            />
          </Box>

          <Grid item xs={1}>
            <Select
              defaultValue="Database"
              variant="outlined"
              size="small"
              sx={{
                mr: 3,
                color: "white",
                backgroundColor: "#1e2446",
                border: "none",
                "& .MuiOutlinedInput-root": { border: "none" },
                "& .MuiSelect-icon": { color: "white" },
                "&:hover": { backgroundColor: "#1e2446" },
              }}
            >
              <MenuItem value="Database">Database</MenuItem>
            </Select>
          </Grid>

          <Grid xs={1}>
            <Typography variant="body1">Calendar</Typography>
          </Grid>
          <Grid xs={1}>
            <Typography variant="body1">Help</Typography>
          </Grid>
          {isLoggedIn ? (
            <>
              <Grid xs={1}>
                <Avatar sx={{ bgcolor: "#5e72e4" }}>U</Avatar>
              </Grid>
              <Grid xs={1}>
                <IconButtonComponent
                  sx={{ color: "white" }}
                  onClick={() => handleLogOut()}
                  icon={<LogoutIcon />}
                  id={"LogoutIcon"}
                />
              </Grid>
            </>
          ) : (
            <Typography variant="body1">
              <IconButtonComponent
                sx={{ color: "white" }}
                icon={<LoginIcon />}
                id={"LoginIcon"}
              />
              Login
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
