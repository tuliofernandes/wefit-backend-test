import express from "express";

import { EnvAdapter } from "@/Infra/Configs/env";

import { Server } from "@/Presentation/Api/server";

const app = express();
const port = EnvAdapter.http.listenPort;

new Server().startup().catch(console.error);
