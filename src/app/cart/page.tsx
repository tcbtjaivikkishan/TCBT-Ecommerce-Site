"use client";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeFromCart, setQty, clearCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4">
        <div className="text-5xl">🪴</div>
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Nothing in the cart Yet.
        </p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
      
      {/* ───────── Cart Items ───────── */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-semibold">Your Cart</h1>

        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex gap-5 p-5 rounded-2xl border bg-white shadow-sm"
            >
              {item.image && (
                <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    ₹{item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border rounded-xl overflow-hidden">
                    <button
                      onClick={() =>
                        dispatch(
                          setQty({
                            id: item.id,
                            qty: item.qty - 1,
                          })
                        )
                      }
                      className="px-3 py-1 hover:bg-muted"
                    >
                      −
                    </button>

                    <span className="px-4 text-sm font-medium">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          setQty({
                            id: item.id,
                            qty: item.qty + 1,
                          })
                        )
                      }
                      className="px-3 py-1 hover:bg-muted"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="font-semibold text-right">
                ₹{(item.price * item.qty).toFixed(2)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ───────── Summary Card ───────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border bg-white shadow-md h-fit"
      >
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-3 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full mt-6">
          Checkout
        </Button>

        <Button
          variant="outline"
          className="w-full mt-3"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </motion.div>
    </div>
  );
}
