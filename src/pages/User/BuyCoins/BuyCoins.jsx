import "./BuyCoins.css";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import {
  Container,
  Card,
  CardMedia,
  TextField,
  CardContent,
  Typography,
  Button,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { DoubleArrow } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import BankApi from "../../../API/User/BankApi";
const paymentMethods = [
  { id: 1, name: "Credit Card", image: "https://picsum.photos/200/300" },
  { id: 2, name: "PayPal", image: "https://picsum.photos/200/300" },
  { id: 3, name: "Bank Transfer", image: "https://picsum.photos/200/300" },
  // Add more payment methods as needed
];
const conversionRate = 1000;

const BuyCoins = () => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].name);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [paySuccess, setPaySuccess] = useState(localStorage.getItem('paySuccess'));

  useEffect(() => {
    setPrice(amount * conversionRate);
  }, [amount]);

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };
  const handleBuy = () => {
    if (selectedMethod === 'Credit Card') {
      if (amount < 0) {
        toast.error('Amount must be greater than 0');
        return;
      }
      localStorage.setItem('amount', amount);
      window.location.href = '/bank';
    }
  }

  useEffect(() => {
    const amountAdd = parseInt(localStorage.getItem('amountAdd'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (paySuccess === 'true') {
      if (amountAdd !== null && amountAdd !== undefined && amountAdd !== 0) {

        const paymentData = {
          coin: amountAdd,
          amount: amountAdd * 1000,
          user: user.id
        }
        const addPayment = async () => {
          try {
            const response = await BankApi.addPayment(paymentData);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }
        addPayment();
      }
      toast.success('Payment success');
      localStorage.setItem('paySuccess', false);
      localStorage.removeItem('amountAdd');
      setPaySuccess(false);
    }
  }, [paySuccess, amount]);

  return (
    <DefaultLayout>
      <ToastContainer />
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h4" component="div">
              Mua xu
            </Typography>
            <form>
              <Typography marginTop={3} variant="body1" component="div" >
                Chọn số lượng xu bạn muốn mua
              </Typography>
              <Stack
                sx={{ marginY: "10px" }}
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                <TextField
                  id="outlined-basic"
                  label="Số lượng"
                  variant="outlined"
                  type="number"
                  value={amount}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {/* vertical center the double arrow */}
                <DoubleArrow sx={{ alignSelf: "center" }} />
                <TextField
                  id="outlined-basic"
                  label="Giá"
                  variant="outlined"
                  // read-only input
                  InputProps={{ readOnly: true, shrink: true }}
                  value={price}
                />
              </Stack>

              {/* <Typography marginTop={3} variant="body1" component="div">
                Select the payment method
              </Typography>
              <RadioGroup value={selectedMethod} onChange={handleMethodChange}>
                <Stack
                  sx={{ marginY: "10px" }}
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                >
                  {paymentMethods.map((method) => (
                    <FormControlLabel
                      key={method.id}
                      value={method.name}
                      // remove the radio button icon
                      control={<Radio sx={{ display: "none" }} />}
                      label={
                        <Card
                          sx={{
                            padding: "10px",
                            width: "160px",
                            boxSizing: "border-box",
                            // add a border to the selected method
                            border:
                              selectedMethod === method.name
                                ? "3px solid #1976d2"
                                : "1px solid #ccc",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="100"
                            width="auto"
                            image={method.image}
                            alt={method.name}
                          />
                          <Typography
                            variant="body1"
                            component="div"
                            align="center"
                          >
                            {method.name}
                          </Typography>
                        </Card>
                      }
                    />
                  ))}
                </Stack>
              </RadioGroup> */}
              <Button sx={{ marginY: "10px" }} variant="contained" onClick={handleBuy}>
                Buy
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </DefaultLayout>
  );
};

export default BuyCoins;
