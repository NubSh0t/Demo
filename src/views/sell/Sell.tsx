import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Text1 from "../../components/text/Text1";

const Sell = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
            padding: { xs: "32px 16px 40px", sm: "56px 32px 48px", lg: "72px 48px 56px" },
          [theme.breakpoints.up("sm")]: { maxWidth: "1400px" },
            width: "100%",
          margin: "auto",
          textAlign: "left"
        }}
      >
        <Box>
          <Box
            sx={{
              minHeight: { xs: "52px", sm: "60px" },
              padding: { xs: "10px 14px", sm: "12px 20px" },
              background: "#00dbe3",
              fontSize: { xs: "15px", sm: "24px", md: "30px" },
              lineHeight: 1.25,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
              textAlign: "center"
            }}
          >
            Real Estate Property Token
          </Box>
          <Box sx={{ position: "relative", width: "100%" }}>
            <img
              alt="sell"
              src="/images/sell.jpg"
              style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }}
            />
            <Box
              sx={{
                background: "#00dbe3",
                borderRadius: "6px",
                width: { xs: "calc(100% - 24px)", sm: "367px" },
                maxWidth: "calc(100% - 24px)",
                textAlign: "center",
                position: { xs: "static", sm: "absolute" },
                mt: { xs: 2, sm: 0 },
                mx: { xs: "auto", sm: 0 },
                left: { xs: "12px", sm: "auto" },
                right: { sm: "24px" },
                top: { xs: "auto", sm: "50%" },
                bottom: { xs: "12px", sm: "auto" },
                transform: { xs: "none", sm: "translateY(-50%)" }
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "24px", sm: "30px" },
                  lineHeight: 1.2,
                  padding: "14px 8px",
                  color: "#173039",
                  fontWeight: 700
                }}
              >
                Original Offer
              </Box>
              <Box sx={{ padding: "2px" }}>
                <Table sx={{ background: "white", width: "100%", tableLayout: "fixed" }}>
                  <TableBody>
                    <TableRow
                      hover
                      sx={{
                        "& td": {
                          padding: "0px 5px",
                          borderRight: "2px solid #00dbe3",
                          width: { xs: "33.33%", sm: "110px" },
                          height: { xs: "78px", sm: "110px" },
                          wordBreak: "break-word"
                        },
                        "& td:last-child": { borderRight: "0px" }
                      }}
                    >
                      <TableCell align="center">
                        <Text1>Yield</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>10.00%</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>----</Text1>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                      sx={{
                        "& td": {
                          padding: "0px 5px",
                          borderRight: "2px solid #00dbe3",
                          width: { xs: "33.33%", sm: "110px" },
                          height: { xs: "78px", sm: "110px" },
                          wordBreak: "break-word"
                        },
                        "& td:last-child": { borderRight: "0px" }
                      }}
                    >
                      <TableCell align="center">
                        <Text1>Price</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>50.19</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>NaN</Text1>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
              gap: { xs: 3, md: 6 },
              padding: { xs: "28px 4px 8px", sm: "36px 12px 16px" },
              textAlign: "left"
            }}
          >
            <Box>
              <Typography sx={{ fontSize: { xs: "24px", sm: "30px" }, color: "#173039", fontWeight: 700, mb: 1 }}>
                Property-backed investment opportunity
              </Typography>
              <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#52666b", lineHeight: 1.6 }}>
                Own a digital share in a real-world property with transparent pricing, clear offer terms, and a simple path to exchange your token.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: "22px", sm: "26px" }, color: "#173039", fontWeight: 700, mb: 1.5 }}>
                Key features
              </Typography>
              {["Verified property-backed token", "Transparent yield and pricing", "Secure wallet-to-wallet exchange"].map(feature => (
                <Box key={feature} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#00b4c9", fontSize: 22 }} />
                  <Typography sx={{ fontSize: { xs: "15px", sm: "17px" }, color: "#52666b" }}>{feature}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              minHeight: "52px",
              background: "#173039",
              fontSize: { xs: "14px", sm: "20px" },
              lineHeight: 1.4,
              padding: "10px 16px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "4px"
            }}
          >
            <PlaceIcon sx={{ color: "#2dd8c8" }} />
            20550 Townsen Blvd Bldg 2 unit 101
            <span style={{ color: "#2dd8c8" }}>&nbsp; Humble Tx 77338</span>
          </Box>
        </Box>
        <Box sx={{ padding: { xs: "32px 0 0", sm: "40px 8vw 0", lg: "40px 100px 0" } }}>
          <Box
            sx={{
              borderRadius: "6px",
              backgroundColor: "#173039",
              textAlign: "center",
              width: { xs: "100%", sm: "352px" },
              padding: "12px"
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "32px" },
                lineHeight: 1.2,
                color: "#23a2bb",
                fontWeight: 700
              }}
            >
              Offer Number
            </Typography>
            <Typography
              sx={{ fontSize: "30px", color: "#fff", fontWeight: 400 }}
            >
              1111
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: { xs: 0, sm: "20px" }, mt: 2 }}>
            <Box sx={{ margin: { xs: "18px 0", sm: "20px" } }}>
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "26px" }, color: "#00dbe3", fontWeight: 600 }}
              >
                Offer Token Name
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#162f38", fontWeight: 400, overflowWrap: "anywhere" }}
              >
                Detail Token name
              </Typography>
            </Box>
            <Box sx={{ margin: { xs: "18px 0", sm: "20px" } }}>
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "26px" }, color: "#00dbe3", fontWeight: 600 }}
              >
                Buyer Token Name
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#162f38", fontWeight: 400, overflowWrap: "anywhere" }}
              >
                USDC/
              </Typography>
            </Box>
            <Box sx={{ margin: { xs: "18px 0", sm: "20px" } }}>
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "26px" }, color: "#00dbe3", fontWeight: 600 }}
              >
                Seller Address
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#162f38", fontWeight: 400, overflowWrap: "anywhere" }}
              >
                Seller wallet address
              </Typography>
            </Box>
            <Box sx={{ margin: { xs: "18px 0", sm: "20px" } }}>
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "26px" }, color: "#00dbe3", fontWeight: 600 }}
              >
                Quantity
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#162f38", fontWeight: 400, overflowWrap: "anywhere" }}
              >
                149.888441
              </Typography>
            </Box>
            <Box sx={{ margin: { xs: "18px 0", sm: "20px" } }}>
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "26px" }, color: "#00dbe3", fontWeight: 600 }}
              >
                Price
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "16px", sm: "18px" }, color: "#162f38", fontWeight: 400, overflowWrap: "anywhere" }}
              >
                1 Property Token name = Given Crypto name Quantity
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a2bb",
              borderRadius: "6px",
              width: "100%",
              height: "58px",
              fontSize: { xs: "18px", sm: "22px" },
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
              gap: "20px"
            }}
          >
            Cart
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: "32px", color: "#00dbe3" }}
            />
          </Button>
          <Box
            component="section"
            sx={{
              mt: { xs: 4, sm: 6 },
              pt: { xs: 3, sm: 4 },
              borderTop: "1px solid #d9e7e8",
              textAlign: "center"
            }}
          >
            <Typography sx={{ fontSize: { xs: "20px", sm: "24px" }, color: "#173039", fontWeight: 700 }}>
              Questions about this offer?
            </Typography>
            <Typography sx={{ mt: 1, fontSize: { xs: "15px", sm: "17px" }, color: "#52666b" }}>
              Contact our team at support@estokk.com or call +1 (800) 555-0148.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sell;
