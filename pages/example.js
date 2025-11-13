"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <main className="max-w-xl mx-auto py-12 px-6 space-y-6">
      <Card title="Daily Reflection">
        <p className="mb-4">
          What stood out to you today? How did you feel in that moment?
        </p>
        <Input placeholder="Write your reflection..." textarea />
        <Button onClick={() => setOpen(true)}>Save Reflection</Button>
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Reflection Saved">
        <p>Your reflection has been safely stored in your browser.</p>
      </Modal>
    </main>
  );
}
