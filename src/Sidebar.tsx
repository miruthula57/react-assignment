import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

interface MenuProps {
  onMenuClick: (category: string) => void;
}

const Sidebar = (props: MenuProps) => {
  const { onMenuClick } = props;
  const [categories, setCategoriesData] = useState<any[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [categoriesIVFData, setcategoriesIVFData] = useState<any[]>([]);
  const [hideData, setHideData] = useState<any>(false);

  const API_URL = useMemo(() => process.env.REACT_APP_API_BASE_URL, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/categories`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategoriesData(data);
      } catch (err: any) {
      } finally {
      }
    };
    fetchData();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async (category: string) => {
    onMenuClick(category);
    try {
      const response = await fetch("http://localhost:3030/categories1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setcategoriesIVFData(data);
      setHideData(true);
      setAnchorEl(null);
    } catch (err: any) {
    } finally {
    }
  };

  const handleFunction = async () => {
    try {
      const response = await fetch("http://localhost:3030/categories");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategoriesData(data);
      setHideData(false);
      setAnchorEl(null);
    } catch (err: any) {
    } finally {
    }
  };

  return (
    <>
      <Paper elevation={1} sx={{ width: "98%", marginRight: 3 }}>
        <Button
          variant="text"
          sx={{
            backgroundColor: "",
            justifyContent: "flex-start",
          }}
          onClick={handleClick}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" mr={15} color="black">
                Category
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                color="black"
                fontWeight="bold"
                mt={1}
              >
                India & States
              </Typography>
            </Grid>
          </Grid>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            "& .MuiMenu-paper": {
              minWidth: "200px",
            },
          }}
        >
          <MenuItem
            onClick={() => handleClose("IVF")}
            sx={{
              minWidth: "200px",
            }}
          >
            IVF
          </MenuItem>
          <MenuItem
            onClick={handleFunction}
            sx={{
              minWidth: "200px",
            }}
          >
            India States
          </MenuItem>
        </Menu>
      </Paper>

      <Paper
        elevation={1}
        sx={{
          height: 410,
          overflow: "auto",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          mt: 1,
        }}
      >
        {hideData ? (
          <>
            {Object.keys(categoriesIVFData).map((category) => (
              <Box
                key={category}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    color: "primary.main",
                  },
                  mb: 1,
                }}
              >
                <ArrowRightIcon sx={{ mr: 1 }} />
                <Typography variant="body1">{category}</Typography>
              </Box>
            ))}
          </>
        ) : (
          <>
            {Object.keys(categories).map((category) => (
              <Box
                key={category}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    color: "primary.main",
                  },
                  mb: 1,
                }}
              >
                <ArrowRightIcon sx={{ mr: 1 }} />
                <Typography variant="body1">{category}</Typography>
              </Box>
            ))}
          </>
        )}
      </Paper>
    </>
  );
};

export default Sidebar;
