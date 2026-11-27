import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { bookingStorageSchema } from "@/schemas/bookingSchema";
import type { Booking, NewBooking } from "@/types/booking";

type BookingContextType = {
  bookings: Booking[];
  isLoaded: boolean;
  addBooking: (data: NewBooking) => void;
  cancelBooking: (id: string) => void;
  getBookingById: (id: string) => Booking | undefined;
};

const BookingContext = createContext<BookingContextType | null>(null);

const STORAGE_KEY = "@yachtjet/my-bookings";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Завантажуємо бронювання зі сховища під час запуску
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const storedBookings = await AsyncStorage.getItem(STORAGE_KEY);

        if (storedBookings) {
          const parsed: unknown = JSON.parse(storedBookings);
          const result = bookingStorageSchema.safeParse(parsed);
          if (result.success) {
            setBookings(result.data);
          }
        }
      } catch (error) {
        console.warn("Failed to load bookings:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadBookings();
  }, []);

  // Зберігаємо зміни у сховищі
  useEffect(() => {
    if (!isLoaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookings)).catch((error) =>
      console.warn("Failed to save bookings:", error),
    );
  }, [bookings, isLoaded]);

  // Додаємо нове бронювання
  const addBooking = useCallback((data: NewBooking) => {
    const newBooking: Booking = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    setBookings((prev) => [newBooking, ...prev]);
  }, []);

  // Скасовуємо бронювання
  const cancelBooking = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((booking) => {
        if (booking.id === id) {
          return { ...booking, status: "cancelled" };
        }
        return booking;
      }),
    );
  }, []);

  // Знаходимо бронювання за його ID
  const getBookingById = useCallback(
    (id: string) => bookings.find((booking) => booking.id === id),
    [bookings],
  );

  const value = useMemo(
    () => ({
      bookings,
      isLoaded,
      addBooking,
      cancelBooking,
      getBookingById,
    }),
    [bookings, isLoaded, addBooking, cancelBooking, getBookingById],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }

  return context;
}
