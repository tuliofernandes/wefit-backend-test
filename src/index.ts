import "dotenv/config";

import { Server } from "@/Presentation/Api/server";

new Server().startup().catch(console.error);
