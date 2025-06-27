import { users, contactForms, bookings, type User, type InsertUser, type ContactForm, type InsertContactForm, type Booking, type InsertBooking } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getContactForms(): Promise<ContactForm[]>;
  getBookings(): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private bookings: Map<number, Booking>;
  private currentUserId: number;
  private currentContactFormId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.bookings = new Map();
    this.currentUserId = 1;
    this.currentContactFormId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactForm(insertForm: InsertContactForm): Promise<ContactForm> {
    const id = this.currentContactFormId++;
    const form: ContactForm = { 
      ...insertForm,
      email: insertForm.email || null,
      message: insertForm.message || null,
      id, 
      createdAt: new Date() 
    };
    this.contactForms.set(id, form);
    return form;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      createdAt: new Date() 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values());
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
}

export const storage = new MemStorage();
