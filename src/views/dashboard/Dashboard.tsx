import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchBar from "../../components/text/SearchText";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllBlogs } from "../../store/blogs";
import { selectBlogSearch } from "../../store/blogs/selectors";
import Text2 from "../../components/text/Text2";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isPublished, setIsPublished] = useState(false);

  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectBlogSearch);
  const navigate = useNavigate();

  const theme = useTheme();

  const [search, setSearch] = useState(searchText);

  const handleSearchChange = (str: string) => {
    setSearch(str);
  };

  const handleSearchSubmit = (evt: any) => {
    if (evt.key === "Enter") dispatch(getAllBlogs({ search: search, page: 1 }));
  };

  const handleDetail = () => {
    navigate("/sell");
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(to bottom, #173039, #00b4c9)" }}>
        <Box
          sx={{
            padding: { xs: "32px 16px", sm: "48px 32px", lg: "56px 48px" },
            [theme.breakpoints.up("sm")]: { maxWidth: "1280px" },
            width: "100%",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px" },
              lineHeight: 1.2,
              color: "#fff",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Filters
          </Typography>
          <SearchBar
            search={search}
            handleSearch={handleSearchChange}
            handleKeyDown={handleSearchSubmit}
          />
          <Box
            sx={{ display: "flex", alignItems: "flex-start", paddingLeft: { xs: 0, sm: "12px" }, mt: 1 }}
          >
            <Checkbox
              {...label}
              checked={isPublished}
              sx={{ "& .MuiSvgIcon-root": { fill: "#ffffff" } }}
              onClick={(e: any) => setIsPublished(!isPublished)}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: 1.4,
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Show only whitelisted properties's offers
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "calc(100vh - 420px)",
          backgroundColor: "#fff",
          padding: { xs: "32px 16px", sm: "48px 24px", lg: "64px 48px" },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "20px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: "12px", flexShrink: 0 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00dbe3",
              borderRadius: "6px",
              width: { xs: "100%", lg: "220px" },
              minWidth: { xs: 0, lg: "220px" },
              height: { xs: "50px", lg: "58px" },
              fontSize: { xs: "14px", sm: "18px" },
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a2bb",
              borderRadius: "6px",
              width: { xs: "100%", lg: "220px" },
              minWidth: { xs: 0, lg: "220px" },
              height: { xs: "50px", lg: "58px" },
              fontSize: { xs: "14px", sm: "18px" },
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#173039",
              borderRadius: "6px",
              width: { xs: "100%", lg: "220px" },
              minWidth: { xs: 0, lg: "220px" },
              height: { xs: "50px", lg: "58px" },
              fontSize: { xs: "14px", sm: "18px" },
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Exchange
          </Button>
        </Box>
        <Box sx={{ overflowX: "auto", width: "100%", minWidth: 0 }}>
          <Table
            aria-label="simple table"
            sx={{
              borderCollapse: "unset",
              whiteSpace: "nowrap",
              borderRadius: "8px",
              border: "2px solid #00dbe3",
            }}
          >
            <TableHead sx={{ background: "#f3f3f3" }}>
              <TableRow
                sx={{
                  "& th": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& th:first-child": {
                    borderTopLeftRadius: "8px",
                  },
                  "& th:last-child": {
                    borderRight: "0px",
                    borderTopRightRadius: "8px",
                  },
                }}
              >
                <TableCell align="center">
                  <Text2>Offer ID</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Offer Token</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Buyer token</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Rate of Return</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>offer Yield</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>% Difference</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Official price</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Asked Price</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>% Difference</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Stock</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Cart</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>View</Text2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                hover
                sx={{
                  cursor: "pointer",
                  "& td": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& td:last-child": { borderRight: "0px" },
                }}
              >
                <TableCell align="center">
                  <Text2>371</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Token 1</Text2>
                </TableCell>
                <TableCell>
                  <Text2>USDC</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>10%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>20%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$51.35</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$60.00</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$16.85%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12.28838</Text2>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                      handleDetail();
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                sx={{
                  cursor: "pointer",
                  "& td": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& td:last-child": { borderRight: "0px" },
                }}
              >
                <TableCell align="center">
                  <Text2>371</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Token 1</Text2>
                </TableCell>
                <TableCell>
                  <Text2>USDC</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>10%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>20%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$51.35</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$60.00</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$16.85%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12.28838</Text2>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                      handleDetail();
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
