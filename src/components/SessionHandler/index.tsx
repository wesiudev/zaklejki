"use client";
import { addSession, getSessionById } from "@/firebase";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function SessionHandler() {
  useEffect(() => {
    const sessionId = localStorage?.getItem("sessionId");
    if (!sessionId) {
      const id = uuidv4();
      addSession(id, {
        createdAt: Date.now(),
        id: id,
        lastSpin: 0,
        lastLotteryPrize: -1,
        lastCoupon: {},
      });
      localStorage?.setItem("sessionId", id);
    } else {
      getSessionById(sessionId);
    }
  }, []);
  return <></>;
}
