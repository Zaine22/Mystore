"use client";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  const nameRef = useRef<HTMLIonInputElement>(null);
  const buyPriceRef = useRef<HTMLIonInputElement>(null);
  const sellPriceRef = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await axios.get("/products/api/" + id).then((res) => {
      console.log("Product Data", res);
      setProduct(res.data[0]);
    });
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", nameRef.current?.value?.toString() || "");
    formData.append("buyPrice", buyPriceRef.current?.value?.toString() || "");
    formData.append("sellPrice", sellPriceRef.current?.value?.toString() || "");
    formData.append("id", id.toString());

    await axios.patch("/products/api", formData).then((res) => {
      console.log("Product Update Response", res.data);
      window.location.href = "/products";
    });
  };

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Page</IonTitle>
            <IonButtons slot="end">
              <IonButton expand="block" onClick={() => handleSave()}>
                Save
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonInput
              value={product?.Name}
              placeholder="Name"
              ref={nameRef}
              labelPlacement="fixed"
              label="Name"
            ></IonInput>
            <IonInput
              value={product?.BuyPrice}
              placeholder="Buy Price"
              ref={buyPriceRef}
              labelPlacement="floating"
              label="Buy Price"
            ></IonInput>
            <IonInput
              value={product?.SellPrice}
              placeholder="Sell Price"
              ref={sellPriceRef}
              labelPlacement="stacked"
              label="Name"
            ></IonInput>
          </IonItem>
        </IonContent>
      </IonPage>
    </div>
  );
}
