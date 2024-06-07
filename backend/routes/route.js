const express = require('express');
const Router = express.Router();
const { createUser } = require('../controllers/createuser');
const { createdeliveryperson } = require('../controllers/createdeliveryperson');
const { createrestaurant } = require("../controllers/createrestuarant");
const { getuserprofile } = require("../controllers/getuserprofile");
const { getresturantinfo } = require("../controllers/getrestaurantinfo");
const { getdeliverypersoninfo } = require("../controllers/getdeliverypersoninfo");
const { createmenuitem } = require("../controllers/createmenuitem");
const { getmenuitems } = require("../controllers/getmenuitems");
const { loginuser } = require("../controllers/loginuser");
const {placeorder} = require("../controllers/placeorder")
const {viewuserorders} = require("../controllers/viewuseroders")
const {updateUserProfile} = require("../controllers/updateuserprofile")
//const { cancelOrder}=reqiure('../controllers/cancelanorder')
const { validateAuthorization, checkRole } = require('../middleware/auth');
const {changeavailaibilty} = require("../controllers/changeavailiabitly");
const {updatedelivery} = require("../controllers/updatedelivery")
const {viewdeliverypersonorders} = require('../controllers/viewdeliverypersonorder')
const {vieworder} = require("../controllers/vieworders");
const {totalamount} = require("../controllers/usertoatlamount")
const {vieworderhistory}=require('../controllers/vieworderhistory')
const {addtowishlist} = require('../controllers/addtowishlist')
const {getwishlist} = require('../controllers/getwishlistitems')
const {finduser} = require('../controllers/finduser')
Router.post('/createUser', createUser);
Router.post('/createdeliveryperson', createdeliveryperson);
Router.post("/createrestaurant", createrestaurant);
Router.get("/getuserprofile", validateAuthorization,checkRole('admin'), getuserprofile);
Router.get("/getresturantinfo", getresturantinfo);
Router.get("/getdeliverypersoninfo", validateAuthorization, checkRole('admin'), getdeliverypersoninfo);
Router.post("/createmenuitem", createmenuitem);
Router.get("/getmenuitems", getmenuitems);
Router.post("/loginuser", loginuser);
Router.post("/placeorder",placeorder);

Router.get("/viewuserorders",viewuserorders);
Router.put("/updateUserProfile",updateUserProfile)
Router.put("/changeavailaibilty",changeavailaibilty)
Router.put("/updatedelivery",updatedelivery);
Router.get("/viewdeliverypersonorders",viewdeliverypersonorders);
Router.get("/vieworder",vieworder);
Router.get("/totalamount",totalamount);
Router.get("/vieworderhistory",vieworderhistory)
Router.post('/addtowishlist',addtowishlist)
Router.get('/getwishlist',getwishlist)
Router.get('/finduser',finduser);
module.exports = Router;
