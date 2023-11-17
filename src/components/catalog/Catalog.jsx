import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iphone from "../assets/iphone-15.png";
import macbook from "../assets/macb.jpg";
import ipad from "../assets/ipad.jpg";
import watch from "../assets/watch.jpg";
import "./Catalog.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import bacgCatalog from "../../assets/cotalog.jpg";

export default function Catalog() {
  const navigate = useNavigate();
  const { setCategoryToNavigate } = useProducts();
  React.useEffect(() => {
    setCategoryToNavigate(false);
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url(" + bacgCatalog + ")",
        backgroundSize: "cover",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "black",
          color: "white",
          margin: "5px",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IPHONE
          </Typography>
          <Typography variant="body2" color="white">
            iPhone 15 Pro Max оснащен 6,7-дюймовым дисплеем Сноска 1 и 5-кратным
            Телеобъектив и обеспечивает воспроизведение видео до 29 часов.
            Сноска ⁵
          </Typography>
          <CardMedia
            sx={{
              height: 300,
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            image={iphone}
            title="IPHONE"
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            size="small"
            sx={{ backgroundColor: "#007bff", color: "#ffffff" }}
            className="button"
            onClick={() => navigate(`products?q=&category=Телефоны`)}
          >
            Выбрать
          </Button>
        </CardActions>
      </Card>
      <>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            margin: "5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MACBOOK
            </Typography>
            <Typography variant="body2" color="white" marginBottom="20px">
              14-дюймовый жидкокристаллический дисплей Retina XDR2 Три порта
              Thunderbolt 4, порт HDMI, слот для карт SDXC, разъем для
              наушников, порт MagSafe 3 Клавиатура Magic
            </Typography>
            <CardMedia
              sx={{
                height: 300,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              image={macbook}
              title="MACBOOK"
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              sx={{ backgroundColor: "#007bff", color: "#ffffff" }}
              className="button"
              onClick={() => navigate(`products?q=&category=Ноутбуки`)}
            >
              Выбрать
            </Button>
          </CardActions>
        </Card>
      </>
      <>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            margin: "5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              APPLE WATCH
            </Typography>
            <Typography variant="body2" color="white">
              Alpine Loop и Trail Loop взяли на себя обязательства по
              обеспечению чистоты поставщиков Apple Энергетическая программа
            </Typography>
            <CardMedia
              sx={{
                marginTop: 2,
                width: 300,
                height: 330,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              image={watch}
              title="APPLE WATCH"
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              sx={{ backgroundColor: "#007bff", color: "#ffffff" }}
              className="button"
              onClick={() => navigate(`products?q=&category=Аксессуары`)}
            >
              Выбрать
            </Button>
          </CardActions>
        </Card>
      </>
      <>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            margin: "5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              I PAD
            </Typography>
            <Typography variant="body2" color="white">
              Непревзойденный опыт работы с iPad благодаря самым передовым
              технологиям.
            </Typography>
            <CardMedia
              sx={{
                marginTop: 2,
                width: 300,
                height: 330,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              image={ipad}
              title="I PAD"
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              sx={{ backgroundColor: "#007bff", color: "#ffffff" }}
              className="button"
              onClick={() => navigate(`products?q=&category=Планшеты`)}
            >
              Выбрать
            </Button>
          </CardActions>
        </Card>
      </>
    </div>
  );
}
