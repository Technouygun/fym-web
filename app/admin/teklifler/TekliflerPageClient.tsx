"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Building2,
  Briefcase,
  ClipboardList,
  Lock,
  Phone,
  RefreshCw,
} from "lucide-react";

type Teklif = {
  id: string;
  sirketAdi: string;
  isTanimi: string;
  beklenenHizmet: string;
  telefon: string;
  durum?: string;
  createdAt?: Timestamp;
};

export default function TekliflerClient() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [teklifler, setTeklifler] = useState<Teklif[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      localStorage.setItem("adminAuthorized", "true");
    } else {
      setError("Şifre hatalı.");
    }
  };

  const fetchTeklifler = async () => {
    try {
      setLoading(true);
      setError("");

      const q = query(collection(db, "teklifler"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Teklif[];

      setTeklifler(data);
    } catch (err) {
      console.error(err);
      setError("Teklifler yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Bu teklifi silmek istediğine emin misin?");
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "teklifler", id));

    // UI’dan da kaldır
    setTeklifler((prev) => prev.filter((item) => item.id !== id));
  } catch (error) {
    console.error(error);
    alert("Silme işlemi başarısız.");
  }
};

  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuthorized");

    if (savedAuth === "true") {
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      fetchTeklifler();
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
            <Lock size={28} />
          </div>

          <h1 className="text-3xl font-bold">Yönetici Girişi</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Teklif taleplerini görüntülemek için yönetici şifresini girin.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Yönetici şifresi"
              className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-4 focus:ring-sky-500/20"
            />

            {error && <p className="text-sm text-red-300">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
<main className="min-h-screen bg-slate-50 px-6 pb-10 pt-32 text-slate-900 md:px-10 md:pt-36">
          <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">Teklif Talepleri</h1>
            <p className="mt-2 text-sm text-slate-500">
              Web sitesinden gelen teklif başvuruları burada listelenir.
            </p>
          </div>

          <button
            onClick={fetchTeklifler}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            Yenile
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-500">
            Teklifler yükleniyor...
          </div>
        ) : teklifler.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-500">
            Henüz teklif talebi bulunmuyor.
          </div>
        ) : (
          <div className="grid gap-5">
            {teklifler.map((teklif) => (
              <div
                key={teklif.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      {teklif.durum || "Yeni"}
                    </div>

                    <h2 className="mt-3 text-2xl font-bold text-slate-900">
                      {teklif.sirketAdi}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {teklif.createdAt
                        ? teklif.createdAt.toDate().toLocaleString("tr-TR")
                        : "Tarih yok"}
                    </p>
                  </div>

                 <div className="flex gap-2">
  <a
    href={`https://wa.me/9${teklif.telefon.replace(/\D/g, "")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
  >
    WhatsApp
  </a>

  <button
    onClick={() => handleDelete(teklif.id)}
    className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
  >
    Sil
  </button>
</div>
                  
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <InfoItem
                    icon={Building2}
                    label="Şirket Adı"
                    value={teklif.sirketAdi}
                  />

                  <InfoItem
                    icon={ClipboardList}
                    label="Beklenen Hizmet"
                    value={teklif.beklenenHizmet}
                  />

                  <InfoItem
                    icon={Phone}
                    label="Telefon"
                    value={teklif.telefon}
                  />

                  <InfoItem
                    icon={Briefcase}
                    label="İş Tanımı"
                    value={teklif.isTanimi}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Icon size={17} className="text-sky-600" />
        {label}
      </div>
      <p className="text-sm leading-6 text-slate-600">{value}</p>
    </div>
  );
}