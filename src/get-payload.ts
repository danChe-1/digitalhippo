import dotenv from "dotenv";
import path from "path";
import payload, { Payload } from "payload";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).paylaod;

if (!cached) {
  cached = (global as any).paylaod = {
    client: null,
    promise: null,
  };
}
interface Args {
  initOptions?: Partial<InitOptions>;
}
export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("Payload_secret is missing");
  }
  if (cached.client) {
    return cached.client;
  }
  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  try {
    cached.client = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.client;
};
