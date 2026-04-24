import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const runtime = "nodejs";

type TeklifPayload = {
  sirketAdi?: string;
  isTanimi?: string;
  beklenenHizmet?: string;
  telefon?: string;
};

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TeklifPayload;

    const sirketAdi = body.sirketAdi?.trim() || "";
    const isTanimi = body.isTanimi?.trim() || "";
    const beklenenHizmet = body.beklenenHizmet?.trim() || "";
    const telefon = normalizePhone(body.telefon || "");

    if (!sirketAdi || !isTanimi || !beklenenHizmet || !telefon) {
      return Response.json(
        { success: false, message: "Lütfen tüm alanları doldurun." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "teklifler"), {
      sirketAdi,
      isTanimi,
      beklenenHizmet,
      telefon,
      durum: "Yeni",
      createdAt: serverTimestamp(),
    });

    return Response.json({
      success: true,
      message: "Teklif talebiniz başarıyla alındı.",
    });
  } catch (error) {
    console.error("TEKLİF KAYIT HATASI:", error);

    return Response.json(
      { success: false, message: "Teklif kaydedilemedi." },
      { status: 500 }
    );
  }
}