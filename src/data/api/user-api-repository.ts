import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { getParam } from "@domain/repositories/_repository";
import { api } from "./_api";

export class UserApiRepository implements UserRepository {
  constructor(private _api = api) {}
  async login(email: string, password: string): Promise<Auth> {
    const { data } = await this._api.post("web/auth/login", {
      email,
      password,
    });
    return Auth.create({
      token: data.token,
      user: {
        id: data.data?.user?.id,
        name: data.data?.user?.name,
        email: data.data?.user?.email,
        password: data.data?.user?.password,
        role_id: data.data?.user?.role_id,
        is_active: data.data?.user?.is_active,
        photo: data.data?.user?.photo,
        email_verified_at: data.data?.user?.email_verified_at,
        fcm_token: data.data?.user?.fcm_token,
        created_at: data.data?.user?.created_at,
        updated_at: data.data?.user?.updated_at,
        deleted_at: data.data?.user?.deleted_at,
      },
    });
  }
  async check(): Promise<Auth> {
    const { data } = await this._api.get("web/auth/me");
    return Auth.create({
      token: data.token,
      user: {
        id: data.data?.user?.id,
        name: data.data?.user?.name,
        email: data.data?.user?.email,
        password: data.data?.user?.password,
        role_id: data.data?.user?.role_id,
        is_active: data.data?.user?.is_active,
        photo: data.data?.user?.photo,
        email_verified_at: data.data?.user?.email_verified_at,
        fcm_token: data.data?.user?.fcm_token,
        created_at: data.data?.user?.created_at,
        updated_at: data.data?.user?.updated_at,
        deleted_at: data.data?.user?.deleted_at,
      },
    });
  }
  async logout(): Promise<void> {
    await this._api.delete("hmi/auth/logout");
  }
  get(param?: getParam): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  create(props: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
