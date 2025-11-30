"use server";

import { db } from "../lib/firebase";

export type ProfileData = {
    userId: string;
    totalVisits: number;
    createdAt: number;
};

export async function getProfileData(profileId: string) {
  if (!profileId) {
    console.log("Tentou buscar perfil sem ID");
    return null; 
  }
  
    const snapshot = await db.collection("profiles").doc(profileId).get();

    return snapshot.data() as ProfileData;
}