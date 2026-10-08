"use client";

import { useState } from "react";

export default function TestJavaScript() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="rounded-lg border bg-surface p-6 text-center space-y-4">
      <p className="text-lg font-bold">
        {clicked ? "تم الضغط بنجاح" : "لم يتم الضغط"}
      </p>
      <button
        type="button"
        onClick={() => setClicked(true)}
        className="rounded-md border bg-primary px-6 py-3 text-primary-foreground font-medium"
      >
        اضغط هنا
      </button>
    </div>
  );
}
