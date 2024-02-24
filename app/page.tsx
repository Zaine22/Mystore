"use client";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonSkeletonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

export default function page() {
  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Page Name</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem lines="none" color="warning">
            No Line
          </IonItem>
          <IonItem>default line</IonItem>
          <IonItem>
            <IonLabel>
              <p>line 01</p>
              <p>line 02</p>
              <p>line 03</p>
              <p>line 04</p>
              <p>line 05</p>
            </IonLabel>
          </IonItem>

          <IonItem lines="full">
            <IonThumbnail slot="start">
              <IonSkeletonText style={{ width: "100%", height: "100%" }} />
            </IonThumbnail>
            Full Line With Slot
          </IonItem>

          <IonItem lines="full">
            Full Line With Buttons
            <IonButtons slot="end">
              <IonButton fill="outline">View</IonButton>
              <IonButton>Edit</IonButton>
              <IonButton>Delete</IonButton>
            </IonButtons>
          </IonItem>

          <IonCard>
            <IonImg
              src="https://picsum.photos/200/300"
              style={{ width: "100%", height: "150px", fit: "cover" }}
            />
            <IonCardContent>
              <IonItem lines="none">This is inside of card content</IonItem>
            </IonCardContent>
          </IonCard>
        </IonContent>
        <IonFooter>
          <IonButton expand="block">Footer button</IonButton>
        </IonFooter>
      </IonPage>
    </div>
  );
}
