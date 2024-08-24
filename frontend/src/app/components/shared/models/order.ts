// import { LatLng } from "leaflet";
import { cartitem } from "./Cartsitem";

export class Order{
  id!:number;
  items!: cartitem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  // addressLatLng?:LatLng
  paymentId!: string;
  createdAt!: string;
  status!: string;
}