import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { IRepository } from "./_repository";

export interface UserRepository extends IRepository<User> {
  login(email: string, password: string): Promise<Auth>;
  check(): Promise<Auth>;
  logout(): Promise<void>;
}
