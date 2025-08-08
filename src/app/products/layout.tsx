import React from "react";

export default function ProductsLayout({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <>
      {product}
      {children}
    </>
  );
}
