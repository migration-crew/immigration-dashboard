"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/upImmigrationButton";
import { useParams, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";

const PaymentModal = () => {
  const id = useParams().id;
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };
  return (
    <div className="modal-backdrop">
      <dialog ref={dialogRef}>
        <Card>
          <p>{id}</p>
          <div>
            <Button onClick={onDismiss}>x</Button>
          </div>
          <div>
            <p>Payment Method</p>
          </div>
          <div>
            <p>Amount</p>
            <Button>Pay</Button>
          </div>
        </Card>
      </dialog>
    </div>
  );
};

export default PaymentModal;
