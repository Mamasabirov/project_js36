import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"

export const ACTIONS = {
    GET_PRODUCTS: "GET_PRODUCTS",
    GET_ONE_PRODUCT: 'GET_ONE_PRODUCT'
}
export const API_PRODUCTS = 'http://localhost:8000/products'

export const THEME = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ffebee',
    },
  },
});