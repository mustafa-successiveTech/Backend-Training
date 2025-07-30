import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Country API",
      version: "1.0.0",
    },
  },
  apis: ["./src/assignment8/routes.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
export const setupSwagger = (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
