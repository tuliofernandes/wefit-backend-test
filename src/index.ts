import express from "express";

import { Server } from "@/Presentation/Api/server";

import { EnvAdapter } from "@/Infra/Configs/env";

const app = express();
const port = EnvAdapter.http.listenPort;

new Server().startup().catch(console.error);
