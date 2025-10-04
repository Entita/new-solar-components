'use client'
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { resetCart } from "@/lib/slices/inquiryCartSlice";

export default function App() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();
  const sentRef = useRef(false);

  useEffect(() => {
    if (sessionId && !sentRef.current) {
      sentRef.current = true;
      axios.post("/api/send-confirmation", { sessionId });
    }
  }, [sessionId]);

  useEffect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <main style={{ minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h1>Děkujeme za vaši objednávku!</h1>
      <p>Potvrzení a podrobnosti najdete ve svém e-mailu.</p>
    </main>
  );
}