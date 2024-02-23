"use client";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    getProducts();
  }, [1]);

  const getProducts = async () => {
    await axios.get("/products/api").then((res) => {
      console.log("Product Data", res.data);
      setProducts(res.data);
    });
  };
  const handleDelete = async (items: any) => {
    console.log(items.id);

    await axios
      .delete("/products/api/" + items.id)
      .then((res) => console.log("Deleted response", res.data));
    getProducts();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Lists</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {products.map((item: any, index: number) => (
          <IonItem key={index}>
            {item?.Name}
            <IonButtons slot="end">
              <IonButton onClick={() => handleDelete(item)}>Delete</IonButton>
            </IonButtons>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
}
