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

  const handleView = (item: any) => {
    window.location.href = "/products/view/" + item?.id;
  };
  const handleEdit = (item: any) => {
    window.location.href = "/products/edit/" + item?.id;
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
              <IonButton onClick={() => handleView(item)} fill="outline">
                View
              </IonButton>
              <IonButton onClick={() => handleEdit(item)} fill="outline">
                Edit
              </IonButton>
              <IonButton onClick={() => handleDelete(item)} fill="outline">
                Delete
              </IonButton>
            </IonButtons>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
}
