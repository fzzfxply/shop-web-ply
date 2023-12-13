import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import IcedTea from "./assets/IcedTea.jpeg";
import "./hotcss.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Badge from "@mui/material/Badge";
import SimpleDialog from "./common/SimpleDialog/index";
import CardDialog from "./common/CardDialog/index";
import Button from "@mui/material/Button";

// 把arrayData 中的alconhol 和snacks，convenient_fooddried_fruits_nutsbiscuits_bread 封装成数组
const snacks = [
  "alcohol",
  "snacks",
  "convenient_food",
  "dried_fruits_nuts",
  "biscuits_bread",
];
const arrayData = {
  alcohol: [
    {
      product_description: "百岁山570ml",
      priceLabel: "2.4元/瓶",
      retail_priceLabel: 3,
      price: 2.4,
    },
    {
      product_description: "农夫山泉550ml",
      priceLabel: "1.6元/瓶",
      retail_priceLabel: 2,
      price: 1.6,
    },
    {
      product_description: "怡宝550ml",
      priceLabel: "1.6元/瓶",
      retail_priceLabel: 2,
      price: 1.6,
    },
    {
      product_description: "可口可乐/芬达/雪碧500ml/瓶",
      priceLabel: "2.4元/瓶",
      retail_priceLabel: 3,
      price: 2.4,
    },
    {
      product_description: "百事可乐/七喜/美年达500ml/瓶",
      priceLabel: "2.4元/瓶",
      retail_priceLabel: 3,
      price: 2.4,
    },
    {
      product_description: "冰红茶/绿茶/劲量500ml/瓶",
      priceLabel: "2.4元/瓶",
      retail_priceLabel: 3,
      price: 2.4,
    },
    {
      product_description: "Rio微醺330ml/罐",
      priceLabel: "4.8元/罐",
      retail_priceLabel: 6,
      price: 4.8,
    },
    {
      product_description: "Rio强爽330ml/罐",
      priceLabel: "6.4元/罐",
      retail_priceLabel: 8,
      price: 6.4,
    },
    {
      product_description: "东方树叶",
      priceLabel: "4元/瓶",
      retail_priceLabel: 5,
      price: 4,
    },
  ],
  snacks: [
    {
      product_description: "浪味仙40g/袋",
      priceLabel: "2.4元/袋",
      retail_priceLabel: 3,
      flavour: ["加勒比烤翅", "蜂蜜黄油", "多汁牛排", "韩国泡菜"],
      price: 2.4,
    },
    {
      product_description: "浪味仙70g/袋",
      priceLabel: "4.8元/袋",
      retail_priceLabel: "?",
      flavour: ["加勒比烤翅", "蜂蜜黄油", "多汁牛排", "韩国泡菜"],
      price: 5,
    },
    {
      product_description: "好友趣40g/袋",
      priceLabel: "2.4/袋",
      retail_priceLabel: 3,
      flavour: ["加勒比烤翅", "蜂蜜黄油", "多汁牛排", "韩国泡菜"],
      price: 2.4,
    },
    {
      product_description: "好友趣70g/袋",
      priceLabel: "4.8元/袋",
      retail_priceLabel: "?",
      flavour: ["加勒比烤翅", "蜂蜜黄油", "多汁牛排", "韩国泡菜"],
      price: 4.8,
    },
    {
      product_description: "呀土豆40g/袋",
      priceLabel: "2.4/袋",
      retail_priceLabel: 3,
      flavour: ["番茄", "蜂蜜黄油", "滋香烤鸡", "里脊牛排"],
      price: 2.4,
    },
    {
      product_description: "呀土豆70g/袋",
      priceLabel: "4.8元/袋",
      retail_priceLabel: "?",
      flavour: ["番茄", "蜂蜜黄油", "滋香烤鸡", "里脊牛排"],
      price: 4.8,
    },
    {
      product_description: "乐事原切70g/袋",
      priceLabel: "2.4袋",
      retail_priceLabel: 3,
    },
    {
      product_description: "乐事原切40g/袋",
      priceLabel: "4.8元/袋",
      retail_priceLabel: "?",
      price: 4.8,
    },
    {
      product_description: "卫龙魔芋爽15+8g/袋",
      priceLabel: "0.8元/袋",
      retail_priceLabel: 1,
      flavour: ["香辣", "麻辣", "酸辣"],
      price: 0.8,
    },
    {
      product_description: "卫龙大面筋",
      priceLabel: "2.4元/袋",
      retail_priceLabel: 3,
      price: 2.4,
    },
    {
      product_description: "卫龙亲嘴烧",
      priceLabel: "0.8元/连",
      retail_priceLabel: 1,
      flavour: ["经典香辣红", "麦辣鸡汁绿"],
      price: 0.8,
    },
    {
      product_description: "卫龙小海带",
      priceLabel: "0.8元/袋",
      retail_priceLabel: 1,
      price: 0.8,
    },
    {
      product_description: "星球杯",
      priceLabel: "1元/8个",
      retail_priceLabel: null,
      price: 1,
    },
    {
      product_description: "杉爱鸭脖",
      priceLabel: "1.5元",
      retail_priceLabel: 2,
      price: 1.5,
    },
    {
      product_description: "进口小老板海苔",
      priceLabel: "12.8元",
      retail_priceLabel: 16,
      flavourFood: ["原味", "烧烤", "辣"],
      price: 12.8,
    },
  ],
  convenient_food: [
    {
      product_description: "康师傅桶装泡面",
      priceLabel: "4元",
      retail_priceLabel: 5,
      flavourFood: ["红烧", "香辣", "酸辣", "鲜虾", "老坛"],
      price: 4,
    },
    {
      product_description: "统一桶装泡面",
      priceLabel: "4元",
      retail_priceLabel: 5,
      flavourFood: ["老坛", "茄皇"],
      price: 4,
    },
    {
      product_description: "合味道桶装泡面",
      priceLabel: "4.8元",
      retail_priceLabel: 6,
      flavourFood: [
        "海鲜",
        "猪骨",
        "香辣牛肉",
        "冬阴功",
        "虾仁",
        "香辣海鲜",
        "咖喱牛肉",
      ],
      price: 4.8,
    },
    {
      product_description: "汤达人桶装泡面",
      priceLabel: "4元",
      retail_priceLabel: 5,
      flavourFood: ["海鲜", "豚骨", "辣牛肉", "番茄牛肉", "老母鸡汤", "酸辣"],
      price: 4,
    },
    {
      product_description: "顶大面皮（麻酱/红油/酸辣）",
      priceLabel: "3.2元",
      retail_priceLabel: 4,
      flavourFood: ["麻酱", "红油", "酸辣"],
      price: 3.2,
    },
    {
      product_description: "双汇台式烤肠（原味/椰果）",
      priceLabel: "1.6元",
      retail_priceLabel: 2,
      flavourFood: ["原味", "椰果"],
      price: 1.6,
    },
    {
      product_description: "双汇蒜香味烤肠",
      priceLabel: "2.4元",
      retail_priceLabel: 3,
      price: 2.4,
    },
  ],
  dried_fruits_nuts: [
    {
      product_description: "溜溜梅",
      priceLabel: "4.8元",
      retail_priceLabel: 6,
      flavourFood: ["乌梅", "雪梅", "青梅", "杨梅", "西梅", "九制梅"],
      price: 4.8,
    },
    {
      product_description: "雪海梅乡芒果干66g+13.2g",
      priceLabel: "9.6元",
      retail_priceLabel: 12,
      price: 9.6,
    },
  ],
  biscuits_bread: [
    {
      product_description: "好丽友派6枚",
      priceLabel: "9.6元",
      retail_priceLabel: 12,
      flavourFood: ["蛋黄派", "抹茶派", "巧克力派"],
      price: 9.6,
    },
    {
      product_description: "米老头蛋黄煎饼",
      priceLabel: "5.6元",
      retail_priceLabel: 7,
      price: 5.6,
    },

    {
      product_description: "妙芙96g",
      priceLabel: "7.2元",
      retail_priceLabel: 8.9,
      flavourFood: ["奶油味", "巧克力味"],
      price: 7.2,
    },
  ],
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [cardOpen, setcardOpen] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState(null);

  const [purchase, setPurchase] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedValue(null);
  };
  const handleCardClose = () => {
    setcardOpen(false);
  };
  const clickHandler = (e) => {
    if (e.flavour) {
      handleClickOpen();
      setSelectedValue(e); // 设置选中的口味为 selectedValue
    } else {
      setPurchase([...purchase, e]);
    }
  };
  const getDom = (name) => {
    return arrayData[name].map((item, i) => {
      return (
        <Box
          width="33%"
          height="14%"
          onClick={() => clickHandler(item)}
          display={"flex"}
          position={"relative"}
          marginBottom={"1rem"}
          key={item.priceLabel + String(i)}
        >
          <Box
            width={"70%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"2px solid black"}
            borderRadius={"50%"}
            overflow={"hidden"}
          >
            <img src={IcedTea} height="100%" />
          </Box>
          <Box
            position={"absolute"}
            padding={"0.125rem"}
            height={"3rem"}
            width={"8rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            top={"50%"}
            right={0}
            border={"2px solid #000"}
            borderRadius={"0.25rem"}
            style={{
              backgroundColor: "yellow",
              transform: "translate(0%, -40%)",
            }}
          >
            <Typography fontSize={" 1rem"}>￥</Typography>
            <Typography fontSize={"1.2rem"} fontWeight={700}>
              {item.priceLabel}
            </Typography>
          </Box>
          <Box
            position={"absolute"}
            display={"flex"}
            bottom={"0.2rem"}
            padding={" 0.0625rem 0.375rem"}
            fontSize={"1rem"}
            style={{ background: "#fff" }}
            border={"0.125rem solid #000"}
            // width={'8rem'}
            borderRadius={"0.25rem"}
            height={"2rem"}
            lineHeight={"2rem"}
            fontWeight={600}
          >
            {item.product_description}
          </Box>
        </Box>
      );
    });
  };
  const setClick = (e) => {
    setPurchase([...purchase, e]);
  };
  useEffect(() => {
    console.log(purchase, "purchase");
  }, [purchase]);
  return (
    <Box height={"100vh"} display="flex" flexDirection="column">
      <Box
        display={"flex"}
        height={"90%"}
        padding={" 1rem"}
        style={{ flexWrap: "wrap", overflowY: "auto" }}
      >
        {snacks.map((item) => getDom(item))}
      </Box>

      <SimpleDialog
        setClick={setClick}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      <CardDialog
        open={cardOpen}
        setPurchase={setPurchase}
        onClose={handleCardClose}
        purchase={purchase}
      />
      <Box
        height={"10%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Badge badgeContent={purchase.length} color="primary">
          <AddShoppingCartIcon fontSize={"2rem "} />

          <Box
            sx={{ width: "6rem", height: "1.5rem" }}
            onClick={() => setcardOpen(!cardOpen)}
          >
            生成购物列表
          </Box>
        </Badge>
      </Box>
    </Box>
  );
}

export default App;
