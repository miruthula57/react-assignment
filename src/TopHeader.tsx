import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PushPinIcon from "@mui/icons-material/PushPin";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import { Grid, Typography } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import IconButtonComponent from "./components/IconButtonComponent";
const TopHeader = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="flex-start"
        p={2}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="flex-start"
        >
          <ArrowBackIosIcon fontSize="small" />
          <Typography
            variant="h6"
            sx={{ display: "inline-flex", alignItems: "center", ml: 3 }}
          >
            <b>Economic Monitor</b>
          </Typography>
          <Grid item sx={{ flexGrow: 1 }} />
          <Grid item xs="auto">
            <IconButtonComponent
              icon={
                <SearchIcon
                  sx={{
                    padding: 0.5,
                    color: "black",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  }}
                />
              }
              id={"SearchIcon"}
            />
          </Grid>
          <Grid item xs="auto">
            <IconButtonComponent
              icon={
                <BookmarkBorderIcon
                  sx={{
                    padding: 0.5,
                    color: "black",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  }}
                />
              }
              id={"SearchIcon"}
            />
          </Grid>
          <Grid item xs="auto">
            <IconButtonComponent
              icon={
                <FilterAltIcon
                  sx={{
                    padding: 0.5,
                    color: "black",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  }}
                />
              }
              id={"SearchIcon"}
            />
          </Grid>
          <Grid item xs="auto">
            <Typography variant="body2" align="center" mx={3}>
              Selected ( 2 )
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <IconButtonComponent
              icon={
                <ShoppingCartIcon
                  sx={{
                    padding: 0.5,
                    color: "black",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  }}
                />
              }
              id={"SearchIcon"}
            />
          </Grid>
          <Grid item xs="auto">
            <IconButtonComponent
              icon={
                <PushPinIcon
                  sx={{
                    padding: 0.5,
                    color: "black",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  }}
                />
              }
              id={"SearchIcon"}
            />
          </Grid>
          <Grid item xs="auto">
            <ButtonComponent
              label={"View Graph"}
              sx={{
                textTransform: "none",
                padding: "6px 16px",
              }}
              startIcon={<StackedBarChartIcon />}
              id={"View Graph"}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TopHeader;
