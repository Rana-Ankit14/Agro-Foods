import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import { AddToCart } from "./AddToCart";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    // minWidth: 175,
    minWidth: "80%",
  },
});

export const CardComponent = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          history.push(`/productDetail/${item.id}`);
        }}
      >
        <CardMedia
          component="img"
          alt={item.name}
          height="200"
          image={item.coverImage}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
            <Typography gutterBottom color="textPrimary" component="p">
              {`${item.weight} ${item.weightType}`}
              <span
                style={{
                  float: "right",
                  backgroundColor: "#dcdcdc",
                  display: "inline-block",
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 2,
                  elevation: 5,
                }}
              >
                &#8377;&nbsp;
                {item.price}
              </span>
            </Typography>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            history.push(`/productDetail/${item.id}`);
          }}
        >
          Learn More
        </Button>
        <AddToCart item={item} />
      </CardActions>
    </Card>
  );
};
