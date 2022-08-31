import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import DepositButton from "../components/DepositButton";

const buttonData = [
  { value: 100, title: 100 },
  { value: 200, title: 200 },
  { value: 500, title: 500 },
  { value: 1000, title: 1000 },
  { value: 2000, title: 2000 },
  { value: 5000, title: 5000 },
  { value: 10000, title: 10000 },
  { value: 20000, title: 20000 },
];
const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const handleAmount = (e) => {
    setAmount(e.target.value * 1000);
  };
  return (
    <Grid container>
      <Card sx={{ background: "lightGrey" }}>
        <CardContent>
          <Grid container>
            <Grid item md={6} padding={5}>
              <Card sx={{ width: "100%", marginTop: 5 }}>
                <CardContent>
                  <Typography sx={{ marginY: 3 }}>QR-VNPAY</Typography>
                  <Card sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      sx={{ borderBottom: "solid 2px gray", marginY: 3 }}
                      placeholder="100-5000"
                      value={amount / 1000}
                      onChange={handleAmount}
                    />
                    <Typography sx={{ marginY: 0.5 }}>={amount} VND</Typography>
                    <Typography sx={{ marginY: 3 }}>
                      Deposit is based 1000 as the base unit
                    </Typography>
                    <Grid container textAlign="center" spacing={2} paddingY={2}>
                      {buttonData.map((data, index) => (
                        <DepositButton
                          key={index}
                          value={data.value}
                          title={data.title}
                          onClick={(e) => {
                            handleAmount(e);
                          }}
                        />
                      ))}
                    </Grid>
                  </Card>
                  <div style={{ textAlign: "center" }}>
                    <Button variant="contained" sx={{ width: "100%" }}>
                      Generate QR Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} padding={5}>
              <Typography sx={{ marginY: 3 }}>Payment Tutorial</Typography>
              <Typography>
                Payment tutorial:
                <Typography>
                  1. Choose your payment gate > Fill in the deposit amount >
                  Send.{" "}
                </Typography>
                <Typography>
                  2. Please fill in the deposit information after the Third
                  party payment page appears .{" "}
                </Typography>
                <Typography>
                  3. To prevent any error, please remain on the Third party
                  payment page until the "Payment Success" message pop up.{" "}
                </Typography>
                <Typography>
                  4. After review with the 3rd party payment, your wallet credit
                  will be top up automatically by the system.{" "}
                </Typography>
                <Typography>
                  5. You may contact the Online Customer service if you meet any
                  trouble or failure.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Deposit;
